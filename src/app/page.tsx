import {Header} from "@/components/header/Header";
import {MainContainer} from "@/components/main-container/MainContainer";
import {Footer} from "@/components/footer/Footer";
import {ColorTheme} from "@/utils/color-theme/ColorTheme";

import styles from "./page.module.css";

export default function App() {
    return (
        <div className={styles.App}>
            <ColorTheme/>
            <Header/>
            <MainContainer/>
            <Footer/>
        </div>
    );
};
