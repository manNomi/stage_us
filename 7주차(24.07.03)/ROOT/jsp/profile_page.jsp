<%@ page language= "java" contentType="text/html" pageEncoding="utf-8" %>

<%-- 데이터 베이스 탐색 라이브러리 -> 커넥터를 찾는다 --%>
<%@ page import="java.sql.DriverManager" %>
<%-- 데이터 베이스 연결 lib --%>
<%@ page import="java.sql.Connection" %>
<%-- SQL 생성 및 전송 --%>
<%@ page import="java.sql.PreparedStatement" %>

<%
    // 매개변수 사용할 db의 서버아이디 사용할계정/비밀번호
    // DB 통신 연결  
    Connection connection = null;
        try {
        Class.forName("org.mariadb.jdbc.Driver");
        Connection connect=DriverManager.getConnection("jdbc:mariadb://localhost:3306/instargram_web","mannomi","1234");
        } catch (Exception e) {
            e.printStackTrace();
        }

    // 회원가입
    public static void tryLogin(){
    try {
    // 사용자 데이터 삽입 시도
    String sql = "INSERT INTO users (nickname, login_id, login_pw,name,phone,gender) VALUES (?, ?, ?,?,?,?)";
    PreparedStatement stmt = connection.prepareStatement(sql);
    stmt.setString(1, nickname);
    stmt.setString(2, loginId);
    stmt.setString(3, loginPw);
    stmt.setString(4, naem);
    stmt.setString(5, phone);
    stmt.setString(6, gender);
    stmt.executeUpdate();
} catch (SQLIntegrityConstraintViolationException e) {
    errorMessage = "중복되는 값이 있습니다.";
}
    }
%>

<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Instargram</title>
    <link rel="stylesheet" type="text/css" href="../css/login_page.css" />
    <link rel="icon" href="../image/instargram/domain_icon.png" />
  </head>
  <body>
    <div id="join_container"></div>
    <div id="login_container"></div>
    <div id="find_container"></div>
    <script src="../js/login_page.js"></script>
    <script src="../js/find_page.js"></script>
    <script src="../js/join_page.js"></script>
    <%
        String errorMessage = (String) request.getAttribute("errorMessage");
        if (errorMessage != null) {
    %>
    <script>
        alert("<%= errorMessage %>");
    </script>
    <%
        }
    %>
  </body>
</html>

