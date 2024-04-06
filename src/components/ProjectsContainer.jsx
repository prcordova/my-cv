import React, { useState } from "react";
import "./projectscontainer.sass";
import { RiMedal2Line } from "react-icons/ri";
import { Title } from "./Title";
import Modal from "react-modal";
import CustomModal from "./CustomModal";
import { useTranslation } from "react-i18next";

const ProjectsContainer = () => {
  const { t } = useTranslation();
  const projects = [
    {
      id: "procflix",
      name: "ProcFlix",
      description: "Projeto Netflix",
      link: "https://github.com/prcordova/procFLix",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["React, Node, MongoDB, CSS, HTML", "Javascript , bootstrap"],
      details: [
        "This project was developed during the Fullstack Bootcamp.",
        "The project is a Netflix clone.",
        "The project was developed in React.",
      ],
    },

    {
      id: "pacientes",
      name: "PatientList",
      description: "A few CRUD operations in React",
      link: "https://github.com/prcordova/challenge-interprocess-crud",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["React, Node, MongoDB, CSS, HTML", "Javascript , bootstrap"],

      details: [
        "This project is an complete system of an hospital i created for a challenge.",
      ],
    },
    {
      id: "maskinputs",
      name: "Global Mask Input",
      description: "Typescript input mask",
      link: "https://github.com/prcordova/react-input-mask",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["React, html, CSS, Typescript"],
      details: [
        "Developed a new feature that solves a problem with the mask input.",
        "The feature was developed in Typescript and ReactJS.",
      ],
    },
    {
      id: "calculadorareact",
      name: "Calculadora",
      description: "Calculator in ReactJS",
      link: "https://github.com/prcordova/calculadoraReactJS",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["React, html, CSS, Javascript"],
      details: [
        "Calculator developed in ReactJS.",
        "This project has on purpose to practice my skills in ReactJS.",
      ],
    },
    {
      id: "flappybird",
      name: "Flappybird in JS",
      description: "An Incredible game in Javascript",
      link: "https://github.com/prcordova/flappyBird",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["Javascript , HTML, CSS"],
      details: [
        "This is a game developed in Javascript.",
        "The game was developed to practice my skills in Javascript.",
      ],
    },

    {
      id: "questionarioflutter",
      name: "QuizFlutter",
      description: "Quiz game in Flutter",
      link: "https://github.com/prcordova/questionario-em-flutter",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["Flutter, Dart"],
      details: [
        "This project was developed in Flutter.",
        "The project is a quiz game.",
      ],
    },
    {
      id: "Expenses",
      name: "Expenses",
      description: "Expenses control in ReactJS",
      link: "https://github.com/prcordova/despesas-pessoais",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: [
        "React, Typescript, CSS, HTML, Javascript, typescript, tailwindcss",
      ],
      details: [
        "This project was developed in ReactJS.",
        "The project is a expenses control.",
      ],
    },
  ];
  const [order, setOrder] = useState("asc");
  const [techsVisible, setTechsVisible] = useState(true);
  const [openModal, setOpenModal] = useState(true);

  const sortedProjects = [...projects].sort((a, b) => {
    if (order === "asc") {
      return a.name.localeCompare(b.name);
    } else if (order === "desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  const changeOrder = (newOrder) => {
    setOrder(newOrder);
  };
  return (
    <section className="projects-container">
      <Title>{t("projects")}</Title>
      <div className="select-container">
        <select onChange={(e) => changeOrder(e.target.value)}>
          <option value="asc">{t("order-a-z")}</option>
          <option value="desc">{t("order-z-a")}</option>
        </select>
      </div>
      <div className="projects-grid">
        {sortedProjects.map((project) => (
          <div className="project-card" id={project.id} key={project.id}>
            {project.icon}
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>

            <div className="usedTechs-container">
              <button className="btn" onClick={() => setOpenModal(project.id)}>
                {t("details")}
              </button>

              <CustomModal
                isOpen={openModal === project.id}
                headerTitle={`Tecnologias do projeto ${project.name}`}
                onRequestClose={() => setOpenModal(null)}
                onClick={() => setOpenModal(null)}
                textBtn={t("close")}
              >
                <div className="date-info">
                  <span>{project?.date}</span>
                </div>
                {project.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}

                <div className="modal-footer">
                  <h3>{t("usedTechs")}</h3>

                  {project.usedTechs.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </CustomModal>
            </div>
            <div className="projects-btns-container">
              {/* <a href={project.link} target="_blank">
                <button className="btn">{t("website")}</button>
              </a> */}

              <a href={project.link} target="_blank">
                <button className="btn">{t("github")}</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;
