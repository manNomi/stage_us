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
// 회원가입 메소드
public String trySignUp(Connection connection, String nickname, String loginId, String loginPw, String name, String phone, String gender) {
    String errorMessage = "";
    try {
        // 사용자 데이터 삽입 시도
        String joinSQL = "INSERT INTO User (nickname, login_id, login_pw, name, phone, gender) VALUES (?, ?, ?, ?, ?, ?)";
        PreparedStatement stmt = connection.prepareStatement(joinSQL);
        stmt.setString(1, nickname);
        stmt.setString(2, loginId);
        stmt.setString(3, loginPw);
        stmt.setString(4, name);
        stmt.setString(5, phone);
        stmt.setString(6, gender);
        stmt.executeUpdate();
    } 
    catch (SQLException e) {
        // errorMessage = "중복되는 값이 있습니다.";
        errorMessage = "데이터베이스 오류: " + e.getMessage();
    }
    return errorMessage;
}
%>

<%
    request.setCharacterEncoding("utf-8");
    // 데이터 가져오기
    String nickname = request.getParameter("nickname");
    String loginId = request.getParameter("login_id");
    String loginPw = request.getParameter("login_pw");
    String name = request.getParameter("name");
    String phone = request.getParameter("phone");
    String gender = request.getParameter("gender");

    // 데이터베이스 연결 설정
    Connection connection = null;

    try {
        Class.forName("org.mariadb.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/instargram_web", "mannomi", "1234");
    } catch (Exception e) {
        e.printStackTrace();
    }
    String errorMessage = trySignUp(connection, nickname, loginId, loginPw, name, phone, gender);

%>

<script>
    var errorMessage = "<%= errorMessage %>";
    var message = errorMessage.split("key")
    if (errorMessage === "") {
        location.href = "../login_page.jsp"; // errorMessage가 비어 있으면 index.jsp로 이동
    } else {
        alert(message[1]+" 중복입니다"); // errorMessage를 알림창으로 표시
        history.back(); // 이전 페이지로 돌아가기
    }
</script>
