import css from "./search_container.module.css";
import { makeSearchBox } from "../../search_box/index.js";
import { makeSearchBtn } from "../../search_btn/index.js";
import { makeHeaderIcon } from "../../../shared/header_icon/index.js";
import { searchBarResizeEvent } from "../../../features/resize/index.js";

export const makeSearchContainer = (imgOBJ) => {
  const { search, mic } = imgOBJ;
  const searchContainer = document.createElement("div");
  searchContainer.className = css.root;

  searchContainer.appendChild(makeSearchBox(search.resource));
  searchContainer.appendChild(makeSearchBtn(search.resource));
  searchContainer.appendChild(makeHeaderIcon(mic.resource));

  searchBarResizeEvent(searchContainer);
  window.addEventListener("resize", () =>
    searchBarResizeEvent(searchContainer)
  );

  return searchContainer;
};
