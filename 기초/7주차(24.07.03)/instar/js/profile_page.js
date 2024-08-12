function makeprofileIMG(tunmbUrl) {
  var userThumb = document.getElementById("user_thumb");
  userThumb.classList = "user_thumb";
  userThumb.style.backgroundImage =
    "url('../image/instargram/user/" + tunmbUrl + "')";
  userThumb.onerror = function () {
    userThumb.style.backgroundImage =
      "url('../image/instargram/user/none.png')";
  };
}

function setBackBtn() {
  var backBtn = document.getElementById("profile_back_btn");
  backBtn.classList = "blue_btn";
  backBtn.innerHTML = "뒤로가기";
  backBtn.addEventListener("click", function () {
    location.href = "./index.jsp";
  });
}
function setLogoutBtn() {
  var logoutBtn = document.getElementById("logout_btn");
  logoutBtn.classList = "blue_btn";
  logoutBtn.innerHTML = "로그아웃";
  logoutBtn.addEventListener("click", function () {
    location.href = "./action/logoutAction.jsp";
  });
}

function startPage() {
  var container = document.getElementById("container");
  container.style.animation = "start_container 1s forwards";
}

makeprofileIMG("none.png");
setBackBtn();
setLogoutBtn();
startPage();
