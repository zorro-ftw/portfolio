import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";
import EmailLogo from "../../assets/email_logo.svg";
import GithubLogo from "../../assets/skills_github.svg";
import LinkedinLogo from "../../assets/linkedin_logo.svg";

export function ContactBanner() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className={`w-full flex flex-col items-center mb-9`}>
        <h2
          className={`${theme.headingText} mb-3 text-3xl text-center font-bold`}
        >
          Contact
        </h2>
        <div className={`${theme.primaryText} text-center mb-4`}>
          Feel free to connect with me!
        </div>
        <div className={`flex justify-center gap-4 w-1/12`}>
          <a href="mailto:zorer.salih@gmail.com" target="_">
            <div
              className={` w-10 h-10 flex justify-center items-center rounded-full ${theme.siteBackground} ${theme.inputBorder} border-solid border-2 hover:shadow-hover hover:border-inputFocus-light dark:hover:border-inputFocus-dark`}
            >
              <img src={EmailLogo} alt="Email" className={` w-4 `} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/zorersalih/" target="_">
            <div
              className={` w-10 h-10 flex justify-center items-center rounded-full ${theme.siteBackground} ${theme.inputBorder} border-solid border-2 hover:shadow-hover hover:border-inputFocus-light dark:hover:border-inputFocus-dark`}
            >
              <img src={LinkedinLogo} alt="Email" className={` w-4 `} />
            </div>
          </a>
          <a href="https://github.com/zorro-ftw" target="_">
            <div
              className={` w-10 h-10 flex justify-center items-center rounded-full ${theme.siteBackground} ${theme.inputBorder} border-solid border-2 hover:shadow-hover hover:border-inputFocus-light dark:hover:border-inputFocus-dark`}
            >
              <img src={GithubLogo} alt="Email" className={` w-4 `} />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
