import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";
import { type ProjectProps } from "../../logic/context/UserContext";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import Tag from "../Tag/Tag";

export function ProjectCard({ project }: { project: ProjectProps }) {
  const { theme } = useContext(ThemeContext);

  const tags = project.techStack?.map((tech) => <Tag key={tech} text={tech} />);

  return (
    <>
      <div
        className={`group/project-card relative w-full min-h-full py-10 px-2 sm:px-6 flex flex-col items-center justify-between hover:border-inputFocus-light dark:hover:border-inputFocus-dark ${theme.siteBackground} ${theme.inputBorder} border-solid border-2 rounded-lg drop-shadow-lg hover:shadow-hover  `}
      >
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-wrap-reverse gap-8 justify-center">
            <div className="bg-desktopSS bg-cover bg-no-repeat bg-center w-64 h-36 px-8 py-2 sm:w-96 sm:h-64 sm:px-4 sm:py-4 flex justify-center items-center">
              <img
                src={project.desktopSSUrl}
                alt={project.alt}
                className={`${theme.primaryText} w-full h-full`}
              />
            </div>
            {project.mobileSSUrl && (
              <div className="bg-mobileSS bg-cover bg-no-repeat bg-center w-[72px] h-36 sm:w-32 sm:h-64 px-1 py-0.5 sm:px-1.5 sm:py-1 flex justify-center items-center">
                <img
                  src={project.mobileSSUrl}
                  alt={project.alt}
                  className={`${theme.primaryText} w-full h-full scale-y-[0.99] rounded-md sm:rounded-xl`}
                />
              </div>
            )}
          </div>
          <span className={`${theme.primaryText} text-center text-2xl mt-6`}>
            {project.title}
          </span>
          {project.description && (
            <span className={`${theme.secondaryText} text-sm mt-6`}>
              {project.description}
            </span>
          )}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b dark:from-black from-gray-900 opacity-0 group-hover/project-card:opacity-100 duration-300" />
          <div className="absolute top-0 h-fit px-10 pt-6 flex flex-wrap gap-2 opacity-0 group-hover/project-card:opacity-100 duration-300">
            {tags}
          </div>
        </div>
        <div className={`relative flex gap-4 xl:gap-8 mt-6`}>
          <PrimaryButton href={project.codeURL} message="Code" />
          {project.liveURL ? (
            <PrimaryButton
              href={project.liveURL}
              message="Live"
              iconClasses="fa-solid fa-record-vinyl"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
