import React from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import "./App.scss";
import { TheHeader } from "./components/the-header/TheHeader";
import { MainContainer } from "./components/main-container/MainContainer";
import { TheFooter } from "./components/the-footer/TheFooter";
import { SwithButton } from "./utils/switch-button/SwithButton";

const App: React.FC = () => {
  const theme = useTypedSelector(state => state.app_main.theme);
  const class_name = theme === "dark" ? "App app-dark-theme" : "App";
  return (
    <div className={class_name}>
      <SwithButton theme={theme} />
      <TheHeader />
      <MainContainer />
      <TheFooter />
    </div>
  );
};

export default App;
