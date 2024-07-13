<%@ page language= "java" contentType="text/html" pageEncoding="utf-8" %>

<%-- 데이터 베이스 탐색 라이브러리 -> 커넥터를 찾는다 --%>
<%@ page import="java.sql.DriverManager" %>
<%-- 데이터 베이스 연결 lib --%>
<%@ page import="java.sql.Connection" %>
<%-- SQL 생성 및 전송 --%>
<%@ page import="java.sql.PreparedStatement" %>
<%-- 링크드 리스트 --%>
<%@ page import="java.util.LinkedList" %>

<%@ page import="java.sql.SQLException" %>

<%-- 셀렉트 할때만 필요하다  --%>
<%@ page import="java.sql.ResultSet" %>

<%-- 리스트 --%>
<%@ page import="java.util.Arrays" %>

<%
    request.setCharacterEncoding("utf-8");

    HttpSession session_index = request.getSession(false);

    String userId = (session_index != null) ? (String) session_index.getAttribute("user_id") : null;
    String nickname = (session_index != null) ? (String) session_index.getAttribute("nickname") : null;
    String postListIdx = request.getParameter("postContentCode");
    String[] lists = new String[0];
    String pageContent = "";
    String categoryList="";
    Connection connection = null;
    try {
        Class.forName("org.mariadb.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/instargram_web", "mannomi", "1234");
        
        categoryList = tryFindCategory(connection);
        if (postListIdx != null) {
            lists = postListIdx.split("/");

            // 'pop()' 대신 배열의 마지막 요소를 제거하는 로직이 필요합니다.
            // 예를 들어, 마지막 요소를 무시하고 배열의 크기를 하나 줄이는 방법으로.
            lists = Arrays.copyOf(lists, lists.length );

            for (String idx : lists) {
                pageContent = pageContent + tryFindContent(connection, idx) + "-";
            }
        }
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
%>



<%! 
public String tryFindCategory(Connection connection) {
    String categoryList="";
    try {
        String findSQL = "SELECT post_list_idx, post_list_name FROM PostList";
        PreparedStatement stmt = connection.prepareStatement(findSQL);
        ResultSet result = stmt.executeQuery();
        while (result.next()) {
          categoryList=categoryList+result.getString("post_list_name")+"/";
        }
        // 리소스 정리
        result.close();
        stmt.close();
        
    } catch (SQLException e) {
        e.printStackTrace();
    }
    return categoryList;
}
public String tryFindContent(Connection connection, String postIdx) {
    StringBuilder contentList = new StringBuilder();
    PreparedStatement stmt = null;
    ResultSet result = null;
    
    try {
        String findSQL = "SELECT p.post_idx, p.title, p.content, u.nickname " +
                         "FROM Post p INNER JOIN User u ON p.user_idx = u.user_idx " +
                         "WHERE p.post_idx = ?";
        stmt = connection.prepareStatement(findSQL);
        stmt.setString(1, postIdx);
        result = stmt.executeQuery();
        while (result.next()) {
            String nickname = result.getString("nickname");
            String title = result.getString("title");
            String content = result.getString("content");
            contentList.append(nickname).append("/").append(title).append("/").append(content).append("/");
        }
        
    } catch (SQLException e) {
        e.printStackTrace();
    } finally {
        try {
            if (result != null) {
                result.close();
            }
            if (stmt != null) {
                stmt.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    return contentList.toString();
}
%>


<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Instargram</title>
    <link rel="stylesheet" type="text/css" href="../css/instargram.css" />
    <link rel="icon" href="../image/instargram/domain_icon.png" />
  </head>
  <body>
    <div id="page_container">
      <aside id="funciton_aside"></aside>
      <header id="story_header"></header>
      <main id="posting_main"></main>
    </div>
    <footer id="funciton_footer"></footer>

<script src="../js/instargram.js"></script>
<script>
  var userId = "<%= userId %>";
  var sessionFirst = "<%= session_index.getAttribute("session_first") %>";
  var categoryList = "<%= categoryList %>";
  var nickname = "<%= nickname %>";
  if (sessionFirst == "true") {
    console.log()
    setTimeout(function() {
      alert(nickname + "님 로그인 성공");
    }, 1600);
<% 
      session_index.setAttribute("session_first", "false"); // 세션 값을 변경합니다.
%>
  }
  var searchBtn = document.getElementById("search");
  if (searchBtn) {
    searchBtn.addEventListener("click", function() {
        modalCategoryOpen(categoryList);
    }); // 여기에 괄호 추가
}

  var listBtn = document.getElementById("list_icon");
  if (listBtn) {
    listBtn.addEventListener("click", function() {
      console.log(userId);
      if (userId == "2") {
        developerModalOpen(categoryList);
      } else {
        alert("관리자만 접근 가능합니다");
      }
    });
  }
  var pageContent = "<%= pageContent %>";
  if (pageContent!=""){
    postMake(pageContent)
  }
</script>
  </body>
</html>
