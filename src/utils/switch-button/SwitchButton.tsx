import {FC} from "react";
import { useTypedDispatch } from "@/hooks/useTypedDispatch.ts";
import styles from "./SwitchButton.module.scss";
import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import { toggleTheme } from "@/store/reduceers/app-main/app-main-slice.ts";

interface ISwitchButtonProps {
  theme: string;
}

export const SwitchButton: FC<ISwitchButtonProps> = (props) => {
  const dispatch = useTypedDispatch();
  const isLight = props.theme === "light";
  const changeTheme = () => {    
    dispatch(toggleTheme());
  };

  let className = styles.switchButton + " ";
  className += isLight ? "" : styles.darkTheme;
  
  return (
    <div onClick={changeTheme} className={className}>
      <img src={isLight ? SunIcon : MoonIcon} alt="Icon" />
    </div>
  );
};
