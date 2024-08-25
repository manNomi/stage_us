import "./slider.module.css";
import "../../../features/darkmode/index.js";
import { setDark } from "../../../features/darkmode/index.js";

export const makeSlider = () => {
  const slider = document.createElement("input");
  slider.role = "switch";
  slider.type = "checkbox";
  slider.addEventListener("change", setDark);
  return slider;
};
