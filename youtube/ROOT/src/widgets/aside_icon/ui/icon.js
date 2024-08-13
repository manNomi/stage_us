import { makeIconImg } from "../../../shared/icon_img/index.js";
import { makeIconText } from "../../../shared/icon_text/index.js";
import css from "./icon.module.css";
export const makeIcon = (data) => {
  const iconBox = document.createElement("button");
  iconBox.className = css.root;
  const { content, resource } = data;
  iconBox.appendChild(makeIconImg(resource));
  if (content != null) {
    iconBox.appendChild(makeIconText(content));
  }
  return iconBox;
};
