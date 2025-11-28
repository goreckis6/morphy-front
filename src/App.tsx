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
        <Route path="/pl/viewers" element={<Viewers />} />
        <Route path="/de/viewers" element={<Viewers />} />
        <Route path="/id/viewers" element={<Viewers />} />
        <Route path="/sv/viewers" element={<Viewers />} />
        <Route path="/es/viewers" element={<Viewers />} />
        <Route path="/fr/viewers" element={<Viewers />} />
        <Route path="/it/viewers" element={<Viewers />} />
        <Route path="/nl/viewers" element={<Viewers />} />
        <Route path="/pt/viewers" element={<Viewers />} />
        <Route path="/vi/viewers" element={<Viewers />} />
        <Route path="/tr/viewers" element={<Viewers />} />
        <Route path="/ru/viewers" element={<Viewers />} />
        <Route path="/ar/viewers" element={<Viewers />} />
        <Route path="/th/viewers" element={<Viewers />} />
        <Route path="/ja/viewers" element={<Viewers />} />
        <Route path="/zh/viewers" element={<Viewers />} />

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
        <Route path="/id/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/sv/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/es/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/fr/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/it/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/nl/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/pt/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/vi/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/tr/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/ru/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/ar/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/th/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/ja/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />
        <Route path="/zh/yt-thumbnail-downloader" element={<YTThumbnailDownloader />} />

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
        <Route path="/id/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/sv/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/es/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/fr/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/it/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/nl/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/pt/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/vi/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/tr/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/ru/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/ar/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/th/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/ja/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/zh/convert/csv-to-json" element={<CSVToJSONConverter />} />
        <Route path="/de/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/id/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/sv/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/es/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/fr/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/it/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/nl/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/pt/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/vi/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/tr/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/ru/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/ar/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/th/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/ja/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/zh/convert/csv-to-md" element={<CSVToMDConverter />} />
        <Route path="/de/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/id/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/sv/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/es/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/fr/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/it/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/nl/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/pt/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/vi/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/tr/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/ru/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/ar/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/th/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/ja/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/zh/convert/csv-to-mobi" element={<CSVToMOBIConverter />} />
        <Route path="/de/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/id/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/sv/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/es/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/fr/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/it/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/nl/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/pt/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/vi/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/tr/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/ru/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/ar/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/th/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/ja/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/zh/convert/csv-to-ndjson" element={<CSVToNDJSONConverter />} />
        <Route path="/de/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/id/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/sv/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/es/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/fr/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/it/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/nl/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/pt/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/vi/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/tr/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/ru/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/ar/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/th/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/ja/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/zh/convert/csv-to-parquet" element={<CSVToParquetConverter />} />
        <Route path="/id/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/sv/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/es/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/fr/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/it/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/nl/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/pt/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/vi/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/tr/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/ru/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/ar/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/th/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/ja/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/zh/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/id/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/sv/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/es/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/fr/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/it/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/nl/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/pt/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/vi/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/tr/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/ru/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/ar/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/th/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/ja/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/zh/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/id/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/sv/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/es/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/fr/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/it/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/nl/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/pt/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/vi/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/tr/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/ru/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/ar/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/th/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/ja/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/zh/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/de/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/id/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/sv/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/es/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/fr/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/it/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/nl/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/pt/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/vi/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/tr/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/ru/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/ar/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/th/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/ja/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/zh/convert/csv-to-odp" element={<CSVToODPConverter />} />
        <Route path="/de/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/id/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/sv/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/es/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/fr/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/it/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/nl/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/pt/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/vi/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/tr/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/ru/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/ar/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/th/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/ja/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/zh/convert/csv-to-odt" element={<CSVToODTConverter />} />
        <Route path="/id/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/sv/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/es/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/fr/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/it/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/nl/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/pt/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/vi/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/tr/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/ru/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/ar/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/th/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/ja/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/zh/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/de/convert/csv-to-pdf" element={<CSVToPDFConverter />} />
        <Route path="/id/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/sv/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/es/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/fr/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/it/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/nl/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/pt/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/vi/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/tr/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/ru/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/ar/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/th/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/ja/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/zh/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/de/convert/csv-to-ppt" element={<CSVToPPTConverter />} />
        <Route path="/id/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/sv/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/es/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/fr/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/it/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/nl/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/pt/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/vi/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/tr/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/ru/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/ar/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/th/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/ja/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/zh/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/de/convert/csv-to-pptx" element={<CSVToPPTXConverter />} />
        <Route path="/id/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/sv/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/es/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/fr/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/it/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/nl/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/pt/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/vi/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/tr/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/ru/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/ar/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/th/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/ja/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/zh/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/de/convert/csv-to-rtf" element={<CSVToRTFConverter />} />
        <Route path="/de/convert/csv-to-sql" element={<CSVToSQLConverter />} />
        <Route path="/de/convert/csv-to-toml" element={<CSVToTOMLConverter />} />
        <Route path="/de/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/id/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/sv/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/es/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/fr/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/it/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/nl/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/pt/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/vi/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/tr/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/ru/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/ar/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/th/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/ja/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/zh/convert/csv-to-txt" element={<CSVToTXTConverter />} />
        <Route path="/de/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/id/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/sv/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/es/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/fr/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/it/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/nl/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/pt/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/vi/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/tr/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/ru/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/ar/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/th/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/ja/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/zh/convert/csv-to-xls" element={<CSVToXLSConverter />} />
        <Route path="/de/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/id/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/sv/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/es/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/fr/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/it/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/nl/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/pt/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/vi/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/tr/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/ru/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/ar/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/th/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/ja/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/zh/convert/csv-to-xlsx" element={<CSVToXLSXConverter />} />
        <Route path="/de/convert/csv-to-xml" element={<CSVToXMLConverter />} />
        <Route path="/de/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/id/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/sv/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/es/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/fr/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/it/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/nl/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/pt/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/vi/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/tr/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/ru/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/ar/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/th/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/ja/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/zh/convert/csv-to-yaml" element={<CSVToYAMLConverter />} />
        <Route path="/de/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/id/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/sv/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/es/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/fr/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/it/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/nl/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/pt/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/vi/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/tr/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/ru/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/ar/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/th/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/ja/convert/dng-to-webp" element={<DNGToWebPConverter />} />
        <Route path="/zh/convert/dng-to-webp" element={<DNGToWebPConverter />} />
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
        <Route path="/id/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/sv/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/es/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/fr/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/it/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/nl/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/pt/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/vi/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/tr/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/ru/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/ar/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/th/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/ja/convert/eps-to-webp" element={<EPSToWebPConverter />} />
        <Route path="/zh/convert/eps-to-webp" element={<EPSToWebPConverter />} />
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

        <Route path="/id/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/id/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/id/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/id/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/id/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/sv/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/sv/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/sv/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/sv/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/sv/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/es/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/es/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/es/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/es/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/es/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/fr/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/fr/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/fr/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/fr/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/fr/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/it/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/it/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/it/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/it/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/it/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/nl/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/nl/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/nl/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/nl/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/nl/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/pt/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/pt/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/pt/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/pt/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/pt/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/vi/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/vi/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/vi/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/vi/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/vi/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/tr/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/tr/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/tr/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/tr/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/tr/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/ru/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/ru/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/ru/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/ru/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/ru/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/ar/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/ar/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/ar/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/ar/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/ar/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/th/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/th/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/th/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/th/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/th/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/ja/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/ja/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/ja/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/ja/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/ja/convert/epub-to-txt" element={<EPUBToTXTConverter />} />
        <Route path="/zh/convert/epub-to-pdf" element={<EPUBToPDFConverter />} />
        <Route path="/zh/convert/epub-to-ppt" element={<EPUBToPPTConverter />} />
        <Route path="/zh/convert/epub-to-pptx" element={<EPUBToPPTXConverter />} />
        <Route path="/zh/convert/epub-to-rtf" element={<EPUBToRTFConverter />} />
        <Route path="/zh/convert/epub-to-txt" element={<EPUBToTXTConverter />} />

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

        {/* New Languages Converter Routes - EPUB to CSV */}
        <Route path="/id/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/sv/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/es/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/fr/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/it/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/nl/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/pt/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/vi/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/tr/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/ru/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/ar/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/th/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/ja/convert/epub-to-csv" element={<EPUBToCSVConverter />} />
        <Route path="/zh/convert/epub-to-csv" element={<EPUBToCSVConverter />} />

        {/* New Languages Converter Routes - EPUB to DOC */}
        <Route path="/id/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/sv/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/es/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/fr/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/it/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/nl/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/pt/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/vi/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/tr/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/ru/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/ar/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/th/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/ja/convert/epub-to-doc" element={<EPUBToDOCConverter />} />
        <Route path="/zh/convert/epub-to-doc" element={<EPUBToDOCConverter />} />

        {/* New Languages Converter Routes - EPUB to DOCX */}
        <Route path="/id/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/sv/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/es/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/fr/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/it/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/nl/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/pt/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/vi/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/tr/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/ru/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/ar/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/th/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/ja/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />
        <Route path="/zh/convert/epub-to-docx" element={<EPUBToDOCXConverter />} />

        {/* EPUB to HTML Routes for All Languages */}
        <Route path="/id/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/sv/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/es/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/fr/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/it/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/nl/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/pt/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/vi/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/tr/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/ru/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/ar/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/th/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/ja/convert/epub-to-html" element={<EPUBToHTMLConverter />} />
        <Route path="/zh/convert/epub-to-html" element={<EPUBToHTMLConverter />} />

        {/* EPUB to MD Routes for All Languages */}
        <Route path="/id/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/sv/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/es/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/fr/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/it/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/nl/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/pt/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/vi/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/tr/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/ru/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/ar/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/th/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/ja/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/zh/convert/epub-to-md" element={<EPUBToMDConverter />} />
        <Route path="/id/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/sv/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/es/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/fr/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/it/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/nl/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/pt/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/vi/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/tr/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/ru/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/ar/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/th/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/ja/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />
        <Route path="/zh/convert/epub-to-mobi" element={<EPUBToMOBIConverter />} />

        {/* New Languages Converter Routes - EPUB to ODP */}
        <Route path="/id/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/id/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/sv/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/sv/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/es/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/es/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/fr/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/fr/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/it/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/it/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/nl/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/nl/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/pt/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/pt/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/vi/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/vi/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/tr/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/tr/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/ru/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/ru/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/ar/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/ar/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/th/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/th/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/ja/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/ja/convert/epub-to-odt" element={<EPUBToODTConverter />} />
        <Route path="/zh/convert/epub-to-odp" element={<EPUBToODPConverter />} />
        <Route path="/zh/convert/epub-to-odt" element={<EPUBToODTConverter />} />

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
        <Route path="/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/viewers/jpeg/editor" element={<JPEGViewer />} />
        <Route path="/viewers/png" element={<PNGViewer />} />
        <Route path="/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/viewers/webp" element={<WebPViewer />} />
        <Route path="/viewers/webp/editor" element={<WebPViewer />} />
        <Route path="/viewers/gif" element={<GIFViewer />} />
        <Route path="/viewers/gif/editor" element={<GIFViewer />} />
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
        <Route path="/pl/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/pl/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/pl/viewers/jpeg/editor" element={<JPEGViewer />} />
        <Route path="/pl/viewers/png" element={<PNGViewer />} />
        <Route path="/pl/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/pl/viewers/webp" element={<WebPViewer />} />
        <Route path="/pl/viewers/webp/editor" element={<WebPViewer />} />
        <Route path="/pl/viewers/gif" element={<GIFViewer />} />
        <Route path="/pl/viewers/gif/editor" element={<GIFViewer />} />
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
        <Route path="/de/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/de/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/de/viewers/jpeg/editor" element={<JPEGViewer />} />
        <Route path="/de/viewers/png" element={<PNGViewer />} />
        <Route path="/de/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/de/viewers/webp" element={<WebPViewer />} />
        <Route path="/de/viewers/webp/editor" element={<WebPViewer />} />
        <Route path="/de/viewers/gif" element={<GIFViewer />} />
        <Route path="/de/viewers/gif/editor" element={<GIFViewer />} />
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

        {/* Indonesian (ID) Viewer Routes */}
        <Route path="/id/viewers" element={<Viewers />} />
        <Route path="/id/viewers/png" element={<PNGViewer />} />
        <Route path="/id/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/id/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/id/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/id/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/id/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Swedish (SV) Viewer Routes */}
        <Route path="/sv/viewers" element={<Viewers />} />
        <Route path="/sv/viewers/png" element={<PNGViewer />} />
        <Route path="/sv/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/sv/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/sv/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/sv/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/sv/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Spanish (ES) Viewer Routes */}
        <Route path="/es/viewers" element={<Viewers />} />
        <Route path="/es/viewers/png" element={<PNGViewer />} />
        <Route path="/es/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/es/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/es/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/es/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/es/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* French (FR) Viewer Routes */}
        <Route path="/fr/viewers" element={<Viewers />} />
        <Route path="/fr/viewers/png" element={<PNGViewer />} />
        <Route path="/fr/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/fr/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/fr/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/fr/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/fr/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Italian (IT) Viewer Routes */}
        <Route path="/it/viewers" element={<Viewers />} />
        <Route path="/it/viewers/png" element={<PNGViewer />} />
        <Route path="/it/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/it/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/it/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/it/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/it/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Dutch (NL) Viewer Routes */}
        <Route path="/nl/viewers" element={<Viewers />} />
        <Route path="/nl/viewers/png" element={<PNGViewer />} />
        <Route path="/nl/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/nl/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/nl/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/nl/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/nl/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Portuguese (PT) Viewer Routes */}
        <Route path="/pt/viewers" element={<Viewers />} />
        <Route path="/pt/viewers/png" element={<PNGViewer />} />
        <Route path="/pt/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/pt/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/pt/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/pt/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/pt/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Vietnamese (VI) Viewer Routes */}
        <Route path="/vi/viewers" element={<Viewers />} />
        <Route path="/vi/viewers/png" element={<PNGViewer />} />
        <Route path="/vi/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/vi/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/vi/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/vi/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/vi/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Turkish (TR) Viewer Routes */}
        <Route path="/tr/viewers" element={<Viewers />} />
        <Route path="/tr/viewers/png" element={<PNGViewer />} />
        <Route path="/tr/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/tr/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/tr/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/tr/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/tr/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Russian (RU) Viewer Routes */}
        <Route path="/ru/viewers" element={<Viewers />} />
        <Route path="/ru/viewers/png" element={<PNGViewer />} />
        <Route path="/ru/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/ru/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/ru/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/ru/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/ru/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Arabic (AR) Viewer Routes */}
        <Route path="/ar/viewers" element={<Viewers />} />
        <Route path="/ar/viewers/png" element={<PNGViewer />} />
        <Route path="/ar/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/ar/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/ar/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/ar/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/ar/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Thai (TH) Viewer Routes */}
        <Route path="/th/viewers" element={<Viewers />} />
        <Route path="/th/viewers/png" element={<PNGViewer />} />
        <Route path="/th/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/th/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/th/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/th/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/th/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Japanese (JA) Viewer Routes */}
        <Route path="/ja/viewers" element={<Viewers />} />
        <Route path="/ja/viewers/png" element={<PNGViewer />} />
        <Route path="/ja/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/ja/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/ja/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/ja/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/ja/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Chinese (ZH) Viewer Routes */}
        <Route path="/zh/viewers" element={<Viewers />} />
        <Route path="/zh/viewers/png" element={<PNGViewer />} />
        <Route path="/zh/viewers/png/editor" element={<PNGViewer />} />
        <Route path="/zh/viewers/jpg" element={<JPEGViewer />} />
        <Route path="/zh/viewers/jpg/editor" element={<JPEGViewer />} />
        <Route path="/zh/viewers/jpeg" element={<JPEGViewer />} />
        <Route path="/zh/viewers/jpeg/editor" element={<JPEGViewer />} />

        {/* Indonesian (ID) WebP Viewer Routes */}
        <Route path="/id/viewers/webp" element={<WebPViewer />} />
        <Route path="/id/viewers/webp/editor" element={<WebPViewer />} />

        {/* Swedish (SV) WebP Viewer Routes */}
        <Route path="/sv/viewers/webp" element={<WebPViewer />} />
        <Route path="/sv/viewers/webp/editor" element={<WebPViewer />} />

        {/* Spanish (ES) WebP Viewer Routes */}
        <Route path="/es/viewers/webp" element={<WebPViewer />} />
        <Route path="/es/viewers/webp/editor" element={<WebPViewer />} />

        {/* French (FR) WebP Viewer Routes */}
        <Route path="/fr/viewers/webp" element={<WebPViewer />} />
        <Route path="/fr/viewers/webp/editor" element={<WebPViewer />} />

        {/* Italian (IT) WebP Viewer Routes */}
        <Route path="/it/viewers/webp" element={<WebPViewer />} />
        <Route path="/it/viewers/webp/editor" element={<WebPViewer />} />

        {/* Dutch (NL) WebP Viewer Routes */}
        <Route path="/nl/viewers/webp" element={<WebPViewer />} />
        <Route path="/nl/viewers/webp/editor" element={<WebPViewer />} />

        {/* Portuguese (PT) WebP Viewer Routes */}
        <Route path="/pt/viewers/webp" element={<WebPViewer />} />
        <Route path="/pt/viewers/webp/editor" element={<WebPViewer />} />

        {/* Vietnamese (VI) WebP Viewer Routes */}
        <Route path="/vi/viewers/webp" element={<WebPViewer />} />
        <Route path="/vi/viewers/webp/editor" element={<WebPViewer />} />

        {/* Turkish (TR) WebP Viewer Routes */}
        <Route path="/tr/viewers/webp" element={<WebPViewer />} />
        <Route path="/tr/viewers/webp/editor" element={<WebPViewer />} />

        {/* Russian (RU) WebP Viewer Routes */}
        <Route path="/ru/viewers/webp" element={<WebPViewer />} />
        <Route path="/ru/viewers/webp/editor" element={<WebPViewer />} />

        {/* Arabic (AR) WebP Viewer Routes */}
        <Route path="/ar/viewers/webp" element={<WebPViewer />} />
        <Route path="/ar/viewers/webp/editor" element={<WebPViewer />} />

        {/* Thai (TH) WebP Viewer Routes */}
        <Route path="/th/viewers/webp" element={<WebPViewer />} />
        <Route path="/th/viewers/webp/editor" element={<WebPViewer />} />

        {/* Japanese (JA) WebP Viewer Routes */}
        <Route path="/ja/viewers/webp" element={<WebPViewer />} />
        <Route path="/ja/viewers/webp/editor" element={<WebPViewer />} />

        {/* Chinese (ZH) WebP Viewer Routes */}
        <Route path="/zh/viewers/webp" element={<WebPViewer />} />
        <Route path="/zh/viewers/webp/editor" element={<WebPViewer />} />

        {/* Indonesian (ID) GIF Viewer Routes */}
        <Route path="/id/viewers/gif" element={<GIFViewer />} />
        <Route path="/id/viewers/gif/editor" element={<GIFViewer />} />

        {/* Swedish (SV) GIF Viewer Routes */}
        <Route path="/sv/viewers/gif" element={<GIFViewer />} />
        <Route path="/sv/viewers/gif/editor" element={<GIFViewer />} />

        {/* Spanish (ES) GIF Viewer Routes */}
        <Route path="/es/viewers/gif" element={<GIFViewer />} />
        <Route path="/es/viewers/gif/editor" element={<GIFViewer />} />

        {/* French (FR) GIF Viewer Routes */}
        <Route path="/fr/viewers/gif" element={<GIFViewer />} />
        <Route path="/fr/viewers/gif/editor" element={<GIFViewer />} />

        {/* Italian (IT) GIF Viewer Routes */}
        <Route path="/it/viewers/gif" element={<GIFViewer />} />
        <Route path="/it/viewers/gif/editor" element={<GIFViewer />} />

        {/* Dutch (NL) GIF Viewer Routes */}
        <Route path="/nl/viewers/gif" element={<GIFViewer />} />
        <Route path="/nl/viewers/gif/editor" element={<GIFViewer />} />

        {/* Portuguese (PT) GIF Viewer Routes */}
        <Route path="/pt/viewers/gif" element={<GIFViewer />} />
        <Route path="/pt/viewers/gif/editor" element={<GIFViewer />} />

        {/* Vietnamese (VI) GIF Viewer Routes */}
        <Route path="/vi/viewers/gif" element={<GIFViewer />} />
        <Route path="/vi/viewers/gif/editor" element={<GIFViewer />} />

        {/* Turkish (TR) GIF Viewer Routes */}
        <Route path="/tr/viewers/gif" element={<GIFViewer />} />
        <Route path="/tr/viewers/gif/editor" element={<GIFViewer />} />

        {/* Russian (RU) GIF Viewer Routes */}
        <Route path="/ru/viewers/gif" element={<GIFViewer />} />
        <Route path="/ru/viewers/gif/editor" element={<GIFViewer />} />

        {/* Arabic (AR) GIF Viewer Routes */}
        <Route path="/ar/viewers/gif" element={<GIFViewer />} />
        <Route path="/ar/viewers/gif/editor" element={<GIFViewer />} />

        {/* Thai (TH) GIF Viewer Routes */}
        <Route path="/th/viewers/gif" element={<GIFViewer />} />
        <Route path="/th/viewers/gif/editor" element={<GIFViewer />} />

        {/* Japanese (JA) GIF Viewer Routes */}
        <Route path="/ja/viewers/gif" element={<GIFViewer />} />
        <Route path="/ja/viewers/gif/editor" element={<GIFViewer />} />

        {/* Chinese (ZH) GIF Viewer Routes */}
        <Route path="/zh/viewers/gif" element={<GIFViewer />} />
        <Route path="/zh/viewers/gif/editor" element={<GIFViewer />} />

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

        {/* Bahasa Indonesia (ID) Sample Files Routes */}
        <Route path="/id/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/id/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/id/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/id/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/id/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/id/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/id/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/id/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/id/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/id/samples/sample-xls" element={<SampleXls />} />
        <Route path="/id/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/id/samples/sample-xml" element={<SampleXml />} />
        <Route path="/id/samples/sample-html" element={<SampleHtml />} />
        <Route path="/id/samples/sample-ods" element={<SampleOds />} />
        <Route path="/id/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/id/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/id/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/id/samples/sample-bat" element={<SampleBat />} />
        <Route path="/id/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/id/samples/sample-bib" element={<SampleBib />} />
        <Route path="/id/samples/sample-c" element={<SampleC />} />
        <Route path="/id/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/id/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/id/samples/sample-conf" element={<SampleConf />} />
        <Route path="/id/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/id/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/id/samples/sample-h" element={<SampleH />} />
        <Route path="/id/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/id/samples/sample-hex" element={<SampleHex />} />
        <Route path="/id/samples/sample-cs" element={<SampleCs />} />
        <Route path="/id/samples/sample-css" element={<SampleCss />} />
        <Route path="/id/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/id/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/id/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/id/samples/sample-dem" element={<SampleDem />} />
        <Route path="/id/samples/sample-der" element={<SampleDer />} />
        <Route path="/id/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/id/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/id/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/id/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/id/samples/sample-ini" element={<SampleIni />} />
        <Route path="/id/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/id/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/id/samples/sample-java" element={<SampleJava />} />
        <Route path="/id/samples/sample-jks" element={<SampleJks />} />
        <Route path="/id/samples/sample-json" element={<SampleJson />} />
        <Route path="/id/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/id/samples/sample-js" element={<SampleJs />} />
        <Route path="/id/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/id/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/id/samples/sample-key" element={<SampleKey />} />
        <Route path="/id/samples/sample-kml" element={<SampleKml />} />
        <Route path="/id/samples/sample-kt" element={<SampleKt />} />
        <Route path="/id/samples/sample-log" element={<SampleLog />} />
        <Route path="/id/samples/sample-lua" element={<SampleLua />} />
        <Route path="/id/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/id/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/id/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/id/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/id/samples/sample-md" element={<SampleMd />} />
        <Route path="/id/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/id/samples/sample-apk" element={<SampleApk />} />
        <Route path="/id/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/id/samples/sample-elf" element={<SampleElf />} />
        <Route path="/id/samples/sample-exe" element={<SampleExe />} />
        <Route path="/id/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/id/samples/sample-jar" element={<SampleJar />} />
        <Route path="/id/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/id/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/id/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/id/samples/sample-ai" element={<SampleAi />} />
        <Route path="/id/samples/sample-ase" element={<SampleAse />} />
        <Route path="/id/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/id/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/id/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/id/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/id/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/id/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/id/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/id/samples/sample-iges" element={<SampleIges />} />
        <Route path="/id/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/id/samples/sample-las" element={<SampleLas />} />
        <Route path="/id/samples/sample-ma" element={<SampleMa />} />
        <Route path="/id/samples/sample-max" element={<SampleMax />} />
        <Route path="/id/samples/sample-mb" element={<SampleMb />} />
        <Route path="/id/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/id/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/id/samples/sample-apng" element={<SampleApng />} />
        <Route path="/id/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/id/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/id/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/id/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/id/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/id/samples/sample-zip" element={<SampleZip />} />
        <Route path="/id/samples/sample-aac" element={<SampleAac />} />
        <Route path="/id/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/id/samples/sample-ace" element={<SampleAce />} />
        <Route path="/id/samples/sample-aif" element={<SampleAif />} />
        <Route path="/id/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/id/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/id/samples/sample-arj" element={<SampleArj />} />
        <Route path="/id/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/id/samples/sample-cab" element={<SampleCab />} />
        <Route path="/id/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/id/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/id/samples/sample-cue" element={<SampleCue />} />
        <Route path="/id/samples/sample-dav" element={<SampleDav />} />
        <Route path="/id/samples/sample-dds" element={<SampleDds />} />
        <Route path="/id/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/id/samples/sample-dng" element={<SampleDng />} />
        <Route path="/id/samples/sample-eps" element={<SampleEps />} />
        <Route path="/id/samples/sample-exr" element={<SampleExr />} />
        <Route path="/id/samples/sample-gz" element={<SampleGz />} />
        <Route path="/id/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/id/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/id/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/id/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/id/samples/sample-ico" element={<SampleIco />} />
        <Route path="/id/samples/sample-img" element={<SampleImg />} />
        <Route path="/id/samples/sample-iso" element={<SampleIso />} />
        <Route path="/id/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/id/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/id/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/id/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/id/samples/sample-lha" element={<SampleLha />} />
        <Route path="/id/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/id/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/id/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/id/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/id/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/id/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/id/samples/sample-7z" element={<Sample7z />} />

        {/* Svenska (SV) Sample Files Routes */}
        <Route path="/sv/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/sv/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/sv/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/sv/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/sv/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/sv/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/sv/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/sv/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/sv/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/sv/samples/sample-xls" element={<SampleXls />} />
        <Route path="/sv/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/sv/samples/sample-xml" element={<SampleXml />} />
        <Route path="/sv/samples/sample-html" element={<SampleHtml />} />
        <Route path="/sv/samples/sample-ods" element={<SampleOds />} />
        <Route path="/sv/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/sv/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/sv/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/sv/samples/sample-bat" element={<SampleBat />} />
        <Route path="/sv/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/sv/samples/sample-bib" element={<SampleBib />} />
        <Route path="/sv/samples/sample-c" element={<SampleC />} />
        <Route path="/sv/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/sv/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/sv/samples/sample-conf" element={<SampleConf />} />
        <Route path="/sv/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/sv/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/sv/samples/sample-h" element={<SampleH />} />
        <Route path="/sv/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/sv/samples/sample-hex" element={<SampleHex />} />
        <Route path="/sv/samples/sample-cs" element={<SampleCs />} />
        <Route path="/sv/samples/sample-css" element={<SampleCss />} />
        <Route path="/sv/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/sv/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/sv/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/sv/samples/sample-dem" element={<SampleDem />} />
        <Route path="/sv/samples/sample-der" element={<SampleDer />} />
        <Route path="/sv/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/sv/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/sv/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/sv/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/sv/samples/sample-ini" element={<SampleIni />} />
        <Route path="/sv/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/sv/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/sv/samples/sample-java" element={<SampleJava />} />
        <Route path="/sv/samples/sample-jks" element={<SampleJks />} />
        <Route path="/sv/samples/sample-json" element={<SampleJson />} />
        <Route path="/sv/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/sv/samples/sample-js" element={<SampleJs />} />
        <Route path="/sv/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/sv/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/sv/samples/sample-key" element={<SampleKey />} />
        <Route path="/sv/samples/sample-kml" element={<SampleKml />} />
        <Route path="/sv/samples/sample-kt" element={<SampleKt />} />
        <Route path="/sv/samples/sample-log" element={<SampleLog />} />
        <Route path="/sv/samples/sample-lua" element={<SampleLua />} />
        <Route path="/sv/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/sv/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/sv/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/sv/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/sv/samples/sample-md" element={<SampleMd />} />
        <Route path="/sv/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/sv/samples/sample-apk" element={<SampleApk />} />
        <Route path="/sv/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/sv/samples/sample-elf" element={<SampleElf />} />
        <Route path="/sv/samples/sample-exe" element={<SampleExe />} />
        <Route path="/sv/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/sv/samples/sample-jar" element={<SampleJar />} />
        <Route path="/sv/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/sv/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/sv/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/sv/samples/sample-ai" element={<SampleAi />} />
        <Route path="/sv/samples/sample-ase" element={<SampleAse />} />
        <Route path="/sv/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/sv/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/sv/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/sv/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/sv/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/sv/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/sv/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/sv/samples/sample-iges" element={<SampleIges />} />
        <Route path="/sv/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/sv/samples/sample-las" element={<SampleLas />} />
        <Route path="/sv/samples/sample-ma" element={<SampleMa />} />
        <Route path="/sv/samples/sample-max" element={<SampleMax />} />
        <Route path="/sv/samples/sample-mb" element={<SampleMb />} />
        <Route path="/sv/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/sv/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/sv/samples/sample-apng" element={<SampleApng />} />
        <Route path="/sv/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/sv/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/sv/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/sv/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/sv/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/sv/samples/sample-zip" element={<SampleZip />} />
        <Route path="/sv/samples/sample-aac" element={<SampleAac />} />
        <Route path="/sv/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/sv/samples/sample-ace" element={<SampleAce />} />
        <Route path="/sv/samples/sample-aif" element={<SampleAif />} />
        <Route path="/sv/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/sv/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/sv/samples/sample-arj" element={<SampleArj />} />
        <Route path="/sv/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/sv/samples/sample-cab" element={<SampleCab />} />
        <Route path="/sv/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/sv/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/sv/samples/sample-cue" element={<SampleCue />} />
        <Route path="/sv/samples/sample-dav" element={<SampleDav />} />
        <Route path="/sv/samples/sample-dds" element={<SampleDds />} />
        <Route path="/sv/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/sv/samples/sample-dng" element={<SampleDng />} />
        <Route path="/sv/samples/sample-eps" element={<SampleEps />} />
        <Route path="/sv/samples/sample-exr" element={<SampleExr />} />
        <Route path="/sv/samples/sample-gz" element={<SampleGz />} />
        <Route path="/sv/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/sv/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/sv/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/sv/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/sv/samples/sample-ico" element={<SampleIco />} />
        <Route path="/sv/samples/sample-img" element={<SampleImg />} />
        <Route path="/sv/samples/sample-iso" element={<SampleIso />} />
        <Route path="/sv/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/sv/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/sv/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/sv/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/sv/samples/sample-lha" element={<SampleLha />} />
        <Route path="/sv/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/sv/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/sv/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/sv/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/sv/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/sv/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/sv/samples/sample-7z" element={<Sample7z />} />

        {/* Español (ES) Sample Files Routes */}
        <Route path="/es/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/es/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/es/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/es/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/es/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/es/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/es/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/es/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/es/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/es/samples/sample-xls" element={<SampleXls />} />
        <Route path="/es/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/es/samples/sample-xml" element={<SampleXml />} />
        <Route path="/es/samples/sample-html" element={<SampleHtml />} />
        <Route path="/es/samples/sample-ods" element={<SampleOds />} />
        <Route path="/es/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/es/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/es/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/es/samples/sample-bat" element={<SampleBat />} />
        <Route path="/es/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/es/samples/sample-bib" element={<SampleBib />} />
        <Route path="/es/samples/sample-c" element={<SampleC />} />
        <Route path="/es/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/es/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/es/samples/sample-conf" element={<SampleConf />} />
        <Route path="/es/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/es/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/es/samples/sample-h" element={<SampleH />} />
        <Route path="/es/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/es/samples/sample-hex" element={<SampleHex />} />
        <Route path="/es/samples/sample-cs" element={<SampleCs />} />
        <Route path="/es/samples/sample-css" element={<SampleCss />} />
        <Route path="/es/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/es/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/es/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/es/samples/sample-dem" element={<SampleDem />} />
        <Route path="/es/samples/sample-der" element={<SampleDer />} />
        <Route path="/es/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/es/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/es/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/es/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/es/samples/sample-ini" element={<SampleIni />} />
        <Route path="/es/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/es/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/es/samples/sample-java" element={<SampleJava />} />
        <Route path="/es/samples/sample-jks" element={<SampleJks />} />
        <Route path="/es/samples/sample-json" element={<SampleJson />} />
        <Route path="/es/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/es/samples/sample-js" element={<SampleJs />} />
        <Route path="/es/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/es/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/es/samples/sample-key" element={<SampleKey />} />
        <Route path="/es/samples/sample-kml" element={<SampleKml />} />
        <Route path="/es/samples/sample-kt" element={<SampleKt />} />
        <Route path="/es/samples/sample-log" element={<SampleLog />} />
        <Route path="/es/samples/sample-lua" element={<SampleLua />} />
        <Route path="/es/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/es/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/es/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/es/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/es/samples/sample-md" element={<SampleMd />} />
        <Route path="/es/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/es/samples/sample-apk" element={<SampleApk />} />
        <Route path="/es/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/es/samples/sample-elf" element={<SampleElf />} />
        <Route path="/es/samples/sample-exe" element={<SampleExe />} />
        <Route path="/es/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/es/samples/sample-jar" element={<SampleJar />} />
        <Route path="/es/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/es/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/es/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/es/samples/sample-ai" element={<SampleAi />} />
        <Route path="/es/samples/sample-ase" element={<SampleAse />} />
        <Route path="/es/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/es/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/es/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/es/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/es/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/es/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/es/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/es/samples/sample-iges" element={<SampleIges />} />
        <Route path="/es/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/es/samples/sample-las" element={<SampleLas />} />
        <Route path="/es/samples/sample-ma" element={<SampleMa />} />
        <Route path="/es/samples/sample-max" element={<SampleMax />} />
        <Route path="/es/samples/sample-mb" element={<SampleMb />} />
        <Route path="/es/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/es/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/es/samples/sample-apng" element={<SampleApng />} />
        <Route path="/es/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/es/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/es/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/es/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/es/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/es/samples/sample-zip" element={<SampleZip />} />
        <Route path="/es/samples/sample-aac" element={<SampleAac />} />
        <Route path="/es/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/es/samples/sample-ace" element={<SampleAce />} />
        <Route path="/es/samples/sample-aif" element={<SampleAif />} />
        <Route path="/es/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/es/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/es/samples/sample-arj" element={<SampleArj />} />
        <Route path="/es/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/es/samples/sample-cab" element={<SampleCab />} />
        <Route path="/es/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/es/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/es/samples/sample-cue" element={<SampleCue />} />
        <Route path="/es/samples/sample-dav" element={<SampleDav />} />
        <Route path="/es/samples/sample-dds" element={<SampleDds />} />
        <Route path="/es/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/es/samples/sample-dng" element={<SampleDng />} />
        <Route path="/es/samples/sample-eps" element={<SampleEps />} />
        <Route path="/es/samples/sample-exr" element={<SampleExr />} />
        <Route path="/es/samples/sample-gz" element={<SampleGz />} />
        <Route path="/es/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/es/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/es/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/es/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/es/samples/sample-ico" element={<SampleIco />} />
        <Route path="/es/samples/sample-img" element={<SampleImg />} />
        <Route path="/es/samples/sample-iso" element={<SampleIso />} />
        <Route path="/es/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/es/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/es/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/es/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/es/samples/sample-lha" element={<SampleLha />} />
        <Route path="/es/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/es/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/es/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/es/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/es/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/es/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/es/samples/sample-7z" element={<Sample7z />} />

        {/* Français (FR) Sample Files Routes */}
        <Route path="/fr/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/fr/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/fr/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/fr/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/fr/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/fr/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/fr/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/fr/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/fr/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/fr/samples/sample-xls" element={<SampleXls />} />
        <Route path="/fr/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/fr/samples/sample-xml" element={<SampleXml />} />
        <Route path="/fr/samples/sample-html" element={<SampleHtml />} />
        <Route path="/fr/samples/sample-ods" element={<SampleOds />} />
        <Route path="/fr/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/fr/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/fr/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/fr/samples/sample-bat" element={<SampleBat />} />
        <Route path="/fr/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/fr/samples/sample-bib" element={<SampleBib />} />
        <Route path="/fr/samples/sample-c" element={<SampleC />} />
        <Route path="/fr/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/fr/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/fr/samples/sample-conf" element={<SampleConf />} />
        <Route path="/fr/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/fr/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/fr/samples/sample-h" element={<SampleH />} />
        <Route path="/fr/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/fr/samples/sample-hex" element={<SampleHex />} />
        <Route path="/fr/samples/sample-cs" element={<SampleCs />} />
        <Route path="/fr/samples/sample-css" element={<SampleCss />} />
        <Route path="/fr/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/fr/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/fr/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/fr/samples/sample-dem" element={<SampleDem />} />
        <Route path="/fr/samples/sample-der" element={<SampleDer />} />
        <Route path="/fr/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/fr/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/fr/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/fr/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/fr/samples/sample-ini" element={<SampleIni />} />
        <Route path="/fr/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/fr/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/fr/samples/sample-java" element={<SampleJava />} />
        <Route path="/fr/samples/sample-jks" element={<SampleJks />} />
        <Route path="/fr/samples/sample-json" element={<SampleJson />} />
        <Route path="/fr/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/fr/samples/sample-js" element={<SampleJs />} />
        <Route path="/fr/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/fr/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/fr/samples/sample-key" element={<SampleKey />} />
        <Route path="/fr/samples/sample-kml" element={<SampleKml />} />
        <Route path="/fr/samples/sample-kt" element={<SampleKt />} />
        <Route path="/fr/samples/sample-log" element={<SampleLog />} />
        <Route path="/fr/samples/sample-lua" element={<SampleLua />} />
        <Route path="/fr/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/fr/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/fr/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/fr/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/fr/samples/sample-md" element={<SampleMd />} />
        <Route path="/fr/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/fr/samples/sample-apk" element={<SampleApk />} />
        <Route path="/fr/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/fr/samples/sample-elf" element={<SampleElf />} />
        <Route path="/fr/samples/sample-exe" element={<SampleExe />} />
        <Route path="/fr/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/fr/samples/sample-jar" element={<SampleJar />} />
        <Route path="/fr/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/fr/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/fr/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/fr/samples/sample-ai" element={<SampleAi />} />
        <Route path="/fr/samples/sample-ase" element={<SampleAse />} />
        <Route path="/fr/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/fr/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/fr/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/fr/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/fr/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/fr/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/fr/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/fr/samples/sample-iges" element={<SampleIges />} />
        <Route path="/fr/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/fr/samples/sample-las" element={<SampleLas />} />
        <Route path="/fr/samples/sample-ma" element={<SampleMa />} />
        <Route path="/fr/samples/sample-max" element={<SampleMax />} />
        <Route path="/fr/samples/sample-mb" element={<SampleMb />} />
        <Route path="/fr/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/fr/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/fr/samples/sample-apng" element={<SampleApng />} />
        <Route path="/fr/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/fr/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/fr/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/fr/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/fr/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/fr/samples/sample-zip" element={<SampleZip />} />
        <Route path="/fr/samples/sample-aac" element={<SampleAac />} />
        <Route path="/fr/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/fr/samples/sample-ace" element={<SampleAce />} />
        <Route path="/fr/samples/sample-aif" element={<SampleAif />} />
        <Route path="/fr/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/fr/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/fr/samples/sample-arj" element={<SampleArj />} />
        <Route path="/fr/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/fr/samples/sample-cab" element={<SampleCab />} />
        <Route path="/fr/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/fr/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/fr/samples/sample-cue" element={<SampleCue />} />
        <Route path="/fr/samples/sample-dav" element={<SampleDav />} />
        <Route path="/fr/samples/sample-dds" element={<SampleDds />} />
        <Route path="/fr/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/fr/samples/sample-dng" element={<SampleDng />} />
        <Route path="/fr/samples/sample-eps" element={<SampleEps />} />
        <Route path="/fr/samples/sample-exr" element={<SampleExr />} />
        <Route path="/fr/samples/sample-gz" element={<SampleGz />} />
        <Route path="/fr/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/fr/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/fr/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/fr/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/fr/samples/sample-ico" element={<SampleIco />} />
        <Route path="/fr/samples/sample-img" element={<SampleImg />} />
        <Route path="/fr/samples/sample-iso" element={<SampleIso />} />
        <Route path="/fr/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/fr/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/fr/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/fr/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/fr/samples/sample-lha" element={<SampleLha />} />
        <Route path="/fr/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/fr/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/fr/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/fr/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/fr/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/fr/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/fr/samples/sample-7z" element={<Sample7z />} />

        {/* Italiano (IT) Sample Files Routes */}
        <Route path="/it/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/it/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/it/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/it/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/it/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/it/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/it/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/it/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/it/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/it/samples/sample-xls" element={<SampleXls />} />
        <Route path="/it/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/it/samples/sample-xml" element={<SampleXml />} />
        <Route path="/it/samples/sample-html" element={<SampleHtml />} />
        <Route path="/it/samples/sample-ods" element={<SampleOds />} />
        <Route path="/it/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/it/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/it/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/it/samples/sample-bat" element={<SampleBat />} />
        <Route path="/it/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/it/samples/sample-bib" element={<SampleBib />} />
        <Route path="/it/samples/sample-c" element={<SampleC />} />
        <Route path="/it/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/it/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/it/samples/sample-conf" element={<SampleConf />} />
        <Route path="/it/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/it/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/it/samples/sample-h" element={<SampleH />} />
        <Route path="/it/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/it/samples/sample-hex" element={<SampleHex />} />
        <Route path="/it/samples/sample-cs" element={<SampleCs />} />
        <Route path="/it/samples/sample-css" element={<SampleCss />} />
        <Route path="/it/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/it/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/it/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/it/samples/sample-dem" element={<SampleDem />} />
        <Route path="/it/samples/sample-der" element={<SampleDer />} />
        <Route path="/it/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/it/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/it/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/it/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/it/samples/sample-ini" element={<SampleIni />} />
        <Route path="/it/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/it/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/it/samples/sample-java" element={<SampleJava />} />
        <Route path="/it/samples/sample-jks" element={<SampleJks />} />
        <Route path="/it/samples/sample-json" element={<SampleJson />} />
        <Route path="/it/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/it/samples/sample-js" element={<SampleJs />} />
        <Route path="/it/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/it/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/it/samples/sample-key" element={<SampleKey />} />
        <Route path="/it/samples/sample-kml" element={<SampleKml />} />
        <Route path="/it/samples/sample-kt" element={<SampleKt />} />
        <Route path="/it/samples/sample-log" element={<SampleLog />} />
        <Route path="/it/samples/sample-lua" element={<SampleLua />} />
        <Route path="/it/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/it/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/it/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/it/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/it/samples/sample-md" element={<SampleMd />} />
        <Route path="/it/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/it/samples/sample-apk" element={<SampleApk />} />
        <Route path="/it/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/it/samples/sample-elf" element={<SampleElf />} />
        <Route path="/it/samples/sample-exe" element={<SampleExe />} />
        <Route path="/it/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/it/samples/sample-jar" element={<SampleJar />} />
        <Route path="/it/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/it/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/it/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/it/samples/sample-ai" element={<SampleAi />} />
        <Route path="/it/samples/sample-ase" element={<SampleAse />} />
        <Route path="/it/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/it/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/it/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/it/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/it/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/it/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/it/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/it/samples/sample-iges" element={<SampleIges />} />
        <Route path="/it/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/it/samples/sample-las" element={<SampleLas />} />
        <Route path="/it/samples/sample-ma" element={<SampleMa />} />
        <Route path="/it/samples/sample-max" element={<SampleMax />} />
        <Route path="/it/samples/sample-mb" element={<SampleMb />} />
        <Route path="/it/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/it/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/it/samples/sample-apng" element={<SampleApng />} />
        <Route path="/it/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/it/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/it/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/it/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/it/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/it/samples/sample-zip" element={<SampleZip />} />
        <Route path="/it/samples/sample-aac" element={<SampleAac />} />
        <Route path="/it/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/it/samples/sample-ace" element={<SampleAce />} />
        <Route path="/it/samples/sample-aif" element={<SampleAif />} />
        <Route path="/it/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/it/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/it/samples/sample-arj" element={<SampleArj />} />
        <Route path="/it/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/it/samples/sample-cab" element={<SampleCab />} />
        <Route path="/it/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/it/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/it/samples/sample-cue" element={<SampleCue />} />
        <Route path="/it/samples/sample-dav" element={<SampleDav />} />
        <Route path="/it/samples/sample-dds" element={<SampleDds />} />
        <Route path="/it/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/it/samples/sample-dng" element={<SampleDng />} />
        <Route path="/it/samples/sample-eps" element={<SampleEps />} />
        <Route path="/it/samples/sample-exr" element={<SampleExr />} />
        <Route path="/it/samples/sample-gz" element={<SampleGz />} />
        <Route path="/it/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/it/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/it/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/it/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/it/samples/sample-ico" element={<SampleIco />} />
        <Route path="/it/samples/sample-img" element={<SampleImg />} />
        <Route path="/it/samples/sample-iso" element={<SampleIso />} />
        <Route path="/it/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/it/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/it/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/it/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/it/samples/sample-lha" element={<SampleLha />} />
        <Route path="/it/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/it/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/it/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/it/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/it/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/it/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/it/samples/sample-7z" element={<Sample7z />} />

        {/* Nederlands (NL) Sample Files Routes */}
        <Route path="/nl/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/nl/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/nl/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/nl/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/nl/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/nl/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/nl/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/nl/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/nl/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/nl/samples/sample-xls" element={<SampleXls />} />
        <Route path="/nl/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/nl/samples/sample-xml" element={<SampleXml />} />
        <Route path="/nl/samples/sample-html" element={<SampleHtml />} />
        <Route path="/nl/samples/sample-ods" element={<SampleOds />} />
        <Route path="/nl/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/nl/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/nl/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/nl/samples/sample-bat" element={<SampleBat />} />
        <Route path="/nl/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/nl/samples/sample-bib" element={<SampleBib />} />
        <Route path="/nl/samples/sample-c" element={<SampleC />} />
        <Route path="/nl/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/nl/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/nl/samples/sample-conf" element={<SampleConf />} />
        <Route path="/nl/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/nl/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/nl/samples/sample-h" element={<SampleH />} />
        <Route path="/nl/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/nl/samples/sample-hex" element={<SampleHex />} />
        <Route path="/nl/samples/sample-cs" element={<SampleCs />} />
        <Route path="/nl/samples/sample-css" element={<SampleCss />} />
        <Route path="/nl/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/nl/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/nl/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/nl/samples/sample-dem" element={<SampleDem />} />
        <Route path="/nl/samples/sample-der" element={<SampleDer />} />
        <Route path="/nl/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/nl/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/nl/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/nl/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/nl/samples/sample-ini" element={<SampleIni />} />
        <Route path="/nl/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/nl/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/nl/samples/sample-java" element={<SampleJava />} />
        <Route path="/nl/samples/sample-jks" element={<SampleJks />} />
        <Route path="/nl/samples/sample-json" element={<SampleJson />} />
        <Route path="/nl/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/nl/samples/sample-js" element={<SampleJs />} />
        <Route path="/nl/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/nl/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/nl/samples/sample-key" element={<SampleKey />} />
        <Route path="/nl/samples/sample-kml" element={<SampleKml />} />
        <Route path="/nl/samples/sample-kt" element={<SampleKt />} />
        <Route path="/nl/samples/sample-log" element={<SampleLog />} />
        <Route path="/nl/samples/sample-lua" element={<SampleLua />} />
        <Route path="/nl/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/nl/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/nl/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/nl/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/nl/samples/sample-md" element={<SampleMd />} />
        <Route path="/nl/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/nl/samples/sample-apk" element={<SampleApk />} />
        <Route path="/nl/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/nl/samples/sample-elf" element={<SampleElf />} />
        <Route path="/nl/samples/sample-exe" element={<SampleExe />} />
        <Route path="/nl/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/nl/samples/sample-jar" element={<SampleJar />} />
        <Route path="/nl/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/nl/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/nl/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/nl/samples/sample-ai" element={<SampleAi />} />
        <Route path="/nl/samples/sample-ase" element={<SampleAse />} />
        <Route path="/nl/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/nl/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/nl/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/nl/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/nl/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/nl/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/nl/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/nl/samples/sample-iges" element={<SampleIges />} />
        <Route path="/nl/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/nl/samples/sample-las" element={<SampleLas />} />
        <Route path="/nl/samples/sample-ma" element={<SampleMa />} />
        <Route path="/nl/samples/sample-max" element={<SampleMax />} />
        <Route path="/nl/samples/sample-mb" element={<SampleMb />} />
        <Route path="/nl/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/nl/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/nl/samples/sample-apng" element={<SampleApng />} />
        <Route path="/nl/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/nl/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/nl/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/nl/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/nl/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/nl/samples/sample-zip" element={<SampleZip />} />
        <Route path="/nl/samples/sample-aac" element={<SampleAac />} />
        <Route path="/nl/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/nl/samples/sample-ace" element={<SampleAce />} />
        <Route path="/nl/samples/sample-aif" element={<SampleAif />} />
        <Route path="/nl/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/nl/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/nl/samples/sample-arj" element={<SampleArj />} />
        <Route path="/nl/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/nl/samples/sample-cab" element={<SampleCab />} />
        <Route path="/nl/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/nl/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/nl/samples/sample-cue" element={<SampleCue />} />
        <Route path="/nl/samples/sample-dav" element={<SampleDav />} />
        <Route path="/nl/samples/sample-dds" element={<SampleDds />} />
        <Route path="/nl/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/nl/samples/sample-dng" element={<SampleDng />} />
        <Route path="/nl/samples/sample-eps" element={<SampleEps />} />
        <Route path="/nl/samples/sample-exr" element={<SampleExr />} />
        <Route path="/nl/samples/sample-gz" element={<SampleGz />} />
        <Route path="/nl/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/nl/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/nl/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/nl/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/nl/samples/sample-ico" element={<SampleIco />} />
        <Route path="/nl/samples/sample-img" element={<SampleImg />} />
        <Route path="/nl/samples/sample-iso" element={<SampleIso />} />
        <Route path="/nl/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/nl/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/nl/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/nl/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/nl/samples/sample-lha" element={<SampleLha />} />
        <Route path="/nl/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/nl/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/nl/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/nl/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/nl/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/nl/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/nl/samples/sample-7z" element={<Sample7z />} />

        {/* Português (PT) Sample Files Routes */}
        <Route path="/pt/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/pt/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/pt/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/pt/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/pt/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/pt/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/pt/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/pt/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/pt/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/pt/samples/sample-xls" element={<SampleXls />} />
        <Route path="/pt/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/pt/samples/sample-xml" element={<SampleXml />} />
        <Route path="/pt/samples/sample-html" element={<SampleHtml />} />
        <Route path="/pt/samples/sample-ods" element={<SampleOds />} />
        <Route path="/pt/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/pt/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/pt/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/pt/samples/sample-bat" element={<SampleBat />} />
        <Route path="/pt/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/pt/samples/sample-bib" element={<SampleBib />} />
        <Route path="/pt/samples/sample-c" element={<SampleC />} />
        <Route path="/pt/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/pt/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/pt/samples/sample-conf" element={<SampleConf />} />
        <Route path="/pt/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/pt/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/pt/samples/sample-h" element={<SampleH />} />
        <Route path="/pt/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/pt/samples/sample-hex" element={<SampleHex />} />
        <Route path="/pt/samples/sample-cs" element={<SampleCs />} />
        <Route path="/pt/samples/sample-css" element={<SampleCss />} />
        <Route path="/pt/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/pt/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/pt/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/pt/samples/sample-dem" element={<SampleDem />} />
        <Route path="/pt/samples/sample-der" element={<SampleDer />} />
        <Route path="/pt/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/pt/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/pt/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/pt/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/pt/samples/sample-ini" element={<SampleIni />} />
        <Route path="/pt/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/pt/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/pt/samples/sample-java" element={<SampleJava />} />
        <Route path="/pt/samples/sample-jks" element={<SampleJks />} />
        <Route path="/pt/samples/sample-json" element={<SampleJson />} />
        <Route path="/pt/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/pt/samples/sample-js" element={<SampleJs />} />
        <Route path="/pt/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/pt/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/pt/samples/sample-key" element={<SampleKey />} />
        <Route path="/pt/samples/sample-kml" element={<SampleKml />} />
        <Route path="/pt/samples/sample-kt" element={<SampleKt />} />
        <Route path="/pt/samples/sample-log" element={<SampleLog />} />
        <Route path="/pt/samples/sample-lua" element={<SampleLua />} />
        <Route path="/pt/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/pt/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/pt/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/pt/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/pt/samples/sample-md" element={<SampleMd />} />
        <Route path="/pt/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/pt/samples/sample-apk" element={<SampleApk />} />
        <Route path="/pt/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/pt/samples/sample-elf" element={<SampleElf />} />
        <Route path="/pt/samples/sample-exe" element={<SampleExe />} />
        <Route path="/pt/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/pt/samples/sample-jar" element={<SampleJar />} />
        <Route path="/pt/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/pt/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/pt/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/pt/samples/sample-ai" element={<SampleAi />} />
        <Route path="/pt/samples/sample-ase" element={<SampleAse />} />
        <Route path="/pt/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/pt/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/pt/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/pt/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/pt/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/pt/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/pt/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/pt/samples/sample-iges" element={<SampleIges />} />
        <Route path="/pt/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/pt/samples/sample-las" element={<SampleLas />} />
        <Route path="/pt/samples/sample-ma" element={<SampleMa />} />
        <Route path="/pt/samples/sample-max" element={<SampleMax />} />
        <Route path="/pt/samples/sample-mb" element={<SampleMb />} />
        <Route path="/pt/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/pt/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/pt/samples/sample-apng" element={<SampleApng />} />
        <Route path="/pt/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/pt/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/pt/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/pt/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/pt/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/pt/samples/sample-zip" element={<SampleZip />} />
        <Route path="/pt/samples/sample-aac" element={<SampleAac />} />
        <Route path="/pt/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/pt/samples/sample-ace" element={<SampleAce />} />
        <Route path="/pt/samples/sample-aif" element={<SampleAif />} />
        <Route path="/pt/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/pt/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/pt/samples/sample-arj" element={<SampleArj />} />
        <Route path="/pt/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/pt/samples/sample-cab" element={<SampleCab />} />
        <Route path="/pt/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/pt/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/pt/samples/sample-cue" element={<SampleCue />} />
        <Route path="/pt/samples/sample-dav" element={<SampleDav />} />
        <Route path="/pt/samples/sample-dds" element={<SampleDds />} />
        <Route path="/pt/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/pt/samples/sample-dng" element={<SampleDng />} />
        <Route path="/pt/samples/sample-eps" element={<SampleEps />} />
        <Route path="/pt/samples/sample-exr" element={<SampleExr />} />
        <Route path="/pt/samples/sample-gz" element={<SampleGz />} />
        <Route path="/pt/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/pt/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/pt/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/pt/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/pt/samples/sample-ico" element={<SampleIco />} />
        <Route path="/pt/samples/sample-img" element={<SampleImg />} />
        <Route path="/pt/samples/sample-iso" element={<SampleIso />} />
        <Route path="/pt/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/pt/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/pt/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/pt/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/pt/samples/sample-lha" element={<SampleLha />} />
        <Route path="/pt/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/pt/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/pt/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/pt/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/pt/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/pt/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/pt/samples/sample-7z" element={<Sample7z />} />

        {/* Tiếng Việt (VI) Sample Files Routes */}
        <Route path="/vi/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/vi/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/vi/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/vi/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/vi/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/vi/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/vi/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/vi/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/vi/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/vi/samples/sample-xls" element={<SampleXls />} />
        <Route path="/vi/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/vi/samples/sample-xml" element={<SampleXml />} />
        <Route path="/vi/samples/sample-html" element={<SampleHtml />} />
        <Route path="/vi/samples/sample-ods" element={<SampleOds />} />
        <Route path="/vi/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/vi/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/vi/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/vi/samples/sample-bat" element={<SampleBat />} />
        <Route path="/vi/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/vi/samples/sample-bib" element={<SampleBib />} />
        <Route path="/vi/samples/sample-c" element={<SampleC />} />
        <Route path="/vi/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/vi/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/vi/samples/sample-conf" element={<SampleConf />} />
        <Route path="/vi/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/vi/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/vi/samples/sample-h" element={<SampleH />} />
        <Route path="/vi/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/vi/samples/sample-hex" element={<SampleHex />} />
        <Route path="/vi/samples/sample-cs" element={<SampleCs />} />
        <Route path="/vi/samples/sample-css" element={<SampleCss />} />
        <Route path="/vi/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/vi/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/vi/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/vi/samples/sample-dem" element={<SampleDem />} />
        <Route path="/vi/samples/sample-der" element={<SampleDer />} />
        <Route path="/vi/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/vi/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/vi/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/vi/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/vi/samples/sample-ini" element={<SampleIni />} />
        <Route path="/vi/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/vi/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/vi/samples/sample-java" element={<SampleJava />} />
        <Route path="/vi/samples/sample-jks" element={<SampleJks />} />
        <Route path="/vi/samples/sample-json" element={<SampleJson />} />
        <Route path="/vi/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/vi/samples/sample-js" element={<SampleJs />} />
        <Route path="/vi/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/vi/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/vi/samples/sample-key" element={<SampleKey />} />
        <Route path="/vi/samples/sample-kml" element={<SampleKml />} />
        <Route path="/vi/samples/sample-kt" element={<SampleKt />} />
        <Route path="/vi/samples/sample-log" element={<SampleLog />} />
        <Route path="/vi/samples/sample-lua" element={<SampleLua />} />
        <Route path="/vi/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/vi/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/vi/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/vi/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/vi/samples/sample-md" element={<SampleMd />} />
        <Route path="/vi/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/vi/samples/sample-apk" element={<SampleApk />} />
        <Route path="/vi/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/vi/samples/sample-elf" element={<SampleElf />} />
        <Route path="/vi/samples/sample-exe" element={<SampleExe />} />
        <Route path="/vi/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/vi/samples/sample-jar" element={<SampleJar />} />
        <Route path="/vi/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/vi/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/vi/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/vi/samples/sample-ai" element={<SampleAi />} />
        <Route path="/vi/samples/sample-ase" element={<SampleAse />} />
        <Route path="/vi/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/vi/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/vi/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/vi/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/vi/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/vi/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/vi/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/vi/samples/sample-iges" element={<SampleIges />} />
        <Route path="/vi/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/vi/samples/sample-las" element={<SampleLas />} />
        <Route path="/vi/samples/sample-ma" element={<SampleMa />} />
        <Route path="/vi/samples/sample-max" element={<SampleMax />} />
        <Route path="/vi/samples/sample-mb" element={<SampleMb />} />
        <Route path="/vi/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/vi/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/vi/samples/sample-apng" element={<SampleApng />} />
        <Route path="/vi/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/vi/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/vi/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/vi/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/vi/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/vi/samples/sample-zip" element={<SampleZip />} />
        <Route path="/vi/samples/sample-aac" element={<SampleAac />} />
        <Route path="/vi/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/vi/samples/sample-ace" element={<SampleAce />} />
        <Route path="/vi/samples/sample-aif" element={<SampleAif />} />
        <Route path="/vi/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/vi/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/vi/samples/sample-arj" element={<SampleArj />} />
        <Route path="/vi/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/vi/samples/sample-cab" element={<SampleCab />} />
        <Route path="/vi/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/vi/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/vi/samples/sample-cue" element={<SampleCue />} />
        <Route path="/vi/samples/sample-dav" element={<SampleDav />} />
        <Route path="/vi/samples/sample-dds" element={<SampleDds />} />
        <Route path="/vi/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/vi/samples/sample-dng" element={<SampleDng />} />
        <Route path="/vi/samples/sample-eps" element={<SampleEps />} />
        <Route path="/vi/samples/sample-exr" element={<SampleExr />} />
        <Route path="/vi/samples/sample-gz" element={<SampleGz />} />
        <Route path="/vi/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/vi/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/vi/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/vi/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/vi/samples/sample-ico" element={<SampleIco />} />
        <Route path="/vi/samples/sample-img" element={<SampleImg />} />
        <Route path="/vi/samples/sample-iso" element={<SampleIso />} />
        <Route path="/vi/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/vi/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/vi/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/vi/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/vi/samples/sample-lha" element={<SampleLha />} />
        <Route path="/vi/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/vi/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/vi/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/vi/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/vi/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/vi/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/vi/samples/sample-7z" element={<Sample7z />} />

        {/* Türkçe (TR) Sample Files Routes */}
        <Route path="/tr/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/tr/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/tr/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/tr/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/tr/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/tr/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/tr/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/tr/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/tr/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/tr/samples/sample-xls" element={<SampleXls />} />
        <Route path="/tr/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/tr/samples/sample-xml" element={<SampleXml />} />
        <Route path="/tr/samples/sample-html" element={<SampleHtml />} />
        <Route path="/tr/samples/sample-ods" element={<SampleOds />} />
        <Route path="/tr/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/tr/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/tr/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/tr/samples/sample-bat" element={<SampleBat />} />
        <Route path="/tr/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/tr/samples/sample-bib" element={<SampleBib />} />
        <Route path="/tr/samples/sample-c" element={<SampleC />} />
        <Route path="/tr/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/tr/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/tr/samples/sample-conf" element={<SampleConf />} />
        <Route path="/tr/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/tr/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/tr/samples/sample-h" element={<SampleH />} />
        <Route path="/tr/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/tr/samples/sample-hex" element={<SampleHex />} />
        <Route path="/tr/samples/sample-cs" element={<SampleCs />} />
        <Route path="/tr/samples/sample-css" element={<SampleCss />} />
        <Route path="/tr/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/tr/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/tr/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/tr/samples/sample-dem" element={<SampleDem />} />
        <Route path="/tr/samples/sample-der" element={<SampleDer />} />
        <Route path="/tr/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/tr/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/tr/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/tr/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/tr/samples/sample-ini" element={<SampleIni />} />
        <Route path="/tr/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/tr/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/tr/samples/sample-java" element={<SampleJava />} />
        <Route path="/tr/samples/sample-jks" element={<SampleJks />} />
        <Route path="/tr/samples/sample-json" element={<SampleJson />} />
        <Route path="/tr/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/tr/samples/sample-js" element={<SampleJs />} />
        <Route path="/tr/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/tr/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/tr/samples/sample-key" element={<SampleKey />} />
        <Route path="/tr/samples/sample-kml" element={<SampleKml />} />
        <Route path="/tr/samples/sample-kt" element={<SampleKt />} />
        <Route path="/tr/samples/sample-log" element={<SampleLog />} />
        <Route path="/tr/samples/sample-lua" element={<SampleLua />} />
        <Route path="/tr/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/tr/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/tr/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/tr/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/tr/samples/sample-md" element={<SampleMd />} />
        <Route path="/tr/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/tr/samples/sample-apk" element={<SampleApk />} />
        <Route path="/tr/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/tr/samples/sample-elf" element={<SampleElf />} />
        <Route path="/tr/samples/sample-exe" element={<SampleExe />} />
        <Route path="/tr/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/tr/samples/sample-jar" element={<SampleJar />} />
        <Route path="/tr/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/tr/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/tr/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/tr/samples/sample-ai" element={<SampleAi />} />
        <Route path="/tr/samples/sample-ase" element={<SampleAse />} />
        <Route path="/tr/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/tr/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/tr/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/tr/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/tr/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/tr/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/tr/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/tr/samples/sample-iges" element={<SampleIges />} />
        <Route path="/tr/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/tr/samples/sample-las" element={<SampleLas />} />
        <Route path="/tr/samples/sample-ma" element={<SampleMa />} />
        <Route path="/tr/samples/sample-max" element={<SampleMax />} />
        <Route path="/tr/samples/sample-mb" element={<SampleMb />} />
        <Route path="/tr/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/tr/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/tr/samples/sample-apng" element={<SampleApng />} />
        <Route path="/tr/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/tr/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/tr/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/tr/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/tr/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/tr/samples/sample-zip" element={<SampleZip />} />
        <Route path="/tr/samples/sample-aac" element={<SampleAac />} />
        <Route path="/tr/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/tr/samples/sample-ace" element={<SampleAce />} />
        <Route path="/tr/samples/sample-aif" element={<SampleAif />} />
        <Route path="/tr/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/tr/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/tr/samples/sample-arj" element={<SampleArj />} />
        <Route path="/tr/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/tr/samples/sample-cab" element={<SampleCab />} />
        <Route path="/tr/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/tr/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/tr/samples/sample-cue" element={<SampleCue />} />
        <Route path="/tr/samples/sample-dav" element={<SampleDav />} />
        <Route path="/tr/samples/sample-dds" element={<SampleDds />} />
        <Route path="/tr/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/tr/samples/sample-dng" element={<SampleDng />} />
        <Route path="/tr/samples/sample-eps" element={<SampleEps />} />
        <Route path="/tr/samples/sample-exr" element={<SampleExr />} />
        <Route path="/tr/samples/sample-gz" element={<SampleGz />} />
        <Route path="/tr/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/tr/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/tr/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/tr/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/tr/samples/sample-ico" element={<SampleIco />} />
        <Route path="/tr/samples/sample-img" element={<SampleImg />} />
        <Route path="/tr/samples/sample-iso" element={<SampleIso />} />
        <Route path="/tr/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/tr/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/tr/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/tr/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/tr/samples/sample-lha" element={<SampleLha />} />
        <Route path="/tr/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/tr/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/tr/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/tr/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/tr/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/tr/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/tr/samples/sample-7z" element={<Sample7z />} />

        {/* Русский (RU) Sample Files Routes */}
        <Route path="/ru/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/ru/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/ru/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/ru/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/ru/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/ru/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/ru/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/ru/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/ru/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/ru/samples/sample-xls" element={<SampleXls />} />
        <Route path="/ru/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/ru/samples/sample-xml" element={<SampleXml />} />
        <Route path="/ru/samples/sample-html" element={<SampleHtml />} />
        <Route path="/ru/samples/sample-ods" element={<SampleOds />} />
        <Route path="/ru/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/ru/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/ru/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/ru/samples/sample-bat" element={<SampleBat />} />
        <Route path="/ru/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/ru/samples/sample-bib" element={<SampleBib />} />
        <Route path="/ru/samples/sample-c" element={<SampleC />} />
        <Route path="/ru/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/ru/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/ru/samples/sample-conf" element={<SampleConf />} />
        <Route path="/ru/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/ru/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/ru/samples/sample-h" element={<SampleH />} />
        <Route path="/ru/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/ru/samples/sample-hex" element={<SampleHex />} />
        <Route path="/ru/samples/sample-cs" element={<SampleCs />} />
        <Route path="/ru/samples/sample-css" element={<SampleCss />} />
        <Route path="/ru/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/ru/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/ru/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/ru/samples/sample-dem" element={<SampleDem />} />
        <Route path="/ru/samples/sample-der" element={<SampleDer />} />
        <Route path="/ru/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/ru/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/ru/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/ru/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/ru/samples/sample-ini" element={<SampleIni />} />
        <Route path="/ru/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/ru/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/ru/samples/sample-java" element={<SampleJava />} />
        <Route path="/ru/samples/sample-jks" element={<SampleJks />} />
        <Route path="/ru/samples/sample-json" element={<SampleJson />} />
        <Route path="/ru/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/ru/samples/sample-js" element={<SampleJs />} />
        <Route path="/ru/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/ru/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/ru/samples/sample-key" element={<SampleKey />} />
        <Route path="/ru/samples/sample-kml" element={<SampleKml />} />
        <Route path="/ru/samples/sample-kt" element={<SampleKt />} />
        <Route path="/ru/samples/sample-log" element={<SampleLog />} />
        <Route path="/ru/samples/sample-lua" element={<SampleLua />} />
        <Route path="/ru/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/ru/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/ru/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/ru/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/ru/samples/sample-md" element={<SampleMd />} />
        <Route path="/ru/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/ru/samples/sample-apk" element={<SampleApk />} />
        <Route path="/ru/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/ru/samples/sample-elf" element={<SampleElf />} />
        <Route path="/ru/samples/sample-exe" element={<SampleExe />} />
        <Route path="/ru/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/ru/samples/sample-jar" element={<SampleJar />} />
        <Route path="/ru/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/ru/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/ru/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/ru/samples/sample-ai" element={<SampleAi />} />
        <Route path="/ru/samples/sample-ase" element={<SampleAse />} />
        <Route path="/ru/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/ru/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/ru/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/ru/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/ru/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/ru/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/ru/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/ru/samples/sample-iges" element={<SampleIges />} />
        <Route path="/ru/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/ru/samples/sample-las" element={<SampleLas />} />
        <Route path="/ru/samples/sample-ma" element={<SampleMa />} />
        <Route path="/ru/samples/sample-max" element={<SampleMax />} />
        <Route path="/ru/samples/sample-mb" element={<SampleMb />} />
        <Route path="/ru/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/ru/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/ru/samples/sample-apng" element={<SampleApng />} />
        <Route path="/ru/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/ru/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/ru/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/ru/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/ru/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/ru/samples/sample-zip" element={<SampleZip />} />
        <Route path="/ru/samples/sample-aac" element={<SampleAac />} />
        <Route path="/ru/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/ru/samples/sample-ace" element={<SampleAce />} />
        <Route path="/ru/samples/sample-aif" element={<SampleAif />} />
        <Route path="/ru/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/ru/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/ru/samples/sample-arj" element={<SampleArj />} />
        <Route path="/ru/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/ru/samples/sample-cab" element={<SampleCab />} />
        <Route path="/ru/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/ru/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/ru/samples/sample-cue" element={<SampleCue />} />
        <Route path="/ru/samples/sample-dav" element={<SampleDav />} />
        <Route path="/ru/samples/sample-dds" element={<SampleDds />} />
        <Route path="/ru/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/ru/samples/sample-dng" element={<SampleDng />} />
        <Route path="/ru/samples/sample-eps" element={<SampleEps />} />
        <Route path="/ru/samples/sample-exr" element={<SampleExr />} />
        <Route path="/ru/samples/sample-gz" element={<SampleGz />} />
        <Route path="/ru/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/ru/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/ru/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/ru/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/ru/samples/sample-ico" element={<SampleIco />} />
        <Route path="/ru/samples/sample-img" element={<SampleImg />} />
        <Route path="/ru/samples/sample-iso" element={<SampleIso />} />
        <Route path="/ru/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/ru/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/ru/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/ru/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/ru/samples/sample-lha" element={<SampleLha />} />
        <Route path="/ru/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/ru/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/ru/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/ru/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/ru/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/ru/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/ru/samples/sample-7z" element={<Sample7z />} />

        {/* العربية (AR) Sample Files Routes */}
        <Route path="/ar/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/ar/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/ar/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/ar/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/ar/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/ar/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/ar/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/ar/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/ar/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/ar/samples/sample-xls" element={<SampleXls />} />
        <Route path="/ar/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/ar/samples/sample-xml" element={<SampleXml />} />
        <Route path="/ar/samples/sample-html" element={<SampleHtml />} />
        <Route path="/ar/samples/sample-ods" element={<SampleOds />} />
        <Route path="/ar/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/ar/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/ar/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/ar/samples/sample-bat" element={<SampleBat />} />
        <Route path="/ar/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/ar/samples/sample-bib" element={<SampleBib />} />
        <Route path="/ar/samples/sample-c" element={<SampleC />} />
        <Route path="/ar/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/ar/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/ar/samples/sample-conf" element={<SampleConf />} />
        <Route path="/ar/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/ar/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/ar/samples/sample-h" element={<SampleH />} />
        <Route path="/ar/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/ar/samples/sample-hex" element={<SampleHex />} />
        <Route path="/ar/samples/sample-cs" element={<SampleCs />} />
        <Route path="/ar/samples/sample-css" element={<SampleCss />} />
        <Route path="/ar/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/ar/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/ar/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/ar/samples/sample-dem" element={<SampleDem />} />
        <Route path="/ar/samples/sample-der" element={<SampleDer />} />
        <Route path="/ar/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/ar/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/ar/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/ar/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/ar/samples/sample-ini" element={<SampleIni />} />
        <Route path="/ar/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/ar/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/ar/samples/sample-java" element={<SampleJava />} />
        <Route path="/ar/samples/sample-jks" element={<SampleJks />} />
        <Route path="/ar/samples/sample-json" element={<SampleJson />} />
        <Route path="/ar/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/ar/samples/sample-js" element={<SampleJs />} />
        <Route path="/ar/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/ar/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/ar/samples/sample-key" element={<SampleKey />} />
        <Route path="/ar/samples/sample-kml" element={<SampleKml />} />
        <Route path="/ar/samples/sample-kt" element={<SampleKt />} />
        <Route path="/ar/samples/sample-log" element={<SampleLog />} />
        <Route path="/ar/samples/sample-lua" element={<SampleLua />} />
        <Route path="/ar/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/ar/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/ar/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/ar/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/ar/samples/sample-md" element={<SampleMd />} />
        <Route path="/ar/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/ar/samples/sample-apk" element={<SampleApk />} />
        <Route path="/ar/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/ar/samples/sample-elf" element={<SampleElf />} />
        <Route path="/ar/samples/sample-exe" element={<SampleExe />} />
        <Route path="/ar/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/ar/samples/sample-jar" element={<SampleJar />} />
        <Route path="/ar/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/ar/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/ar/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/ar/samples/sample-ai" element={<SampleAi />} />
        <Route path="/ar/samples/sample-ase" element={<SampleAse />} />
        <Route path="/ar/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/ar/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/ar/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/ar/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/ar/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/ar/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/ar/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/ar/samples/sample-iges" element={<SampleIges />} />
        <Route path="/ar/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/ar/samples/sample-las" element={<SampleLas />} />
        <Route path="/ar/samples/sample-ma" element={<SampleMa />} />
        <Route path="/ar/samples/sample-max" element={<SampleMax />} />
        <Route path="/ar/samples/sample-mb" element={<SampleMb />} />
        <Route path="/ar/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/ar/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/ar/samples/sample-apng" element={<SampleApng />} />
        <Route path="/ar/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/ar/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/ar/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/ar/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/ar/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/ar/samples/sample-zip" element={<SampleZip />} />
        <Route path="/ar/samples/sample-aac" element={<SampleAac />} />
        <Route path="/ar/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/ar/samples/sample-ace" element={<SampleAce />} />
        <Route path="/ar/samples/sample-aif" element={<SampleAif />} />
        <Route path="/ar/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/ar/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/ar/samples/sample-arj" element={<SampleArj />} />
        <Route path="/ar/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/ar/samples/sample-cab" element={<SampleCab />} />
        <Route path="/ar/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/ar/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/ar/samples/sample-cue" element={<SampleCue />} />
        <Route path="/ar/samples/sample-dav" element={<SampleDav />} />
        <Route path="/ar/samples/sample-dds" element={<SampleDds />} />
        <Route path="/ar/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/ar/samples/sample-dng" element={<SampleDng />} />
        <Route path="/ar/samples/sample-eps" element={<SampleEps />} />
        <Route path="/ar/samples/sample-exr" element={<SampleExr />} />
        <Route path="/ar/samples/sample-gz" element={<SampleGz />} />
        <Route path="/ar/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/ar/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/ar/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/ar/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/ar/samples/sample-ico" element={<SampleIco />} />
        <Route path="/ar/samples/sample-img" element={<SampleImg />} />
        <Route path="/ar/samples/sample-iso" element={<SampleIso />} />
        <Route path="/ar/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/ar/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/ar/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/ar/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/ar/samples/sample-lha" element={<SampleLha />} />
        <Route path="/ar/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/ar/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/ar/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/ar/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/ar/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/ar/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/ar/samples/sample-7z" element={<Sample7z />} />

        {/* ไทย (TH) Sample Files Routes */}
        <Route path="/th/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/th/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/th/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/th/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/th/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/th/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/th/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/th/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/th/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/th/samples/sample-xls" element={<SampleXls />} />
        <Route path="/th/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/th/samples/sample-xml" element={<SampleXml />} />
        <Route path="/th/samples/sample-html" element={<SampleHtml />} />
        <Route path="/th/samples/sample-ods" element={<SampleOds />} />
        <Route path="/th/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/th/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/th/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/th/samples/sample-bat" element={<SampleBat />} />
        <Route path="/th/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/th/samples/sample-bib" element={<SampleBib />} />
        <Route path="/th/samples/sample-c" element={<SampleC />} />
        <Route path="/th/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/th/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/th/samples/sample-conf" element={<SampleConf />} />
        <Route path="/th/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/th/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/th/samples/sample-h" element={<SampleH />} />
        <Route path="/th/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/th/samples/sample-hex" element={<SampleHex />} />
        <Route path="/th/samples/sample-cs" element={<SampleCs />} />
        <Route path="/th/samples/sample-css" element={<SampleCss />} />
        <Route path="/th/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/th/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/th/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/th/samples/sample-dem" element={<SampleDem />} />
        <Route path="/th/samples/sample-der" element={<SampleDer />} />
        <Route path="/th/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/th/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/th/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/th/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/th/samples/sample-ini" element={<SampleIni />} />
        <Route path="/th/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/th/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/th/samples/sample-java" element={<SampleJava />} />
        <Route path="/th/samples/sample-jks" element={<SampleJks />} />
        <Route path="/th/samples/sample-json" element={<SampleJson />} />
        <Route path="/th/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/th/samples/sample-js" element={<SampleJs />} />
        <Route path="/th/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/th/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/th/samples/sample-key" element={<SampleKey />} />
        <Route path="/th/samples/sample-kml" element={<SampleKml />} />
        <Route path="/th/samples/sample-kt" element={<SampleKt />} />
        <Route path="/th/samples/sample-log" element={<SampleLog />} />
        <Route path="/th/samples/sample-lua" element={<SampleLua />} />
        <Route path="/th/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/th/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/th/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/th/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/th/samples/sample-md" element={<SampleMd />} />
        <Route path="/th/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/th/samples/sample-apk" element={<SampleApk />} />
        <Route path="/th/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/th/samples/sample-elf" element={<SampleElf />} />
        <Route path="/th/samples/sample-exe" element={<SampleExe />} />
        <Route path="/th/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/th/samples/sample-jar" element={<SampleJar />} />
        <Route path="/th/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/th/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/th/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/th/samples/sample-ai" element={<SampleAi />} />
        <Route path="/th/samples/sample-ase" element={<SampleAse />} />
        <Route path="/th/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/th/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/th/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/th/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/th/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/th/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/th/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/th/samples/sample-iges" element={<SampleIges />} />
        <Route path="/th/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/th/samples/sample-las" element={<SampleLas />} />
        <Route path="/th/samples/sample-ma" element={<SampleMa />} />
        <Route path="/th/samples/sample-max" element={<SampleMax />} />
        <Route path="/th/samples/sample-mb" element={<SampleMb />} />
        <Route path="/th/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/th/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/th/samples/sample-apng" element={<SampleApng />} />
        <Route path="/th/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/th/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/th/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/th/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/th/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/th/samples/sample-zip" element={<SampleZip />} />
        <Route path="/th/samples/sample-aac" element={<SampleAac />} />
        <Route path="/th/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/th/samples/sample-ace" element={<SampleAce />} />
        <Route path="/th/samples/sample-aif" element={<SampleAif />} />
        <Route path="/th/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/th/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/th/samples/sample-arj" element={<SampleArj />} />
        <Route path="/th/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/th/samples/sample-cab" element={<SampleCab />} />
        <Route path="/th/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/th/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/th/samples/sample-cue" element={<SampleCue />} />
        <Route path="/th/samples/sample-dav" element={<SampleDav />} />
        <Route path="/th/samples/sample-dds" element={<SampleDds />} />
        <Route path="/th/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/th/samples/sample-dng" element={<SampleDng />} />
        <Route path="/th/samples/sample-eps" element={<SampleEps />} />
        <Route path="/th/samples/sample-exr" element={<SampleExr />} />
        <Route path="/th/samples/sample-gz" element={<SampleGz />} />
        <Route path="/th/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/th/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/th/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/th/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/th/samples/sample-ico" element={<SampleIco />} />
        <Route path="/th/samples/sample-img" element={<SampleImg />} />
        <Route path="/th/samples/sample-iso" element={<SampleIso />} />
        <Route path="/th/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/th/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/th/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/th/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/th/samples/sample-lha" element={<SampleLha />} />
        <Route path="/th/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/th/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/th/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/th/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/th/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/th/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/th/samples/sample-7z" element={<Sample7z />} />

        {/* 日本語 (JA) Sample Files Routes */}
        <Route path="/ja/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/ja/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/ja/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/ja/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/ja/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/ja/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/ja/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/ja/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/ja/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/ja/samples/sample-xls" element={<SampleXls />} />
        <Route path="/ja/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/ja/samples/sample-xml" element={<SampleXml />} />
        <Route path="/ja/samples/sample-html" element={<SampleHtml />} />
        <Route path="/ja/samples/sample-ods" element={<SampleOds />} />
        <Route path="/ja/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/ja/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/ja/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/ja/samples/sample-bat" element={<SampleBat />} />
        <Route path="/ja/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/ja/samples/sample-bib" element={<SampleBib />} />
        <Route path="/ja/samples/sample-c" element={<SampleC />} />
        <Route path="/ja/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/ja/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/ja/samples/sample-conf" element={<SampleConf />} />
        <Route path="/ja/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/ja/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/ja/samples/sample-h" element={<SampleH />} />
        <Route path="/ja/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/ja/samples/sample-hex" element={<SampleHex />} />
        <Route path="/ja/samples/sample-cs" element={<SampleCs />} />
        <Route path="/ja/samples/sample-css" element={<SampleCss />} />
        <Route path="/ja/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/ja/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/ja/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/ja/samples/sample-dem" element={<SampleDem />} />
        <Route path="/ja/samples/sample-der" element={<SampleDer />} />
        <Route path="/ja/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/ja/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/ja/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/ja/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/ja/samples/sample-ini" element={<SampleIni />} />
        <Route path="/ja/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/ja/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/ja/samples/sample-java" element={<SampleJava />} />
        <Route path="/ja/samples/sample-jks" element={<SampleJks />} />
        <Route path="/ja/samples/sample-json" element={<SampleJson />} />
        <Route path="/ja/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/ja/samples/sample-js" element={<SampleJs />} />
        <Route path="/ja/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/ja/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/ja/samples/sample-key" element={<SampleKey />} />
        <Route path="/ja/samples/sample-kml" element={<SampleKml />} />
        <Route path="/ja/samples/sample-kt" element={<SampleKt />} />
        <Route path="/ja/samples/sample-log" element={<SampleLog />} />
        <Route path="/ja/samples/sample-lua" element={<SampleLua />} />
        <Route path="/ja/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/ja/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/ja/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/ja/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/ja/samples/sample-md" element={<SampleMd />} />
        <Route path="/ja/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/ja/samples/sample-apk" element={<SampleApk />} />
        <Route path="/ja/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/ja/samples/sample-elf" element={<SampleElf />} />
        <Route path="/ja/samples/sample-exe" element={<SampleExe />} />
        <Route path="/ja/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/ja/samples/sample-jar" element={<SampleJar />} />
        <Route path="/ja/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/ja/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/ja/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/ja/samples/sample-ai" element={<SampleAi />} />
        <Route path="/ja/samples/sample-ase" element={<SampleAse />} />
        <Route path="/ja/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/ja/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/ja/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/ja/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/ja/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/ja/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/ja/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/ja/samples/sample-iges" element={<SampleIges />} />
        <Route path="/ja/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/ja/samples/sample-las" element={<SampleLas />} />
        <Route path="/ja/samples/sample-ma" element={<SampleMa />} />
        <Route path="/ja/samples/sample-max" element={<SampleMax />} />
        <Route path="/ja/samples/sample-mb" element={<SampleMb />} />
        <Route path="/ja/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/ja/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/ja/samples/sample-apng" element={<SampleApng />} />
        <Route path="/ja/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/ja/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/ja/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/ja/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/ja/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/ja/samples/sample-zip" element={<SampleZip />} />
        <Route path="/ja/samples/sample-aac" element={<SampleAac />} />
        <Route path="/ja/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/ja/samples/sample-ace" element={<SampleAce />} />
        <Route path="/ja/samples/sample-aif" element={<SampleAif />} />
        <Route path="/ja/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/ja/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/ja/samples/sample-arj" element={<SampleArj />} />
        <Route path="/ja/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/ja/samples/sample-cab" element={<SampleCab />} />
        <Route path="/ja/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/ja/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/ja/samples/sample-cue" element={<SampleCue />} />
        <Route path="/ja/samples/sample-dav" element={<SampleDav />} />
        <Route path="/ja/samples/sample-dds" element={<SampleDds />} />
        <Route path="/ja/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/ja/samples/sample-dng" element={<SampleDng />} />
        <Route path="/ja/samples/sample-eps" element={<SampleEps />} />
        <Route path="/ja/samples/sample-exr" element={<SampleExr />} />
        <Route path="/ja/samples/sample-gz" element={<SampleGz />} />
        <Route path="/ja/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/ja/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/ja/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/ja/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/ja/samples/sample-ico" element={<SampleIco />} />
        <Route path="/ja/samples/sample-img" element={<SampleImg />} />
        <Route path="/ja/samples/sample-iso" element={<SampleIso />} />
        <Route path="/ja/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/ja/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/ja/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/ja/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/ja/samples/sample-lha" element={<SampleLha />} />
        <Route path="/ja/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/ja/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/ja/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/ja/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/ja/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/ja/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/ja/samples/sample-7z" element={<Sample7z />} />

        {/* 简体中文 (ZH) Sample Files Routes */}
        <Route path="/zh/samples/sample-docx" element={<SampleDocx />} />
        <Route path="/zh/samples/sample-doc" element={<SampleDoc />} />
        <Route path="/zh/samples/sample-pdf" element={<SamplePdf />} />
        <Route path="/zh/samples/sample-odp" element={<SampleOdp />} />
        <Route path="/zh/samples/sample-rtf" element={<SampleRtf />} />
        <Route path="/zh/samples/sample-epub" element={<SampleEpub />} />
        <Route path="/zh/samples/sample-invoice-pdf" element={<SampleInvoicePdf />} />
        <Route path="/zh/samples/sample-mobi" element={<SampleMobi />} />
        <Route path="/zh/samples/sample-csv" element={<SampleCsv />} />
        <Route path="/zh/samples/sample-xls" element={<SampleXls />} />
        <Route path="/zh/samples/sample-xlsx" element={<SampleXlsx />} />
        <Route path="/zh/samples/sample-xml" element={<SampleXml />} />
        <Route path="/zh/samples/sample-html" element={<SampleHtml />} />
        <Route path="/zh/samples/sample-ods" element={<SampleOds />} />
        <Route path="/zh/samples/sample-ansible-yml" element={<SampleAnsibleYml />} />
        <Route path="/zh/samples/sample-api-response-json" element={<SampleApiResponseJson />} />
        <Route path="/zh/samples/sample-arduino-ino" element={<SampleArduinoIno />} />
        <Route path="/zh/samples/sample-bat" element={<SampleBat />} />
        <Route path="/zh/samples/sample-asc" element={<SampleAsc />} />
        <Route path="/zh/samples/sample-bib" element={<SampleBib />} />
        <Route path="/zh/samples/sample-c" element={<SampleC />} />
        <Route path="/zh/samples/sample-can-log" element={<SampleCanLog />} />
        <Route path="/zh/samples/sample-cmd" element={<SampleCmd />} />
        <Route path="/zh/samples/sample-conf" element={<SampleConf />} />
        <Route path="/zh/samples/sample-config-ini" element={<SampleConfigIni />} />
        <Route path="/zh/samples/sample-cpp" element={<SampleCpp />} />
        <Route path="/zh/samples/sample-h" element={<SampleH />} />
        <Route path="/zh/samples/sample-hpp" element={<SampleHpp />} />
        <Route path="/zh/samples/sample-hex" element={<SampleHex />} />
        <Route path="/zh/samples/sample-cs" element={<SampleCs />} />
        <Route path="/zh/samples/sample-css" element={<SampleCss />} />
        <Route path="/zh/samples/sample-csr" element={<SampleCsr />} />
        <Route path="/zh/samples/sample-customer-database-sql" element={<SampleCustomerDatabaseSql />} />
        <Route path="/zh/samples/sample-dbf" element={<SampleDbf />} />
        <Route path="/zh/samples/sample-dem" element={<SampleDem />} />
        <Route path="/zh/samples/sample-der" element={<SampleDer />} />
        <Route path="/zh/samples/sample-dmp" element={<SampleDmp />} />
        <Route path="/zh/samples/sample-docker-compose-yml" element={<SampleDockerComposeYml />} />
        <Route path="/zh/samples/sample-dockerfile" element={<SampleDockerfile />} />
        <Route path="/zh/samples/sample-editorconfig" element={<SampleEditorconfig />} />
        <Route path="/zh/samples/sample-ini" element={<SampleIni />} />
        <Route path="/zh/samples/sample-intelhex" element={<SampleIntelhex />} />
        <Route path="/zh/samples/sample-ipynb" element={<SampleIpynb />} />
        <Route path="/zh/samples/sample-java" element={<SampleJava />} />
        <Route path="/zh/samples/sample-jks" element={<SampleJks />} />
        <Route path="/zh/samples/sample-json" element={<SampleJson />} />
        <Route path="/zh/samples/sample-jsonl" element={<SampleJsonl />} />
        <Route path="/zh/samples/sample-js" element={<SampleJs />} />
        <Route path="/zh/samples/sample-jsx" element={<SampleJsx />} />
        <Route path="/zh/samples/sample-jwt" element={<SampleJwt />} />
        <Route path="/zh/samples/sample-key" element={<SampleKey />} />
        <Route path="/zh/samples/sample-kml" element={<SampleKml />} />
        <Route path="/zh/samples/sample-kt" element={<SampleKt />} />
        <Route path="/zh/samples/sample-log" element={<SampleLog />} />
        <Route path="/zh/samples/sample-lua" element={<SampleLua />} />
        <Route path="/zh/samples/sample-m3u" element={<SampleM3u />} />
        <Route path="/zh/samples/sample-m3u8" element={<SampleM3u8 />} />
        <Route path="/zh/samples/sample-makefile" element={<SampleMakefile />} />
        <Route path="/zh/samples/sample-mbtiles" element={<SampleMbtiles />} />
        <Route path="/zh/samples/sample-md" element={<SampleMd />} />
        <Route path="/zh/samples/sample-mdx" element={<SampleMdx />} />
        <Route path="/zh/samples/sample-apk" element={<SampleApk />} />
        <Route path="/zh/samples/sample-appimage" element={<SampleAppimage />} />
        <Route path="/zh/samples/sample-elf" element={<SampleElf />} />
        <Route path="/zh/samples/sample-exe" element={<SampleExe />} />
        <Route path="/zh/samples/sample-ipa" element={<SampleIpa />} />
        <Route path="/zh/samples/sample-jar" element={<SampleJar />} />
        <Route path="/zh/samples/sample-crx" element={<SampleCrx />} />
        <Route path="/zh/samples/sample-3ds" element={<Sample3ds />} />
        <Route path="/zh/samples/sample-3mf" element={<Sample3mf />} />
        <Route path="/zh/samples/sample-ai" element={<SampleAi />} />
        <Route path="/zh/samples/sample-ase" element={<SampleAse />} />
        <Route path="/zh/samples/sample-animation-fbx" element={<SampleAnimationFbx />} />
        <Route path="/zh/samples/sample-assetbundle" element={<SampleAssetbundle />} />
        <Route path="/zh/samples/sample-blend" element={<SampleBlend />} />
        <Route path="/zh/samples/sample-bvh" element={<SampleBvh />} />
        <Route path="/zh/samples/sample-dwg" element={<SampleDwg />} />
        <Route path="/zh/samples/sample-dxf" element={<SampleDxf />} />
        <Route path="/zh/samples/sample-ifc" element={<SampleIfc />} />
        <Route path="/zh/samples/sample-iges" element={<SampleIges />} />
        <Route path="/zh/samples/sample-igs" element={<SampleIgs />} />
        <Route path="/zh/samples/sample-las" element={<SampleLas />} />
        <Route path="/zh/samples/sample-ma" element={<SampleMa />} />
        <Route path="/zh/samples/sample-max" element={<SampleMax />} />
        <Route path="/zh/samples/sample-mb" element={<SampleMb />} />
        <Route path="/zh/samples/sample-indd" element={<SampleIndd />} />
        <Route path="/zh/samples/sample-animated-gif" element={<SampleAnimatedGif />} />
        <Route path="/zh/samples/sample-apng" element={<SampleApng />} />
        <Route path="/zh/samples/sample-avif" element={<SampleAvif />} />
        <Route path="/zh/samples/sample-bmp" element={<SampleBmp />} />
        <Route path="/zh/samples/sample-barcode-svg" element={<SampleBarcodeSvg />} />
        <Route path="/zh/samples/sample-avi" element={<SampleAvi />} />
        <Route path="/zh/samples/sample-3gp" element={<Sample3gp />} />
        <Route path="/zh/samples/sample-zip" element={<SampleZip />} />
        <Route path="/zh/samples/sample-aac" element={<SampleAac />} />
        <Route path="/zh/samples/sample-ac3" element={<SampleAc3 />} />
        <Route path="/zh/samples/sample-ace" element={<SampleAce />} />
        <Route path="/zh/samples/sample-aif" element={<SampleAif />} />
        <Route path="/zh/samples/sample-aiff" element={<SampleAiff />} />
        <Route path="/zh/samples/sample-amr" element={<SampleAmr />} />
        <Route path="/zh/samples/sample-arj" element={<SampleArj />} />
        <Route path="/zh/samples/sample-bz2" element={<SampleBz2 />} />
        <Route path="/zh/samples/sample-cab" element={<SampleCab />} />
        <Route path="/zh/samples/sample-caf" element={<SampleCaf />} />
        <Route path="/zh/samples/sample-cpio" element={<SampleCpio />} />
        <Route path="/zh/samples/sample-cue" element={<SampleCue />} />
        <Route path="/zh/samples/sample-dav" element={<SampleDav />} />
        <Route path="/zh/samples/sample-dds" element={<SampleDds />} />
        <Route path="/zh/samples/sample-dmg" element={<SampleDmg />} />
        <Route path="/zh/samples/sample-dng" element={<SampleDng />} />
        <Route path="/zh/samples/sample-eps" element={<SampleEps />} />
        <Route path="/zh/samples/sample-exr" element={<SampleExr />} />
        <Route path="/zh/samples/sample-gz" element={<SampleGz />} />
        <Route path="/zh/samples/sample-hdr" element={<SampleHdr />} />
        <Route path="/zh/samples/sample-heic" element={<SampleHeic />} />
        <Route path="/zh/samples/sample-heif" element={<SampleHeif />} />
        <Route path="/zh/samples/sample-icns" element={<SampleIcns />} />
        <Route path="/zh/samples/sample-ico" element={<SampleIco />} />
        <Route path="/zh/samples/sample-img" element={<SampleImg />} />
        <Route path="/zh/samples/sample-iso" element={<SampleIso />} />
        <Route path="/zh/samples/sample-jpeg" element={<SampleJpeg />} />
        <Route path="/zh/samples/sample-jpg" element={<SampleJpg />} />
        <Route path="/zh/samples/sample-kmz" element={<SampleKmz />} />
        <Route path="/zh/samples/sample-laz" element={<SampleLaz />} />
        <Route path="/zh/samples/sample-lha" element={<SampleLha />} />
        <Route path="/zh/samples/sample-lzh" element={<SampleLzh />} />
        <Route path="/zh/samples/sample-lzma" element={<SampleLzma />} />
        <Route path="/zh/samples/sample-m4a" element={<SampleM4a />} />
        <Route path="/zh/samples/sample-m4v" element={<SampleM4v />} />
        <Route path="/zh/samples/sample-midi" element={<SampleMidi />} />
        <Route path="/zh/samples/sample-mkv" element={<SampleMkv />} />
        <Route path="/zh/samples/sample-7z" element={<Sample7z />} />

        {/* 404 - catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
