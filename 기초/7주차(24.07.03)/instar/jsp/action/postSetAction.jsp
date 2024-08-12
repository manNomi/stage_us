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
public String tryFindPost(Connection connection, String postList) {
    String userPost = "";
    try {
        // 사용자 데이터 삽입 시도
        String findSQL = "SELECT post_idx FROM Post WHERE post_list_idx = (SELECT post_list_idx FROM PostList WHERE post_list_name = ?);";
        PreparedStatement stmt = connection.prepareStatement(findSQL);
        stmt.setString(1, postList);
        ResultSet result = stmt.executeQuery();
        while (result.next()) {
            userPost = userPost + result.getString("post_idx") + "/";
        }
        // 리소스 정리
        result.close();
        stmt.close();
    } 
    catch (SQLException e) {
        userPost = "";
    }
    return userPost;
}
%>

<%
    // 데이터 가져오기
    request.setCharacterEncoding("utf-8");

    String postList = request.getParameter("postListName");
    // 데이터베이스 연결 설정
    Connection connection = null;
    try {
        Class.forName("org.mariadb.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/instargram_web", "mannomi", "1234");
    } catch (Exception e) {
        e.printStackTrace();
    }
    String PostContentList = tryFindPost(connection, postList);
%>

<script>
    var postContent = "<%= PostContentList %>"; 
    var postList = "<%= postList %>"; 
    location.href="../index.jsp?postContentCode="+postContent
</script>
