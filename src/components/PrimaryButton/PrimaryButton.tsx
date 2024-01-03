import { useContext } from "react";
import { ThemeContext } from "../../logic/context/ThemeContext";

type PrimaryButtonProps = {
  href: string;
  iconClasses?: string;
  message: string;
  downloadProp?: string;
  target?: string;
};

export function PrimaryButton({
  href,
  iconClasses,
  downloadProp,
  target,
  message,
}: PrimaryButtonProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <a
      href={href}
      download={downloadProp ? downloadProp : undefined}
      target={target || "_blank"}
    >
      <button
        className={`${theme.primaryButton} px-10 py-2 md:px-30 text-sm md:text-base lg:text-lg lg:py-3 rounded-md cursor-pointer text-white bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-colors`}
      >
        {iconClasses && <i className={`${iconClasses} text-white md:mr-2`}></i>}{" "}
        {message}
      </button>
    </a>
  );
}
