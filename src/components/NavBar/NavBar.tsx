import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { ThemeContext } from "../../logic/context/ThemeContext";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import RouterTile from "./RouterTile/RouterTile";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../logic/context/UserContext";

function NavBar() {
  const { theme } = useContext(ThemeContext);
  const { userData, routersArray } = useContext(UserContext);
  const navigate = useNavigate();

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  function handleDrawer(): void {
    setDrawerOpen(!isDrawerOpen);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down at least 10 pixels
      setIsScrolled(window.scrollY > 10);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mapping routersArray to RouterTile components
  const routersDisplay = routersArray.map((r) => (
    <RouterTile
      key={r.text}
      icon={r.icon}
      text={r.text}
      navigatesTo={r.navigatesTo}
    />
  ));

  return (
    <>
      <div
        className={`w-screen h-screen bg-black bg-opacity-50 z-10 absolute top-0 sm:hidden backdrop-blur-sm ${
          !isDrawerOpen && `hidden`
        }`}
        onClick={handleDrawer}
      ></div>
      <div
        className={`w-full h-12 flex justify-center sm:justify-evenly items-center xl:px-24 md:px-6 pt-2 sm:sticky sm:top-0 sm:z-10 ${
          isScrolled && ` sm:backdrop-blur-lg  sm:shadow-lg `
        }`}
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="logo" className="h-10 sm:h-8" />
          <span
            className={`px-2 ${theme.headingText} font-semibold hidden sm:inline`}
          >
            {userData.fullName}
          </span>
        </div>
        <div className="w-2/4 h-full hidden sm:flex justify-center xl:gap-4">
          {routersDisplay}
        </div>
        <DarkModeSwitch />
      </div>

      <div
        className={`sm:hidden w-40 absolute -top-5 -left-40 flex flex-col gap-4  transition-transform duration-300 z-20 py-8 pl-4 ${
          theme.siteBackground
        } ${isDrawerOpen && `translate-x-40`}`}
      >
        <i
          className={`fa-solid ${
            isDrawerOpen ? `fa-xmark` : `fa-bars`
          } relative top-0 -right-40 text-xl ${theme.inputText}`}
          onClick={handleDrawer}
        ></i>
        {routersDisplay}
      </div>
    </>
  );
}

export default NavBar;
