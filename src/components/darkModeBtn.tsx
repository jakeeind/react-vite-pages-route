import { useState } from "react";
import useDarkMode from "../hooks/useDark";

function DarkModeBtn() {
  const [color, setColor] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    else return "light";
  });

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className="btn bg-dark" onClick={() => toggleDarkMode()}>
      {isDarkMode ? "light" : "dark"}
    </button>
  );
}

export default DarkModeBtn;
