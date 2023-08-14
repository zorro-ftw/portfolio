import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";
import { type ProjectProps } from "../../logic/context/UserContext";

export function ProjectCard({ project }: { project: ProjectProps }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={` w-full py-10 flex flex-col gap-2 justify-center items-center hover:border-inputFocus-light dark:hover:border-inputFocus-dark ${theme.siteBackground} ${theme.inputBorder} border-solid border-2 rounded-lg drop-shadow-lg cursor-pointer hover:shadow-hover  `}
      >
        <img
          src={`https://user-images.githubusercontent.com/86876940/229932839-0ee782c3-e37d-4bf0-bbd4-c36b35b61f54.png`}
          alt={project.alt}
          className={`${theme.primaryText} w-40 h-20`}
        />
        <span className={`${theme.primaryText}`}>{project.title}</span>
        <span className={`${theme.secondaryText}`}></span>
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
