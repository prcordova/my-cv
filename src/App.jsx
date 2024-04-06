import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { useTranslation } from "react-i18next";
import "./components/header.sass";
import { useState } from "react";
import "./app.sass";
import US from "country-flag-icons/react/3x2/US";
import BR from "country-flag-icons/react/3x2/BR";

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
          {currentLanguage === "en" ? (
            <div className="flag-content">
              <US title="United States" className="flag-icon" />
            </div>
          ) : (
            <div className="flag-content">
              <BR title="Brazil" className="flag-icon" />
            </div>
          )}
        </button>
      </header>
      <h1>Pedro Ricardo Córdova</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
