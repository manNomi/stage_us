export const makeIconText = (text) => {
  const iconText = document.createElement("p");
  iconText.innerHTML = text;
  return iconText;
};
