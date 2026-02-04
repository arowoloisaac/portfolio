import { useEffect, useState, useRef } from 'react';
// import mypdf from '../../assets/documents/arowoloisaac.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { HiDownload } from 'react-icons/hi';
import { Spinner } from '../ui/spinner';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Resume = ({ file }: { file: string }) => {
   const [numPages, setNumPages] = useState<number>(1);
   const [pageNumber, setPageNumber] = useState<number>(1);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [isDisabled, setIsDisabled] = useState<boolean>(false);
   const [isClicked, setIsClicked] = useState<boolean>(true);

   const [width, setWidth] = useState(window.innerWidth);

   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) =>
      setNumPages(numPages);

   const loadingTimeout = useRef<number | null>(null);

   function changePage(offset: number) {
      setTimeout(() => {
         setPageNumber((prevPageNumber) => prevPageNumber + offset);
         setIsDisabled(false);
      }, 500);
   }

   function previousPage() {
      setIsDisabled(true);
      changePage(-1);
   }

   function nextPage() {
      setIsDisabled(true);
      changePage(1);
   }

   useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      loadingTimeout.current = window.setTimeout(() => {
         setIsLoading(false);
      }, 500);

      return () => {
         window.removeEventListener('resize', handleResize);
         if (loadingTimeout.current) {
            clearTimeout(loadingTimeout.current);
            loadingTimeout.current = null;
         }
      };
   }, []);

   const handleClickDownload = async () => {
      if (!file) return;
      setIsClicked(false);
      await delay(2500);
      const link = document.createElement('a');
      link.href = file;
      link.download = 'arowolo_isaac_cv.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsClicked(true);
   };

   return (
      <>
         {isLoading ? (
            <div className="flex justify-center items-center min-h-screen">
               <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"></div>
            </div>
         ) : (
            <div className="flex flex-col items-center justify-center mx-auto w-full my-18">
               <div className="border-2 overflow-hidden rounded-xl">
                  <Document
                     file={file}
                     onLoadSuccess={onDocumentLoadSuccess}
                     onLoadError={() => {
                        console.log('cannot load resume');
                        setIsLoading(false);
                     }}>
                     <Page
                        pageNumber={pageNumber}
                        width={Math.min(width * 0.9, 800)}
                     />
                  </Document>
               </div>

               <div
                  className="relative  flex items-center justify-between mt-3 mb-2 "
                  style={{ width: Math.min(width * 0.9, 800) }}>
                  <div className="flex gap-2 border p-2 rounded-2xl">
                     <button
                        className="disabled:opacity-40 hover:bg-secondary rounded-l-md"
                        type="button"
                        disabled={pageNumber <= 1 || isDisabled ? true : false}
                        onClick={previousPage}>
                        <ChevronLeft />
                     </button>
                     <span className="text-center">
                        {pageNumber} / {numPages}
                     </span>
                     <button
                        className="disabled:opacity-40 hover:bg-secondary rounded-r-md"
                        type="button"
                        disabled={
                           pageNumber >= numPages || isDisabled ? true : false
                        }
                        onClick={nextPage}>
                        <ChevronRight />
                     </button>
                  </div>
                  <Button
                     onClick={handleClickDownload}
                     className="bg-primary text-lg text-primary-foreground font-bold"
                     size="lg">
                     Download{' '}
                     {isClicked ? (
                        <HiDownload className="animate-bounce size-fit " />
                     ) : (
                        <Spinner className="animate-caret-blink size-fit" />
                     )}
                  </Button>
               </div>
            </div>
         )}
      </>
   );
};

export default Resume;
