import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "./Title";

const AboutContainer = () => {
  const { t } = useTranslation();

  return (
    <section className="about-container">
      <Title>{t("about")}</Title>
      <p>
        {t("role")} <span>Frontend</span>
      </p>

      <p>{t("about_description")}</p>
    </section>
  );
};

export default AboutContainer;
