function setBtnText() {
  var loginBtn = document.getElementById("login_btn");
  var findBtn = document.getElementById("find_btn");
  loginBtn.innerHTML = "로그인";
  findBtn.innerHTML = "비밀번호를 잊으셨나요?";
  var findPwBtn = document.getElementById("find_page_btn");
  findPwBtn.innerHTML = "비밀번호 찾기";
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
    findEvent();
  });
}

// 정규표현식으로 한번 거르기
function loginEvent() {
  location.href = "../html/index.html";
}

function findEvent() {
  findPageMoveEvent();
}

function findPageMoveEvent() {
  var loginContainer = document.getElementById("login_container");
  loginContainer.style.borderRight = "solid 1px white";
  loginContainer.style.animation = "width_to_0 1s forwards";

  var findContainer = document.getElementById("find_container");
  findContainer.style.display = "flex";
  findContainer.style.animation = "width_to_100 1s forwards";
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
  logoImg.src = "../image/instargram/aside/instar_text_logo.png";
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
  loginBtn.classList = "tmp_btn";

  var findBtn = document.createElement("button");
  findBtn.id = "find_btn";
  findBtn.classList = "find_btn";

  // DOM에 추가
  loginContainer.appendChild(container1);
  loginContainer.appendChild(container2);
  loginContainer.appendChild(loginBtn);
  loginContainer.appendChild(findBtn);
}

function makeFindContainer() {
  var findContainer = document.getElementById("find_container");

  // 이미지 요소 생성
  var logoImg = document.createElement("img");
  logoImg.className = "logo";
  logoImg.src = "../image/instargram/login/instar_text_logo.png";

  // 첫 번째 placehorder_parent 생성 및 자식 요소 추가
  var container1 = document.createElement("div");
  container1.className = "placehorder_parent";

  var placeholderJoinId = document.createElement("p");
  placeholderJoinId.id = "placehorder_join_id";
  placeholderJoinId.className = "placehorder";

  var loginJoinId = document.createElement("input");
  loginJoinId.id = "join_id";
  loginJoinId.className = "login_box";
  loginJoinId.setAttribute("autocomplete", "off");

  container1.appendChild(placeholderJoinId);
  container1.appendChild(loginJoinId);

  // 두 번째 placehorder_parent 생성 및 자식 요소 추가
  var container2 = document.createElement("div");
  container2.className = "placehorder_parent";

  var placeholderJoinPhone = document.createElement("p");
  placeholderJoinPhone.id = "placehorder_join_phone";
  placeholderJoinPhone.className = "placehorder";

  var loginJoinPhone = document.createElement("input");
  loginJoinPhone.id = "join_phone";
  loginJoinPhone.className = "login_box";
  loginJoinPhone.setAttribute("autocomplete", "off");

  container2.appendChild(placeholderJoinPhone);
  container2.appendChild(loginJoinPhone);

  // 세 번째 placehorder_parent 생성 및 자식 요소 추가
  var container3 = document.createElement("div");
  container3.className = "placehorder_parent";

  var placeholderJoin = document.createElement("p");
  placeholderJoin.id = "placehorder_join_name";
  placeholderJoin.className = "placehorder";

  var loginJoin = document.createElement("input");
  loginJoin.id = "join_name";
  loginJoin.className = "login_box";
  loginJoin.setAttribute("autocomplete", "off");

  container3.appendChild(placeholderJoin);
  container3.appendChild(loginJoin);

  // 로그인 버튼 생성
  var findPageBtn = document.createElement("button");
  findPageBtn.id = "find_page_btn";
  findPageBtn.classList = "tmp_btn";
  findPageBtn.style.marginBottom = "200px";

  //   // 찾기 버튼 생성
  //   var findBtn = document.createElement("button");
  //   findBtn.id = "find_pw_btn";
  //   findBtn.classList = "find_btn";
  //   findContainer.appendChild(loginBtn);

  findContainer.appendChild(logoImg);
  findContainer.appendChild(container1);
  findContainer.appendChild(container2);
  findContainer.appendChild(container3);
  findContainer.appendChild(findPageBtn);
}

function setJoinPlacehorder() {
  var placehorderId = document.getElementById("placehorder_join_id");
  placehorderId.textContent = "아이디";
  var placehorderPhone = document.getElementById("placehorder_join_phone");
  placehorderPhone.textContent = "전화번호";
  var placehorderName = document.getElementById("placehorder_join_name");
  placehorderName.textContent = "이름";

  var joinId = document.getElementById("join_id");
  var joinPhone = document.getElementById("join_phone");
  var joinName = document.getElementById("join_name");

  const joinPlaceHorder = [placehorderId, placehorderPhone, placehorderName];
  const joinValue = [joinId, joinPhone, joinName];

  for (let i = 0; i < joinPlaceHorder.length; i++) {
    joinValue[i].addEventListener("input", function () {
      joinPlaceHorder[i].style.animation = "placehorder_to_small 0.3s forwards";
      joinValue[i].style = "font-size:13px";
      joinValue[i].style.paddingTop = "25px";
      const inputValue = joinValue[i].value.trim();
      if (inputValue === "") {
        joinPlaceHorder[i].style.animation = "placehorder_to_big 0.3s forwards";
        joinValue[i].style = "font-size:15px";
        joinValue[i].style.paddingTop = "0px";
      }
    });
  }
}

function findPageBtn() {
  var findPageBtn = document.getElementById("find_page_btn");
  findPageBtn.addEventListener("click", function () {
    location.href = "../html/instargram.html";
  });
}

makeLoginContainer();
makeFindContainer();
setBtnText();
setJoinPlacehorder();
setLoginPlacehorder();
startPage();
placehorderEvnet();
findPageBtn();
