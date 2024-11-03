import React from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import "./App.scss";
import { TheHeader } from "./components/the-header/TheHeader";
import { MainContainer } from "./components/main-container/MainContainer";
import { TheFooter } from "./components/the-footer/TheFooter";
import { SwitchButton } from "./utils/switch-button/SwitchButton";

const App: React.FC = () => {
  const theme = useTypedSelector(state => state.appMain.theme);
  const class_name = theme === "dark" ? "App app-dark-theme" : "App";
  return (
    <div className={class_name}>
      <SwitchButton theme={theme} />
      <TheHeader />
      <MainContainer />
      <TheFooter />
    </div>
  );
};

export default App;
