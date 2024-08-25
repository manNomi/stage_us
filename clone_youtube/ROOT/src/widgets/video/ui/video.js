import { makeThumbImg } from "../../../entities/video_img/index.js";
import { makeThumbText } from "../../../entities/video_title/index.js";
import css from "./video.module.css";

export const makeVideo = (VideoData) => {
  const { title, thumbImg, userImg, userName, thumbView, thumbDate } =
    VideoData;

  // 비디오 카드 생성
  var newVideoGroup = document.createElement("article");
  newVideoGroup.className = css.root;

  // 비디오 이미지 생성 및 추가
  newVideoGroup.appendChild(makeThumbImg(thumbImg));
  // 비디오 텍스트 추가
  newVideoGroup.appendChild(makeThumbText({ ...VideoData }));

  return newVideoGroup;
};
