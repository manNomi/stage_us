import css from "./video_img.module.css";
export const makeThumbImg = (thumb_img) => {
  const new_mainImg = document.createElement("img");
  new_mainImg.setAttribute("src", thumb_img);
  new_mainImg.className = css.root;
  return new_mainImg;
};
