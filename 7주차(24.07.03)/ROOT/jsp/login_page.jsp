<%@ page language= "java" contentType="text/html" pageEncoding="utf-8" %>

<%-- 데이터 베이스 탐색 라이브러리 -> 커넥터를 찾는다 --%>
<%@ page import="java.sql.DriverManager" %>
<%-- 데이터 베이스 연결 lib --%>
<%@ page import="java.sql.Connection" %>
<%-- SQL 생성 및 전송 --%>
<%@ page import="java.sql.PreparedStatement" %>


<%
    request.setCharacterEncoding("utf-8");
    String userId = (session != null) ? (String) session.getAttribute("user_id") : null;
    if (userId != null) {
%>
      <script>
        location.href="profile_page.jsp"
      </script>
<%
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
  </body>
</html>

