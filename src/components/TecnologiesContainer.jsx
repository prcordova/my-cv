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
import { SiNextdotjs } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { AiFillGithub, AiOutlineFileMarkdown } from "react-icons/ai";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import "./technologiescontainer.sass";
import { useTranslation } from "react-i18next";
import { SiNestjs } from "react-icons/si";
import { Title } from "./Title";

const TecnologiesContainer = () => {
  const { t } = useTranslation();

  const technologies = [
    {
      id: "html",
      name: "HTML5",
      icon: <DiHtml5 />,
      description: t("skills-experiences.html-experience"),
    },
    {
      id: "css",
      name: "CSS3",
      icon: <DiCss3 />,
      description: t("skills-experiences.css-experience"),
    },
    {
      id: "js",
      name: "JavaScript",
      icon: <DiJsBadge />,
      description: t("skills-experiences.js-experience"),
    },
    {
      id: "node",
      name: "Node.js",
      icon: <DiNodejsSmall />,
      description: t("skills-experiences.node-experience"),
    },
    {
      id: "react",
      name: "React",
      icon: <DiReact />,
      description: t("skills-experiences.react-experience"),
    },
    {
      id: "sass",
      name: "sass",
      icon: <DiSass />,
      description: t("skills-experiences.sass-experience"),
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      description: t("skills-experiences.tailwind-experience"),
    },
    {
      id: "github",
      name: "Github",
      icon: <AiFillGithub />,
      description: t("skills-experiences.github-experience"),
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      icon: <BsBootstrapFill />,
      description: t("skills-experiences.bootstrap-experience"),
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: <SiTypescript />,
      description: t("skills-experiences.typescript-experience"),
    },
    {
      id: "markdown",
      name: "Markdown",
      icon: <AiOutlineFileMarkdown />,
      description: t("skills-experiences.markdown-experience"),
    },
    {
      id: "figma",
      name: "Figma",
      icon: <CgFigma />,
      description: t("skills-experiences.figma-experience"),
    },
    {
      id: "next",
      name: "NextJS",
      icon: <SiNextdotjs />,
      description: t("skills-experiences.next-experience"),
    },
    {
      id: "zustand",
      name: "Zustand",
      icon: <DiReact />,
      description: t("skills-experiences.zustand-experience"),
    },
  ];

  return (
    <section className="technologies-container">
      <Title>{t("technologies")}</Title>
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
