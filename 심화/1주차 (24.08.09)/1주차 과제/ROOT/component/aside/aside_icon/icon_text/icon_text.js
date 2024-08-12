export const makeIconText = (text) => {
  const iconText = document.createElement("p");
  iconText.classList = "icon_text";
  iconText.innerHTML = text;
  return iconText;
};
