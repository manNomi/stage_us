import css from "./video_title.module.css";
export const makeThumbText = (VideoData) => {
  var videoText = document.createElement("div");
  videoText.className = css.root;

  var newThumb = document.createElement("div");

  var userImg = document.createElement("img");
  userImg.setAttribute("src", VideoData.userImg);
  videoText.appendChild(userImg);

  var title = document.createElement("p");
  title.className = css.text_line;
  title.innerHTML = VideoData.title;
  newThumb.appendChild(title);

  var userName = document.createElement("p");
  userName.innerHTML = VideoData.userName;
  userName.className = css.text_line_1;
  newThumb.appendChild(userName);

  var smallTextBox = document.createElement("div");
  smallTextBox.className = css.small_box;
  newThumb.appendChild(smallTextBox);

  var thumbView = document.createElement("p");
  thumbView.innerHTML = setView(VideoData.thumbView);
  thumbView.className = css.text_line_small;

  var pointText = document.createElement("p");
  pointText.innerHTML = "•";
  pointText.className = css.text_line_small;

  var dateText = document.createElement("p");
  dateText.innerHTML = setDate(VideoData.thumbDate);
  dateText.className = css.text_line_small;

  smallTextBox.appendChild(thumbView);
  smallTextBox.appendChild(pointText);
  smallTextBox.appendChild(dateText);

  videoText.appendChild(newThumb);
  return videoText;
};

const setDate = (num) => {
  if (num > 365) {
    return `${Math.round(num / 365)}년전`;
  } else if (num > 3) {
    return `${Math.round(num / 30)}달전`;
  } else if (num > 7) {
    return `${Math.round(num / 7)}주전`;
  } else {
    return `${num} 일전`;
  }
};

function setView(num) {
  if (num > 10000) {
    return `${Math.round(num / 10000)}만회`;
  } else if (num > 1000) {
    return `${Math.round(num / 1000)}천회`;
  } else {
    return `${num}회`;
  }
}
