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

function setLoginPlacehorder() {
  var placehorderId = document.getElementById("placehorder_id");
  placehorderId.textContent = "사용자 아이디 및 계정";
  var placehorderPw = document.getElementById("placehorder_pw");
  placehorderPw.textContent = "비밀번호";
}

// var -> let로 수정시 해결됨
// for 루프 내에서 i 값이 콜백 함수가 실행될 때 이미 loginPlaceHorder.length와 같거나 커져버려서 예상과 다른 값이 할당되기 때문입니다.

// 이러한 문제를 해결하기 위해 여러 가지 방법이 있지만,
// 가장 일반적인 방법은 클로저를 사용하여 각 반복마다 i 값을 캡처하도록 만드는
// 것입니다.예를 들어, 콜백 함수를 let 키워드로 선언하여 블록 스코프 변수로 만들어 클로저를 형성할 수 있습니다.

function placehorderEvnet() {
  var loginId = document.getElementById("login_id");
  var loginPw = document.getElementById("login_pw");
  var placehorderId = document.getElementById("placehorder_id");
  var placehorderPw = document.getElementById("placehorder_pw");

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
  document.getElementById("find_btn").addEventListener("click", function () {
    findBtnEvent();
  });
  document.getElementById("join_btn").addEventListener("click", function () {
    joinBtnEvent();
  });
}

// 정규표현식으로 한번 거르기
function loginEvent() {
  location.href = "../html/index.html";
}

function findBtnEvent() {
  var loginContainer = document.getElementById("login_container");
  loginContainer.style.borderRight = "solid 1px white";
  loginContainer.style.animation = "width_to_0 1s forwards";
  var findContainer = document.getElementById("find_container");
  findContainer.style.animation = "width_to_100 1s forwards";
}

function joinBtnEvent() {
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
  findBtn.id = "find_btn";
  findBtn.classList = "text_btn";

  var joinBtn = document.createElement("button");
  joinBtn.id = "join_btn";
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
      location.href = "../html/index.html";
    });
  });
}

startPage();
makeLoginContainer();
placehorderEvnet();
instargramLogoEvent();
setBtnText();
