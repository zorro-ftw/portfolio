import { useContext } from "react";
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

  // Mapping routersArray to RouterTile components
  const routersDisplay = routersArray.map((r) => (
    <RouterTile icon={r.icon} text={r.text} navigatesTo={r.navigatesTo} />
  ));

  return (
    <>
      <div
        className={`w-full h-10 flex justify-center sm:justify-evenly items-center xl:px-24 mt-2 md:px-6`}
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="logo" className="h-12 sm:h-8" />
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

      <div className="sm:hidden"></div>
    </>
  );
}

export default NavBar;
