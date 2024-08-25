import { makeHeaderIcon } from "../../../shared/header_icon/index.js";
import { makeSlider } from "../../slider/index.js";
import css from "./header_icon_list.module.css";
export const makeIconList = (imgObj) => {
  const { camera, alert } = imgObj;
  const iconList = document.createElement("div");
  iconList.className = css.root;
  iconList.appendChild(makeHeaderIcon(camera.resource));
  iconList.appendChild(makeHeaderIcon(alert.resource));
  iconList.appendChild(makeSlider());
  return iconList;
};
