import { makeVideo } from "../../component/video/video.js";
const thumb_index = 15;
const Video = {
  title:
    "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노",
  thumbImg: "/image/png/main.play_img.PNG",
  userImg: "/image/png/main.playname_img.PNG",
  userName: "올끌 (All of MBClassic)",
  thumbView: 441231,
  thumbDate: 124,
};
const videoList = [];
for (let i = 0; i < thumb_index; i++) {
  videoList.push(Video);
}
export const makeThhumb = () => {
  const main_thumb = document.createElement("main");
  videoList.forEach((videoData) => {
    main_thumb.appendChild(makeVideo(videoData));
  });
  return main_thumb;
};
