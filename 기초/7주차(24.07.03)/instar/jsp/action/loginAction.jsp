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

<%! 
    public String tryLogin(Connection connection, HttpServletRequest request,String loginId, String loginPw) {
        String nickname = "";
        String userIdx="";
        try {
            // 사용자 데이터 삽입 시도
            String loginSQL = "SELECT user_idx, nickname FROM User WHERE login_id = ? AND login_pw = ?";
            PreparedStatement stmt = connection.prepareStatement(loginSQL);
            stmt.setString(1, loginId);
            stmt.setString(2, loginPw);
            ResultSet result = stmt.executeQuery();
            
            if (result.next()) {
                    userIdx=result.getString("user_idx");
                    nickname = result.getString("nickname");
                    loginSession(request,userIdx,"true",nickname);
                } else {
                    nickname = ""; // 로그인 실패 시 빈 문자열 반환
                }
        } 
        catch (SQLException e) {
            nickname = "";
        }
        return nickname;
    }
    public void loginSession(HttpServletRequest request,String userID ,String sessionFirst ,String sessionNickname) {
            HttpSession session = request.getSession(true);
            session.setAttribute("user_id", userID);
            session.setAttribute("session_first",sessionFirst);
            session.setAttribute("nickname",sessionNickname);
        }
%>

<%
    request.setCharacterEncoding("utf-8");

    String loginId = request.getParameter("login_id");
    String loginPw = request.getParameter("login_pw");
    Connection connection = null;
    try {
        Class.forName("org.mariadb.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/instargram_web", "mannomi", "1234");
    } catch (Exception e) {
        e.printStackTrace();
    }
    String nickname = tryLogin(connection,request, loginId, loginPw);

%>
<script>
    var nickname = "<%= nickname %>"; 
    if (nickname == "") {
        alert("잘못된 입력입니다");
        history.back();
    } 
    else {
        location.href = "../index.jsp";
    }
</script>
