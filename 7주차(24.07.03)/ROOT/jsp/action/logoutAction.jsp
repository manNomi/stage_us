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

<%
    // 데이터 가져오기
    request.setCharacterEncoding("utf-8");
    HttpSession sessionLogout = request.getSession(false);
    if (sessionLogout != null) {
        sessionLogout.invalidate(); // 세션 무효화
    }
%>
<script>
    location.href="../login_page.jsp";
</script>
