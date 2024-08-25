import css from "./main.module.css";
import { makeVideo } from "../../video/index.js";
import { mainResizeEvent } from "../../../features/resize/index.js";
export const makeMain = (videoList) => {
  const main_thumb = document.createElement("main");
  main_thumb.className = css.root;
  videoList.forEach((videoData) => {
    main_thumb.appendChild(makeVideo({ ...videoData }));
  });
  mainResizeEvent(main_thumb, css);
  window.addEventListener("resize", () => mainResizeEvent(main_thumb, css));
  return main_thumb;
};
