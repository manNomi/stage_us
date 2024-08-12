import { makeIcon } from "../../component/icon/icon.js";

const iconData = {
  home: { content: "홈", resource: "/image/aside/home.svg" },
  shorts: { content: "숏츠", resource: "/image/aside/shorts.svg" },
  subscription: { content: "구독", resource: "/image/aside/subscribe.svg" },
  music: { content: "유튜브 뮤직", resource: "/image/aside/youtube_music.svg" },
  user: { content: "나", resource: "/image/aside/user.svg" },
  offline: { content: "오프라인 저장", resource: "/image/aside/download.svg" },
};

export const makeAside = () => {
  const aside = document.createElement("aside");
  aside.classList = "aside_shape";
  Object.values(iconData).forEach((icon) => {
    aside.appendChild(makeIcon({ ...icon }));
  });
  return aside;
};
