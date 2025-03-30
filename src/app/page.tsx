"use client"
import {useTheme} from "next-themes"

import {SwitchButton} from "@/utils/switch-button/SwitchButton";
import {Header} from "@/components/header/Header";
import {MainContainer} from "@/components/main-container/MainContainer";
import {Footer} from "@/components/footer/Footer";

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
            <Header/>
            <MainContainer/>
            <Footer/>
        </div>
    );
};
