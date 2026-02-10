import type {FC} from "react";
import {useIsClient} from "@/hooks/useIsClient";
import {MdLightMode} from "react-icons/md";
import {BsStars} from "react-icons/bs";

import styles from "./SwitchButton.module.scss";

interface SwitchButtonProps {
    theme: string | undefined;
    toggleTheme: () => void;
}

export const SwitchButton: FC<SwitchButtonProps> = (props) => {
    const isClient = useIsClient();
    if (!isClient) return null;

    const isDark = props.theme === "dark";

    let className = styles.switchButton;
    if (isDark) className += ` ${styles.darkTheme}`;

    return (
        <button type="button"
                onClick={props.toggleTheme}
                className={className} aria-label={`Toggle theme to ${isDark ? 'light' : 'dark'}`}>
            {isDark ? <BsStars/> : <MdLightMode/>}
        </button>
    );
};
