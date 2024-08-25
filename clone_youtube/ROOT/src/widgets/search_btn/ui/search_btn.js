import css from "./search_btn.module.css";
export const makeSearchBtn = (imgURL) => {
  const searchBtn = document.createElement("button");
  searchBtn.className = css.root;
  const searchImg = document.createElement("div");
  searchImg.style.backgroundImage = `url(${imgURL})`;
  searchImg.classList.add(css.img);
  searchBtn.appendChild(searchImg);
  return searchBtn;
};
