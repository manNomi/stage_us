import { makeIconImg } from "../../../shared/icon_img/index.js";
import { makeHeaderIcon } from "../../../shared/header_icon/index.js";

import css from "./logo.module.css";
export const makeLogo = (iconData) => {
  const { setting, logo } = iconData;
  const logoBox = document.createElement("div");
  const newLogo = makeIconImg(logo.resource);
  const newSettingBtn = makeHeaderIcon(setting.resource);
  newLogo.className = css.root;
  logoBox.appendChild(newSettingBtn);
  logoBox.appendChild(newLogo);
  logoBox.className = css.logoBox;
  return logoBox;
};
