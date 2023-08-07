import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";
import ReactLogo from "../../assets/skills_react.svg";
import VueLogo from "../../assets/skills_vue.svg";
import JsLogo from "../../assets/skills_js.svg";
import HTMLLogo from "../../assets/skills_html.svg";
import NextLogo from "../../assets/skills_next.svg";
import CSSLogo from "../../assets/skills_css.svg";
import ScssLogo from "../../assets/skills_scss.svg";
import StorybookLogo from "../../assets/skills_storybook.svg";
import TsLogo from "../../assets/skills_ts.svg";
import TailwindLogo from "../../assets/skills_tailwind.svg";
import PostmanLogo from "../../assets/skills_postman.svg";
import HeadlessLogo from "../../assets/skills_headless.svg";
import DockerLogo from "../../assets/skills_docker.svg";
import gitLogo from "../../assets/skills_git.svg";
import GithubLogo from "../../assets/skills_github.svg";
import FigmaLogo from "../../assets/skills_figma.svg";

type SkillCardProps = {
  title: string;
};

const logoDecider: { [key: string]: string } = {
  React: ReactLogo,
  Vue: VueLogo,
  Javascript: JsLogo,
  HTML: HTMLLogo,
  "Next.js": NextLogo,
  CSS: CSSLogo,
  Scss: ScssLogo,
  Storybook: StorybookLogo,
  Typescript: TsLogo,
  Tailwind: TailwindLogo,
  Postman: PostmanLogo,
  headlessUI: HeadlessLogo,
  Docker: DockerLogo,
  git: gitLogo,
  Github: GithubLogo,
  Figma: FigmaLogo,
};

export function SkillCard({ title }: SkillCardProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={` w-32 sm:w-36 h-24 flex flex-col gap-2 justify-center items-center ${theme.siteBackground} ${theme.inputBorder} border-solid border-2 rounded-lg drop-shadow-lg cursor-pointer `}
    >
      <img
        src={logoDecider[title]}
        alt="Skill Logo"
        className={`${theme.primaryText} w-10 h-10`}
      />
      <span className={`${theme.primaryText}`}>{title}</span>
    </div>
  );
}
