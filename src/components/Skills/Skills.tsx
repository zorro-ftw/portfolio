import { useContext } from "react";
import { SkillCard } from "../SkillCard/SkillCard";
import { ThemeContext } from "../../logic/context/ThemeContext";
import { UserContext } from "../../logic/context/UserContext";

function Skills() {
  const { theme } = useContext(ThemeContext);
  const { skillsArray } = useContext(UserContext);
  const skillsDisplay = skillsArray.map((s) => <SkillCard title={s} />);
  return (
    <>
      <main
        className={`mt-9 mb-12 px-4 sm:px-5 md:px-7 lg:px-9 xl:px-20 2xl:px-32`}
      >
        <h2
          className={`${theme.headingText} mb-6 text-3xl text-center font-bold`}
        >
          Skills
        </h2>
        <div
          className={` grid grid-cols-2 justify-items-center gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 `}
          style={{ gridAutoColumns: "1fr" }}
        >
          {skillsDisplay}
        </div>
      </main>
    </>
  );
}

export default Skills;
