import css from "./darkMode.module.css";
export const setDark = (event) => {
  if (event.target.checked == true) {
    document.querySelectorAll("*").forEach((ele) => {
      ele.classList.add(css.dark);
      ele.classList.remove(css.white);
    });
    document.querySelectorAll(".svg").forEach((ele) => {
      ele.classList.remove(css.dark);
      ele.classList.add(css.dark_svg);
    });
  } else {
    document.querySelectorAll("*").forEach((ele) => {
      ele.classList.add(css.white);
      ele.classList.remove(css.dark);
    });
    document.querySelectorAll(".svg").forEach((ele) => {
      ele.classList.remove(css.white);
      ele.classList.remove(css.dark_svg);
    });
  }
};
