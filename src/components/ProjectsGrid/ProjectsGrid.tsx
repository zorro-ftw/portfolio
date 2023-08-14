import { useContext } from "react";
import { UserContext } from "../../logic/context/UserContext";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ThemeContext } from "../../logic/context/ThemeContext";

export function ProjectsGrid() {
  const { projectsArray } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const projectsDisplay = projectsArray.map((p) => (
    <ProjectCard key={p.codeURL} project={p} />
  ));

  return (
    <>
      <main
        className={`mt-9 mb-12 px-4 sm:px-5 md:px-7 lg:px-9 xl:px-20 2xl:px-32`}
      >
        <h2
          className={`${theme.headingText} mb-6 text-3xl text-center font-bold`}
        >
          Projects
        </h2>
        <div
          className={` grid grid-cols-2 justify-items-center items-center justify-center gap-3 lg:gap-32 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  `}
          style={{ gridAutoColumns: "1fr" }}
        >
          {projectsDisplay}
        </div>
      </main>
    </>
  );
}
