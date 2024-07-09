function setText() {
  var joinBtn = document.getElementById("join_btn");
  joinBtn.innerHTML = "회원가입";
  var joinBackBtn = document.getElementById("join_from_back_btn");
  joinBackBtn.innerHTML = "뒤로가기";
}

function makeJoinContainer() {
  var joinContainer = document.getElementById("join_container");
  joinContainer.classList = "except_login_container";

  // 이미지 요소 생성
  var logoImg = document.createElement("img");
  logoImg.className = "logo";
  logoImg.id = "join_logo";
  logoImg.src = "../image/instargram/login/instar_text_logo.png";

  // 첫 번째 placehorder_parent 생성 및 자식 요소 추가

  var container1 = document.createElement("div");
  container1.className = "placehorder_parent";

  var placeholderJoinNickname = document.createElement("p");
  placeholderJoinNickname.id = "placehorder_join_nickname";
  placeholderJoinNickname.className = "placehorder";

  var JoinNickname = document.createElement("input");
  JoinNickname.id = "join_nickname";
  JoinNickname.className = "login_box";
  JoinNickname.classList.add("join");
  JoinNickname.setAttribute("autocomplete", "off");

  container1.appendChild(placeholderJoinNickname);
  container1.appendChild(JoinNickname);
  //// nickname
  var container2 = document.createElement("div");
  container2.className = "placehorder_parent";

  var placeholderJoinId = document.createElement("p");
  placeholderJoinId.id = "placehorder_join_id";
  placeholderJoinId.className = "placehorder";

  var joinId = document.createElement("input");
  joinId.id = "join_id";
  joinId.className = "login_box";
  joinId.setAttribute("autocomplete", "off");
  joinId.classList.add("join");

  container2.appendChild(placeholderJoinId);
  container2.appendChild(joinId);
  //////pw

  var container3 = document.createElement("div");
  container3.className = "placehorder_parent";

  var placeholderJoinPw = document.createElement("p");
  placeholderJoinPw.id = "placehorder_join_pw";
  placeholderJoinPw.className = "placehorder";

  var joinPw = document.createElement("input");
  joinPw.id = "join_pw";
  joinPw.className = "login_box";
  joinPw.setAttribute("autocomplete", "off");
  joinPw.classList.add("join");

  container3.appendChild(placeholderJoinPw);
  container3.appendChild(joinPw);

  var container4 = document.createElement("div");
  container4.className = "placehorder_parent";

  var placeholderJoinPhone = document.createElement("p");
  placeholderJoinPhone.id = "placehorder_join_phone";
  placeholderJoinPhone.className = "placehorder";

  var joinPhone = document.createElement("input");
  joinPhone.id = "join_phone";
  joinPhone.className = "login_box";
  joinPhone.setAttribute("autocomplete", "off");
  joinPhone.classList.add("join");

  container4.appendChild(placeholderJoinPhone);
  container4.appendChild(joinPhone);

  var container5 = document.createElement("div");
  container5.className = "placehorder_parent";

  var placeholderJoin = document.createElement("p");
  placeholderJoin.id = "placehorder_join_name";
  placeholderJoin.className = "placehorder";

  var joinName = document.createElement("input");
  joinName.id = "join_name";
  joinName.className = "login_box";
  joinName.setAttribute("autocomplete", "off");
  joinName.classList.add("join");

  container5.appendChild(placeholderJoin);
  container5.appendChild(joinName);

  var container6 = document.createElement("div");
  container6.className = "placehorder_parent";
  container6.style.position = "relative";

  var joinGender = document.createElement("div");
  joinGender.id = "join_gender";
  joinGender.className = "login_box";

  var genderContainer = document.createElement("div");
  genderContainer.id = "gender_container";
  genderContainer.style.width = "100%";
  genderContainer.style.position = "absolute";
  genderContainer.style.top = "50%"; // 부모 요소의 중앙으로 이동
  genderContainer.style.left = "50%"; // 부모 요소의 중앙으로 이동
  genderContainer.style.transform = "translate(-50%, -50%)";
  var genderTextList = ["MALE", "FEMALE", "X"];
  for (let i = 0; i < 3; i++) {
    var genderBox = document.createElement("div");
    genderBox.classList = "gender_box";

    var genderRadio = document.createElement("input");
    genderRadio.type = "radio";
    genderRadio.classList = "gender_radio";
    genderRadio.id = genderTextList[i];
    var genderText = document.createElement("div");
    genderText.style.display = "inline";
    genderText.innerHTML = genderTextList[i];
    genderText.style.fontSize = "10px";
    genderText.style.margin = "8px";
    genderText.style.textAlign = "center";
    genderBox.appendChild(genderRadio);
    genderBox.appendChild(genderText);
    genderBox.style.marginRight = "20px";
    genderBox.style.marginLeft = "20px";
    genderContainer.appendChild(genderBox);
  }
  container6.appendChild(joinGender);
  container6.appendChild(genderContainer);

  var backBtn = document.createElement("button");
  backBtn.id = "join_from_back_btn";
  backBtn.classList = "text_btn";
  backBtn.style.marginBottom = "100px";

  var joinPageBtn = document.createElement("button");
  joinPageBtn.id = "join_btn";
  joinPageBtn.classList = "blue_btn";

  joinContainer.appendChild(logoImg);
  joinContainer.appendChild(container1);
  joinContainer.appendChild(container2);
  joinContainer.appendChild(container3);
  joinContainer.appendChild(container4);
  joinContainer.appendChild(container5);
  joinContainer.appendChild(container6);
  joinContainer.appendChild(joinPageBtn);
  joinContainer.appendChild(backBtn);
}

function setBtnEvent() {
  var backBtn = document.getElementById("join_from_back_btn");
  backBtn.addEventListener("click", function () {
    setInstargramLogoEvent();
  });
  var joinBtn = document.getElementById("join_btn");
  joinBtn.addEventListener("click", function () {
    setJoinEvent();
  });
}

function setInstargramLogoEvent() {
  var joinContainer = document.getElementById("join_container");
  joinContainer.style.animation = "width_to_0 1s forwards";

  var loginContainer = document.getElementById("login_container");
  loginContainer.style.borderRight = "solid 1px white";
  loginContainer.style.animation = "width_to_100 1s forwards";
}

function setJoinEvent() {
  var inputJoinList = document.querySelectorAll(".join");
  var joinTextList = [];
  inputJoinList.forEach(function (element) {
    joinTextList.push(element.value);
  });
  var inputRadio = document.querySelectorAll(".gender_radio");
  inputRadio.forEach(function (element) {
    if (element.checked) {
      joinTextList.push(element.id);
    }
  });
  console.log(joinTextList);
  checkExceptJoin(joinTextList);
}

function checkExceptJoin(list) {
  var containerList = document.querySelectorAll(".placehorder_parent");

  const nickname = list[0];
  const regexNickname = /^(?=.*[a-zA-Z0-9_])[a-zA-Z0-9_]{5,20}$/;
  const validNickname = "영어 , 숫자 '_'  사용가능  5~20글자 ";

  const ID = list[1];
  const regexID = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{5,20}$/;
  const validID = "5~20자 영어 숫자 포함";

  const password = list[2];
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
  const validPassword = "대소문자와 숫자를 포함하며, 길이가 8에서 20자 사이";

  const phoneNumber = list[3];
  const regexPhone = /^01([0|1|6|7|8|9]?)([0-9]{3,4})([0-9]{4})$/;
  const validPhone = "예시)01012345678";

  const name = list[4];
  var regexName = /^[가-힣]{2,10}$/;
  const validName = "예시)홍길동";

  const enterText = [nickname, ID, password, phoneNumber, name];
  const regexList = [
    regexNickname,
    regexID,
    regexPassword,
    regexPhone,
    regexName,
  ];
  const errorMessage = [
    validNickname,
    validID,
    validPassword,
    validPhone,
    validName,
  ];

  for (let i = 0; i < enterText.length; i++) {
    if (regexList[i].test(enterText[i])) {
      var text = containerList[i].querySelector(".message");
      if (text != null) {
        text.remove();
      }
    } else {
      var message = containerList[i].querySelector(".message");
      if (message == null) {
        var messageElement = document.createElement("p");
        messageElement.textContent = errorMessage[i];
        messageElement.classList = "message";
        containerList[i].appendChild(messageElement);
      }
    }
  }
}

function setJoinPlacehorder() {
  var placehorderNickname = document.getElementById(
    "placehorder_join_nickname"
  );
  placehorderNickname.textContent = "닉네임";
  var joinNickname = document.getElementById("join_nickname");

  var placehorderId = document.getElementById("placehorder_join_id");
  placehorderId.textContent = "아이디";
  var joinId = document.getElementById("join_id");

  var placehorderPW = document.getElementById("placehorder_join_pw");
  placehorderPW.textContent = "비밀번호";
  var joinPw = document.getElementById("join_pw");

  var placehorderPhone = document.getElementById("placehorder_join_phone");
  placehorderPhone.textContent = "전화번호";
  var joinPhone = document.getElementById("join_phone");

  var placehorderName = document.getElementById("placehorder_join_name");
  placehorderName.textContent = "이름";
  var joinName = document.getElementById("join_name");

  const joinPlaceHorder = [
    placehorderNickname,
    placehorderId,
    placehorderPW,
    placehorderPhone,
    placehorderName,
  ];
  const joinValue = [joinNickname, joinId, joinPw, joinPhone, joinName];

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

function raidoBtnRepeatCheck() {
  var radioBtns = document.querySelectorAll(".gender_radio");

  radioBtns.forEach(function (radioBtn) {
    radioBtn.addEventListener("change", function (event) {
      var presentRadio = event.target.id;

      radioBtns.forEach(function (btn) {
        if (presentRadio !== btn.id) {
          btn.checked = false; // 올바른 속성은 checked입니다
        }
      });
    });
  });
}

makeJoinContainer();
setText();
setBtnEvent();
setJoinPlacehorder();
raidoBtnRepeatCheck();
