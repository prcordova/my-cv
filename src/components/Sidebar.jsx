import React from "react";
import Avatar from "../img/profile.jpg";
import SocialNetworks from "./SocialNetworks";
import cvFileResume from "../assets/PedroCordova-Resume.pdf";
import cvFile from "../assets/PedroCordova.pdf";

import "./sidebar.sass";
import InformationContainer from "./InformationContainer";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Pedro Ricardo" />
      <p className="description">{t("developer")}</p>

      <SocialNetworks />
      <InformationContainer />
      <div className="download-area">
        <a
          href={currentLanguage === "en" ? cvFileResume : cvFile}
          download
          className="btn"
        >
          {t("download")}
        </a>
        {/* <a href={cvFile} download className="btn">
          {t("download-pt")}
        </a> */}
      </div>
    </aside>
  );
};

export default Sidebar;
