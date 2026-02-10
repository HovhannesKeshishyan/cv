import {Header} from "@/components/header/Header";
import {MainContainer} from "@/components/main-container/MainContainer";
import {Footer} from "@/components/footer/Footer";
import {ColorTheme} from "@/utils/color-theme/ColorTheme";

export default function App() {
    return (
        <div className="position-relative">
            <ColorTheme/>
            <Header/>
            <MainContainer/>
            <Footer/>
        </div>
    );
};
