import css from "./icon_img.module.css";
export const makeIconImg = (imgsrc) => {
  const iconImg = document.createElement("div");
  iconImg.className = "svg";
  iconImg.classList.add(css.root);
  iconImg.style.backgroundImage = `url(${imgsrc})`;
  return iconImg;
};
