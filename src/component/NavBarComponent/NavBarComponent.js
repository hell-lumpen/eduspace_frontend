import React, { useState, useEffect } from "react";
import { ReactComponent as PersonIcon } from "../../assets/person.svg";
import { ReactComponent as LectureIcon } from "../../assets/lecture.svg";
import { ReactComponent as TaskIcon } from "../../assets/task.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import { ReactComponent as LightIcon } from "../../assets/light.svg";
import { ReactComponent as DarkIcon } from "../../assets/dark.svg";
import { motion } from "framer-motion";
import "./NavBarComponent.css";

const NavBarComponent = () => {
  const [themeVariant, setThemeVariant] = useState("Light");
  const [themeIcon, setThemeIcon] = useState(<LightIcon id="icon-change-theme" className={"nav-bar-icon-button"} />);

  const changeThemeBtn = () => {
    if (themeVariant === "Light") {
      setThemeIcon(<DarkIcon id="icon-change-theme" className={"nav-bar-icon-button"} />);
      setThemeVariant("Dark");
      document.body.setAttribute("data-theme", "dark");
    } else {
      setThemeIcon(<LightIcon id="icon-change-theme" className={"nav-bar-icon-button"} />);
      setThemeVariant("Light");
      document.body.setAttribute("data-theme", "light");
    }
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", themeVariant.toLowerCase());
  }, [themeVariant]);

  return (
      <span className="--nav--bar--wrapper">
        <span className={"nav-panel"}>
          <button className="nav-bar-button">
            <PersonIcon className="nav-bar-icon-button" />
          </button>
          <button className="nav-bar-button">
            <LectureIcon className="nav-bar-icon-button" />
          </button>
          {/*<button className="nav-bar-button">*/}
          {/*  <TaskIcon className="nav-bar-icon-button" />*/}
          {/*</button>*/}
          <button className="nav-bar-button">
            <CalendarIcon className="nav-bar-icon-button" />
          </button>
          <button className="nav-bar-button">
            <MailIcon className="nav-bar-icon-button" />
          </button>
          <button onClick={changeThemeBtn} className="nav-bar-button">
            {themeIcon}
          </button>
        </span>
      </span>
  );
};

export default NavBarComponent;