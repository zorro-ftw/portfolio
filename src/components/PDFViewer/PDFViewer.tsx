import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function PDFViewer() {
  const [numPages, setNumPages] = useState<number | null>(null); // Explicit type annotation

  const calculatePageWidth = () => {
    // Calculate the desired width based on the screen width
    const screenWidth = window.innerWidth;
    const desiredWidth = screenWidth >= 1440 ? 1150 : screenWidth * 0.8; // You can adjust the factor as needed
    return desiredWidth;
  };

  useEffect(() => {
    // Update the width when the window is resized
    const handleResize = () => {
      setPageWidth(calculatePageWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [pageWidth, setPageWidth] = useState<number>(calculatePageWidth());

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-container w-full overflow-auto flex justify-center">
      <Document
        file="/Salih-ZORER-CV.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          width={pageWidth}
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
        <div className={` h-2`}></div>
        <Page
          width={pageWidth}
          pageNumber={2}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
