import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";
import hero from "../../assets/hero.svg";

function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-wrap gap-y-8 gap-x-8 justify-evenly items-center h-full min-h-[400px] sm:px-32 xl:px-40  mt-6 ">
      <div className="flex flex-col gap-4 min-w-min text-center xl:text-start ">
        <h2
          className={`${theme.primaryText} text-4xl font-semibold align-bottom`}
        >
          Hi there
          <div className=" ml-4 pr-4 inline-block text-3xl animate-wave origin-bottom">
            👋
          </div>
        </h2>
        <h1 className={`${theme.headingText} font-semibold  text-5xl`}>
          I'm{" "}
          <span className={`${theme.headingText} font-bold`}>Salih Zorer</span>
        </h1>
        <h2 className={`${theme.link} font-semibold text-4xl`}>
          Frontend Developer
        </h2>
      </div>
      <img src={hero} alt="hero" className=" w-2/5 min-w-[410px]" />
    </div>
  );
}

export default Hero;
