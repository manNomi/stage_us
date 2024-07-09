<%@ page language= "java" contentType="text/html" pageEncoding="utf-8" %>

<%-- 데이터 베이스 탐색 라이브러리 -> 커넥터를 찾는다 --%>
<%@ page import="java.sql.DriverManager" %>
<%-- 데이터 베이스 연결 lib --%>
<%@ page import="java.sql.Connection" %>
<%-- SQL 생성 및 전송 --%>
<%@ page import="java.sql.PreparedStatement" %>


<%
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
    System.out.println("Username or email already exists.");
}
    }
%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Signup</title>
</head>
<body>
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