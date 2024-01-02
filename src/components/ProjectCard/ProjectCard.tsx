import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";
import { type ProjectProps } from "../../logic/context/UserContext";

export function ProjectCard({ project }: { project: ProjectProps }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`w-full py-10 px-2 sm:px-6 flex flex-col gap-2 justify-center items-center hover:border-inputFocus-light dark:hover:border-inputFocus-dark ${theme.siteBackground} ${theme.inputBorder} border-solid border-2 rounded-lg drop-shadow-lg cursor-pointer hover:shadow-hover  `}
      >
        <div className="w-full flex flex-wrap-reverse gap-8 justify-center">
          <div className="bg-desktopSS bg-cover bg-no-repeat bg-center w-64 h-36 px-8 py-2 sm:w-96 sm:h-64 sm:px-4 sm:py-4 flex justify-center items-center">
            <img
              src={project.desktopSSUrl}
              alt={project.alt}
              className={`${theme.primaryText} w-full h-full`}
            />
          </div>
          <div className="bg-mobileSS bg-cover bg-no-repeat bg-center w-[72px] h-36 sm:w-32 sm:h-64 px-1 py-0.5 sm:px-1.5 sm:py-1 flex justify-center items-center">
            <img
              src={project.desktopSSUrl}
              alt={project.alt}
              className={`${theme.primaryText} w-full h-full rounded-md sm:rounded-xl`}
            />
          </div>
        </div>
        <span className={`${theme.primaryText}`}>{project.title}</span>
        {project.description && (
          <span className={`${theme.secondaryText}`}>
            {project.description}
          </span>
        )}
        <div className={`flex flex-row gap-2`}>
          <a
            href={project.codeURL}
            className={`${theme.secondaryText} px-2 py-1 rounded-md ${theme.hoverBg} italic`}
          >
            Code
          </a>
          {project.liveURL ? (
            <a
              href={project.liveURL}
              className={`${theme.secondaryText} px-2 py-1 rounded-md ${theme.hoverBg} italic`}
            >
              <i className={`fa-solid fa-record-vinyl mr-1 ${theme.link}`}></i>
              Live
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
