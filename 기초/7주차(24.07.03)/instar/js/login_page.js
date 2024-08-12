function setBtnText() {
  var loginBtn = document.getElementById("login_btn");
  loginBtn.innerHTML = "로그인";

  var findBtn = document.getElementById("find_page_btn");
  findBtn.innerHTML = "비밀번호를 잊으셨나요?";

  var joinBtn = document.getElementById("join_page_btn");
  joinBtn.innerHTML = "회원가입";
}

function setLoginPlacehorder() {
  var placehorderId = document.getElementById("placehorder_id");
  placehorderId.textContent = "사용자 아이디 및 계정";
  var placehorderPw = document.getElementById("placehorder_pw");
  placehorderPw.textContent = "비밀번호";
}
function placehorderEvnet() {
  var loginId = document.getElementById("login_id");
  var loginPw = document.getElementById("login_pw");
  var placehorderId = document.getElementById("placehorder_id");
  placehorderId.textContent = "아이디";
  var placehorderPw = document.getElementById("placehorder_pw");
  placehorderPw.textContent = "비밀번호";

  const loginPlaceHorder = [placehorderId, placehorderPw];
  const loginValue = [loginId, loginPw];

  for (let i = 0; i < loginPlaceHorder.length; i++) {
    loginValue[i].addEventListener("input", function () {
      loginPlaceHorder[i].style.animation =
        "placehorder_to_small 0.3s forwards";
      loginValue[i].style = "font-size:13px";
      loginValue[i].style.paddingTop = "25px";
      const inputValue = loginValue[i].value.trim();
      if (inputValue === "") {
        loginPlaceHorder[i].style.animation =
          "placehorder_to_big 0.3s forwards";
        loginValue[i].style = "font-size:15px";
        loginValue[i].style.paddingTop = "0px";
      }
    });
  }
}

function setLoginBtnEvent() {
  document.getElementById("login_btn").addEventListener("click", function () {
    loginEvent();
  });

  document
    .getElementById("find_page_btn")
    .addEventListener("click", function () {
      findBtnEvent();
    });
  document
    .getElementById("join_page_btn")
    .addEventListener("click", function () {
      joinBtnEvent();
    });
}

// 정규표현식으로 한번 거르기
function loginEvent() {
  var present_id = document.getElementById("login_id").value;
  var present_pw = document.getElementById("login_pw").value;
  var url =
    "../jsp/action/loginAction.jsp?login_id=" +
    present_id +
    "&login_pw=" +
    present_pw;
  location.href = url;
}

function findBtnEvent() {
  setEmptyText();
  var loginContainer = document.getElementById("login_container");
  loginContainer.style.borderRight = "solid 1px white";
  loginContainer.style.animation = "width_to_0 1s forwards";
  var findContainer = document.getElementById("find_container");
  findContainer.style.animation = "width_to_100 1s forwards";
}

function joinBtnEvent() {
  setEmptyText();
  var loginContainer = document.getElementById("login_container");
  loginContainer.style.borderRight = "solid 1px white";
  loginContainer.style.animation = "width_to_0 1s forwards";
  var joinContainer = document.getElementById("join_container");
  joinContainer.style.animation = "width_to_100 1s forwards";
}

function startPage() {
  var loginContainer = document.getElementById("login_container");
  loginContainer.style.animation = "start_container 1.5s forwards";
  loginContainer.addEventListener("animationend", function () {
    loginContainer.style.border = "none";
    setLoginBtnEvent();
  });
}
function makeLoginContainer() {
  var loginContainer = document.getElementById("login_container");

  var logoImg = document.createElement("img");
  logoImg.className = "logo";
  logoImg.src = "../image/instargram/login/instar_text_logo.png";
  loginContainer.appendChild(logoImg);

  // 또는 특정 부모 요소에 추가 (예: 특정 div에 추가하려면)
  var container1 = document.createElement("div");
  container1.className = "placehorder_parent";

  var container2 = document.createElement("div");
  container2.className = "placehorder_parent";

  // 첫 번째 placehorder와 input 생성
  var placeholderId = document.createElement("p");
  placeholderId.id = "placehorder_id";
  placeholderId.className = "placehorder";

  var loginId = document.createElement("input");
  loginId.id = "login_id";
  loginId.className = "login_box";
  loginId.setAttribute("autocomplete", "off");

  // 첫 번째 컨테이너에 추가
  container1.appendChild(placeholderId);
  container1.appendChild(loginId);

  // 두 번째 placehorder와 input 생성
  var placeholderPw = document.createElement("p");
  placeholderPw.id = "placehorder_pw";
  placeholderPw.className = "placehorder";

  var loginPw = document.createElement("input");
  loginPw.id = "login_pw";
  loginPw.className = "login_box";
  loginPw.setAttribute("type", "password");
  loginPw.setAttribute("autocomplete", "off");

  // 두 번째 컨테이너에 추가
  container2.appendChild(placeholderPw);
  container2.appendChild(loginPw);

  // 버튼 생성
  var loginBtn = document.createElement("button");
  loginBtn.id = "login_btn";
  loginBtn.classList = "blue_btn";

  var findBtn = document.createElement("button");
  findBtn.id = "find_page_btn";
  findBtn.classList = "text_btn";

  var joinBtn = document.createElement("button");
  joinBtn.id = "join_page_btn";
  joinBtn.classList = "text_btn";
  joinBtn.style.marginBottom = "200px";

  // DOM에 추가
  loginContainer.appendChild(container1);
  loginContainer.appendChild(container2);
  loginContainer.appendChild(loginBtn);
  loginContainer.appendChild(findBtn);
  loginContainer.appendChild(joinBtn);
}

function instargramLogoEvent() {
  document.querySelectorAll(".logo").forEach(function (e) {
    e.addEventListener("click", function () {
      location.href = "../jsp/index.jsp";
    });
  });
}

function setEmptyText() {
  var allInputText = document.querySelectorAll("input");
  allInputText.forEach(function (element) {
    element.value = "";
  });
  var radioBtns = document.querySelectorAll(".gender_radio");
  radioBtns.forEach(function (element) {
    element.checked = false;
  });

  var allInvalidText = document.querySelectorAll(".message");
  allInvalidText.forEach(function (element) {
    element.remove();
  });
}

function loginEnterEvnet() {
  var inputTextID = document.getElementById("login_id");
  var inputTextPW = document.getElementById("login_pw");

  var list = [inputTextID, inputTextPW];

  list.forEach(function (ele) {
    ele.addEventListener("keypress", function (e) {
      if (e.keyCode === 13) {
        loginEvent();
      }
    });
  });
}

startPage();
makeLoginContainer();
placehorderEvnet();
instargramLogoEvent();
setBtnText();
loginEnterEvnet();
