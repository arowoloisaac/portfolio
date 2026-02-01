import { useEffect, useState, useRef } from 'react';
// import mypdf from '../../assets/documents/arowoloisaac.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = ({ file }: { file: string }) => {
   const [numPages, setNumPages] = useState<number>(1);
   const [pageNumber, setPageNumber] = useState<number>(1);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   const [width, setWidth] = useState(window.innerWidth);

   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) =>
      setNumPages(numPages);

   const loadingTimeout = useRef<number | null>(null);

   function changePage(offset: number) {
      // setPageNumber((prevPageNumber) => prevPageNumber + offset);
      setTimeout(() => {
         setPageNumber((prevPageNumber) => prevPageNumber + offset);
      }, 1000);
   }

   function previousPage() {
      changePage(-1);
   }

   function nextPage() {
      changePage(1);
   }

   useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 1800);
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

   const handleClickDownload = () => {
      if (!file) return;
      const link = document.createElement('a');
      link.href = file;
      link.download = 'arowolo_isaac_cv.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
                        type="button"
                        disabled={pageNumber <= 1 ? true : false}
                        onClick={previousPage}>
                        <ChevronLeft />
                     </button>
                     <span className="text-center">
                        {pageNumber} / {numPages}
                     </span>
                     <button
                        type="button"
                        disabled={pageNumber >= numPages ? true : false}
                        onClick={nextPage}>
                        <ChevronRight />
                     </button>
                  </div>
                  <div>
                     <Button
                        onClick={handleClickDownload}
                        className="bg-primary text-lg text-primary-foreground glow-on-hover">
                        Download
                     </Button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default Resume;
