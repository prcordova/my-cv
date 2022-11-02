import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiSass,
  DiReact,
} from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import { AiFillGithub, AiOutlineFileMarkdown } from "react-icons/ai";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    description: "Linguagem de marcação de texto baseada em tags.",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    description: "Cascading Style Sheets",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description: "Linguagem de primeira classe.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    description: "Server side JS",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description: "Biblioteca Javascript.",
  },
  {
    id: "sass",
    name: "sass",
    icon: <DiSass />,
    description: "Linguagem de extensão CSS",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description: "Framework CSS.",
  },
  {
    id: "github",
    name: "Github",
    icon: <AiFillGithub />,
    description: "Plataforma de código fonte.",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <BsBootstrapFill />,
    description: "Framework CSS",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <SiTypescript />,
    description: "Linguagem fortemente tipada com base em JS.",
  },
  {
    id: "markdown",
    name: "Markdown",
    icon: <AiOutlineFileMarkdown />,
    description: "Linguagem de marcação simples.",
  },
  {
    id: "figma",
    name: "Figma",
    icon: <CgFigma />,
    description: "Editor de gráficos vetoriais.",
  },
];
const TecnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TecnologiesContainer;
