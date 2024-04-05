import React, { useState } from "react";
import "./experiencescontainer.sass";

import { RiMedal2Line } from "react-icons/ri";
import { Title } from "./Title";
import Modal from "react-modal";
import CustomModal from "./CustomModal";
import { useTranslation } from "react-i18next";

const ExperiencesContainer = () => {
  const { t } = useTranslation();
  const experiences = [
    {
      id: "0",
      name: "Gol Linhas Aéreas",
      role: "Desenvolvedor Frontend",
      img: "/",
      date: "2023 - Current job",
      icon: <RiMedal2Line />,
      details: [
        "Developed a new login feature for the company's website, which increased the number of users by 30%.",
        "with the team of PenTest executed security tests and vulnerability correction.",
        "Development of new features and bug fixes.",
        "Participation in the development of the company's new website.",
        ,
      ],
      usedTechs: [
        "ReactJS",
        "Typescript",
        "Javascript",
        "NextJS",
        "NodeJS",
        "Tailwind CSS",
        "Bootstrap",
        "Sass",
        "Markdown",
        "Jest",
        "Testing library",
        "Git",
        "Github",
        "Figma",
        "Jira",
        "Jenkins",
        "SonarQube",
      ],
    },
    {
      id: "1",
      name: "Firedev IT Solutions",
      role: "Desenvolvedor Frontend",
      img: "/",
      date: "2022 - 2023",
      icon: <RiMedal2Line />,
      details: [
        "Developed a new login feature for the company's website and a whole new register & dashboard page.",
        "Participated in the development of the company's new website.",
        "Development of new features and bug fixes.",

        ,
      ],
      usedTechs: [
        "ReactJS",
        "Typescript",
        "Javascript",
        "NextJS",
        "NodeJS",
        "Tailwind CSS",
        "Bootstrap",
        "Sass",
        "Markdown",
        "Jest",
        "Testing library",
        "Git",
        "Github",
        "Figma",
        "Jira",
        "Jenkins",
        "SonarQube",
      ],
    },
    {
      id: "2",
      name: "Gol Linhas Aéreas",
      role: "Desenvolvedor Frontend",
      img: "/",
      date: "2023 - Current job",
      icon: <RiMedal2Line />,
      details: [
        "Developed a new login feature for the company's website, which increased the number of users by 30%.",
        "with the team of PenTest executed security tests and vulnerability correction.",
        "Development of new features and bug fixes.",
        "Participation in the development of the company's new website.",
        ,
      ],
      usedTechs: [
        "ReactJS",
        "Typescript",
        "Javascript",
        "NextJS",
        "NodeJS",
        "Tailwind CSS",
        "Bootstrap",
        "Sass",
        "Markdown",
        "Jest",
        "Testing library",
        "Git",
        "Github",
        "Figma",
        "Jira",
        "Jenkins",
        "SonarQube",
      ],
    },
  ];
  const [order, setOrder] = useState("asc");
  const [techsVisible, setTechsVisible] = useState(true);
  const [openModal, setOpenModal] = useState(true);

  return (
    <section className="projects-container">
      <Title>Experiences</Title>
      <div className="projects-grid">
        {experiences.map((experience) => (
          <div className="project-card" id={experience.id} key={experience.id}>
            <span className="experience-date">{experience.date}</span>

            {experience.icon}
            <div className="project-info">
              <h3>{experience.name}</h3>
              <p>{experience.description}</p>
            </div>

            <div className="usedTechs-container">
              <button
                className="btn"
                onClick={() => setOpenModal(experience.id)}
              >
                {t("details")}
              </button>

              <CustomModal
                isOpen={openModal === experience.id}
                headerTitle={`${experience.name}`}
                onRequestClose={() => setOpenModal(null)}
                onClick={() => setOpenModal(null)}
                textBtn={t("close")}
              >
                <div className="date-info">
                  <span>{experience?.date}</span>
                </div>
                {experience.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}

                <div className="modal-footer">
                  <h3>{t("usedTechs")}</h3>
                  <div className="modal-footer-techs">
                    {experience.usedTechs.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </div>
                </div>
              </CustomModal>
            </div>
            <div className="projects-btns-container">
              {/* <a href={project.link} target="_blank">
                <button className="btn">{t("website")}</button>
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencesContainer;
