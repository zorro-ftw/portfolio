import NavBar from "../../components/NavBar/NavBar";
import { ProjectsGrid } from "../../components/ProjectsGrid/ProjectsGrid";

import { UnderConstruction } from "../../components/UnderConstruction/UnderConstruction";

function Projects() {
  return (
    <>
      <NavBar />
      <UnderConstruction />
      <ProjectsGrid />
    </>
  );
}

export default Projects;
