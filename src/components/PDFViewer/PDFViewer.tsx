import { ReactNode, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function PDFViewer() {
  const calculatePageWidth = () => {
    const screenWidth = window.innerWidth;
    const desiredWidth = screenWidth >= 1440 ? 1150 : screenWidth * 0.8;
    return desiredWidth;
  };
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(calculatePageWidth());
  const [pagesDisplay, setPagesDisplay] = useState<ReactNode[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(calculatePageWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (numPages) {
      const dummy = [];
      for (let i = 0; i < numPages; i++) {
        dummy.push(
          <Page
            key={i}
            className={`mb-2`}
            width={pageWidth}
            pageNumber={i + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        );
      }
      setPagesDisplay(dummy);
    }
  }, [numPages, pageWidth]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-container w-full overflow-auto flex justify-center">
      <Document
        file="/Salih-ZORER-CV.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {pagesDisplay}
      </Document>
    </div>
  );
}
