import { makeVideo } from "../../component/video/video.js";

export const makeMain = (videoList) => {
  const main_thumb = document.createElement("main");
  main_thumb.id = "main";
  videoList.forEach((videoData) => {
    main_thumb.appendChild(makeVideo({ ...videoData }));
  });
  return main_thumb;
};
