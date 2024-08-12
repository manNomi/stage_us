export const makeThumbImg = (thumb_img) => {
  const new_mainImg = document.createElement("img");
  new_mainImg.setAttribute("src", thumb_img);
  return new_mainImg;
};
