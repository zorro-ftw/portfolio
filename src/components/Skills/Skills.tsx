import { useContext } from "react";
import { SkillCard } from "../SkillCard/SkillCard";
import { ThemeContext } from "../../logic/context/ThemeContext";

function Skills() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main className={`mt-9 px-4 sm:px-5 md:px-6 lg:px-7`}>
        <h2
          className={`${theme.headingText} mb-6 text-3xl text-center font-bold`}
        >
          Skills
        </h2>
        <div
          className={` grid grid-cols-2 justify-items-center gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6`}
          style={{ gridAutoColumns: "1fr" }}
        >
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
          <SkillCard title="React"></SkillCard>
        </div>
      </main>
    </>
  );
}

export default Skills;
