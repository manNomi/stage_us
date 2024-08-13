import { makeIcon } from "../../aside_icon/index.js";
import css from "./aside_module.css";

const iconData = {
  home: { content: "홈", resource: "../public/image/aside/home.svg" },
  shorts: { content: "숏츠", resource: "../public/image/aside/shorts.svg" },
  subscription: {
    content: "구독",
    resource: "../public/image/aside/subscribe.svg",
  },
  music: {
    content: "유튜브 뮤직",
    resource: "../public/image/aside/youtube_music.svg",
  },
  user: { content: "나", resource: "../public/image/aside/user.svg" },
  offline: {
    content: "오프라인 저장",
    resource: "../public/image/aside/download.svg",
  },
  offl12ine: { resource: "../public/image/aside/download.svg" },
};

export const makeAside = () => {
  const aside = document.createElement("aside");
  aside.classList = css.root;
  Object.values(iconData).forEach((icon) => {
    aside.appendChild(makeIcon({ ...icon }));
  });
  return aside;
};
