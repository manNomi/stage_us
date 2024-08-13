import { makeVideo } from "../../video/index.js";
import css from "./main.module.css";
export const makeMain = (videoList) => {
  const main_thumb = document.createElement("main");
  main_thumb.className = css.root;
  videoList.forEach((videoData) => {
    main_thumb.appendChild(makeVideo({ ...videoData }));
  });
  return main_thumb;
};
