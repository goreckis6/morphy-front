import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Download, Box, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { getStorageUrl } from '../../config/storage';

interface SampleFile {
  size: string;
  filename: string;
  displaySize: string;
}

export default function SampleDwg() {
  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [readyToDownload, setReadyToDownload] = useState<number | null>(null);
  const [downloadComplete, setDownloadComplete] = useState<number | null>(null);

  const sampleFiles: SampleFile[] = [
    { size: '100kb', filename: 'sample-dwg-100kb.dwg', displaySize: '100 KB' },
    { size: '1mb', filename: 'sample-dwg-1mb.dwg', displaySize: '1 MB' },
    { size: '5mb', filename: 'sample-dwg-5mb.dwg', displaySize: '5 MB' },
    { size: '50mb', filename: 'sample-dwg-50mb.dwg', displaySize: '50 MB' },
    { size: '100mb', filename: 'sample-dwg-100mb.dwg', displaySize: '100 MB' }
  ];

  const handleDownload = async (index: number, filename: string) => {
    setDownloadingIndex(index);
    setDownloadComplete(null);
    setReadyToDownload(null);

    let remaining = 10;
    setCountdown(remaining);

    const countdownInterval = setInterval(() => {
      remaining--;
      setCountdown(remaining);

      if (remaining === 0) {
        clearInterval(countdownInterval);
        setCountdown(null);
        setReadyToDownload(index);
        setDownloadingIndex(null);
      }
    }, 1000);
  };

  const handleDownloadNow = (index: number, filename: string) => {
    const downloadUrl = getStorageUrl(filename);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadComplete(index);
    setReadyToDownload(null);

    setTimeout(() => {
      setDownloadComplete(null);
    }, 2000);
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free DWG Sample Files - Download Test AutoCAD Drawing Files",
    "url": "https://morphyimg.com/samples/sample-dwg",
    "description": "Download free DWG sample AutoCAD drawing files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, AutoCAD conversion, and drawing file processing tools.",
    "isPartOf": { "@id": "https://morphyimg.com#website" },
    "publisher": { "@id": "https://morphyimg.com#organization" }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Helmet>
        <title>Free DWG Sample Files Download - Test AutoCAD Drawing Files | MorphyIMG</title>
        <meta name="description" content="Download free DWG sample AutoCAD drawing files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, AutoCAD conversion, and drawing file processing tools." />
        <meta name="keywords" content="DWG sample files, test DWG files, download DWG samples, free DWG test files, AutoCAD sample files, CAD drawing samples, DWG drawing files, .dwg test files, AutoCAD file samples, CAD conversion test files" />
        <meta property="og:title" content="Free DWG Sample Files Download - Test AutoCAD Drawing Files | MorphyIMG" />
        <meta property="og:description" content="Download free DWG sample AutoCAD drawing files for testing. Multiple file sizes available for testing CAD software and AutoCAD conversion tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/samples/sample-dwg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Free DWG Sample Files Download - Test AutoCAD Drawing Files | MorphyIMG" />
        <meta name="twitter:description" content="Download free DWG sample AutoCAD drawing files for testing. Multiple file sizes available." />
        <link rel="canonical" href="https://morphyimg.com/samples/sample-dwg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
      </Helmet>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <button
            onClick={handleBack}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <Box className="w-12 h-12 text-amber-600 mr-4" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">DWG Sample Files</h1>
                <p className="text-gray-600 mt-2">Download free DWG sample AutoCAD drawing files for testing</p>
              </div>
            </div>

            <p className="text-gray-700 mb-8">
              Download free DWG sample AutoCAD drawing files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, AutoCAD conversion, and drawing file processing tools.
            </p>

            <div className="space-y-4">
              {sampleFiles.map((file, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Box className="w-8 h-8 text-amber-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{file.filename}</h3>
                        <p className="text-sm text-gray-500">Size: {file.displaySize}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {downloadingIndex === index && countdown !== null && (
                        <div className="flex items-center text-purple-600">
                          <Clock className="w-5 h-5 mr-2 animate-spin" />
                          <span className="font-medium">Starting in {countdown}s...</span>
                        </div>
                      )}
                      {readyToDownload === index && (
                        <button
                          onClick={() => handleDownloadNow(index, file.filename)}
                          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Download Now
                        </button>
                      )}
                      {downloadComplete === index && (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          <span className="font-medium">Downloaded!</span>
                        </div>
                      )}
                      {downloadingIndex !== index && readyToDownload !== index && downloadComplete !== index && (
                        <button
                          onClick={() => handleDownload(index, file.filename)}
                          className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Download
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About DWG Files</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                DWG (Drawing) is a proprietary binary file format used for storing two- and three-dimensional design data and metadata. It is the native format for several CAD packages, most notably AutoCAD.
              </p>
              <p className="text-gray-700 mb-4">
                These sample DWG files are provided for testing purposes. They can be used to test CAD software compatibility, AutoCAD conversion tools, and drawing file processing applications.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

