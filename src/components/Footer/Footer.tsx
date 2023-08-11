import { useContext } from "react";
import { UserContext } from "../../logic/context/UserContext";
import { SocialPin } from "../SocialPin/SocialPin";
import { ThemeContext } from "../../logic/context/ThemeContext";

export function Footer() {
  const { socialsArray } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const socialPinsDisplay = socialsArray.map((s) => (
    <SocialPin
      link={s.link}
      alt={s.alt}
      backgroundColor={`${theme.footerBg}`}
    />
  ));

  return (
    <div
      className={`w-full h-14 ${theme.footerBg} flex justify-center text-xs items-center px-4 gap-4 sm:flex-row sm:items-center sm:gap-12 sm:text-base`}
    >
      <span className={`${theme.secondaryText}`}>
        Designed and developed by Salih Zorer
      </span>
      <div className={`flex`}>{socialPinsDisplay}</div>
    </div>
  );
}
