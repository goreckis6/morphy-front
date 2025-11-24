import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useIndexNow } from '../hooks/useIndexNow';
import { CheckCircle2, XCircle, Loader2, Send, Globe, FileText, Plus, Trash2 } from 'lucide-react';

export default function IndexNow() {
  const { submitPage, submitPages, submitSitemapUrls } = useIndexNow();
  const [urls, setUrls] = useState<string[]>(['']);
  const [currentUrl, setCurrentUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null);

  const handleAddUrl = () => {
    setUrls([...urls, '']);
  };

  const handleRemoveUrl = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  const handleUrlChange = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleSubmitUrls = async () => {
    const validUrls = urls.filter(url => url.trim() !== '');
    if (validUrls.length === 0) {
      setResult({ success: false, error: 'Please enter at least one URL' });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await submitPages(validUrls);
      setResult({
        success: response.success,
        message: response.message,
        error: response.error,
      });
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitCurrentPage = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await submitPage();
      setResult({
        success: response.success,
        message: response.message,
        error: response.error,
      });
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitSingleUrl = async () => {
    if (!currentUrl.trim()) {
      setResult({ success: false, error: 'Please enter a URL' });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await submitPage(currentUrl);
      setResult({
        success: response.success,
        message: response.message,
        error: response.error,
      });
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitSitemap = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await submitSitemapUrls();
      setResult({
        success: response.success,
        message: response.message,
        error: response.error,
      });
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>IndexNow - Submit URLs to Search Engines | MorphyHub</title>
        <meta name="description" content="Submit your website URLs to search engines using IndexNow protocol" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IndexNow URL Submission
            </h1>
            <p className="text-lg text-gray-600">
              Submit your website URLs to search engines using the IndexNow protocol
            </p>
          </div>

          {/* Result Message */}
          {result && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                result.success
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}
            >
              <div className="flex items-center gap-2">
                {result.success ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
                <div>
                  <p className="font-semibold">
                    {result.success ? 'Success!' : 'Error'}
                  </p>
                  <p className="text-sm mt-1">
                    {result.message || result.error}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {/* Submit Current Page */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Submit Current Page
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Submit the current page URL to IndexNow
              </p>
              <button
                onClick={handleSubmitCurrentPage}
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Current Page
                  </>
                )}
              </button>
            </div>

            {/* Submit Single URL */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Submit Single URL
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Enter a URL to submit to IndexNow
              </p>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={currentUrl}
                  onChange={(e) => setCurrentUrl(e.target.value)}
                  placeholder="https://morphyhub.com/page"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={loading}
                />
                <button
                  onClick={handleSubmitSingleUrl}
                  disabled={loading}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Multiple URLs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Submit Multiple URLs
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Add multiple URLs to submit in bulk
              </p>
              <div className="space-y-3 mb-4">
                {urls.map((url, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => handleUrlChange(index, e.target.value)}
                      placeholder={`https://morphyhub.com/page-${index + 1}`}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      disabled={loading}
                    />
                    {urls.length > 1 && (
                      <button
                        onClick={() => handleRemoveUrl(index)}
                        disabled={loading}
                        className="px-4 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleAddUrl}
                  disabled={loading}
                  className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add URL
                </button>
                <button
                  onClick={handleSubmitUrls}
                  disabled={loading}
                  className="flex-1 sm:flex-none px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit All URLs
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Sitemap */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Submit Sitemap
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Submit all URLs from your sitemap.xml file
              </p>
              <button
                onClick={handleSubmitSitemap}
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Sitemap
                  </>
                )}
              </button>
            </div>

            {/* Info Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                About IndexNow
              </h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>
                  • IndexNow is an open protocol that allows you to instantly inform search engines about URL changes on your website
                </li>
                <li>
                  • Supported by Bing, Yandex, and other search engines
                </li>
                <li>
                  • Your API key is hosted at:{' '}
                  <a
                    href="https://morphyhub.com/d778e855ffec4226b9e198cfce528ac3.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-900"
                  >
                    https://morphyhub.com/d778e855ffec4226b9e198cfce528ac3.txt
                  </a>
                </li>
                <li>
                  • URLs must belong to morphyhub.com domain
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

