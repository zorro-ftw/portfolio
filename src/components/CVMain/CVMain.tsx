import { useContext } from "react";
import { PDFViewer } from "../PDFViewer/PDFViewer";
import { ThemeContext } from "../../logic/context/ThemeContext";

export function CVMain() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`mt-10 mb-16 w-full flex flex-col gap-6 items-center`}>
        <a
          href="/Salih-ZORER-CV.pdf"
          download="Salih-ZORER-CV.pdf"
          target="_blank"
        >
          <button
            className={`${theme.primaryButton} px-10 py-2 md:px-30 text-sm md:text-base lg:text-lg lg:py-3 rounded-md cursor-pointer ${theme.primaryText} bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-colors`}
          >
            <i
              className={`fa-solid fa-download ${theme.primaryText} md:mr-2`}
            ></i>{" "}
            Download CV
          </button>
        </a>
        <PDFViewer />
      </div>
    </>
  );
}
