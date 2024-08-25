import css from "./icon_text.module.css";

export const makeIconText = (text) => {
  const iconText = document.createElement("p");
  iconText.className = css.root;
  iconText.innerHTML = text;
  return iconText;
};
