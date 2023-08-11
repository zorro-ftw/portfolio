import EmailLogo from "../../assets/email_logo.svg";
import GithubLogo from "../../assets/skills_github.svg";
import LinkedinLogo from "../../assets/linkedin_logo.svg";
import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";

type SocialPinProps = {
  link: string;
  alt: string;
  hasBorder?: boolean;
  backgroundColor?: string;
};

export function SocialPin({
  link,
  alt,
  hasBorder,
  backgroundColor,
}: SocialPinProps) {
  const { theme } = useContext(ThemeContext);
  const logoDecider: { [key: string]: string } = {
    Email: EmailLogo,
    Github: GithubLogo,
    Linkedin: LinkedinLogo,
  };

  return (
    <a href={link} target="_">
      <div
        className={` w-10 h-10 flex justify-center items-center rounded-full ${
          backgroundColor ? backgroundColor : theme.siteBackground
        } ${
          hasBorder &&
          `${theme.inputBorder} border-solid border-2 hover:shadow-hover hover:border-inputFocus-light dark:hover:border-inputFocus-dark`
        } `}
      >
        <img src={logoDecider[alt]} alt={alt} className={` w-4 `} />
      </div>
    </a>
  );
}
