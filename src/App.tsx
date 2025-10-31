import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Converters from './pages/Converters';
import Viewers from './pages/Viewers';
import NotFound from './pages/NotFound';

// Converter Components
import { JPGToTEXTConverter } from './components/ConversionPages/JPGToTEXTConverter';
import { JPGToPDFConverter } from './components/ConversionPages/JPGToPDFConverter';
import { JPGToPNGConverter } from './components/ConversionPages/JPGToPNGConverter';
import { CR2ToICOConverter } from './components/ConversionPages/CR2ToICOConverter';
import { CR2ToWebPConverter } from './components/ConversionPages/CR2ToWebPConverter';
import { CSVToDOCXConverter } from './components/ConversionPages/CSVToDOCXConverter';
import { CSVToEPUBConverter } from './components/ConversionPages/CSVToEPUBConverter';
import { CSVToHTMLConverter } from './components/ConversionPages/CSVToHTMLConverter';
import { CSVToJSONConverter } from './components/ConversionPages/CSVToJSONConverter';
import { CSVToMDConverter } from './components/ConversionPages/CSVToMDConverter';
import { CSVToMOBIConverter } from './components/ConversionPages/CSVToMOBIConverter';
import { CSVToNDJSONConverter } from './components/ConversionPages/CSVToNDJSONConverter';
import { CSVToParquetConverter } from './components/ConversionPages/CSVToParquetConverter';
import { CSVToODPConverter } from './components/ConversionPages/CSVToODPConverter';
import { CSVToODTConverter } from './components/ConversionPages/CSVToODTConverter';
import { CSVToPDFConverter } from './components/ConversionPages/CSVToPDFConverter';
import { CSVToPPTConverter } from './components/ConversionPages/CSVToPPTConverter';
import { CSVToPPTXConverter } from './components/ConversionPages/CSVToPPTXConverter';
import { CSVToRTFConverter } from './components/ConversionPages/CSVToRTFConverter';
import { CSVToSQLConverter } from './components/ConversionPages/CSVToSQLConverter';
import { CSVToTOMLConverter } from './components/ConversionPages/CSVToTOMLConverter';
import { CSVToTXTConverter } from './components/ConversionPages/CSVToTXTConverter';
import { CSVToXLSConverter } from './components/ConversionPages/CSVToXLSConverter';
import { CSVToXLSXConverter } from './components/ConversionPages/CSVToXLSXConverter';
import { CSVToXMLConverter } from './components/ConversionPages/CSVToXMLConverter';
import { CSVToYAMLConverter } from './components/ConversionPages/CSVToYAMLConverter';
import { DNGToWebPConverter } from './components/ConversionPages/DNGToWebPConverter';
import { DOCToCSVConverter } from './components/ConversionPages/DOCToCSVConverter';
import { DOCToEPUBConverter } from './components/ConversionPages/DOCToEPUBConverter';
import { DOCToMOBIConverter } from './components/ConversionPages/DOCToMOBIConverter';
import { DOCToODTConverter } from './components/ConversionPages/DOCToODTConverter';
import { DOCToTXTConverter } from './components/ConversionPages/DOCToTXTConverter';
import { HEICtoSVGConverter } from './components/ConversionPages/HEICtoSVGConverter';
import { HEICtoPDFConverter } from './components/ConversionPages/HEICtoPDFConverter';
import { HEICtoPNGConventer } from './components/ConversionPages/HEICtoPNGConventer';
import { HEICtoWEBPConventer } from './components/ConversionPages/HEICtoWEBPConventer';
import { HEICtoEPSConventer } from './components/ConversionPages/HEICtoEPSConventer';
import { HEIFtoJPGConventer } from './components/ConversionPages/HEIFtoJPGConventer';
import { HEIFtoPNGConventer } from './components/ConversionPages/HEIFtoPNGConventer';
import { HEIFtoWEBPConventer } from './components/ConversionPages/HEIFtoWEBPConventer';
import { DOCXToCSVConverter } from './components/ConversionPages/DOCXToCSVConverter';
import { DOCXToEPUBConverter } from './components/ConversionPages/DOCXToEPUBConverter';
import { DOCXToMOBIConverter } from './components/ConversionPages/DOCXToMOBIConverter';
import { DOCXToODTConverter } from './components/ConversionPages/DOCXToODTConverter';
import { DOCXToTXTConverter } from './components/ConversionPages/DOCXToTXTConverter';
import { EPSToWebPConverter } from './components/ConversionPages/EPSToWebPConverter';
import { EPUBToCSVConverter } from './components/ConversionPages/EPUBToCSVConverter';
import { EPUBToDOCConverter } from './components/ConversionPages/EPUBToDOCConverter';
import { EPUBToDOCXConverter } from './components/ConversionPages/EPUBToDOCXConverter';
import { EPUBToHTMLConverter } from './components/ConversionPages/EPUBToHTMLConverter';
import { EPUBToMDConverter } from './components/ConversionPages/EPUBToMDConverter';
import { EPUBToMOBIConverter } from './components/ConversionPages/EPUBToMOBIConverter';
import { EPUBToODPConverter } from './components/ConversionPages/EPUBToODPConverter';
import { EPUBToODTConverter } from './components/ConversionPages/EPUBToODTConverter';
import { EPUBToPDFConverter } from './components/ConversionPages/EPUBToPDFConverter';
import { EPUBToPPTConverter } from './components/ConversionPages/EPUBToPPTConverter';
import { EPUBToPPTXConverter } from './components/ConversionPages/EPUBToPPTXConverter';
import { EPUBToRTFConverter } from './components/ConversionPages/EPUBToRTFConverter';
import { EPUBToTXTConverter } from './components/ConversionPages/EPUBToTXTConverter';
import { EPUBToXLSXConverter } from './components/ConversionPages/EPUBToXLSXConverter';

// Viewer Components
import { JPEGViewer } from './components/FormatViewers/JPEGViewer';
import { PNGViewer } from './components/FormatViewers/PNGViewer';
import { WebPViewer } from './components/FormatViewers/WebPViewer';
import { GIFViewer } from './components/FormatViewers/GIFViewer';
import { SVGViewer } from './components/FormatViewers/SVGViewer';
import { BMPViewer } from './components/FormatViewers/BMPViewer';
import { ICOViewer } from './components/FormatViewers/ICOViewer';
import { HEICViewer } from './components/FormatViewers/HEICViewer';
import { AVIFViewer } from './components/FormatViewers/AVIFViewer';
import { PDFViewer } from './components/FormatViewers/PDFViewer';
import { RTFViewer } from './components/FormatViewers/RTFViewer';
import { TXTViewer } from './components/FormatViewers/TXTViewer';
import { MarkdownViewer } from './components/FormatViewers/MarkdownViewer';
import { DOCXViewer } from './components/FormatViewers/DOCXViewer';
import { ODTViewer } from './components/FormatViewers/ODTViewer';
import { XLSXViewer } from './components/FormatViewers/XLSXViewer';
import { CSVViewer } from './components/FormatViewers/CSVViewer';
import { ODSViewer } from './components/FormatViewers/ODSViewer';
import { JSONViewer } from './components/FormatViewers/JSONViewer';
import { XMLViewer } from './components/FormatViewers/XMLViewer';
import { HTMLViewer } from './components/FormatViewers/HTMLViewer';
import { CSSViewer } from './components/FormatViewers/CSSViewer';
import { JSViewer } from './components/FormatViewers/JSViewer';
import { PythonViewer } from './components/FormatViewers/PythonViewer';
import { NEFViewer } from './components/FormatViewers/NEFViewer';
import { CR2Viewer } from './components/FormatViewers/CR2Viewer';
import { DCRViewer } from './components/FormatViewers/DCRViewer';
import { X3FViewer } from './components/FormatViewers/X3FViewer';
import { ARWViewer } from './components/FormatViewers/ARWViewer';
import { RAFViewer } from './components/FormatViewers/RAFViewer';
import { ORFViewer } from './components/FormatViewers/ORFViewer';
import { DNGViewer } from './components/FormatViewers/DNGViewer';
import { PEFViewer } from './components/FormatViewers/PEFViewer';
import { ODPViewer } from './components/FormatViewers/ODPViewer';
import { OTPViewer } from './components/FormatViewers/OTPViewer';
import { POTViewer } from './components/FormatViewers/POTViewer';
import { PPSViewer } from './components/FormatViewers/PPSViewer';
import { PPTViewer } from './components/FormatViewers/PPTViewer';
import { SDDViewer } from './components/FormatViewers/SDDViewer';
import { SXViewer } from './components/FormatViewers/SXViewer';
import { STLViewer } from './components/FormatViewers/STLViewer';

function App() {
  // Make addToConversionCounter available globally
  React.useEffect(() => {
    const addToConversionCounter = (fileSizeInBytes: number) => {
    const storedData = localStorage.getItem('morphyimg_total_processed');
      const baseGB = storedData ? parseFloat(storedData) : 500;
    const sizeInGB = fileSizeInBytes / (1024 * 1024 * 1024);
      const newValue = baseGB + sizeInGB;
      localStorage.setItem('morphyimg_total_processed', newValue.toString());
  };
    (window as any).addToConversionCounter = addToConversionCounter;
  }, []);

  return (
    <Router>
      <Routes>
        {/* Strona główna */}
        <Route path="/" element={<Home />} />

        {/* Konwertery — prawidłowa ścieżka */}
        <Route path="/converters" element={<Converters />} />

        {/* Stara / błędna ścieżka — przekieruj na canonical */}
        <Route path="/conventers" element={<Navigate to="/converters" replace />} />

        {/* Podglądy / viewery */}
        <Route path="/viewers" element={<Viewers />} />

        {/* Converter Routes */}
        <Route path="/convert/jpg-to-text" element={<JPGToTEXTConverter />} />
        <Route path="/convert/jpg-to-txt" element={<JPGToTEXTConverter />} />
        <Route path="/convert/jpg-to-pdf" element={<JPGToPDFConverter />} />
        <Route path="/convert/jpg-to-png" element={<JPGToPNGConverter />} />
        <Route path="/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/convert/doc-to-csv" element={<DOCToCSVConverter />} />
        <Route path="/convert/doc-to-epub" element={<DOCToEPUBConverter />} />
        <Route path="/convert/doc-to-mobi" element={<DOCToMOBIConverter />} />
        <Route path="/convert/doc-to-odt" element={<DOCToODTConverter />} />
        <Route path="/convert/doc-to-txt" element={<DOCToTXTConverter />} />
        <Route path="/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/convert/docx-to-csv" element={<DOCXToCSVConverter />} />
        <Route path="/convert/docx-to-epub" element={<DOCXToEPUBConverter />} />
        <Route path="/convert/docx-to-mobi" element={<DOCXToMOBIConverter />} />
        <Route path="/convert/docx-to-odt" element={<DOCXToODTConverter />} />
        <Route path="/convert/docx-to-txt" element={<DOCXToTXTConverter />} />
        <Route path="/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/convert/epub-to-xlsx" element={<EPUBToXLSXConverter />} />

        {/* Viewer Routes */}
        <Route path="/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/viewers/png" element={<PNGViewer />} />
        <Route path="/viewers/webp" element={<WebPViewer />} />
        <Route path="/viewers/gif" element={<GIFViewer />} />
        <Route path="/viewers/svg" element={<SVGViewer />} />
        <Route path="/viewers/bmp" element={<BMPViewer />} />
        <Route path="/viewers/ico" element={<ICOViewer />} />
        <Route path="/viewers/heic" element={<HEICViewer />} />
        <Route path="/viewers/heif" element={<HEICViewer />} />
        <Route path="/viewers/avif" element={<AVIFViewer />} />
        <Route path="/viewers/pdf" element={<PDFViewer />} />
        <Route path="/viewers/rtf" element={<RTFViewer />} />
        <Route path="/viewers/txt" element={<TXTViewer />} />
        <Route path="/viewers/md" element={<MarkdownViewer />} />
        <Route path="/viewers/markdown" element={<MarkdownViewer />} />
        <Route path="/viewers/docx" element={<DOCXViewer />} />
        <Route path="/viewers/doc" element={<DOCXViewer />} />
        <Route path="/viewers/odt" element={<ODTViewer />} />
        <Route path="/viewers/xlsx" element={<XLSXViewer />} />
        <Route path="/viewers/excel" element={<XLSXViewer />} />
        <Route path="/viewers/csv" element={<CSVViewer />} />
        <Route path="/viewers/ods" element={<ODSViewer />} />
        <Route path="/viewers/json" element={<JSONViewer />} />
        <Route path="/viewers/xml" element={<XMLViewer />} />
        <Route path="/viewers/html" element={<HTMLViewer />} />
        <Route path="/viewers/htm" element={<HTMLViewer />} />
        <Route path="/viewers/css" element={<CSSViewer />} />
        <Route path="/viewers/js" element={<JSViewer />} />
        <Route path="/viewers/javascript" element={<JSViewer />} />
        <Route path="/viewers/py" element={<PythonViewer />} />
        <Route path="/viewers/python" element={<PythonViewer />} />
        <Route path="/viewers/nef" element={<NEFViewer />} />
        <Route path="/viewers/cr2" element={<CR2Viewer />} />
        <Route path="/viewers/dcr" element={<DCRViewer />} />
        <Route path="/viewers/x3f" element={<X3FViewer />} />
        <Route path="/viewers/arw" element={<ARWViewer />} />
        <Route path="/viewers/raf" element={<RAFViewer />} />
        <Route path="/viewers/orf" element={<ORFViewer />} />
        <Route path="/viewers/dng" element={<DNGViewer />} />
        <Route path="/viewers/pef" element={<PEFViewer />} />
        <Route path="/viewers/odp" element={<ODPViewer />} />
        <Route path="/viewers/otp" element={<OTPViewer />} />
        <Route path="/viewers/pot" element={<POTViewer />} />
        <Route path="/viewers/pps" element={<PPSViewer />} />
        <Route path="/viewers/ppt" element={<PPTViewer />} />
        <Route path="/viewers/sdd" element={<SDDViewer />} />
        <Route path="/viewers/sx" element={<SXViewer />} />
        <Route path="/viewers/stl" element={<STLViewer />} />

        {/* 404 - catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
