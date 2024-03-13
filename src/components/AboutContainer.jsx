import React from "react";
import { useTranslation } from "react-i18next";

const AboutContainer = () => {
  const { t } = useTranslation();

  return (
    <section className="about-container">
      <h2>{t("about")}</h2>
      <p>
        {t("role")} <span>Frontend</span>
      </p>

      <p>{t("about_description")}</p>
    </section>
  );
};

export default AboutContainer;
