import { useContext } from "react";
import ConstructionSVG from "../../assets/construction.svg";
import { ThemeContext } from "../../logic/context/ThemeContext";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

export function UnderConstruction() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`w-full px-10 mt-14 flex flex-col gap-10 items-center `}>
      <img
        src={ConstructionSVG}
        alt="Under_Construction"
        className="w-full max-w-4xl"
      />
      <h3 className={`${theme.headingText} text-xl text-center`}>
        This page is under construction. In the meantime, you can check my
        projects out from my Github profile!
      </h3>
      <PrimaryButton
        href="https://github.com/zorro-ftw"
        iconClasses="fa-solid fa-arrow-up-right-from-square"
        message="Github Profile"
      />
    </div>
  );
}
