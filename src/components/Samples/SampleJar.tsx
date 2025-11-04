import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../Header';
import { Download, Smartphone, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { getStorageUrl } from '../../config/storage';

interface SampleFile {
  size: string;
  filename: string;
  displaySize: string;
}

export default function SampleJar() {
  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [readyToDownload, setReadyToDownload] = useState<number | null>(null);
  const [downloadComplete, setDownloadComplete] = useState<number | null>(null);

  const sampleFiles: SampleFile[] = [
    { size: '100kb', filename: 'sample-jar-100kb.jar', displaySize: '100 KB' },
    { size: '1mb', filename: 'sample-jar-1mb.jar', displaySize: '1 MB' },
    { size: '5mb', filename: 'sample-jar-5mb.jar', displaySize: '5 MB' },
    { size: '50mb', filename: 'sample-jar-50mb.jar', displaySize: '50 MB' },
    { size: '100mb', filename: 'sample-jar-100mb.jar', displaySize: '100 MB' }
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
    "name": "Free JAR Sample Files - Download Test Java Archive Files",
    "url": "https://morphyimg.com/samples/sample-jar",
    "description": "Download free JAR sample Java archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java application execution, JAR extraction, and Java development tools.",
    "isPartOf": { "@id": "https://morphyimg.com#website" },
    "publisher": { "@id": "https://morphyimg.com#organization" }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Helmet>
        <title>Free JAR Sample Files Download - Test Java Archive Files | MorphyIMG</title>
        <meta name="description" content="Download free JAR sample Java archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java application execution, JAR extraction, and Java development tools." />
        <meta name="keywords" content="JAR sample files, test JAR files, download JAR samples, free JAR test files, Java archive samples, JAR application files, .jar test files, Java package files, JAR extraction test files" />
        <meta property="og:title" content="Free JAR Sample Files Download - Test Java Archive Files | MorphyIMG" />
        <meta property="og:description" content="Download free JAR sample Java archive files for testing. Multiple file sizes available for testing Java application execution and JAR extraction tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/samples/sample-jar" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Free JAR Sample Files Download - Test Java Archive Files | MorphyIMG" />
        <meta name="twitter:description" content="Download free JAR sample Java archive files for testing. Multiple file sizes available." />
        <link rel="canonical" href="https://morphyimg.com/samples/sample-jar" />
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
              <Smartphone className="w-12 h-12 text-green-600 mr-4" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">JAR Sample Files</h1>
                <p className="text-gray-600 mt-2">Download free JAR sample Java archive files for testing</p>
              </div>
            </div>

            <p className="text-gray-700 mb-8">
              Download free JAR sample Java archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java application execution, JAR extraction, and Java development tools.
            </p>

            <div className="space-y-4">
              {sampleFiles.map((file, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Smartphone className="w-8 h-8 text-green-600" />
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About JAR Files</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                JAR (Java Archive) is a package file format used to aggregate Java class files, metadata, and resources into a single file. JAR files are commonly used for distributing Java applications and libraries, and can be executed directly by the Java Virtual Machine.
              </p>
              <p className="text-gray-700 mb-4">
                These sample JAR files are provided for testing purposes. They can be used to test Java application execution, JAR extraction tools, and Java development applications.
              </p>
            </div>
          </div>
        </div>

        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gray-400">© 2025 MorphyIMG. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

