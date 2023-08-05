import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";
import lightModeLogo from "../../assets/light_mode.svg";
import darkModeLogo from "../../assets/dark_mode.svg";

function DarkModeSwitch() {
  const { isDarkMode, theme, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`absolute right-3 sm:static w-12 h-6 pl-1 flex justify-start items-center border-2 border-solid rounded-full cursor-pointer ${theme.inputBorder} ${theme.siteBackground} `}
      onClick={toggleDarkMode}
    >
      <div
        className={` w-4 h-4 flex justify-center items-center rounded-full border-none transition-transform ease-out duration-300 ${
          isDarkMode ? "translate-x-5" : ""
        }`}
      >
        <img src={isDarkMode ? darkModeLogo : lightModeLogo}></img>
      </div>
    </div>
  );
}

/* 


*/

export default DarkModeSwitch;
