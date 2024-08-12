import { makeThumbImg } from "./video_img/video_img.js";
import { makeThumbText } from "./video_title/video_title.js";

export const makeVideo = (VideoData) => {
  const { title, thumbImg, userImg, userName, thumbView, thumbDate } =
    VideoData;

  // 비디오 카드 생성
  var newVideoGroup = document.createElement("article");
  newVideoGroup.classList = "video_group";

  // 비디오 이미지 생성 및 추가
  newVideoGroup.appendChild(makeThumbImg(thumbImg));
  // 비디오 텍스트 추가
  newVideoGroup.appendChild(makeThumbText({ ...VideoData }));

  return newVideoGroup;
};
