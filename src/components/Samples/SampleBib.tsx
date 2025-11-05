import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Download, FileSpreadsheet, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { getStorageUrl } from '../../config/storage';

interface SampleFile {
  size: string;
  filename: string;
  displaySize: string;
}

export default function SampleBib() {
  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [readyToDownload, setReadyToDownload] = useState<number | null>(null);
  const [downloadComplete, setDownloadComplete] = useState<number | null>(null);

  const sampleFiles: SampleFile[] = [
    { size: '100kb', filename: 'sample-bib-100kb.bib', displaySize: '100 KB' },
    { size: '1mb', filename: 'sample-bib-1mb.bib', displaySize: '1 MB' },
    { size: '5mb', filename: 'sample-bib-5mb.bib', displaySize: '5 MB' },
    { size: '50mb', filename: 'sample-bib-50mb.bib', displaySize: '50 MB' },
    { size: '100mb', filename: 'sample-bib-100mb.bib', displaySize: '100 MB' }
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
    "name": "Free BIB Sample Files - Download Test Bibliography Files",
    "url": "https://morphyimg.com/samples/sample-bib",
    "description": "Download free BIB sample BibTeX bibliography files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing bibliography management, citation processing, and BibTeX format tools.",
    "isPartOf": { "@id": "https://morphyimg.com#website" },
    "publisher": { "@id": "https://morphyimg.com#organization" }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Helmet>
        <title>Free BIB Sample Files Download - Test Bibliography Files | MorphyIMG</title>
        <meta name="description" content="Download free BIB sample BibTeX bibliography files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing bibliography management, citation processing, and BibTeX format tools." />
        <meta name="keywords" content="BIB sample files, test BIB files, download BIB samples, free BIB test files, BibTeX bibliography samples, citation file samples, bibliography management samples, BIB conversion test files, .bib test files, LaTeX bibliography samples, research citation samples" />
        <meta property="og:title" content="Free BIB Sample Files Download - Test Bibliography Files | MorphyIMG" />
        <meta property="og:description" content="Download free BIB sample BibTeX bibliography files for testing. Multiple file sizes available for testing bibliography management and citation processing tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/samples/sample-bib" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Free BIB Sample Files Download - Test Bibliography Files | MorphyIMG" />
        <meta name="twitter:description" content="Download free BIB sample BibTeX bibliography files for testing. Multiple file sizes available." />
        <link rel="canonical" href="https://morphyimg.com/samples/sample-bib" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-3 sm:py-4">
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                <FileSpreadsheet className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                BIB Sample Files
              </h1>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Download free BIB sample BibTeX bibliography files for testing. Multiple file sizes available to test your bibliography management, citation processing, and BibTeX format tools.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {sampleFiles.map((file, index) => (
                <div
                  key={index}
                  className={`px-4 sm:px-6 py-4 sm:py-5 hover:bg-gray-50 transition-colors ${
                    index === 0 ? 'rounded-t-lg' : ''
                  } ${index === sampleFiles.length - 1 ? 'rounded-b-lg' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="p-2 rounded-lg bg-purple-100">
                        <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                          {file.filename}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          File size: <span className="font-medium text-gray-700">{file.displaySize}</span>
                        </p>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto sm:ml-4">
                      {downloadingIndex === index ? (
                        <div className="flex flex-col items-center sm:items-end space-y-2">
                          {countdown !== null && countdown > 0 ? (
                            <>
                              <div className="flex items-center space-x-2 text-orange-600">
                                <Clock className="w-4 h-4 animate-spin" />
                                <span className="text-sm font-medium">
                                  Download ready in {countdown}s...
                                </span>
                              </div>
                              <div className="w-full sm:w-48 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
                                  style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                                />
                              </div>
                            </>
                          ) : null}
                        </div>
                      ) : readyToDownload === index ? (
                        <button
                          onClick={() => handleDownloadNow(index, file.filename)}
                          className="inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors w-full sm:w-auto shadow-lg"
                        >
                          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Download Now</span>
                        </button>
                      ) : downloadComplete === index ? (
                        <div className="flex items-center space-x-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">Download started</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleDownload(index, file.filename)}
                          disabled={downloadingIndex !== null || readyToDownload !== null}
                          className="inline-flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors w-full sm:w-auto"
                        >
                          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Download</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              About These Sample Files
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>• These are test BIB (BibTeX bibliography) files in various sizes for testing purposes</li>
              <li>• Files are hosted securely and available for free download</li>
              <li>• Perfect for testing bibliography management, citation processing, and BibTeX format tools</li>
              <li>• No registration or account required</li>
            </ul>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileSpreadsheet className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Multiple Sizes
              </h3>
              <p className="text-sm text-gray-600">
                Test files ranging from 100 KB to 100 MB
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Free Download
              </h3>
              <p className="text-sm text-gray-600">
                No registration or payment required
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Safe & Tested
              </h3>
              <p className="text-sm text-gray-600">
                All files are safe and tested for compatibility
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

