import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";

interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <p
      className={`h-fit px-4 py-1 text-center rounded-full bg-link-light ${theme.primaryText}`}
    >
      {text}
    </p>
  );
}
