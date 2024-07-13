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

<%!
public String tryFind(Connection connection, String loginId, String phone,String name) {
    String userPw = "";
    try {
        // 사용자 데이터 삽입 시도
        String findSQL = "SELECT login_pw FROM User WHERE user_idx = (SELECT user_idx FROM User WHERE login_id = ? AND phone = ? AND name = ?)";
        PreparedStatement stmt = connection.prepareStatement(findSQL);
        stmt.setString(1, loginId);
        stmt.setString(2, phone);
        stmt.setString(3, name);
        ResultSet result = stmt.executeQuery();
        if (result.next()) {
                userPw = result.getString("login_pw");
            } else {
                userPw = ""; // 로그인 실패 시 빈 문자열 반환
            }
    } 
    catch (SQLException e) {
        userPw = "";
    }
    return userPw;
}
%>

<%
    // 데이터 가져오기
    request.setCharacterEncoding("utf-8");

    String loginId = request.getParameter("login_id");
    String phone = request.getParameter("phone");
    String name = request.getParameter("name");
    // 데이터베이스 연결 설정
    Connection connection = null;
    try {
        Class.forName("org.mariadb.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/instargram_web", "mannomi", "1234");
    } catch (Exception e) {
        e.printStackTrace();
    }
    String userPw = tryFind(connection, loginId, phone,name);
%>
<script>
    var loginPw = "<%= userPw %>"; 
    if (loginPw == "") {
        alert("잘못된 입력입니다");
        location.href="../login_page.jsp"
        <%-- history.back(); --%>
    } else {
        alert("비밀번호는 "+loginPw +"입니다");
        location.href="../login_page.jsp"
    }
</script>
