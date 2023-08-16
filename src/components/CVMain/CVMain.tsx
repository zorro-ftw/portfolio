import { PDFViewer } from "../PDFViewer/PDFViewer";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

export function CVMain() {
  return (
    <>
      <div className={`mt-10 mb-16 w-full flex flex-col gap-6 items-center`}>
        <PrimaryButton
          href="/Salih-ZORER-CV.pdf"
          downloadProp="Salih-ZORER-CV.pdf"
          iconClasses="fa-solid fa-download"
          message="Download CV"
        />
        <PDFViewer />
      </div>
    </>
  );
}
