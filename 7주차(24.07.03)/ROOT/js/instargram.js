var logo_text_list = [];
const img_file_path = "../image/instargram";
const html_path = [
  "ppt.html",
  "youtube_clone.html",
  "number_baseball.html",
  "puzzle.html",
  "index.html",
];

makeAsideIcon();

function makeAsideIcon() {
  const aside_icon_list_img = [
    "home_icon",
    "search_icon",
    "compass_icon",
    "video_icon",
    "dm_icon",
    "heart_icon",
    "plus_icon",
    "login_icon",
  ];
  const aside_text = [
    "홈",
    "검색",
    "탐색 탭",
    "릴스",
    "메시지",
    "알림",
    "만들기",
    "프로필",
  ];
  const aside = document.getElementById("funciton_aside");
  aside.style = "display:flex;";
  aside.classList = "funciton_aside";
  const logo_box = document.createElement("div");
  logo_box.id = "aside_logo_box";
  const new_logo_icon = document.createElement("img");
  new_logo_icon.id = "instar_icon";
  new_logo_icon.src = img_file_path + `/aside/instargram_logo.png`;
  new_logo_icon.classList = "aside_icon";
  aside.appendChild(new_logo_icon);

  for (var i = 0; i < aside_icon_list_img.length; i++) {
    const logo_text_box = document.createElement("div");
    logo_text_box.classList = "logo_text_box";
    logo_text_box.id = aside_icon_list_img[i].split("_")[0];
    const new_icon = document.createElement("img");
    new_icon.src = img_file_path + `/aside/${aside_icon_list_img[i]}.png`;
    new_icon.classList = "aside_icon";
    const text_box = document.createElement("div");
    text_box.innerHTML = aside_text[i];
    text_box.classList = "logo_text";
    logo_text_list.push(text_box);
    logo_text_box.appendChild(new_icon);
    logo_text_box.appendChild(text_box);

    logo_text_box.addEventListener("click", () => {
      iconClickEvnet(logo_text_box.id);
    });
    logo_box.appendChild(logo_text_box);
  }
  aside.appendChild(logo_box);

  const logo_text_box = document.createElement("div");
  logo_text_box.classList = "logo_text_box";
  const text_box = document.createElement("div");
  text_box.innerHTML = "더보기";
  text_box.classList = "logo_text";

  const new_list_icon = document.createElement("img");
  new_list_icon.src = img_file_path + "/aside/list_icon.png";
  new_list_icon.classList = "aside_icon";

  logo_text_box.appendChild(new_list_icon);
  logo_text_box.appendChild(text_box);
  logo_text_list.push(text_box);
  aside.appendChild(logo_text_box);
}
function iconClickEvnet(btn_type) {
  if (btn_type == "home") {
    console.log();
    postScrollToTop();
  } else if (btn_type == "login") {
    location.href = "../html/login.html";
  }
}

window.addEventListener("resize", function () {
  asideReSize();
});
window.onload = function () {
  postScrollToTop();
  windoScrollToTop();

  var instar_icon = document.getElementById("instar_icon");
  if (window.innerWidth > 1000) {
    instar_icon.src = img_file_path + "/aside/instar_text_logo.png";
    instar_icon.style.width = "100px";
    type_check = "long";
  } else if (window.innerWidth > 850) {
    instar_icon.src = img_file_path + "/aside/instargram_logo.png";
    instar_icon.style.width = "30px";
    type_check = "short";
  } else {
    document.getElementById("funciton_aside").style.display = "none";
    document.getElementById("funciton_footer").style.display = "flex";
  }
  asideReSize();
};

var text_present = null;
var type_check = "";

function postReSize(size) {
  const aside = document.getElementById("funciton_aside");
  aside.style.width = `${size}px`;
  var type = "";
  if (size > 150) {
    type = "block";
  } else {
    type = "none";
  }
  for (i = 0; i < logo_text_list.length; i++) {
    logo_text_list[i].style.display = type;
  }
}

function asideReSize() {
  // console.log(innerWidth)
  var small_size = 80;
  var big_size = 160;
  if (window.innerWidth > 1000) {
    postReSize(big_size);
    text_present = "long";
    instarLogoAnimate(text_present);
  } else if (window.innerWidth > 850) {
    document.getElementById("funciton_footer").style.display = "none";
    document.getElementById("funciton_aside").style.display = "flex";
    postReSize(small_size);
    text_present = "short";
    instarLogoAnimate(text_present);
  } else {
    document.getElementById("funciton_aside").style.display = "none";
    document.getElementById("funciton_footer").style.display = "flex";
  }
}

function instarLogoAnimate(type) {
  if (type_check == type) {
    return;
  }
  var img_url = null;
  var img_length = null;
  if (type == "long") {
    img_url = img_file_path + "/aside/instar_text_logo.png";
    img_length = "100px";
  } else {
    img_url = img_file_path + "/aside/instargram_logo.png";
    img_length = "30px";
  }
  type_check = type;

  var instar_icon = document.getElementById("instar_icon");
  instar_icon.animate(
    [{ transform: "scale(1.0)" }, { transform: "scale(0.0)" }],
    {
      duration: 800,
      easing: "ease",
    }
  );
  setTimeout(() => {
    instar_icon.src = img_url;
    instar_icon.style.width = img_length;
  }, 800);
}

// -----------------------------------------aside---------------------------------------------

// makePost()
function createPost() {
  var thumb_img_list = ["001", "002", "003", "004"];
  var thumb_text_list = [
    "1주차 과제 결과...",
    "2주차 실력이 늘었...",
    "3주차 이를 갈고온...",
    "논란 코드 복붙...",
  ];
  var thumb_id_list = ["wook_10000", "gae_geol", "yongjun_kim", "stage_us"];

  var user_wook = {
    name: "wook_10000",
    comment: "기대가 됩니다",
  };
  var user_yong = {
    name: "yong_jun",
    comment: "젠장 또 대만욱이야!",
  };
  var user_stage = {
    name: "stage_us",
    comment: "네카라쿠배스...",
  };

  var type = "right";
  for (let i = 0; i < thumb_img_list.length; i++) {
    if (i % 2 == 1) {
      var type = "right";
    } else {
      var type = "left";
    }
    // Create main post container
    const postBox = document.createElement("div");
    postBox.className = "post_box";

    // Create thumb and title container
    const thumbAndTitle = document.createElement("div");
    thumbAndTitle.className = "thumb_and_title";

    // Create and append post thumbnail image
    const postThumb = document.createElement("img");
    postThumb.className = "post_thumb";
    postThumb.src = img_file_path + `/post_thumb/${thumb_img_list[i]}.png`;
    thumb_list.push(postThumb);
    thumb_list[i].onclick = function () {
      location.href = `../html/${html_path[i]}`;
    };

    // Create post title container
    const postTitle = document.createElement("div");
    postTitle.classList = "post_title";

    const postUser = document.createElement("div");
    postUser.classList = "post_user";

    const postTitleThumb = document.createElement("img");
    postTitleThumb.className = "post_title_thumb";
    postTitleThumb.src = img_file_path + `/user/${thumb_id_list[i]}.PNG`;
    postTitleThumb.onerror = function () {
      postTitleThumb.src = img_file_path + `/user/none.PNG`;
    };
    postUser.appendChild(postTitleThumb);

    // Create and append post title ID
    const postTitleId = document.createElement("div");
    postTitleId.className = "post_title_id";
    postTitleId.textContent = thumb_id_list[i];
    postUser.appendChild(postTitleId);

    postTitle.appendChild(postUser);

    // Create title user container
    const titleUser = document.createElement("div");
    titleUser.className = "title_user";

    // Create and append post title sentence
    const postTitleSentence = document.createElement("div");
    postTitleSentence.className = "post_title_sentence";
    postTitleSentence.textContent = thumb_text_list[i];
    titleUser.appendChild(postTitleSentence);

    // Create and append title user "더 보기"
    const postTitlePlus = document.createElement("div");
    postTitlePlus.className = "post_title_plus";
    postTitlePlus.textContent = "더 보기";
    titleUser.appendChild(postTitlePlus);
    if (type == "right") {
      thumbAndTitle.appendChild(postThumb);
      thumbAndTitle.appendChild(postTitle);
    } else {
      thumbAndTitle.appendChild(postTitle);
      thumbAndTitle.appendChild(postThumb);
    }

    postTitle.appendChild(titleUser);

    // Create post comment container
    const postComment = document.createElement("div");
    postComment.className = "post_comment";

    // Create and append comment count
    const commentCount = document.createElement("div");
    commentCount.className = "comment_count";
    commentCount.textContent = "좋아요 997개";
    postComment.appendChild(commentCount);

    // Function to create individual comment
    function createComment(commentId, commentText) {
      const commentSpecific = document.createElement("div");
      commentSpecific.className = "comment_specific";

      const commentIdDiv = document.createElement("div");
      commentIdDiv.className = "comment_id";
      commentIdDiv.textContent = commentId;
      commentSpecific.appendChild(commentIdDiv);

      const commentTextDiv = document.createElement("div");
      commentTextDiv.className = "comment_text";
      commentTextDiv.textContent = commentText;
      commentSpecific.appendChild(commentTextDiv);

      return commentSpecific;
    }

    // Create and append comments
    postComment.appendChild(createComment(user_wook.name, user_wook.comment));
    postComment.appendChild(createComment(user_yong.name, user_yong.comment));
    postComment.appendChild(createComment(user_stage.name, user_stage.comment));

    // Create and append comment plus
    const commentPlus = document.createElement("div");
    commentPlus.className = "comment_plus";
    commentPlus.textContent = "댓글 달기...";
    postComment.appendChild(commentPlus);

    postTitle.appendChild(postComment);
    postBox.appendChild(thumbAndTitle);

    // Create title icon box
    const titleIconBox = document.createElement("div");
    titleIconBox.className = "title_icon_box";

    function createTitleIconButton(iconSrc) {
      const button = document.createElement("button");
      button.className = "title_icon_btn";

      const img = document.createElement("img");
      img.className = "title_icon";
      img.src = iconSrc;

      button.appendChild(img);
      return button;
    }
    const saveIconButton = createTitleIconButton(
      "../image/instargram/post_icon/save_icon.png"
    );
    saveIconButton.className += " save_icon";

    var heart_icon = createTitleIconButton(
      "../image/instargram/post_icon/heart_icon.png"
    );
    heart_icon_list.push(heart_icon);

    heart_icon_list[i].onclick = function () {
      if (
        heart_icon_list[i].childNodes[0].src
          .toString()
          .split("post_icon/")[1] == "heart_icon.png"
      ) {
        heart_icon_list[i].childNodes[0].src =
          img_file_path + "/post_icon/red_heart_icon.png";
      } else {
        heart_icon_list[i].childNodes[0].src =
          img_file_path + "/post_icon/heart_icon.png";
      }
    };

    if (type == "right") {
      titleIconBox.appendChild(heart_icon);
      titleIconBox.appendChild(
        createTitleIconButton(img_file_path + "/post_icon/chat_icon.png")
      );
      titleIconBox.appendChild(
        createTitleIconButton(img_file_path + "/post_icon/dm_icon.png")
      );
      titleIconBox.appendChild(saveIconButton);
      titleIconBox.style = "flex-direction:row;";
    } else {
      titleIconBox.appendChild(saveIconButton);
      titleIconBox.appendChild(
        createTitleIconButton(img_file_path + "/post_icon/dm_icon.png")
      );
      titleIconBox.appendChild(
        createTitleIconButton(img_file_path + "/post_icon/chat_icon.png")
      );
      titleIconBox.appendChild(heart_icon);
      titleIconBox.style = "flex-direction:row-reverse;";
    }
    postBox.appendChild(titleIconBox);

    const postingMain = document.getElementById("posting_main");
    postingMain.appendChild(postBox);
  }
}

var thumb_list = [];
var heart_icon_list = [];
createPost();
// -----------------------------------------main---------------------------------------------
makeFooterIcon();
function makeFooterIcon() {
  const footer_icon_list = [
    "home_icon",
    "compass_icon",
    "video_icon",
    "plus_icon",
    "dm_icon",
  ];
  function btnMake(img_src) {
    var button = document.createElement("button");
    button.classList = "footer_btn";
    button.id = img_src.split("_")[0];
    var img = document.createElement("img");
    img.classList = "footer_icon";
    img.src = img_file_path + `/footer_icon/${img_src}.png`;
    button.appendChild(img);

    button.addEventListener("click", (e) => {
      iconClickEvnet(button.id);
    });
    return button;
  }
  const footer = document.getElementById("funciton_footer");
  for (let i = 0; i < footer_icon_list.length; i++) {
    footer.appendChild(btnMake(footer_icon_list[i]));
  }
}

// -----------------------------------------header---------------------------------------------
makeStory();

function makeStory() {
  var container = document.getElementById("story_header");
  var story_id_list = ["none", "gae_geol", "yongjun_kim", "stage_us"];

  for (i = 0; i < 4; i++) {
    story_id_list = story_id_list.concat(story_id_list);
  }

  var story_list = [];
  for (let i = 0; i < story_id_list.length; i++) {
    var img = document.createElement("img");

    img.className = "hedaer_story_user";
    img.src = img_file_path + `/user/${story_id_list[i]}.PNG`;

    story_list.push(img);

    story_list[i].ondragstart = function (e) {
      e.preventDefault();
    };

    story_list[i].onerror = function () {
      story_list[i].src = img_file_path + `/user/none.PNG`;
    };

    // 이미지 컨테이너에 추가
    container.appendChild(img);
  }
}

scrollStoryEvent();
function scrollStoryEvent() {
  var scroll_container = document.getElementById("story_header");
  var isScrolling = false;
  var startX, scrollLeft;

  // 드래그가 끝나거나 드래그 중이지 않을때 값들을 모두 false 로 넣어둔다
  //

  // 마우스 클릭시 이벤트
  scroll_container.addEventListener("mousedown", (e) => {
    isScrolling = true;
    // 시작 위치 저장
    // offset -> 부모요소와의 거리
    startX = e.pageX - scroll_container.offsetLeft;

    // scrollLeft -> 스크롤의 가로요소를 가져오는것
    scrollLeft = scroll_container.scrollLeft;
  });
  // 마우스가 클릭한 태그내에서 이동시
  scroll_container.addEventListener("mousemove", (e) => {
    if (!isScrolling) return;
    // 마우스 이벤트가 발생 한 위치 - 현재 위치
    const x = e.pageX - scroll_container.offsetLeft;

    const walkX = x - startX;
    scroll_container.scrollLeft = scrollLeft - walkX;
  });
  // 마우스를 손에서 뗄뗴
  scroll_container.addEventListener("mouseup", () => {
    isScrolling = false;
  });

  // 마우스가 태그 밖으로 벗어났을때
  scroll_container.addEventListener("mouseleave", () => {
    isScrolling = false;
  });
}
// -----------------------------------------ㅡmain scroll---------------------------------------------
var old_thumb_index = 0;

postScrollEvent();

function postScrollEvent() {
  var animatedBox = document.querySelectorAll(".post_box");
  animatedBox[0].style = "opacity:1";
  var post_container = document.getElementById("posting_main");
  var present_content = null;
  var old_content = null;
  post_container.addEventListener("scroll", (e) => {
    console.log(post_container.scrollTop);
    var present_thumb_index = Math.floor(post_container.scrollTop / 400);
    present_content = animatedBox[present_thumb_index];

    if (present_thumb_index > old_thumb_index) {
      old_content = animatedBox[present_thumb_index - 1];
      present_content.style = "opacity:1";
      present_content.style.animation = "brighten 2s linear 1";
      old_content.style = "opacity:0";
    } else if (present_thumb_index < old_thumb_index) {
      old_content = animatedBox[present_thumb_index + 1];
      present_content.style = "opacity:1";
      present_content.style.animation = "brighten 2s linear 1";
      old_content.style = "opacity:0";
    }
    old_thumb_index = present_thumb_index;
  });
}

// -----------------------------------------start scroll---------------------------------------------

// 시작 이벤트 설정

function windoScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤 이동하도록 설정 (선택사항)
  });
}

function postScrollToTop() {
  document.getElementById("posting_main").scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤 이동하도록 설정 (선택사항)
  });
}

// -----------------------------------------aside_right---------------------------------------------
// makeCategoryList();
function makeCategoryList() {
  var aside_category = document.getElementById("category_aside");
  var category_list = [];
  for (var i = 0; i < 5; i++) {
    category_list.push(`테스트${i + 1}`);
    var category = document.createElement("div");
    category.innerHTML = `테스트${i + 1}`;
    category.classList = "category_box";
    aside_category.appendChild(category);
  }
}

// 페이지 시작 이벤트
startPageEvent();
function startPageEvent() {
  var main = document.getElementById("posting_main");
  var header = document.getElementById("story_header");
  main.style.borderRight = "solid 1px white";
  main.style.borderLeft = "solid 1px white";
  header.style.borderRight = "solid 1px white";
  header.style.borderLeft = "solid 1px white";

  main.style.animation = "width_to_100 1s forwards";
  header.style.animation = "width_to_100 1s forwards";
  main.addEventListener("animationend", function () {
    main.style.border = "none";
    header.style.border = "none";
    main.style.animation = "margin_event 1s forwards";
  });
}

//
