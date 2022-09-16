import React from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";

//import "./styles.css";

// import samplePDF from "../sample.pdf";
import balance_PDF from '../pdf/balance_PDF.pdf';
import HeaderPage from './Header/HeaderPage'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 700;
const height = 624;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

function BlankPage() {
  return (
    <div>
      <div className="div-main-pdf-contain">
         <HeaderPage/>
      </div><br/>
        <Document file={balance_PDF}>
          <div className="div-html-filpbook"><br/><br/>
            <HTMLFlipBook width={width} height={height}>
                <Page pageNumber={1} />
                <Page pageNumber={2} />
                <Page pageNumber={3} />
            </HTMLFlipBook>
          </div>
        </Document>
    </div>  
  );
}

// ReactDOM.render(<Test />, document.getElementById("app"));
export default BlankPage;
