import { makeIconImg } from "../../icon_img/index.js";
import css from "./header_icon.module.css";

export const makeHeaderIcon = (src) => {
  const newContainer = document.createElement("div");
  newContainer.className = css.container;
  const newBox = document.createElement("div");
  newBox.className = css.box;
  const newIcon = makeIconImg(src);
  newIcon.classList.add(css.root);
  newBox.appendChild(newIcon);
  newContainer.appendChild(newBox);
  return newContainer;
};
