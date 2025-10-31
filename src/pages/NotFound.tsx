import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found - MorphyIMG</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <link rel="canonical" href="https://morphyimg.com/404" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
          <div className="text-center max-w-2xl">
            <div className="mb-8">
              <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
              <p className="text-xl text-gray-600 mb-8">
                The page you are looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Home className="w-5 h-5" />
                Go to Home
              </button>
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

