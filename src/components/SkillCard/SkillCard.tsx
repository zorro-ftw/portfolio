import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";
import ReactLogo from "../../assets/skills_react.svg";

type SkillCardProps = {
  title: string;
};

const logoDecider: { [key: string]: string } = {
  React: ReactLogo,
};

export function SkillCard({ title }: SkillCardProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={` w-32 sm:w-36 h-24 flex flex-col justify-center items-center ${theme.siteBackground} ${theme.cardBorder} border-solid border-[1px] rounded-lg drop-shadow-lg `}
    >
      <img
        src={logoDecider[title]}
        alt="Skill Logo"
        className={`${theme.primaryText} w-12 h-12`}
      />
      <span className={`${theme.primaryText}`}>{title}</span>
    </div>
  );
}
