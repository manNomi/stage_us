export const makeThumbText = (VideoData) => {
  var videoText = document.createElement("div");
  videoText.classList = "container_center";

  var newThumb = document.createElement("div");

  var userImg = document.createElement("img");
  userImg.setAttribute("src", VideoData.userImg);
  videoText.appendChild(userImg);

  var title = document.createElement("p");
  title.classList = "main_text_line";
  title.innerHTML = VideoData.title;
  newThumb.appendChild(title);

  var userName = document.createElement("p");
  userName.innerHTML = VideoData.userName;
  newThumb.appendChild(userName);

  var smallTextBox = document.createElement("div");
  newThumb.appendChild(smallTextBox);

  var new_mainTextView = document.createElement("p");
  new_mainTextView.innerHTML = VideoData.thumbView;

  var dateText = document.createElement("p");
  dateText.innerHTML = VideoData.thumbDate;

  smallTextBox.appendChild(new_mainTextView);
  smallTextBox.appendChild(dateText);

  videoText.appendChild(newThumb);
  return videoText;
};
