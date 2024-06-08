import React from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import styles from "./SwitchButton.module.scss";
import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import { toggleTheme } from "../../store/reduceers/app-main/app-main-slice";

interface ISwitchButtonProps {
  theme: string;
}

export const SwitchButton: React.FC<ISwitchButtonProps> = (props) => {
  const dispatch = useTypedDispatch();
  const isLight = props.theme === "light";
  const changeTheme = () => {    
    dispatch(toggleTheme());
  };

  let class_name = styles.switch_button + " ";
  class_name += isLight ? styles.light_theme : styles.dark_theme;
  
  return (
    <div onClick={changeTheme} className={class_name}>
      <img src={isLight ? SunIcon : MoonIcon} alt="Icon" />
    </div>
  );
};
