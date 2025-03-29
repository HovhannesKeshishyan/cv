"use client"
import {useTheme} from "next-themes"

import {SwitchButton} from "@/utils/switch-button/SwitchButton";
import {TheHeader} from "@/components/the-header/TheHeader";
import {MainContainer} from "@/components/main-container/MainContainer";
import {TheFooter} from "@/components/the-footer/TheFooter";

import styles from "./page.module.css";

export default function App() {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        const newValue = theme === "dark" ? "light" : "dark";
        setTheme(newValue);
    }

    return (
        <div className={styles.App}>
            <SwitchButton theme={theme} toggleTheme={toggleTheme}/>
            <TheHeader/>
            <MainContainer/>
            <TheFooter/>
        </div>
    );
};
