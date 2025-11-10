import { useEffect, useState } from "react";
// import mypdf from '../../assets/documents/arowoloisaac.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = ({ file }: { file: string }) => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [width, setWidth] = useState(window.innerWidth);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) =>
    setNumPages(numPages);
    // setIsLoading(false);

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "arowolo_isaac_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[70dvh]">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mx-auto w-full overflow-hidden my-18">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading='lazy'>
            <Page
              pageNumber={pageNumber}
              width={Math.min(width * 0.9, 800)} // ✅ scales PDF to 90% of screen or max 800px
            />
          </Document>
          <div
            className="flex items-center justify-between mt-3 mb-2"
            style={{ width: Math.min(width * 0.9, 800) }}
          >
            <div className="flex gap-2 ">
              <button
                className=""
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                <ChevronLeft />
              </button>
              <span className="text-center">
                {pageNumber} of {numPages}
              </span>
              <button
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                <ChevronRight />
              </button>
            </div>
            <div>
              <Button
                variant="ghost"
                onClick={handleClickDownload}
                className="glow-on-hover"
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* <div className="flex flex-col items-center justify-center mx-auto w-full overflow-hidden my-16">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            width={Math.min(width * 0.9, 800)} // ✅ scales PDF to 90% of screen or max 800px
          />
        </Document>
        <div
          className="flex items-center justify-between mt-3 mb-2"
          style={{ width: Math.min(width * 0.9, 800) }}
        >
          <div className="flex gap-2 ">
            <button
              className=""
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              <ChevronLeft />
            </button>
            <span className="text-center">
              {pageNumber} of {numPages}
            </span>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              <ChevronRight />
            </button>
          </div>
          <div>
            <Button
              variant="ghost"
              onClick={handleClickDownload}
              className="glow-on-hover"
            >
              Download
            </Button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Resume;
