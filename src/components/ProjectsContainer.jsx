import React, { useState } from "react";
import "../styles/components/projectscontainer.sass";
import { RiMedal2Line } from "react-icons/ri";
const ProjectsContainer = () => {
  const projects = [
    {
      id: "procflix",
      name: "ProcFlix",
      description: "Projeto Netflix",
      link: "https://github.com/prcordova/procFLix",
      img: "/",
      icon: <RiMedal2Line />,
    },
    {
      id: "crud",
      name: "Crud em NextJS",
      description: "CRUD em NextJS",
      link: "https://github.com/prcordova/next-crud",
      img: "/",
      icon: <RiMedal2Line />,
    },
    {
      id: "pacientes",
      name: "CRUD de pacientes",
      description: "Lista de pacientes",
      link: "https://github.com/prcordova/challenge-interprocess-crud",
      img: "/",
      icon: <RiMedal2Line />,
    },
    {
      id: "maskinputs",
      name: "Mask inputs",
      description: "Typescript input mask",
      link: "https://github.com/prcordova/react-input-mask",
      img: "/",
      icon: <RiMedal2Line />,
    },
    {
      id: "calculadorareact",
      name: "Calculadora",
      description: "Uma calculadora em React",
      link: "https://github.com/prcordova/calculadoraReactJS",
      img: "/",
      icon: <RiMedal2Line />,
    },
    {
      id: "flappybird",
      name: "Flappybird em JS",
      description: "Um Jogo em JS",
      link: "https://github.com/prcordova/flappyBird",
      img: "/",
      icon: <RiMedal2Line />,
    },
    {
      id: "horadodia",
      name: "Hora atual",
      description: "Mostra a hora",
      link: "https://github.com/prcordova/Horadodia",
      img: "/",
      icon: <RiMedal2Line />,
    },
    {
      id: "questionarioflutter",
      name: "Questionário",
      description: "Questionário em flutter",
      link: "https://github.com/prcordova/questionario-em-flutter",
      img: "/",
      icon: <RiMedal2Line />,
    },
    {
      id: "despesas",
      name: "Despesas pessoais",
      description: "controle de gastos",
      link: "https://github.com/prcordova/despesas-pessoais",
      img: "/",
      icon: <RiMedal2Line />,
    },
    {
      id: "portfolioantigo",
      name: "Porfólio em bootstrap",
      description: "Portfólio antigo, mas funcional.",
      link: "https://github.com/prcordova/portfolio-repositorios",
      img: "/",
      icon: <RiMedal2Line />,
    },
  ];
  const [order, setOrder] = useState("asc");

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
      <h2>Projetos </h2>
      <div className="select-container">
        <select onChange={(e) => changeOrder(e.target.value)}>
          <option value="asc">Order A-Z</option>
          <option value="desc">Order Z-A</option>
        </select>
      </div>
      <div className="projects-grid">
        {sortedProjects.map((project) => (
          <div className="project-card" id={project.id} key={project.id}>
            {project.icon}
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank">
                <button className="btn">Ver projeto</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;
