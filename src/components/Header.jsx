import React from "react";
import { useState } from "react";
import "./header.sass";

const Header = () => {
  const [language, setLanguage] = useState(true);

  return (
    <header id="header">
      <button onClick={() => setLanguage(!language)} id="header-btn">
        {language ? "EN" : "PT"}
      </button>
    </header>
  );
};

export default Header;
