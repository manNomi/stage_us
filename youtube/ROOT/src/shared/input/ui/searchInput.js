import css from "./searchInput.module.css";

export const makeSearchInput = () => {
  const serachInput = document.createElement("input");
  serachInput.placeholder = "검색";
  serachInput.className = css.root;

  return serachInput;
};
