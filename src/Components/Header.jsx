import React, { useContext } from "react";
import "../Styles/header.css";

import { SettingsContext } from "../Contexts";

import useGetClasses from "../Hooks/useGetClasses";

export default function Header() {
  const [settings, setSettings] = useContext(SettingsContext);

  const modeMessage = settings.darkMode ? "Dark Mode" : "Light Mode";

  return (
    <header className={useGetClasses("header")}>
      <h1 className="header__title">Trello Clone</h1>
      <div className="header__settings">
        <div className="header__switch-container">
          <label htmlFor="mode-shift">
            <div className="header__switch-text">{modeMessage}</div>
          </label>
          <label htmlFor="mode-shift" className="header__switch">
            <input
              className="header__slider-input"
              type="checkbox"
              id="mode-shift"
              style={{ display: "none" }}
              checked={settings.darkMode}
              onChange={() =>
                setSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }))
              }
            />
            <span class="header__slider"></span>
          </label>
        </div>
      </div>
    </header>
  );
}
