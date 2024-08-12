function makeFindContainer() {
  var findContainer = document.getElementById("find_container");
  findContainer.classList = "except_login_container";

  // 이미지 요소 생성
  var logoImg = document.createElement("img");
  logoImg.className = "logo";
  logoImg.id = "find_logo";
  logoImg.src = "../image/instargram/login/instar_text_logo.png";

  // 첫 번째 placehorder_parent 생성 및 자식 요소 추가
  var container1 = document.createElement("div");
  container1.className = "placehorder_parent";

  var placeholderFindId = document.createElement("p");
  placeholderFindId.id = "placehorder_find_id";
  placeholderFindId.className = "placehorder";

  var loginFindId = document.createElement("input");
  loginFindId.id = "find_id";
  loginFindId.className = "login_box";
  loginFindId.setAttribute("autocomplete", "off");

  container1.appendChild(placeholderFindId);
  container1.appendChild(loginFindId);

  // 두 번째 placehorder_parent 생성 및 자식 요소 추가
  var container2 = document.createElement("div");
  container2.className = "placehorder_parent";

  var placeholderFindPhone = document.createElement("p");
  placeholderFindPhone.id = "placehorder_find_phone";
  placeholderFindPhone.className = "placehorder";

  var loginFindPhone = document.createElement("input");
  loginFindPhone.id = "find_phone";
  loginFindPhone.className = "login_box";
  loginFindPhone.setAttribute("autocomplete", "off");

  container2.appendChild(placeholderFindPhone);
  container2.appendChild(loginFindPhone);

  // 세 번째 placehorder_parent 생성 및 자식 요소 추가
  var container3 = document.createElement("div");
  container3.className = "placehorder_parent";

  var placeholderFind = document.createElement("p");
  placeholderFind.id = "placehorder_find_name";
  placeholderFind.className = "placehorder";

  var loginFind = document.createElement("input");
  loginFind.id = "find_name";
  loginFind.className = "login_box";
  loginFind.setAttribute("autocomplete", "off");

  container3.appendChild(placeholderFind);
  container3.appendChild(loginFind);

  var backBtn = document.createElement("button");
  backBtn.id = "find_from_back_btn";
  backBtn.classList = "text_btn";
  backBtn.style.marginBottom = "200px";

  // 로그인 버튼 생성
  var findPageBtn = document.createElement("button");
  findPageBtn.id = "findpage_move_btn";
  findPageBtn.classList = "blue_btn";
  findContainer.appendChild(logoImg);
  findContainer.appendChild(container1);
  findContainer.appendChild(container2);
  findContainer.appendChild(container3);
  findContainer.appendChild(findPageBtn);
  findContainer.appendChild(backBtn);
}

function setFindPlacehorder() {
  var placehorderId = document.getElementById("placehorder_find_id");
  placehorderId.textContent = "아이디";
  var placehorderPhone = document.getElementById("placehorder_find_phone");
  placehorderPhone.textContent = "전화번호";
  var placehorderName = document.getElementById("placehorder_find_name");
  placehorderName.textContent = "이름";

  var findId = document.getElementById("find_id");
  var findPhone = document.getElementById("find_phone");
  var findName = document.getElementById("find_name");

  const findPlaceHorder = [placehorderId, placehorderPhone, placehorderName];
  const findValue = [findId, findPhone, findName];

  for (let i = 0; i < findPlaceHorder.length; i++) {
    findValue[i].addEventListener("input", function () {
      findPlaceHorder[i].style.animation = "placehorder_to_small 0.3s forwards";
      findValue[i].style = "font-size:13px";
      findValue[i].style.paddingTop = "25px";
      const inputValue = findValue[i].value.trim();
      if (inputValue === "") {
        findPlaceHorder[i].style.animation = "placehorder_to_big 0.3s forwards";
        findValue[i].style = "font-size:15px";
        findValue[i].style.paddingTop = "0px";
      }
    });
  }
}

function findPageBtnSet() {
  var findPageBtn = document.getElementById("findpage_move_btn");
  findPageBtn.addEventListener("click", function () {
    findEvent();
  });
}

function findEvent() {
  var id = document.getElementById("find_id").value;
  var phone = document.getElementById("find_phone").value;
  var name = document.getElementById("find_name").value;
  var url =
    "../jsp/action/findAction.jsp?login_id=" +
    id +
    "&phone=" +
    phone +
    "&name=" +
    name;
  location.href = url;
}

function setBtnText() {
  var findPwBtn = document.getElementById("findpage_move_btn");
  findPwBtn.innerHTML = "비밀번호 찾기";
  var findBackBtn = document.getElementById("find_from_back_btn");
  findBackBtn.innerHTML = "뒤로가기";
}

function setInstargramLogoEvent() {
  var backBtn = document.getElementById("find_from_back_btn");
  backBtn.addEventListener("click", function () {
    var findContainer = document.getElementById("find_container");
    findContainer.style.animation = "width_to_0 1s forwards";

    var loginContainer = document.getElementById("login_container");
    loginContainer.style.borderRight = "solid 1px white";
    loginContainer.style.animation = "width_to_100 1s forwards";
  });
}

function findEnterEvnet() {
  var inputTextID = document.getElementById("find_id");
  var inputTextPhone = document.getElementById("find_phone");
  var inputTextName = document.getElementById("find_name");

  var list = [inputTextID, inputTextPhone, inputTextName];

  list.forEach(function (ele) {
    ele.addEventListener("keypress", function (e) {
      if (e.keyCode === 13) {
        findEvent();
      }
    });
  });
}

makeFindContainer();
findPageBtnSet();
setFindPlacehorder();
setBtnText();
setInstargramLogoEvent();
findEnterEvnet();
