<%@ page language= "java" contentType="text/html" pageEncoding="utf-8" %>

<%-- 데이터 베이스 탐색 라이브러리 -> 커넥터를 찾는다 --%>
<%@ page import="java.sql.DriverManager" %>
<%-- 데이터 베이스 연결 lib --%>
<%@ page import="java.sql.Connection" %>
<%-- SQL 생성 및 전송 --%>
<%@ page import="java.sql.PreparedStatement" %>
<%-- SQL 예외처리  --%>
<%@ page import="java.sql.SQLException" %>

<%-- 셀렉트 할때만 필요하다  --%>
<%@ page import="java.sql.ResultSet" %>

<%@ page import="java.sql.*, java.util.*" %>


<%
    request.setCharacterEncoding("utf-8");
    Connection connection = null;
    HttpSession session_profile = request.getSession(false);
    String userId = (session_profile != null) ? (String) session_profile.getAttribute("user_id") : null;
  try {
          Class.forName("org.mariadb.jdbc.Driver");
          connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/instargram_web", "mannomi", "1234");
      } catch (Exception e) {
          e.printStackTrace();
      }
      String getData = tryGetDATA(connection,request, userId);
%>
<%!
  public String tryGetDATA(Connection connection, HttpServletRequest request,String userID) {
        String getData = "";
        LinkedList<String> list = new LinkedList<>();
        try {
            String getDataSQL = "SELECT * FROM User WHERE user_idx = ?";
            PreparedStatement stmt = connection.prepareStatement(getDataSQL);
            stmt.setString(1, userID);
            ResultSet result = stmt.executeQuery();
            if (result.next()) {
                    getData=getData+(result.getString("nickname"))+"/";
                    getData=getData+(result.getString("login_id"))+"/";
                    getData=getData+(result.getString("name"))+"/";
                    getData=getData+(result.getString("phone"))+"/";
                    getData=getData+(result.getString("gender"));
                } else {
                    getData = ""; // 로그인 실패 시 빈 문자열 반환
                }
        } 
        catch (SQLException e) {
            getData = "";
        }
        return getData;
    }
%>



<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Instargram</title>
    <link rel="stylesheet" type="text/css" href="../css/profile_page.css" />
    <link rel="icon" href="../image/instargram/domain_icon.png" />
  </head>
  <body>
    <div id="container">
      <div id="user_thumb"></div>
      <script>
        var userData = "<%=getData%>".split("/");
        var user=["닉네임", "아이디", "이름" , "핸드폰" , "성"]
        userData.forEach(function(item,index) {
        var div = document.createElement("div");
        div.textContent = user[index]+" : "+item;
        div.classList="user_content"
        document.getElementById("container").appendChild(div);
      });
      </script>
      <button id="profile_back_btn"></button>
      <button id="logout_btn"></button>
    </div>
    <script src="../js/profile_page.js"></script>
  </body>
</html>
