// const link = document.createElement("link");
// link.rel = "stylesheet";
// link.href = "./icon_text.css";
// document.head.appendChild(link);
import css from "./icon_text.module.css";

export const makeIconText = (text) => {
  const iconText = document.createElement("p");
  iconText.className = css.root;
  iconText.innerHTML = text;
  return iconText;
};
