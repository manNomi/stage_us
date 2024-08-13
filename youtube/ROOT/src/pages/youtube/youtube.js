import { makeAside } from "../../widgets/aside/idnex.js";
import { makeMain } from "../../widgets/main/index.js";
import { getData } from "./youtubeData.js";

export const youtube = () => {
  const rootTag = document.getElementById("root");

  rootTag.appendChild(makeMain([...getData()]));

  rootTag.appendChild(makeAside());
};
