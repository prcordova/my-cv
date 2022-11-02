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
import {CgFigma} from 'react-icons/cg'
import { AiFillGithub, AiOutlineFileMarkdown } from "react-icons/ai";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Html é vida" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "CSS is Awesome" },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description: "JS é a melhor loucura",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    description: "Node é massinha",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description: "React pra sempre !",
  },
  {
    id: "sass",
    name: "sass",
    icon: <DiSass />,
    description: "React pra sempre !",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description: "React pra sempre !",
  },
  {
    id: "github",
    name: "Github",
    icon: <AiFillGithub />,
    description: "React pra sempre !",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <BsBootstrapFill />,
    description: "React pra sempre !",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <SiTypescript />,
    description: "React pra sempre !",
  },
  {
    id: "markdown",
    name: "Markdown",
    icon: <AiOutlineFileMarkdown />,
    description: "React pra sempre !",
  },
  {
    id: "figma",
    name: "Figma",
    icon: <CgFigma />,
    description: "React pra sempre !",
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
