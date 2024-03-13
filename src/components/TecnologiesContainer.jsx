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
    description: "4 years of experience with HTML5",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    description: "4 years of experience with CSS3",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description: "3 years of experience with JavaScript",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    description: "1 year of experience with Node.js",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description: "3 years of experience with React",
  },
  {
    id: "sass",
    name: "sass",
    icon: <DiSass />,
    description: "2 years of experience with Sass",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description: "1 year of experience with Tailwind CSS",
  },
  {
    id: "github",
    name: "Github",
    icon: <AiFillGithub />,
    description: "3 years of experience with Github",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <BsBootstrapFill />,
    description: "3 years of experience with Bootstrap",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <SiTypescript />,
    description: "2 year of experience with TypeScript",
  },
  {
    id: "markdown",
    name: "Markdown",
    icon: <AiOutlineFileMarkdown />,
    description: "1 years of experience with Markdown",
  },
  {
    id: "figma",
    name: "Figma",
    icon: <CgFigma />,
    description: "3 year of experience with Figma for developers",
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
