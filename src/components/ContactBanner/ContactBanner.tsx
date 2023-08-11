import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";
import { UserContext } from "../../logic/context/UserContext";
import { SocialPin } from "../SocialPin/SocialPin";

export function ContactBanner() {
  const { theme } = useContext(ThemeContext);
  const { socialsArray } = useContext(UserContext);
  const socialPinsDisplay = socialsArray.map((s) => (
    <SocialPin link={s.link} alt={s.alt} hasBorder={true} />
  ));

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
          {socialPinsDisplay}
        </div>
      </section>
    </>
  );
}
