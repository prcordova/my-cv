import React from "react";
import AboutContainer from "./AboutContainer";

import TecnologiesContainer from "./TecnologiesContainer";
import ProjectsContainer from "./ProjectsContainer";
import "./maincontent.sass";
import ExperiencesContainer from "./ExperiencesContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TecnologiesContainer />
      <ExperiencesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
