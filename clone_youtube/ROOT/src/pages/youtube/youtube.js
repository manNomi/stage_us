import { makeAside } from "../../widgets/aside/index.js";
import { makeMain } from "../../widgets/main/index.js";
import { makeHeader } from "../../widgets/header/index.js";
import { getData } from "./youtubeData.js";
import css from "./youtube.module.css";

export const youtube = () => {
  if (typeof window !== "undefined") {
    const rootTag = document.getElementById("root");

    const mainTag = document.createElement("div");
    mainTag.appendChild(makeAside());
    mainTag.appendChild(makeMain([...getData()]));
    mainTag.className = css.root;

    rootTag.appendChild(makeHeader());
    rootTag.appendChild(mainTag);
  }
};
