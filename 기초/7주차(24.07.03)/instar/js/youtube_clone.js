// 전역변수
var search_btn_text = document.getElementById("search_btn_text");
var search_form = document.getElementById("search_form");
var search_shape = document.getElementById("search_shape");
var search_event_btn = document.getElementById("search_event_btn");
var space = document.getElementById("space");
var youtube_logo = document.getElementById("youtube_logo");
var search_btn = document.getElementById("search_btn");
var main_thumb = document.getElementById("main_thumb");
var focus_obj = true;
var length_width = 0;

// // 검색창 줄어들면 삭제하기
// const observer = new ResizeObserver(Obs => {
//   for (let Ob of Obs) {
//     const length = Ob.contentRect
//     var length_width=length.width
//     if (length_width<123){
//         search_shape.style="display:none;"
//       }}})

//       // 선언
// observer.observe(search_shape)

// 테스트코드
// search_btn_text.setAttribute("value",length_width)
// search_btn_text.setAttribute("value",innerWidth)

// 윈도우 화면 통해 검색창 사라졌을때 다시 불러오기
window.addEventListener("resize", function () {
  if (innerWidth > 540) {
    search_shape.style = "display:flex;";
  } else {
    search_shape.style = "display:none;";
  }
});

// 클릭했을때 검색 아이콘 + 파랑색 나타내기
search_btn_text.onfocus = function () {
  if (focus_obj == true) {
    search_form.style = "border-color: #1d65b6; border-width : 2px;";
    search_event_btn.style = "display:flex;";
    space.style = "width:0px;";
    focus_obj = false;
  }
};

// 클릭을 벗어났을때
search_btn_text.onblur = function () {
  if (focus_obj == false) {
    search_form.style = "border-color: #cccccc;";
    search_event_btn.style = "display:none;";
    space.style = "width:70px;";
    focus_obj = true;
  }
};

// 유튜브 검색기능 구현
search_btn.onclick = function () {
  // var text = document.getElementById("search_btn_text").value
  document.location.href =
    "https://www.youtube.com/results?search_query=" + search_btn_text.value;
};
// 아스키 키코드 13 = enter 임을 이용
search_btn_text.onkeydown = function (input) {
  if (input.keyCode == 13) {
    document.location.href =
      "https://www.youtube.com/results?search_query=" + search_btn_text.value;
  }
};

window.onload = function () {
  // 썸네일 개수
  var thumb_index = 15;
  var thumb_img = [];
  var thumb_userImg = [];
  var thumb_title = [];
  var tumb_title_user = [];
  var tumb_view = [];
  var tumb_date = [];

  for (i = 0; i < thumb_index; i++) {
    thumb_img.push("../image/youtube/main.play_img.png");
    thumb_userImg.push("../image/youtube/main.playname_img.png");
    thumb_title.push(
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노"
    );
    tumb_title_user.push("올끌 (All of MBClassic)");
    tumb_view.push("조회수" + 44 + "만회 • ");
    tumb_date.push(8 + "개월 전");
  }

  // 메인 화면생성
  for (i = 0; i < thumb_index; i++) {
    // 썸네일 큰테두리
    var new_mainGroupShape = document.createElement("div");
    new_mainGroupShape.setAttribute("class", "main_group_shape");
    main_thumb.appendChild(new_mainGroupShape);

    // 썸네일
    var new_mainImg = document.createElement("img");
    new_mainImg.setAttribute("src", thumb_img[i]);
    new_mainGroupShape.appendChild(new_mainImg);

    var new_mainThumbAll = document.createElement("div");
    new_mainThumbAll.setAttribute("class", "container_center");
    new_mainGroupShape.appendChild(new_mainThumbAll);

    var new_mainThumb_user = document.createElement("img");
    new_mainThumb_user.setAttribute("src", thumb_userImg[i]);
    new_mainThumbAll.appendChild(new_mainThumb_user);

    var new_mainThumb = document.createElement("div");
    new_mainThumbAll.appendChild(new_mainThumb);

    var new_mainThumb_title = document.createElement("p");
    new_mainThumb_title.setAttribute("class", "main_text_line");
    new_mainThumb_title.innerHTML = thumb_title[i];
    new_mainThumb.appendChild(new_mainThumb_title);

    var new_mainThumb_userName = document.createElement("p");
    new_mainThumb_userName.setAttribute("class", "text_font");
    new_mainThumb_userName.innerHTML = tumb_title_user[i];
    new_mainThumb.appendChild(new_mainThumb_userName);

    var new_mainTextSmall = document.createElement("div");
    new_mainTextSmall.setAttribute("class", "text_font");
    new_mainThumb.appendChild(new_mainTextSmall);

    var new_mainTextView = document.createElement("span");
    new_mainTextView.innerHTML = tumb_view[i];
    new_mainTextSmall.appendChild(new_mainTextView);

    var new_mainTextDate = document.createElement("span");
    new_mainTextDate.innerHTML = "8개월 전";
    new_mainTextSmall.appendChild(new_mainTextDate);
  }
};
