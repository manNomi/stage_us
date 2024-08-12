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
  joinPw.type = "password";
  joinPw.classList.add("join");

  container3.appendChild(placeholderJoinPw);
  container3.appendChild(joinPw);

  var container4 = document.createElement("div");
  container4.className = "placehorder_pw_check";

  var placeholderJoinPwChek = document.createElement("p");
  placeholderJoinPwChek.id = "placehorder_join_pw_check";
  placeholderJoinPwChek.className = "placehorder";

  var joinPwCheck = document.createElement("input");
  joinPwCheck.id = "join_pw_check";
  joinPwCheck.className = "login_box";
  joinPwCheck.setAttribute("autocomplete", "off");
  joinPwCheck.type = "password";
  joinPwCheck.classList.add("check");

  container4.appendChild(placeholderJoinPwChek);
  container4.appendChild(joinPwCheck);

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

  var placeholderJoinPhone = document.createElement("p");
  placeholderJoinPhone.id = "placehorder_join_phone";
  placeholderJoinPhone.className = "placehorder";

  var joinPhone = document.createElement("input");
  joinPhone.id = "join_phone";
  joinPhone.className = "login_box";
  joinPhone.setAttribute("autocomplete", "off");
  joinPhone.classList.add("join");

  container6.appendChild(placeholderJoinPhone);
  container6.appendChild(joinPhone);

  var container7 = document.createElement("div");
  container7.className = "placehorder_parent";
  container7.style.position = "relative";

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
  container7.appendChild(joinGender);
  container7.appendChild(genderContainer);

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
  joinContainer.appendChild(container7);
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
  var instarLogoBtn = document.getElementById("join_logo");
  instarLogoBtn.addEventListener("click", function () {
    location.href = "../jsp/index.jsp";
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
      joinTextList.push(element.id.charAt(0));
    }
  });
  checkExceptJoin(joinTextList);
}

function checkExceptJoin(list) {
  var message = document.querySelectorAll(".message");
  console.log(message);
  var listLegnth = 0;
  list.forEach(function (element) {
    if (element != "") {
      listLegnth++;
    }
  });
  if (message.length == 0 && listLegnth == 6) {
    var textValues = [
      "nickname",
      "login_id",
      "login_pw",
      "name",
      "phone",
      "gender",
    ];
    var url = "./action/signupAction.jsp?";
    textValues.forEach(function (e, index) {
      url = url + textValues[index] + "=" + list[index];
      if (index != textValues.length - 1) {
        url = url + "&";
      }
    });
    console.log(url);
    location.href = url;
  } else {
    alert("입력을 해주세요");
  }
}

function repeatCheck() {
  var containerList = document.querySelectorAll(".placehorder_parent");
  var inputTextList = document.querySelectorAll(".join");

  const regexNickname = /^(?=.*[a-zA-Z0-9_])[a-zA-Z0-9_]{5,20}$/;
  const validNickname = "영어 , 숫자 '_'  사용가능  5~20글자 ";

  const regexID = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{5,20}$/;
  const validID = "5~20자 영어 숫자 포함";

  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,20}$/;
  const validPassword =
    "영어 대,소문자 , 숫자 , 특수문자 포함하며, 길이가 8에서 20자 사이";

  const validPasswordCheck = "비밀번호가 일치하지 않습니다";

  const regexPhone = /^01([0|1|6|7|8|9]?)([0-9]{3,4})([0-9]{4})$/;
  const validPhone = "예시)01012345678";
  var regexName = /^[가-힣]{2,10}$/;
  const validName = "예시)홍길동";

  const regexList = [
    regexNickname,
    regexID,
    regexPassword,
    regexName,
    regexPhone,
  ];
  const errorMessage = [
    validNickname,
    validID,
    validPassword,
    validName,
    validPhone,
  ];

  var checkContainer = document.querySelector(".placehorder_pw_check");
  var pwCheck = document.querySelector(".check");
  pwCheck.addEventListener("blur", function (event) {
    if (event.target.value != "") {
      var present_pw = document.getElementById("join_pw");
      if (present_pw.value == event.target.value) {
        var message = checkContainer.querySelector(".message");
        console.log("message");
        if (message != null) {
          message.remove();
        }
      } else {
        var message = checkContainer.querySelector(".message");
        if (message == null) {
          var messageElement = document.createElement("p");
          messageElement.textContent = validPasswordCheck;
          messageElement.classList = "message";
          checkContainer.appendChild(messageElement);
        }
      }
    }
  });

  inputTextList.forEach(function (element, inedex) {
    element.addEventListener("blur", function (event) {
      if (event.target.value != "") {
        if (regexList[inedex].test(event.target.value)) {
          var text = containerList[inedex].querySelector(".message");
          if (text != null) {
            text.remove();
          }
        } else {
          var message = containerList[inedex].querySelector(".message");
          if (message == null) {
            var messageElement = document.createElement("p");
            messageElement.textContent = errorMessage[inedex];
            messageElement.classList = "message";
            containerList[inedex].appendChild(messageElement);
          }
        }
      }
    });
  });
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

  var placehorderPWCheck = document.getElementById("placehorder_join_pw_check");
  placehorderPWCheck.textContent = "비밀번호 확인";
  var joinPwCheck = document.getElementById("join_pw_check");

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
    placehorderPWCheck,
    placehorderPhone,
    placehorderName,
  ];
  const joinValue = [
    joinNickname,
    joinId,
    joinPw,
    joinPwCheck,
    joinPhone,
    joinName,
  ];

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
repeatCheck();
// findEnterEvnet();
