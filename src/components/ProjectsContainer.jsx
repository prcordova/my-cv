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
      usedTechs: ["React", "Node", "MongoDB"],
    },
    {
      id: "crud",
      name: "Crud em NextJS",
      description: "CRUD em NextJS",
      link: "https://github.com/prcordova/next-crud",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["NextJS", "MongoDB"],
    },
    {
      id: "pacientes",
      name: "CRUD de pacientes",
      description: "Lista de pacientes",
      link: "https://github.com/prcordova/challenge-interprocess-crud",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["React", "Node", "MongoDB"],
    },
    {
      id: "maskinputs",
      name: "Mask inputs",
      description: "Typescript input mask",
      link: "https://github.com/prcordova/react-input-mask",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["React", "Typescript"],
    },
    {
      id: "calculadorareact",
      name: "Calculadora",
      description: "Uma calculadora em React",
      link: "https://github.com/prcordova/calculadoraReactJS",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["React"],
    },
    {
      id: "flappybird",
      name: "Flappybird em JS",
      description: "Um Jogo em JS",
      link: "https://github.com/prcordova/flappyBird",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["Javascript", "HTML", "CSS"],
    },
    {
      id: "horadodia",
      name: "Hora atual",
      description: "Mostra a hora",
      link: "https://github.com/prcordova/Horadodia",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["Javascript", "HTML", "CSS"],
    },
    {
      id: "questionarioflutter",
      name: "Questionário",
      description: "Questionário em flutter",
      link: "https://github.com/prcordova/questionario-em-flutter",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["Flutter", "Dart"],
    },
    {
      id: "despesas",
      name: "Despesas pessoais",
      description: "controle de gastos",
      link: "https://github.com/prcordova/despesas-pessoais",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["React", "Typescript", "CSS", "HTML", "Javascript"],
    },
    {
      id: "portfolioantigo",
      name: "Porfólio em bootstrap",
      description: "Portfólio antigo, mas funcional.",
      link: "https://github.com/prcordova/portfolio-repositorios",
      img: "/",
      icon: <RiMedal2Line />,
      usedTechs: ["Bootstrap", "HTML", "CSS", "Javascript"],
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
                textBtn={"Fechar"}
              >
                {project.usedTechs.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
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
