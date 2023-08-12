import { useContext } from "react";
import { PDFViewer } from "../PDFViewer/PDFViewer";
import { ThemeContext } from "../../logic/context/ThemeContext";

export function CVMain() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`mt-10 mb-10 w-full flex flex-col gap-6 items-center`}>
        <a
          href="/Salih-ZORER-CV.pdf"
          download="Salih-ZORER-CV.pdf"
          target="_blank"
        >
          <button
            className={`${theme.primaryButton} w-2/5 md:w-52 h-10 rounded-md cursor-pointer ${theme.primaryText}`}
          >
            <i className={`fa-solid fa-download ${theme.primaryText} mr-2`}></i>{" "}
            Download CV
          </button>
        </a>
        <PDFViewer />
      </div>
    </>
  );
}
