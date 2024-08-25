import css from "./header.module.css";
import { makeLogo } from "../../logo/index.js";
import { makeSearchContainer } from "../../search_container/index.js";
import { makeIconList } from "../../header_icon_list/index.js";

const iconData = {
  setting: {
    resource: "../public/image/header/setting.svg",
  },
  alert: {
    resource: "../public/image/header/alert.svg",
  },
  camera: {
    resource: "../public/image/header/camera.svg",
  },
  mic: {
    resource: "../public/image/header/mic.svg",
  },
  search: { resource: "../public/image/header/search.svg" },
  logo: { resource: "../public/image/header/logo.svg" },
};

export const makeHeader = () => {
  const header = document.createElement("header");
  header.className = css.root;
  header.appendChild(makeLogo({ ...iconData }));
  header.appendChild(makeSearchContainer({ ...iconData }));
  header.appendChild(makeIconList({ ...iconData }));

  return header;
};

// obj 세개 만들면 되었다
// 아이콘들 굳이 obj로 만들 필요가 없다
// 세개를 굳이 나눠 필요가 없음
// 통신이 필요하면 나누는게 맞다 -> 통신되는 곳을
// 리액트는 필요할때 쪼개고 "합친다가 맞는 개념이다 "
