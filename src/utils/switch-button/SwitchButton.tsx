"use client"

import Image from "next/image";

import {type FC, useState, useEffect} from "react";

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
        <div onClick={props.toggleTheme} className={className}>
            <Image
                src={isDark ? MoonIcon : SunIcon}
                alt={isDark ? "Moon icon" : "Sun icon"}
                width={24}
                height={24}
            />
        </div>
    );
};
