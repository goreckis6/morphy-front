import React, { useState } from 'react';
import { Header } from './components/Header';
import { FileUpload } from './components/FileUpload';
import { ConversionPanel } from './components/ConversionPanel';
import { FileViewer } from './components/FileViewer';
import { SupportedFormats } from './components/SupportedFormats';
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
import { HEICtoEPSConventer } from './components/ConversionPages/HEICtoEPSConventer';
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
import { ConversionHub } from './components/ConversionHub';
import { ConverterHub } from './components/ConverterHub';
import { ViewersHub } from './components/ViewersHub';
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
import { 
  RefreshCw, 
  Eye, 
  FileText, 
  Image, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe,
  Star,
  Users,
  TrendingUp,
  ArrowRight,
  File
} from 'lucide-react';

function App() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [totalDataProcessed, setTotalDataProcessed] = useState(0);

  // Simple routing based on pathname (strips language prefixes for routing logic)
  React.useEffect(() => {
    const handlePathChange = () => {
      const path = window.location.pathname;
      // Remove language prefixes for routing (we'll use the same components for all languages)
      const routePath = path
        .replace(/^\/pl\//, '/')
        .replace(/^\/de\//, '/')
        .replace(/^\/pl$/, '/')
        .replace(/^\/de$/, '/');
      setCurrentPath(routePath);
    };

    handlePathChange();
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  // Load and track total data processed
  React.useEffect(() => {
    // Get stored value from localStorage
    const storedData = localStorage.getItem('morphyimg_total_processed');
    const baseGB = storedData ? parseFloat(storedData) : 500; // Start from 500 GB if no stored value
    
    setTotalDataProcessed(baseGB);
    
    // Continue incrementing slowly to simulate live conversions from other users
    const liveIncrement = setInterval(() => {
      setTotalDataProcessed(prev => {
        const newValue = prev + Math.random() * 0.05; // Smaller increments
        localStorage.setItem('morphyimg_total_processed', newValue.toString());
        return newValue;
      });
    }, 10000); // Add small amounts every 10 seconds
    
    return () => {
      clearInterval(liveIncrement);
    };
  }, []);

  // Function to add converted file size to counter
  const addToConversionCounter = (fileSizeInBytes: number) => {
    const sizeInGB = fileSizeInBytes / (1024 * 1024 * 1024);
    setTotalDataProcessed(prev => {
      const newValue = prev + sizeInGB;
      localStorage.setItem('morphyimg_total_processed', newValue.toString());
      return newValue;
    });
  };

  // Make the counter function available globally
  React.useEffect(() => {
    (window as any).addToConversionCounter = addToConversionCounter;
  }, []);

  // Route to specific viewer pages


  // Conversion routes
  if (currentPath === '/convert/jpg-to-text') {
    return <JPGToTEXTConverter />;
  }

  if (currentPath === '/convert/jpg-to-txt') {
    return (
      <JPGToTEXTConverter />
    );
  }

  if (currentPath === '/convert/jpg-to-pdf') {
    return <JPGToPDFConverter />;
  }

  if (currentPath === '/convert/jpg-to-png') {
    return <JPGToPNGConverter     />;
  }


  // CR2 Conversion Routes
  if (currentPath === '/convert/cr2-to-ico') {
    return <CR2ToICOConverter     />;
  }

  if (currentPath === '/convert/cr2-to-webp') {
    return <CR2ToWebPConverter     />;
  }

  // CSV Conversion Routes
  if (currentPath === '/convert/csv-to-docx') {
    return <CSVToDOCXConverter     />;
  }

  if (currentPath === '/convert/csv-to-epub') {
    return <CSVToEPUBConverter     />;
  }

  if (currentPath === '/convert/csv-to-html') {
    return <CSVToHTMLConverter     />;
  }

  if (currentPath === '/convert/csv-to-json') {
    return <CSVToJSONConverter     />;
  }

  if (currentPath === '/convert/csv-to-md') {
    return <CSVToMDConverter     />;
  }

  if (currentPath === '/convert/csv-to-mobi') {
    return <CSVToMOBIConverter     />;
  }

  if (currentPath === '/convert/csv-to-ndjson') {
    return <CSVToNDJSONConverter     />;
  }

  if (currentPath === '/convert/csv-to-parquet') {
    return <CSVToParquetConverter     />;
  }

  if (currentPath === '/convert/csv-to-odp') {
    return <CSVToODPConverter     />;
  }

  if (currentPath === '/convert/csv-to-odt') {
    return <CSVToODTConverter     />;
  }

  if (currentPath === '/convert/csv-to-parquet') {
    return <CSVToParquetConverter     />;
  }

  if (currentPath === '/convert/csv-to-pdf') {
    return <CSVToPDFConverter     />;
  }

  if (currentPath === '/convert/csv-to-ppt') {
    return <CSVToPPTConverter     />;
  }

  if (currentPath === '/convert/csv-to-pptx') {
    return <CSVToPPTXConverter     />;
  }

  if (currentPath === '/convert/csv-to-rtf') {
    return <CSVToRTFConverter     />;
  }

  if (currentPath === '/convert/csv-to-sql') {
    return <CSVToSQLConverter     />;
  }

  if (currentPath === '/convert/csv-to-toml') {
    return <CSVToTOMLConverter     />;
  }

  if (currentPath === '/convert/csv-to-txt') {
    return <CSVToTXTConverter     />;
  }

  if (currentPath === '/convert/csv-to-xls') {
    return <CSVToXLSConverter     />;
  }

  if (currentPath === '/convert/csv-to-xlsx') {
    return <CSVToXLSXConverter     />;
  }

  if (currentPath === '/convert/csv-to-xml') {
    return <CSVToXMLConverter     />;
  }

  if (currentPath === '/convert/csv-to-yaml') {
    return <CSVToYAMLConverter     />;
  }


  if (currentPath === '/convert/dng-to-webp') {
    return <DNGToWebPConverter     />;
  }

  if (currentPath === '/convert/doc-to-csv') {
    return <DOCToCSVConverter     />;
  }

  if (currentPath === '/convert/doc-to-epub') {
    return <DOCToEPUBConverter     />;
  }

  if (currentPath === '/convert/doc-to-mobi') {
    return <DOCToMOBIConverter     />;
  }

  if (currentPath === '/convert/doc-to-odt') {
    return <DOCToODTConverter     />;
  }

  if (currentPath === '/convert/doc-to-txt') {
    return <DOCToTXTConverter     />;
  }

  if (currentPath === '/convert/heic-to-svg') {
    return <HEICtoSVGConverter     />;
  }

  if (currentPath === '/convert/heic-to-pdf') {
    return <HEICtoPDFConverter     />;
  }

  if (currentPath === '/convert/heic-to-png') {
    return <HEICtoPNGConventer     />;
  }

  if (currentPath === '/convert/heic-to-eps') {
    return <HEICtoEPSConventer     />;
  }

  if (currentPath === '/convert/docx-to-csv') {
    return <DOCXToCSVConverter     />;
  }

  if (currentPath === '/convert/docx-to-epub') {
    return <DOCXToEPUBConverter     />;
  }

  if (currentPath === '/convert/docx-to-mobi') {
    return <DOCXToMOBIConverter     />;
  }

  if (currentPath === '/convert/docx-to-odt') {
    return <DOCXToODTConverter     />;
  }

  if (currentPath === '/convert/docx-to-txt') {
    return <DOCXToTXTConverter     />;
  }


  if (currentPath === '/convert/eps-to-webp') {
    return <EPSToWebPConverter     />;
  }

  if (currentPath === '/convert/epub-to-csv') {
    return <EPUBToCSVConverter     />;
  }

  if (currentPath === '/convert/epub-to-doc') {
    return <EPUBToDOCConverter     />;
  }

  if (currentPath === '/convert/epub-to-docx') {
    return <EPUBToDOCXConverter     />;
  }

  if (currentPath === '/convert/epub-to-html') {
    return <EPUBToHTMLConverter     />;
  }

  if (currentPath === '/convert/epub-to-md') {
    return <EPUBToMDConverter     />;
  }

  if (currentPath === '/convert/epub-to-mobi') {
    return <EPUBToMOBIConverter     />;
  }

  if (currentPath === '/convert/epub-to-odp') {
    return <EPUBToODPConverter     />;
  }

  if (currentPath === '/convert/epub-to-odt') {
    return <EPUBToODTConverter     />;
  }

  if (currentPath === '/convert/epub-to-pdf') {
    return <EPUBToPDFConverter     />;
  }

  if (currentPath === '/convert/epub-to-ppt') {
    return <EPUBToPPTConverter     />;
  }

  if (currentPath === '/convert/epub-to-pptx') {
    return <EPUBToPPTXConverter     />;
  }

  if (currentPath === '/convert/epub-to-rtf') {
    return <EPUBToRTFConverter     />;
  }

  if (currentPath === '/convert/epub-to-txt') {
    return <EPUBToTXTConverter     />;
  }

  if (currentPath === '/convert/epub-to-xlsx') {
    return <EPUBToXLSXConverter     />;
  }

  // Converter Hub Route
  if (currentPath === '/converters') {
    return <ConverterHub     />;
  }

  // Viewers Hub Route
  if (currentPath === '/viewers') {
    return <ViewersHub     />;
  }

  // Viewer Routes
  if (currentPath === '/viewers/jpg' || currentPath === '/viewers/jpeg') {
    return <JPEGViewer     />;
  }

  if (currentPath === '/viewers/png') {
    return <PNGViewer     />;
  }

  if (currentPath === '/viewers/webp') {
    return <WebPViewer     />;
  }

  if (currentPath === '/viewers/gif') {
    return <GIFViewer     />;
  }

  if (currentPath === '/viewers/svg') {
    return <SVGViewer     />;
  }


  if (currentPath === '/viewers/bmp') {
    return <BMPViewer     />;
  }

  if (currentPath === '/viewers/ico') {
    return <ICOViewer     />;
  }

  if (currentPath === '/viewers/heic' || currentPath === '/viewers/heif') {
    return <HEICViewer     />;
  }

  if (currentPath === '/viewers/avif') {
    return <AVIFViewer     />;
  }

  if (currentPath === '/viewers/pdf') {
    return <PDFViewer     />;
  }

  if (currentPath === '/viewers/rtf') {
    return <RTFViewer     />;
  }

  if (currentPath === '/viewers/txt') {
    return <TXTViewer     />;
  }

  if (currentPath === '/viewers/md' || currentPath === '/viewers/markdown') {
    return <MarkdownViewer     />;
  }

  if (currentPath === '/viewers/docx' || currentPath === '/viewers/doc') {
    return <DOCXViewer     />;
  }

  if (currentPath === '/viewers/odt') {
    return <ODTViewer     />;
  }

  if (currentPath === '/viewers/xlsx' || currentPath === '/viewers/excel') {
    return <XLSXViewer     />;
  }

  if (currentPath === '/viewers/csv') {
    return <CSVViewer     />;
  }

  if (currentPath === '/viewers/ods') {
    return <ODSViewer     />;
  }

  if (currentPath === '/viewers/json') {
    return <JSONViewer     />;
  }

  if (currentPath === '/viewers/xml') {
    return <XMLViewer     />;
  }

  if (currentPath === '/viewers/html' || currentPath === '/viewers/htm') {
    return <HTMLViewer     />;
  }

  if (currentPath === '/viewers/css') {
    return <CSSViewer     />;
  }

  if (currentPath === '/viewers/js' || currentPath === '/viewers/javascript') {
    return <JSViewer     />;
  }

  if (currentPath === '/viewers/py' || currentPath === '/viewers/python') {
    return <PythonViewer     />;
  }

  if (currentPath === '/viewers/nef') {
    return <NEFViewer     />;
  }

  if (currentPath === '/viewers/cr2') {
    return <CR2Viewer     />;
  }

  if (currentPath === '/viewers/dcr') {
    return <DCRViewer     />;
  }

  if (currentPath === '/viewers/x3f') {
    return <X3FViewer     />;
  }

  if (currentPath === '/viewers/arw') {
    return <ARWViewer     />;
  }

  if (currentPath === '/viewers/raf') {
    return <RAFViewer     />;
  }

  if (currentPath === '/viewers/orf') {
    return <ORFViewer     />;
  }

  if (currentPath === '/viewers/dng') {
    return <DNGViewer     />;
  }

  if (currentPath === '/viewers/pef') {
    return <PEFViewer     />;
  }

  if (currentPath === '/viewers/odp') {
    return <ODPViewer     />;
  }

  if (currentPath === '/viewers/otp') {
    return <OTPViewer     />;
  }

  if (currentPath === '/viewers/pot') {
    return <POTViewer     />;
  }

  if (currentPath === '/viewers/pps') {
    return <PPSViewer     />;
  }

  if (currentPath === '/viewers/ppt') {
    return <PPTViewer     />;
  }

  if (currentPath === '/viewers/sdd') {
    return <SDDViewer     />;
  }

  if (currentPath === '/viewers/sx') {
    return <SXViewer     />;
  }

  if (currentPath === '/viewers/stl') {
    return <STLViewer     />;
  }

  const features = [
    { icon: <Zap className="w-12 h-12 text-yellow-500" />, title: 'Lightning Fast', description: 'Process files in seconds with our optimized conversion engine powered by Python and Sharp' },
    { icon: <Shield className="w-12 h-12 text-green-500" />, title: 'Secure & Private', description: 'All conversions happen server-side with enterprise-grade security. Files are automatically deleted after processing' },
    { icon: <Globe className="w-12 h-12 text-blue-500" />, title: 'Universal Support', description: 'Convert between 300+ format combinations including images, documents, ebooks, and data formats' },
    { icon: <BarChart3 className="w-12 h-12 text-purple-500" />, title: 'Batch Processing', description: 'Convert up to 20 files at once with our powerful batch processing engine' },
    { icon: <Eye className="w-12 h-12 text-pink-500" />, title: 'File Viewer', description: 'Preview and view your files directly in the browser before or after conversion' },
    { icon: <Star className="w-12 h-12 text-orange-500" />, title: 'Professional Quality', description: 'Industry-standard conversion with quality controls and customizable settings for every format' },
  ];

  // Format the data processed counter
  const formatDataProcessed = (gb: number) => {
    if (gb >= 1000) {
      return `${(gb / 1000).toFixed(1)} TB`;
    }
    return `${gb.toFixed(1)} GB`;
  };

  const stats = [
    { icon: <FileText className="w-8 h-8 text-blue-600" />, value: '300+', label: 'Supported Formats' },
    { icon: <TrendingUp className="w-8 h-8 text-green-600" />, value: formatDataProcessed(totalDataProcessed), label: 'Data Processed' },
    { icon: <Zap className="w-8 h-8 text-purple-600" />, value: '20 Files', label: 'Batch Processing' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-24 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Convert Any File.
                <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Instantly.
                </span>
            </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-4xl mx-auto leading-relaxed">
                Fast, secure, and easy file conversions between <span className="font-bold text-yellow-300">300+ formats</span> — directly in your browser. 
                No registration required.
              </p>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-sm font-medium">🚀 Lightning Fast</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-sm font-medium">🔒 100% Secure</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-sm font-medium">⚡ No Registration</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-sm font-medium">📦 Batch Processing</span>
                </div>
              </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-2"
              >
                  <RefreshCw className="w-5 h-5" />
                  Try It Now - Free
              </button>
              <button 
                  onClick={() => document.getElementById('supported-formats')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
              >
                  <FileText className="w-5 h-5" />
                  See Supported Formats
              </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                  <div className="flex justify-center mb-4 bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-full items-center mx-auto">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, fast, and secure file conversion in just 3 steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">1</span>
                  </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Upload File</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Drag & drop your file or click to browse. Supports up to 100MB per file.
                  </p>
                </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Select Format</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Choose your desired output format from 300+ supported formats.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Download</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Click convert and download your converted file instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Universal File Converter Section (hidden as requested)
        <section id="converter" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                  <RefreshCw className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Universal File Converter
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Upload your files and convert them instantly. Supports 300+ format combinations with professional-grade quality.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <FileUpload onFilesSelected={setSelectedFiles} />
                </div>
                <div className="lg:col-span-2">
                  <ConversionPanel files={selectedFiles} />
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Popular Converters Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Popular File Converters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our most popular conversion tools. All converters support batch processing and quality controls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Data Format Converters */}
              <a href="/convert/csv-to-json" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-blue-300">
                <div className="text-center">
                  <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CSV to JSON</h3>
                  <p className="text-sm text-gray-600">Convert spreadsheet data to JSON</p>
                </div>
              </a>

              <a href="/convert/csv-to-ndjson" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-purple-300">
                <div className="text-center">
                  <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CSV to NDJSON</h3>
                  <p className="text-sm text-gray-600">Streaming data format</p>
                </div>
              </a>


              {/* Image Converters */}
              <a href="/convert/dng-to-webp" className="group bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-pink-300">
                <div className="text-center">
                  <div className="bg-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">DNG to WebP</h3>
                  <p className="text-sm text-gray-600">RAW to modern web format</p>
                </div>
              </a>


              <a href="/convert/cr2-to-webp" className="group bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-violet-300">
                <div className="text-center">
                  <div className="bg-violet-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CR2 to WebP</h3>
                  <p className="text-sm text-gray-600">Canon RAW to web</p>
                </div>
              </a>

              <a href="/convert/cr2-to-ico" className="group bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-amber-300">
                <div className="text-center">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CR2 to ICO</h3>
                  <p className="text-sm text-gray-600">Canon RAW to icons</p>
                </div>
              </a>

              {/* Document/eBook Converters */}
              <a href="/convert/epub-to-pdf" className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-red-300">
                <div className="text-center">
                  <div className="bg-red-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <File className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">EPUB to PDF</h3>
                  <p className="text-sm text-gray-600">eBook to document</p>
                </div>
              </a>

              <a href="/convert/epub-to-mobi" className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-emerald-300">
                <div className="text-center">
                  <div className="bg-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <File className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">EPUB to MOBI</h3>
                  <p className="text-sm text-gray-600">eBook for Kindle</p>
                </div>
              </a>

              <a href="/convert/csv-to-xlsx" className="group bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-teal-300">
                <div className="text-center">
                  <div className="bg-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CSV to XLSX</h3>
                  <p className="text-sm text-gray-600">Spreadsheet to Excel</p>
                </div>
              </a>

              <a href="/convert/docx-to-pdf" className="group bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-slate-300">
                <div className="text-center">
                  <div className="bg-slate-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <File className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">DOCX to PDF</h3>
                  <p className="text-sm text-gray-600">Word to document</p>
                </div>
              </a>
            </div>

            <div className="text-center mt-12">
              <a 
                href="/converters" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <RefreshCw className="w-5 h-5" />
                View All 300+ Converters
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose MorphyIMG?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for professionals and everyday users alike. Experience the difference with our cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-md">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                The ultimate file conversion and viewing platform for professionals and everyday users.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built with</span>
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>by developers who care about quality.</span>
              </div>
            </div>
          </div>
        </footer>

        {/* File Viewer Modal */}
        {viewerFile && (
          <FileViewer
            file={viewerFile}
            onClose={() => setViewerFile(null)}
          />
        )}
      </div>
  );
}

export default App;