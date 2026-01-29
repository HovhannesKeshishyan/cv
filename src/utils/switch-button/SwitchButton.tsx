import {type FC, useState, useEffect} from "react";
import Image from "next/image";

import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";

import styles from "./SwitchButton.module.scss";

interface SwitchButtonProps {
    theme: string | undefined;
    toggleTheme: () => void;
}

export const SwitchButton: FC<SwitchButtonProps> = (props) => {
    const [isClient, setIsClient] = useState(false);
    const isDark = props.theme === "dark";

    let className = styles.switchButton;
    if (isDark) className += ` ${styles.darkTheme}`;

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return;

    return (
        <button type="button"
                onClick={props.toggleTheme}
                className={className} aria-label={`Toggle theme to ${isDark ? 'light' : 'dark'}`}>
            <Image
                src={isDark ? MoonIcon : SunIcon}
                alt={isDark ? "Dark theme" : "light theme"}
                width={24}
                height={24}
            />
        </button>
    );
};
