import React from "react";
import Avatar from "../img/profile.jpg";
import SocialNetworks from "./SocialNetworks";
import cvFile from "../assets/cv-pedro-ricardo-frontend-developer.pdf";
import "./sidebar.sass";
import InformationContainer from "./InformationContainer";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Pedro Ricardo" />
      <p className="description">{t("developer")}</p>

      <SocialNetworks />
      <InformationContainer />
      <a href={cvFile} download className="btn">
        {t("download")}
      </a>
    </aside>
  );
};

export default Sidebar;
