import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../logic/context/ThemeContext";

type RouterTileProps = {
  icon: [string, string];
  text: string;
  navigatesTo: string;
};

function RouterTile({ icon, text, navigatesTo }: RouterTileProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      to={navigatesTo}
      className={` w-fit h-full flex justify-between items-center cursor-pointer px-3 py-2 border-none rounded-md ${theme.hoverBg} transition-colors`}
    >
      <i className={`${icon[0]} ${icon[1]} ${theme.primaryText} mr-2 mb-1`}></i>
      <span className={`${theme.headingText}`}>{text}</span>
    </Link>
  );
}

export default RouterTile;
