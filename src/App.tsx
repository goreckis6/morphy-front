import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Converters from './pages/Converters';
import Viewers from './pages/Viewers';
import Compress from './pages/Compress';
import Samples from './pages/Samples';
import NotFound from './pages/NotFound';
import SampleDocx from './components/Samples/SampleDocx';
import SampleDoc from './components/Samples/SampleDoc';
import SamplePdf from './components/Samples/SamplePdf';
import SampleCsv from './components/Samples/SampleCsv';
import SampleXls from './components/Samples/SampleXls';
import SampleXlsx from './components/Samples/SampleXlsx';
import SampleXml from './components/Samples/SampleXml';
import SampleZip from './components/Samples/SampleZip';
import SampleOdp from './components/Samples/SampleOdp';
import SampleOds from './components/Samples/SampleOds';
import SampleRtf from './components/Samples/SampleRtf';
import Sample3ds from './components/Samples/Sample3ds';
import Sample3gp from './components/Samples/Sample3gp';
import Sample3mf from './components/Samples/Sample3mf';
import SampleAac from './components/Samples/SampleAac';
import SampleAc3 from './components/Samples/SampleAc3';
import SampleAce from './components/Samples/SampleAce';
import SampleAi from './components/Samples/SampleAi';
import SampleAif from './components/Samples/SampleAif';
import SampleAiff from './components/Samples/SampleAiff';
import SampleAmr from './components/Samples/SampleAmr';
import SampleAnimatedGif from './components/Samples/SampleAnimatedGif';
import SampleAnimationFbx from './components/Samples/SampleAnimationFbx';
import SampleAnsibleYml from './components/Samples/SampleAnsibleYml';
import SampleApiResponseJson from './components/Samples/SampleApiResponseJson';
import SampleApk from './components/Samples/SampleApk';
import SampleApng from './components/Samples/SampleApng';
import SampleAppimage from './components/Samples/SampleAppimage';
import SampleArduinoIno from './components/Samples/SampleArduinoIno';
import SampleArj from './components/Samples/SampleArj';
import SampleAsc from './components/Samples/SampleAsc';
import SampleAse from './components/Samples/SampleAse';
import SampleAssetbundle from './components/Samples/SampleAssetbundle';
import SampleAvi from './components/Samples/SampleAvi';
import SampleAvif from './components/Samples/SampleAvif';
import SampleBarcodeSvg from './components/Samples/SampleBarcodeSvg';
import SampleBat from './components/Samples/SampleBat';
import SampleBib from './components/Samples/SampleBib';
import SampleBlend from './components/Samples/SampleBlend';
import SampleBmp from './components/Samples/SampleBmp';
import SampleBvh from './components/Samples/SampleBvh';
import SampleBz2 from './components/Samples/SampleBz2';
import SampleC from './components/Samples/SampleC';
import SampleCab from './components/Samples/SampleCab';
import SampleCaf from './components/Samples/SampleCaf';
import SampleCanLog from './components/Samples/SampleCanLog';
import SampleCmd from './components/Samples/SampleCmd';
import SampleConf from './components/Samples/SampleConf';
import SampleConfigIni from './components/Samples/SampleConfigIni';
import SampleCpio from './components/Samples/SampleCpio';
import SampleCpp from './components/Samples/SampleCpp';
import SampleCrx from './components/Samples/SampleCrx';
import SampleCs from './components/Samples/SampleCs';
import SampleCsr from './components/Samples/SampleCsr';
import SampleCss from './components/Samples/SampleCss';
import SampleCue from './components/Samples/SampleCue';
import SampleCustomerDatabaseSql from './components/Samples/SampleCustomerDatabaseSql';
import SampleDav from './components/Samples/SampleDav';
import SampleDbf from './components/Samples/SampleDbf';
import SampleDds from './components/Samples/SampleDds';
import SampleDem from './components/Samples/SampleDem';
import SampleDer from './components/Samples/SampleDer';
import SampleDmg from './components/Samples/SampleDmg';
import SampleDmp from './components/Samples/SampleDmp';
import SampleDng from './components/Samples/SampleDng';
import SampleDockerComposeYml from './components/Samples/SampleDockerComposeYml';
import SampleDockerfile from './components/Samples/SampleDockerfile';
import SampleDwg from './components/Samples/SampleDwg';
import SampleDxf from './components/Samples/SampleDxf';
import SampleEditorconfig from './components/Samples/SampleEditorconfig';
import SampleElf from './components/Samples/SampleElf';
import SampleEps from './components/Samples/SampleEps';
import SampleEpub from './components/Samples/SampleEpub';
import SampleExe from './components/Samples/SampleExe';
import SampleExr from './components/Samples/SampleExr';
import SampleGz from './components/Samples/SampleGz';
import SampleH from './components/Samples/SampleH';
import SampleHdr from './components/Samples/SampleHdr';
import SampleHeic from './components/Samples/SampleHeic';
import SampleHeif from './components/Samples/SampleHeif';
import SampleHex from './components/Samples/SampleHex';
import SampleHpp from './components/Samples/SampleHpp';
import SampleHtml from './components/Samples/SampleHtml';
import SampleIcns from './components/Samples/SampleIcns';
import SampleIco from './components/Samples/SampleIco';
import SampleIfc from './components/Samples/SampleIfc';
import SampleIges from './components/Samples/SampleIges';
import SampleIgs from './components/Samples/SampleIgs';
import SampleImg from './components/Samples/SampleImg';
import SampleIndd from './components/Samples/SampleIndd';
import SampleIni from './components/Samples/SampleIni';
import Sample7z from './components/Samples/Sample7z';

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

// Compression Components
import { JPGCompressor } from './components/compress/JPGCompressor';

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

        {/* Compression Hub */}
        <Route path="/compress" element={<Compress />} />

        {/* Samples Hub */}
        <Route path="/samples" element={<Samples />} />

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

        {/* Compression Routes */}
        <Route path="/compress/jpg" element={<JPGCompressor />} />
        <Route path="/compress/jpeg" element={<JPGCompressor />} />

        {/* Sample Files Routes */}
        <Route path="/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/samples/sample-xls" element={<SampleXls />} />
        <Route path="/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/samples/sample-xml" element={<SampleXml />} />
        <Route path="/samples/sample-zip" element={<SampleZip />} />
        <Route path="/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/samples/sample-ods" element={<SampleOds />} />
        <Route path="/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/samples/sample-aac" element={<SampleAac />} />
        <Route path="/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/samples/sample-ace" element={<SampleAce />} />
        <Route path="/samples/sample-ai" element={<SampleAi />} />
        <Route path="/samples/sample-aif" element={<SampleAif />} />
        <Route path="/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/samples/sample-apk" element={<SampleApk />} />
        <Route path="/samples/sample-apng" element={<SampleApng />} />
        <Route path="/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/samples/sample-arj" element={<SampleArj />} />
        <Route path="/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/samples/sample-ase" element={<SampleAse />} />
        <Route path="/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/samples/sample-bat" element={<SampleBat />} />
        <Route path="/samples/sample-bib" element={<SampleBib />} />
        <Route path="/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/samples/sample-c" element={<SampleC />} />
        <Route path="/samples/sample-cab" element={<SampleCab />} />
        <Route path="/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/samples/sample-conf" element={<SampleConf />} />
        <Route path="/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/samples/sample-cs" element={<SampleCs />} />
        <Route path="/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/samples/sample-css" element={<SampleCss />} />
        <Route path="/samples/sample-cue" element={<SampleCue />} />
        <Route path="/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/samples/sample-dav" element={<SampleDav />} />
        <Route path="/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/samples/sample-dds" element={<SampleDds />} />
        <Route path="/samples/sample-dem" element={<SampleDem />} />
        <Route path="/samples/sample-der" element={<SampleDer />} />
        <Route path="/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/samples/sample-dng" element={<SampleDng />} />
        <Route path="/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/samples/sample-elf" element={<SampleElf />} />
        <Route path="/samples/sample-eps" element={<SampleEps />} />
        <Route path="/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/samples/sample-exe" element={<SampleExe />} />
        <Route path="/samples/sample-exr" element={<SampleExr />} />
        <Route path="/samples/sample-gz" element={<SampleGz />} />
        <Route path="/samples/sample-h" element={<SampleH />} />
        <Route path="/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/samples/sample-hex" element={<SampleHex />} />
        <Route path="/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/samples/sample-html" element={<SampleHtml />} />
        <Route path="/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/samples/sample-ico" element={<SampleIco />} />
        <Route path="/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/samples/sample-iges" element={<SampleIges />} />
        <Route path="/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/samples/sample-img" element={<SampleImg />} />
        <Route path="/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/samples/sample-ini" element={<SampleIni />} />
        <Route path="/samples/sample-7z" element={<Sample7z />} />

        {/* 404 - catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
