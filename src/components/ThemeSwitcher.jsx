import React from "react";
import "./ThemeSwitcher.css";
import { FaAdjust } from "react-icons/fa";

function ThemeSwitcher() {
  const checkSystemTheme = () => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (systemTheme.matches) {
      return "dark";
    } else {
      return "light";
    }
  };

  const checkSelectedTheme = (value) => {
    if (value === "system") {
      return checkSystemTheme();
    } else {
      return value;
    }
  };

  const setTheme = (value) => {
    let tempValue = checkSelectedTheme(value);
    document.querySelector("body").setAttribute("data-theme", `${tempValue}`);
    localStorage.setItem("selectedTheme", value);
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme) setTheme(selectedTheme);
  return (
    <div className="theme-preview-wrapper">
      <div className="theme-title-wrapper">
        <FaAdjust className="theme-toggle-icon" />
        <div className="theme-title">Theme</div>
      </div>
      <div className="theme-button-wrapper">
        <div className="theme-preview light" onClick={() => setTheme("light")}>
          A
        </div>
        <div className="theme-preview dark" onClick={() => setTheme("dark")}>
          A
        </div>
        <div
          className="theme-preview contrast"
          onClick={() => setTheme("contrast")}
        >
          A
        </div>
        <div
          className="theme-preview system"
          onClick={() => setTheme("system")}
        >
          A
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
