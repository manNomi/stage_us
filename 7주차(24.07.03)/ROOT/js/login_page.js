function setBtnText() {
  var loginBtn = document.getElementById("login_btn");
  var findBtn = document.getElementById("find_btn");
  loginBtn.innerHTML = "로그인";
  findBtn.innerHTML = "비밀번호를 잊으셨나요?";
  var loginId = document.getElementById("login_id");
  var loginPw = document.getElementById("login_pw");
  loginId.value = "";
  loginPw.value = "";
}

function setPlacehorder() {
  var placehorderId = document.getElementById("placehorder_id");
  placehorderId.textContent = "사용자 아이디 및 계정";
  var placehorderPw = document.getElementById("placehorder_pw");
  placehorderPw.textContent = "비밀번호";
}
function placehorderEvnet() {
  var loginId = document.getElementById("login_id");
  var loginPw = document.getElementById("login_pw");
  var placehorderId = document.getElementById("placehorder_id");
  var placehorderPw = document.getElementById("placehorder_pw");

  loginId.addEventListener("input", function () {
    placehorderId.style.animation = "placehorder_to_small 0.3s forwards";
    loginId.style = "font-size:13px";
    loginId.style.paddingTop = "25px";
    const inputValue = loginId.value.trim();
    if (inputValue === "") {
      placehorderId.style.animation = "placehorder_to_big 0.3s forwards";
      loginId.style = "font-size:15px";
      loginId.style.paddingTop = "0px";
    }
  });

  loginPw.addEventListener("input", function () {
    placehorderPw.style.animation = "placehorder_to_small 0.3s forwards";
    loginPw.style = "font-size:13px";
    loginPw.style.paddingTop = "25px";
    const inputValue = loginPw.value.trim();
    if (inputValue === "") {
      placehorderPw.style.animation = "placehorder_to_big 0.3s forwards";
      loginPw.style = "font-size:15px";
      loginPw.style.paddingTop = "0px";
    }
  });
}

function setLoginBtnEvent() {
  document.getElementById("login_btn").addEventListener("click", function () {
    loginEvent();
  });
  document.getElementById("find_btn").addEventListener("click", function () {
    findEvent();
  });
}

// 정규표현식으로 한번 거르기
function loginEvent() {
  location.href = "../html/index.html";
}

function findEvent() {
  changeEvnet();
}

function changeEvnet() {
  var loginContainer = document.getElementById("login_container");
  loginContainer.style.opacity = "1";
  loginContainer.style.animation = "opacity_box 1s forwards";
}

function startPage() {
  var loginContainer = document.getElementById("login_container");
  loginContainer.style.animation = "start_container 1.5s forwards";
  loginContainer.addEventListener("animationend", function () {
    loginContainer.style.border = "none";
    setLoginBtnEvent();
  });
}

setBtnText();
setPlacehorder();
placehorderEvnet();
startPage();
