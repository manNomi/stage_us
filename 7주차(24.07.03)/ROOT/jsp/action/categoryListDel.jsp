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
public String tryListDel(Connection connection, String categoryName,String userIdx) {
    String errorMessage = "";
    try {
        // 사용자 데이터 삽입 시도
        String joinSQL = "DELETE FROM PostList WHERE post_list_name = ?";
        PreparedStatement stmt = connection.prepareStatement(joinSQL);
        stmt.setString(1, categoryName);
        stmt.executeUpdate();
    } 
    catch (SQLException e) {
        errorMessage = "데이터베이스 오류: " + e.getMessage();
    }
    return errorMessage;
}
%>

<%
    request.setCharacterEncoding("utf-8");
    HttpSession sessionCategoryName = request.getSession(false);

    String userId = (sessionCategoryName != null) ? (String) sessionCategoryName.getAttribute("user_id") : null;
    String categoryName = request.getParameter("postListName");
    Connection connection = null;
    try {
        Class.forName("org.mariadb.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/instargram_web", "mannomi", "1234");
    } catch (Exception e) {
        e.printStackTrace();
    }
    String errorMessage = tryListDel(connection,categoryName,userId);

%>
<script>
    var errorMessage = "<%= errorMessage %>";
    var categoryName = "<%= categoryName %>";
    if (errorMessage === "") {
        alert(categoryName+ " 삭제되었습니다"); // errorMessage를 알림창으로 표시
        location.href = "../index.jsp"; // errorMessage가 비어 있으면 index.jsp로 이동
    } else {
        alert(errorMessage+ "중복입니다"); // errorMessage를 알림창으로 표시
        history.back(); // 이전 페이지로 돌아가기
    }
</script>
