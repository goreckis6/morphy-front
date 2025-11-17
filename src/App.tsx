import React from 'react';
import { Helmet } from 'react-helmet-async';
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
import SampleIntelhex from './components/Samples/SampleIntelhex';
import SampleInvoicePdf from './components/Samples/SampleInvoicePdf';
import SampleIpa from './components/Samples/SampleIpa';
import SampleIpynb from './components/Samples/SampleIpynb';
import SampleIso from './components/Samples/SampleIso';
import SampleJar from './components/Samples/SampleJar';
import SampleJava from './components/Samples/SampleJava';
import SampleJks from './components/Samples/SampleJks';
import SampleJson from './components/Samples/SampleJson';
import SampleJsonl from './components/Samples/SampleJsonl';
import SampleJpeg from './components/Samples/SampleJpeg';
import SampleJpg from './components/Samples/SampleJpg';
import SampleJs from './components/Samples/SampleJs';
import SampleJsx from './components/Samples/SampleJsx';
import SampleJwt from './components/Samples/SampleJwt';
import SampleKey from './components/Samples/SampleKey';
import SampleKml from './components/Samples/SampleKml';
import SampleKmz from './components/Samples/SampleKmz';
import SampleKt from './components/Samples/SampleKt';
import SampleLas from './components/Samples/SampleLas';
import SampleLaz from './components/Samples/SampleLaz';
import SampleLha from './components/Samples/SampleLha';
import SampleLog from './components/Samples/SampleLog';
import SampleLua from './components/Samples/SampleLua';
import SampleLzh from './components/Samples/SampleLzh';
import SampleLzma from './components/Samples/SampleLzma';
import SampleM3u from './components/Samples/SampleM3u';
import SampleM3u8 from './components/Samples/SampleM3u8';
import SampleM4a from './components/Samples/SampleM4a';
import SampleM4v from './components/Samples/SampleM4v';
import SampleMa from './components/Samples/SampleMa';
import SampleMakefile from './components/Samples/SampleMakefile';
import SampleMax from './components/Samples/SampleMax';
import SampleMb from './components/Samples/SampleMb';
import SampleMbtiles from './components/Samples/SampleMbtiles';
import SampleMd from './components/Samples/SampleMd';
import SampleMdx from './components/Samples/SampleMdx';
import SampleMidi from './components/Samples/SampleMidi';
import SampleMkv from './components/Samples/SampleMkv';
import SampleMobi from './components/Samples/SampleMobi';
import Sample7z from './components/Samples/Sample7z';

// Converter Components
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
import { PNGCompressor } from './components/compress/PNGCompressor';
import { PDFCompressor } from './components/compress/PDFCompressor';
import { YTThumbnailDownloader } from './components/YTThumbnailDownloader';

function App() {
  // Make addToConversionCounter available globally
  React.useEffect(() => {
    const addToConversionCounter = (fileSizeInBytes: number) => {
    const storedData = localStorage.getItem('MorphyHub_total_processed');
      const baseGB = storedData ? parseFloat(storedData) : 500;
    const sizeInGB = fileSizeInBytes / (1024 * 1024 * 1024);
      const newValue = baseGB + sizeInGB;
      localStorage.setItem('MorphyHub_total_processed', newValue.toString());
  };
    (window as any).addToConversionCounter = addToConversionCounter;
  }, []);

  return (
    <Router>
      <Helmet>
        <meta
          name="description"
          content="Convert and view files online for free. Support for 50+ formats including images, documents, spreadsheets, and more. No registration required."
        />
      </Helmet>
      <Routes>
        {/* Strona główna */}
        <Route path="/" element={<Home />} />
        <Route path="/pl" element={<Home />} />
        <Route path="/de" element={<Home />} />
        <Route path="/id" element={<Home />} />
        <Route path="/sv" element={<Home />} />
        <Route path="/es" element={<Home />} />
        <Route path="/fr" element={<Home />} />
        <Route path="/it" element={<Home />} />
        <Route path="/nl" element={<Home />} />
        <Route path="/pt" element={<Home />} />
        <Route path="/vi" element={<Home />} />
        <Route path="/tr" element={<Home />} />
        <Route path="/ru" element={<Home />} />
        <Route path="/ar" element={<Home />} />
        <Route path="/th" element={<Home />} />
        <Route path="/ja" element={<Home />} />
        <Route path="/zh" element={<Home />} />

        {/* Konwertery — prawidłowa ścieżka */}
        <Route path="/converters" element={<Converters />} />
        <Route path="/pl/converters" element={<Converters />} />
        <Route path="/de/converters" element={<Converters />} />
        <Route path="/id/converters" element={<Converters />} />
        <Route path="/sv/converters" element={<Converters />} />
        <Route path="/es/converters" element={<Converters />} />
        <Route path="/fr/converters" element={<Converters />} />
        <Route path="/it/converters" element={<Converters />} />
        <Route path="/nl/converters" element={<Converters />} />
        <Route path="/pt/converters" element={<Converters />} />
        <Route path="/vi/converters" element={<Converters />} />
        <Route path="/tr/converters" element={<Converters />} />
        <Route path="/ru/converters" element={<Converters />} />
        <Route path="/ar/converters" element={<Converters />} />
        <Route path="/th/converters" element={<Converters />} />
        <Route path="/ja/converters" element={<Converters />} />
        <Route path="/zh/converters" element={<Converters />} />

        {/* Stara / błędna ścieżka — przekieruj na canonical */}
        <Route path="/conventers" element={<Navigate to="/converters" replace />} />

        {/* Podglądy / viewery */}
        <Route path="/viewers" element={<Viewers />} />

        {/* Compression Hub */}
        <Route path="/compress" element={<Compress />} />
        <Route path="/pl/compress" element={<Compress />} />
        <Route path="/de/compress" element={<Compress />} />
        <Route path="/id/compress" element={<Compress />} />
        <Route path="/sv/compress" element={<Compress />} />
        <Route path="/es/compress" element={<Compress />} />
        <Route path="/fr/compress" element={<Compress />} />
        <Route path="/it/compress" element={<Compress />} />
        <Route path="/nl/compress" element={<Compress />} />
        <Route path="/pt/compress" element={<Compress />} />
        <Route path="/vi/compress" element={<Compress />} />
        <Route path="/tr/compress" element={<Compress />} />
        <Route path="/ru/compress" element={<Compress />} />
        <Route path="/ar/compress" element={<Compress />} />
        <Route path="/th/compress" element={<Compress />} />
        <Route path="/ja/compress" element={<Compress />} />
        <Route path="/zh/compress" element={<Compress />} />

        {/* YouTube Thumbnail Downloader */}
        <Route path="/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/pl/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/de/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />

        {/* Samples Hub */}
        <Route path="/samples" element={<Samples />} />
        <Route path="/pl/samples" element={<Samples />} />
        <Route path="/de/samples" element={<Samples />} />
        <Route path="/id/samples" element={<Samples />} />
        <Route path="/sv/samples" element={<Samples />} />
        <Route path="/es/samples" element={<Samples />} />
        <Route path="/fr/samples" element={<Samples />} />
        <Route path="/it/samples" element={<Samples />} />
        <Route path="/nl/samples" element={<Samples />} />
        <Route path="/pt/samples" element={<Samples />} />
        <Route path="/vi/samples" element={<Samples />} />
        <Route path="/tr/samples" element={<Samples />} />
        <Route path="/ru/samples" element={<Samples />} />
        <Route path="/ar/samples" element={<Samples />} />
        <Route path="/th/samples" element={<Samples />} />
        <Route path="/ja/samples" element={<Samples />} />
        <Route path="/zh/samples" element={<Samples />} />

        {/* Converter Routes */}
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

        {/* Polish (PL) Converter Routes */}
        <Route path="/pl/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/pl/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/pl/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/pl/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/pl/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/pl/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/pl/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/pl/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/pl/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/pl/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/pl/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/pl/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/pl/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/pl/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/pl/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/pl/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/pl/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/pl/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/pl/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/pl/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/pl/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/pl/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/pl/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/pl/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/pl/convert/doc-to-csv" element={<DOCToCSVConverter />} />
        <Route path="/pl/convert/doc-to-epub" element={<DOCToEPUBConverter />} />
        <Route path="/pl/convert/doc-to-mobi" element={<DOCToMOBIConverter />} />
        <Route path="/pl/convert/doc-to-odt" element={<DOCToODTConverter />} />
        <Route path="/pl/convert/doc-to-txt" element={<DOCToTXTConverter />} />
        <Route path="/pl/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/pl/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/pl/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/pl/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/pl/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/pl/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/pl/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/pl/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/pl/convert/docx-to-csv" element={<DOCXToCSVConverter />} />
        <Route path="/pl/convert/docx-to-epub" element={<DOCXToEPUBConverter />} />
        <Route path="/pl/convert/docx-to-mobi" element={<DOCXToMOBIConverter />} />
        <Route path="/pl/convert/docx-to-odt" element={<DOCXToODTConverter />} />
        <Route path="/pl/convert/docx-to-txt" element={<DOCXToTXTConverter />} />
        <Route path="/pl/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/pl/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/pl/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/pl/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/pl/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/pl/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/pl/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/pl/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/pl/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/pl/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/pl/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/pl/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/pl/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/pl/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/pl/convert/epub-to-xlsx" element={<EPUBToXLSXConverter />} />

        {/* German (DE) Converter Routes */}
        <Route path="/de/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/de/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/de/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/de/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/id/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/sv/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/es/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/fr/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/it/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/nl/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/pt/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/vi/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/tr/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/ru/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/ar/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/th/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/ja/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/zh/convert/csv-to-epub" element={<CSVToEPUBConverter />} />
        <Route path="/de/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/id/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/sv/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/es/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/fr/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/it/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/nl/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/pt/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/vi/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/tr/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/ru/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/ar/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/th/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/ja/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/zh/convert/csv-to-html" element={<CSVToHTMLConverter />} />
        <Route path="/de/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/de/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/de/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/de/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/de/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/de/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/de/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/de/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/de/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/de/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/de/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/de/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/de/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/de/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/de/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/de/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/de/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/de/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/de/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/de/convert/doc-to-csv" element={<DOCToCSVConverter />} />
        <Route path="/de/convert/doc-to-epub" element={<DOCToEPUBConverter />} />
        <Route path="/de/convert/doc-to-mobi" element={<DOCToMOBIConverter />} />
        <Route path="/de/convert/doc-to-odt" element={<DOCToODTConverter />} />
        <Route path="/de/convert/doc-to-txt" element={<DOCToTXTConverter />} />
        <Route path="/de/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/de/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/de/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/de/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/de/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/de/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/de/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/de/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        
        {/* New Languages Converter Routes - HEIF to PNG */}
        <Route path="/id/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/sv/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/es/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/fr/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/it/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/nl/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/pt/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/vi/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/tr/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/ru/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/ar/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/th/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/ja/convert/heif-to-png" element={<HEIFtoPNGConventer />} />
        <Route path="/zh/convert/heif-to-png" element={<HEIFtoPNGConventer />} />

        {/* New Languages Converter Routes - HEIF to JPG */}
        <Route path="/id/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/sv/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/es/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/fr/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/it/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/nl/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/pt/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/vi/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/tr/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/ru/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/ar/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/th/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/ja/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />
        <Route path="/zh/convert/heif-to-jpg" element={<HEIFtoJPGConventer />} />

        {/* New Languages Converter Routes - CSV to DOCX */}
        <Route path="/id/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/sv/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/es/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/fr/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/it/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/nl/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/pt/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/vi/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/tr/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/ru/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/ar/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/th/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/ja/convert/csv-to-docx" element={<CSVToDOCXConverter />} />
        <Route path="/zh/convert/csv-to-docx" element={<CSVToDOCXConverter />} />

        <Route path="/de/convert/docx-to-csv" element={<DOCXToCSVConverter />} />
        <Route path="/de/convert/docx-to-epub" element={<DOCXToEPUBConverter />} />
        <Route path="/de/convert/docx-to-mobi" element={<DOCXToMOBIConverter />} />
        <Route path="/de/convert/docx-to-odt" element={<DOCXToODTConverter />} />
        <Route path="/de/convert/docx-to-txt" element={<DOCXToTXTConverter />} />
        <Route path="/de/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/de/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/de/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/de/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/de/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/de/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/de/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/de/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/de/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/de/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/de/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/de/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/de/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/de/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/de/convert/epub-to-xlsx" element={<EPUBToXLSXConverter />} />

        {/* New Languages Converter Routes - CR2 to ICO */}
        <Route path="/id/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/sv/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/es/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/fr/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/it/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/nl/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/pt/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/vi/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/tr/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/ru/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/ar/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/th/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/ja/convert/cr2-to-ico" element={<CR2ToICOConverter />} />
        <Route path="/zh/convert/cr2-to-ico" element={<CR2ToICOConverter />} />

        {/* New Languages Converter Routes - CR2 to WebP */}
        <Route path="/id/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/sv/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/es/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/fr/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/it/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/nl/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/pt/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/vi/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/tr/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/ru/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/ar/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/th/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/ja/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />
        <Route path="/zh/convert/cr2-to-webp" element={<CR2ToWebPConverter />} />

        {/* New Languages Converter Routes - HEIC to SVG */}
        <Route path="/id/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/sv/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/es/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/fr/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/it/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/nl/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/pt/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/vi/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/tr/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/ru/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/ar/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/th/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/ja/convert/heic-to-svg" element={<HEICtoSVGConverter />} />
        <Route path="/zh/convert/heic-to-svg" element={<HEICtoSVGConverter />} />

        {/* New Languages Converter Routes - HEIC to PDF */}
        <Route path="/id/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/sv/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/es/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/fr/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/it/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/nl/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/pt/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/vi/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/tr/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/ru/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/ar/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/th/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/ja/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />
        <Route path="/zh/convert/heic-to-pdf" element={<HEICtoPDFConverter />} />

        {/* New Languages Converter Routes - HEIC to PNG */}
        <Route path="/id/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/sv/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/es/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/fr/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/it/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/nl/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/pt/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/vi/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/tr/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/ru/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/ar/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/th/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/ja/convert/heic-to-png" element={<HEICtoPNGConventer />} />
        <Route path="/zh/convert/heic-to-png" element={<HEICtoPNGConventer />} />

        {/* New Languages Converter Routes - HEIC to EPS */}
        <Route path="/id/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/sv/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/es/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/fr/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/it/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/nl/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/pt/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/vi/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/tr/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/ru/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/ar/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/th/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/ja/convert/heic-to-eps" element={<HEICtoEPSConventer />} />
        <Route path="/zh/convert/heic-to-eps" element={<HEICtoEPSConventer />} />

        {/* New Languages Converter Routes - HEIC to WebP */}
        <Route path="/id/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/sv/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/es/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/fr/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/it/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/nl/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/pt/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/vi/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/tr/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/ru/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/ar/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/th/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/ja/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />
        <Route path="/zh/convert/heic-to-webp" element={<HEICtoWEBPConventer />} />

        {/* New Languages Converter Routes - HEIF to WebP */}
        <Route path="/id/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/sv/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/es/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/fr/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/it/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/nl/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/pt/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/vi/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/tr/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/ru/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/ar/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/th/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/ja/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />
        <Route path="/zh/convert/heif-to-webp" element={<HEIFtoWEBPConventer />} />

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

        {/* Polish (PL) Viewer Routes */}
        <Route path="/pl/viewers" element={<Viewers />} />
        <Route path="/pl/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/pl/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/pl/viewers/png" element={<PNGViewer />} />
        <Route path="/pl/viewers/webp" element={<WebPViewer />} />
        <Route path="/pl/viewers/gif" element={<GIFViewer />} />
        <Route path="/pl/viewers/svg" element={<SVGViewer />} />
        <Route path="/pl/viewers/bmp" element={<BMPViewer />} />
        <Route path="/pl/viewers/ico" element={<ICOViewer />} />
        <Route path="/pl/viewers/heic" element={<HEICViewer />} />
        <Route path="/pl/viewers/heif" element={<HEICViewer />} />
        <Route path="/pl/viewers/avif" element={<AVIFViewer />} />
        <Route path="/pl/viewers/pdf" element={<PDFViewer />} />
        <Route path="/pl/viewers/rtf" element={<RTFViewer />} />
        <Route path="/pl/viewers/txt" element={<TXTViewer />} />
        <Route path="/pl/viewers/md" element={<MarkdownViewer />} />
        <Route path="/pl/viewers/markdown" element={<MarkdownViewer />} />
        <Route path="/pl/viewers/docx" element={<DOCXViewer />} />
        <Route path="/pl/viewers/doc" element={<DOCXViewer />} />
        <Route path="/pl/viewers/odt" element={<ODTViewer />} />
        <Route path="/pl/viewers/xlsx" element={<XLSXViewer />} />
        <Route path="/pl/viewers/excel" element={<XLSXViewer />} />
        <Route path="/pl/viewers/csv" element={<CSVViewer />} />
        <Route path="/pl/viewers/ods" element={<ODSViewer />} />
        <Route path="/pl/viewers/json" element={<JSONViewer />} />
        <Route path="/pl/viewers/xml" element={<XMLViewer />} />
        <Route path="/pl/viewers/html" element={<HTMLViewer />} />
        <Route path="/pl/viewers/htm" element={<HTMLViewer />} />
        <Route path="/pl/viewers/css" element={<CSSViewer />} />
        <Route path="/pl/viewers/js" element={<JSViewer />} />
        <Route path="/pl/viewers/javascript" element={<JSViewer />} />
        <Route path="/pl/viewers/py" element={<PythonViewer />} />
        <Route path="/pl/viewers/python" element={<PythonViewer />} />
        <Route path="/pl/viewers/nef" element={<NEFViewer />} />
        <Route path="/pl/viewers/cr2" element={<CR2Viewer />} />
        <Route path="/pl/viewers/dcr" element={<DCRViewer />} />
        <Route path="/pl/viewers/x3f" element={<X3FViewer />} />
        <Route path="/pl/viewers/arw" element={<ARWViewer />} />
        <Route path="/pl/viewers/raf" element={<RAFViewer />} />
        <Route path="/pl/viewers/orf" element={<ORFViewer />} />
        <Route path="/pl/viewers/dng" element={<DNGViewer />} />
        <Route path="/pl/viewers/pef" element={<PEFViewer />} />
        <Route path="/pl/viewers/odp" element={<ODPViewer />} />
        <Route path="/pl/viewers/otp" element={<OTPViewer />} />
        <Route path="/pl/viewers/pot" element={<POTViewer />} />
        <Route path="/pl/viewers/pps" element={<PPSViewer />} />
        <Route path="/pl/viewers/ppt" element={<PPTViewer />} />
        <Route path="/pl/viewers/sdd" element={<SDDViewer />} />
        <Route path="/pl/viewers/sx" element={<SXViewer />} />
        <Route path="/pl/viewers/stl" element={<STLViewer />} />

        {/* German (DE) Viewer Routes */}
        <Route path="/de/viewers" element={<Viewers />} />
        <Route path="/de/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/de/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/de/viewers/png" element={<PNGViewer />} />
        <Route path="/de/viewers/webp" element={<WebPViewer />} />
        <Route path="/de/viewers/gif" element={<GIFViewer />} />
        <Route path="/de/viewers/svg" element={<SVGViewer />} />
        <Route path="/de/viewers/bmp" element={<BMPViewer />} />
        <Route path="/de/viewers/ico" element={<ICOViewer />} />
        <Route path="/de/viewers/heic" element={<HEICViewer />} />
        <Route path="/de/viewers/heif" element={<HEICViewer />} />
        <Route path="/de/viewers/avif" element={<AVIFViewer />} />
        <Route path="/de/viewers/pdf" element={<PDFViewer />} />
        <Route path="/de/viewers/rtf" element={<RTFViewer />} />
        <Route path="/de/viewers/txt" element={<TXTViewer />} />
        <Route path="/de/viewers/md" element={<MarkdownViewer />} />
        <Route path="/de/viewers/markdown" element={<MarkdownViewer />} />
        <Route path="/de/viewers/docx" element={<DOCXViewer />} />
        <Route path="/de/viewers/doc" element={<DOCXViewer />} />
        <Route path="/de/viewers/odt" element={<ODTViewer />} />
        <Route path="/de/viewers/xlsx" element={<XLSXViewer />} />
        <Route path="/de/viewers/excel" element={<XLSXViewer />} />
        <Route path="/de/viewers/csv" element={<CSVViewer />} />
        <Route path="/de/viewers/ods" element={<ODSViewer />} />
        <Route path="/de/viewers/json" element={<JSONViewer />} />
        <Route path="/de/viewers/xml" element={<XMLViewer />} />
        <Route path="/de/viewers/html" element={<HTMLViewer />} />
        <Route path="/de/viewers/htm" element={<HTMLViewer />} />
        <Route path="/de/viewers/css" element={<CSSViewer />} />
        <Route path="/de/viewers/js" element={<JSViewer />} />
        <Route path="/de/viewers/javascript" element={<JSViewer />} />
        <Route path="/de/viewers/py" element={<PythonViewer />} />
        <Route path="/de/viewers/python" element={<PythonViewer />} />
        <Route path="/de/viewers/nef" element={<NEFViewer />} />
        <Route path="/de/viewers/cr2" element={<CR2Viewer />} />
        <Route path="/de/viewers/dcr" element={<DCRViewer />} />
        <Route path="/de/viewers/x3f" element={<X3FViewer />} />
        <Route path="/de/viewers/arw" element={<ARWViewer />} />
        <Route path="/de/viewers/raf" element={<RAFViewer />} />
        <Route path="/de/viewers/orf" element={<ORFViewer />} />
        <Route path="/de/viewers/dng" element={<DNGViewer />} />
        <Route path="/de/viewers/pef" element={<PEFViewer />} />
        <Route path="/de/viewers/odp" element={<ODPViewer />} />
        <Route path="/de/viewers/otp" element={<OTPViewer />} />
        <Route path="/de/viewers/pot" element={<POTViewer />} />
        <Route path="/de/viewers/pps" element={<PPSViewer />} />
        <Route path="/de/viewers/ppt" element={<PPTViewer />} />
        <Route path="/de/viewers/sdd" element={<SDDViewer />} />
        <Route path="/de/viewers/sx" element={<SXViewer />} />
        <Route path="/de/viewers/stl" element={<STLViewer />} />

        {/* Compression Routes */}
        <Route path="/compress/jpg" element={<JPGCompressor />} />
        <Route path="/compress/jpeg" element={<JPGCompressor />} />
        <Route path="/compress/png" element={<PNGCompressor />} />
        <Route path="/compress/pdf" element={<PDFCompressor />} />

        {/* Polish (PL) Compression Routes */}
        <Route path="/pl/compress/jpg" element={<JPGCompressor />} />
        <Route path="/pl/compress/jpeg" element={<JPGCompressor />} />
        <Route path="/pl/compress/png" element={<PNGCompressor />} />
        <Route path="/pl/compress/pdf" element={<PDFCompressor />} />

        {/* German (DE) Compression Routes */}
        <Route path="/de/compress/jpg" element={<JPGCompressor />} />
        <Route path="/de/compress/jpeg" element={<JPGCompressor />} />
        <Route path="/de/compress/png" element={<PNGCompressor />} />
        <Route path="/de/compress/pdf" element={<PDFCompressor />} />

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
        <Route path="/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/samples/sample-iso" element={<SampleIso />} />
        <Route path="/samples/sample-jar" element={<SampleJar />} />
        <Route path="/samples/sample-java" element={<SampleJava />} />
        <Route path="/samples/sample-jks" element={<SampleJks />} />
        <Route path="/samples/sample-json" element={<SampleJson />} />
        <Route path="/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/samples/sample-js" element={<SampleJs />} />
        <Route path="/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/samples/sample-key" element={<SampleKey />} />
        <Route path="/samples/sample-kml" element={<SampleKml />} />
        <Route path="/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/samples/sample-kt" element={<SampleKt />} />
        <Route path="/samples/sample-las" element={<SampleLas />} />
        <Route path="/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/samples/sample-lha" element={<SampleLha />} />
        <Route path="/samples/sample-log" element={<SampleLog />} />
        <Route path="/samples/sample-lua" element={<SampleLua />} />
        <Route path="/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/samples/sample-ma" element={<SampleMa />} />
        <Route path="/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/samples/sample-max" element={<SampleMax />} />
        <Route path="/samples/sample-mb" element={<SampleMb />} />
        <Route path="/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/samples/sample-md" element={<SampleMd />} />
        <Route path="/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/samples/sample-7z" element={<Sample7z />} />

        {/* Polish (PL) Sample Files Routes */}
        <Route path="/pl/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/pl/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/pl/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/pl/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/pl/samples/sample-xls" element={<SampleXls />} />
        <Route path="/pl/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/pl/samples/sample-xml" element={<SampleXml />} />
        <Route path="/pl/samples/sample-zip" element={<SampleZip />} />
        <Route path="/pl/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/pl/samples/sample-ods" element={<SampleOds />} />
        <Route path="/pl/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/pl/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/pl/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/pl/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/pl/samples/sample-aac" element={<SampleAac />} />
        <Route path="/pl/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/pl/samples/sample-ace" element={<SampleAce />} />
        <Route path="/pl/samples/sample-ai" element={<SampleAi />} />
        <Route path="/pl/samples/sample-aif" element={<SampleAif />} />
        <Route path="/pl/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/pl/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/pl/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/pl/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/pl/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/pl/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/pl/samples/sample-apk" element={<SampleApk />} />
        <Route path="/pl/samples/sample-apng" element={<SampleApng />} />
        <Route path="/pl/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/pl/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/pl/samples/sample-arj" element={<SampleArj />} />
        <Route path="/pl/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/pl/samples/sample-ase" element={<SampleAse />} />
        <Route path="/pl/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/pl/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/pl/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/pl/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/pl/samples/sample-bat" element={<SampleBat />} />
        <Route path="/pl/samples/sample-bib" element={<SampleBib />} />
        <Route path="/pl/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/pl/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/pl/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/pl/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/pl/samples/sample-c" element={<SampleC />} />
        <Route path="/pl/samples/sample-cab" element={<SampleCab />} />
        <Route path="/pl/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/pl/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/pl/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/pl/samples/sample-conf" element={<SampleConf />} />
        <Route path="/pl/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/pl/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/pl/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/pl/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/pl/samples/sample-cs" element={<SampleCs />} />
        <Route path="/pl/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/pl/samples/sample-css" element={<SampleCss />} />
        <Route path="/pl/samples/sample-cue" element={<SampleCue />} />
        <Route path="/pl/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/pl/samples/sample-dav" element={<SampleDav />} />
        <Route path="/pl/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/pl/samples/sample-dds" element={<SampleDds />} />
        <Route path="/pl/samples/sample-dem" element={<SampleDem />} />
        <Route path="/pl/samples/sample-der" element={<SampleDer />} />
        <Route path="/pl/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/pl/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/pl/samples/sample-dng" element={<SampleDng />} />
        <Route path="/pl/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/pl/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/pl/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/pl/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/pl/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/pl/samples/sample-elf" element={<SampleElf />} />
        <Route path="/pl/samples/sample-eps" element={<SampleEps />} />
        <Route path="/pl/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/pl/samples/sample-exe" element={<SampleExe />} />
        <Route path="/pl/samples/sample-exr" element={<SampleExr />} />
        <Route path="/pl/samples/sample-gz" element={<SampleGz />} />
        <Route path="/pl/samples/sample-h" element={<SampleH />} />
        <Route path="/pl/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/pl/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/pl/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/pl/samples/sample-hex" element={<SampleHex />} />
        <Route path="/pl/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/pl/samples/sample-html" element={<SampleHtml />} />
        <Route path="/pl/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/pl/samples/sample-ico" element={<SampleIco />} />
        <Route path="/pl/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/pl/samples/sample-iges" element={<SampleIges />} />
        <Route path="/pl/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/pl/samples/sample-img" element={<SampleImg />} />
        <Route path="/pl/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/pl/samples/sample-ini" element={<SampleIni />} />
        <Route path="/pl/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/pl/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/pl/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/pl/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/pl/samples/sample-iso" element={<SampleIso />} />
        <Route path="/pl/samples/sample-jar" element={<SampleJar />} />
        <Route path="/pl/samples/sample-java" element={<SampleJava />} />
        <Route path="/pl/samples/sample-jks" element={<SampleJks />} />
        <Route path="/pl/samples/sample-json" element={<SampleJson />} />
        <Route path="/pl/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/pl/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/pl/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/pl/samples/sample-js" element={<SampleJs />} />
        <Route path="/pl/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/pl/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/pl/samples/sample-key" element={<SampleKey />} />
        <Route path="/pl/samples/sample-kml" element={<SampleKml />} />
        <Route path="/pl/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/pl/samples/sample-kt" element={<SampleKt />} />
        <Route path="/pl/samples/sample-las" element={<SampleLas />} />
        <Route path="/pl/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/pl/samples/sample-lha" element={<SampleLha />} />
        <Route path="/pl/samples/sample-log" element={<SampleLog />} />
        <Route path="/pl/samples/sample-lua" element={<SampleLua />} />
        <Route path="/pl/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/pl/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/pl/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/pl/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/pl/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/pl/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/pl/samples/sample-ma" element={<SampleMa />} />
        <Route path="/pl/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/pl/samples/sample-max" element={<SampleMax />} />
        <Route path="/pl/samples/sample-mb" element={<SampleMb />} />
        <Route path="/pl/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/pl/samples/sample-md" element={<SampleMd />} />
        <Route path="/pl/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/pl/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/pl/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/pl/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/pl/samples/sample-7z" element={<Sample7z />} />

        {/* German (DE) Sample Files Routes */}
        <Route path="/de/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/de/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/de/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/de/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/de/samples/sample-xls" element={<SampleXls />} />
        <Route path="/de/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/de/samples/sample-xml" element={<SampleXml />} />
        <Route path="/de/samples/sample-zip" element={<SampleZip />} />
        <Route path="/de/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/de/samples/sample-ods" element={<SampleOds />} />
        <Route path="/de/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/de/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/de/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/de/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/de/samples/sample-aac" element={<SampleAac />} />
        <Route path="/de/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/de/samples/sample-ace" element={<SampleAce />} />
        <Route path="/de/samples/sample-ai" element={<SampleAi />} />
        <Route path="/de/samples/sample-aif" element={<SampleAif />} />
        <Route path="/de/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/de/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/de/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/de/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/de/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/de/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/de/samples/sample-apk" element={<SampleApk />} />
        <Route path="/de/samples/sample-apng" element={<SampleApng />} />
        <Route path="/de/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/de/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/de/samples/sample-arj" element={<SampleArj />} />
        <Route path="/de/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/de/samples/sample-ase" element={<SampleAse />} />
        <Route path="/de/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/de/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/de/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/de/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/de/samples/sample-bat" element={<SampleBat />} />
        <Route path="/de/samples/sample-bib" element={<SampleBib />} />
        <Route path="/de/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/de/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/de/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/de/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/de/samples/sample-c" element={<SampleC />} />
        <Route path="/de/samples/sample-cab" element={<SampleCab />} />
        <Route path="/de/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/de/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/de/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/de/samples/sample-conf" element={<SampleConf />} />
        <Route path="/de/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/de/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/de/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/de/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/de/samples/sample-cs" element={<SampleCs />} />
        <Route path="/de/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/de/samples/sample-css" element={<SampleCss />} />
        <Route path="/de/samples/sample-cue" element={<SampleCue />} />
        <Route path="/de/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/de/samples/sample-dav" element={<SampleDav />} />
        <Route path="/de/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/de/samples/sample-dds" element={<SampleDds />} />
        <Route path="/de/samples/sample-dem" element={<SampleDem />} />
        <Route path="/de/samples/sample-der" element={<SampleDer />} />
        <Route path="/de/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/de/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/de/samples/sample-dng" element={<SampleDng />} />
        <Route path="/de/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/de/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/de/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/de/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/de/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/de/samples/sample-elf" element={<SampleElf />} />
        <Route path="/de/samples/sample-eps" element={<SampleEps />} />
        <Route path="/de/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/de/samples/sample-exe" element={<SampleExe />} />
        <Route path="/de/samples/sample-exr" element={<SampleExr />} />
        <Route path="/de/samples/sample-gz" element={<SampleGz />} />
        <Route path="/de/samples/sample-h" element={<SampleH />} />
        <Route path="/de/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/de/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/de/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/de/samples/sample-hex" element={<SampleHex />} />
        <Route path="/de/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/de/samples/sample-html" element={<SampleHtml />} />
        <Route path="/de/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/de/samples/sample-ico" element={<SampleIco />} />
        <Route path="/de/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/de/samples/sample-iges" element={<SampleIges />} />
        <Route path="/de/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/de/samples/sample-img" element={<SampleImg />} />
        <Route path="/de/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/de/samples/sample-ini" element={<SampleIni />} />
        <Route path="/de/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/de/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/de/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/de/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/de/samples/sample-iso" element={<SampleIso />} />
        <Route path="/de/samples/sample-jar" element={<SampleJar />} />
        <Route path="/de/samples/sample-java" element={<SampleJava />} />
        <Route path="/de/samples/sample-jks" element={<SampleJks />} />
        <Route path="/de/samples/sample-json" element={<SampleJson />} />
        <Route path="/de/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/de/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/de/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/de/samples/sample-js" element={<SampleJs />} />
        <Route path="/de/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/de/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/de/samples/sample-key" element={<SampleKey />} />
        <Route path="/de/samples/sample-kml" element={<SampleKml />} />
        <Route path="/de/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/de/samples/sample-kt" element={<SampleKt />} />
        <Route path="/de/samples/sample-las" element={<SampleLas />} />
        <Route path="/de/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/de/samples/sample-lha" element={<SampleLha />} />
        <Route path="/de/samples/sample-log" element={<SampleLog />} />
        <Route path="/de/samples/sample-lua" element={<SampleLua />} />
        <Route path="/de/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/de/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/de/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/de/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/de/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/de/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/de/samples/sample-ma" element={<SampleMa />} />
        <Route path="/de/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/de/samples/sample-max" element={<SampleMax />} />
        <Route path="/de/samples/sample-mb" element={<SampleMb />} />
        <Route path="/de/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/de/samples/sample-md" element={<SampleMd />} />
        <Route path="/de/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/de/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/de/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/de/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/de/samples/sample-7z" element={<Sample7z />} />

        {/* 404 - catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
