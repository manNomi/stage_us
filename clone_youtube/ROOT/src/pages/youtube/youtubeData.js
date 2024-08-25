export const getData = () => {
  const thumb_index = 15;
  console.log(__dirname);
  const Video = {
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노",
    thumbImg: "https://img.youtube.com/vi/iFs8AfODM74/mqdefault.jpg",
    userImg: __dirname + "../public/image/main/main.playname_img.PNG",
    userName: "올끌 (All of MBClassic)",
    thumbView: 441231,
    thumbDate: 124,
  };
  const videoList = [];
  for (let i = 0; i < thumb_index; i++) {
    videoList.push(Video);
  }
  return videoList;
};
