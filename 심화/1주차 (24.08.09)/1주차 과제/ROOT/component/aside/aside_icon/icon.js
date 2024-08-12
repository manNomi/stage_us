import { makeIconImg } from "./icon_img/icon_img.js";
import { makeIconText } from "./icon_text/icon_text.js";
export const makeIcon = (data) => {
  const iconBox = document.createElement("button");
  iconBox.classList = "icon_logo";
  const { content, resource } = data;
  iconBox.appendChild(makeIconImg(resource));
  if (content != null) {
    iconBox.appendChild(makeIconText(content));
  }
  return iconBox;
};
