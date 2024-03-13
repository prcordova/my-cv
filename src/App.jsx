import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { useTranslation } from "react-i18next";
import "./styles/components/header.sass";
import { useState } from "react";
import "./styles/components/app.sass";

function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <div id="portfolio">
      <header id="header">
        <button onClick={handleChangeLanguage} id="header-btn">
          {currentLanguage === "en" ? "EN" : "PT"}
        </button>
      </header>
      <h1>Pedro Ricardo Oliveira Córdova</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
