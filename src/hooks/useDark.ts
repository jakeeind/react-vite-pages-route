import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    localStorage.getItem("isDarkMode")
      ? localStorage.getItem("isDarkMode")
      : false;
  });

  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => {
      return !isDarkMode;
    });
  }

  useEffect(() => {
    return localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
}
