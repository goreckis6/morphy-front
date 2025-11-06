import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Home, ArrowLeft, Search, Image as ImageIcon, Smile, Ghost, Rocket } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotateDeg, setRotateDeg] = useState(0);

  useEffect(() => {
    // Animate rotation
    const interval = setInterval(() => {
      setRotateDeg(prev => (prev + 1) % 360);
    }, 50);

    // Track mouse for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found - MorphyIMG</title>
        <meta name="description" content="Oops! The page you're looking for got lost in the digital void. Let's get you back on track!" />
        <link rel="canonical" href="https://morphyhub.com/404" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden relative">
        <Header />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl animate-bounce"
            style={{
              animationDuration: '3s',
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
            }}
          />
          <div 
            className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"
            style={{
              animationDuration: '4s',
              transform: `translate(${-mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px)`
            }}
          />
          <div 
            className="absolute bottom-20 left-1/4 w-28 h-28 bg-indigo-200 rounded-full opacity-20 blur-3xl animate-bounce"
            style={{
              animationDuration: '5s',
              transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 relative z-10">
          <div className="text-center max-w-3xl">
            {/* Animated 404 */}
            <div className="mb-8 relative">
              <div 
                className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 mb-4 relative inline-block"
                style={{
                  transform: `rotate(${rotateDeg * 0.1}deg)`,
                  textShadow: '0 0 30px rgba(147, 51, 234, 0.3)',
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                404
              </div>
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-10 blur-xl"
                style={{ transform: `translate(-50%, -50%) rotate(${rotateDeg * 0.15}deg)` }}
              >
                404
              </div>
            </div>

            {/* Floating Ghost Icon */}
            <div className="mb-8 flex justify-center">
              <div 
                className="relative animate-bounce"
                style={{
                  animationDuration: '2s',
                  transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`
                }}
              >
                <Ghost 
                  className="w-24 h-24 text-purple-400" 
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))',
                    animation: 'wiggle 2s ease-in-out infinite'
                  }}
                />
              </div>
            </div>

            {/* Funny message */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Oops! Something went <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">BOO!</span>
            </h1>
            
            <div className="mb-8 space-y-4">
              <p className="text-xl md:text-2xl text-gray-700 mb-4 animate-slide-up">
                The page you're looking for has vanished into the digital void! 
              </p>
              <p className="text-lg text-gray-600 animate-slide-up-delay">
                Maybe it got converted to another format? 🤔
              </p>
            </div>

            {/* Fun suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-purple-200">
                <Search className="w-8 h-8 text-purple-600 mx-auto mb-3 animate-pulse" />
                <h3 className="font-semibold text-gray-800 mb-2">Check the URL</h3>
                <p className="text-sm text-gray-600">Maybe there's a typo hiding in there?</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-200">
                <ImageIcon className="w-8 h-8 text-blue-600 mx-auto mb-3 animate-pulse" />
                <h3 className="font-semibold text-gray-800 mb-2">Browse Converters</h3>
                <p className="text-sm text-gray-600">We have tons of awesome tools!</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-indigo-200">
                <Rocket className="w-8 h-8 text-indigo-600 mx-auto mb-3 animate-pulse" />
                <h3 className="font-semibold text-gray-800 mb-2">Start Converting</h3>
                <p className="text-sm text-gray-600">Transform files like a pro!</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
              >
                <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Go Home</span>
                <Smile className="w-5 h-5 group-hover:animate-bounce" />
              </button>
              <button
                onClick={() => navigate(-1)}
                className="group inline-flex items-center gap-3 bg-white border-2 border-purple-300 text-purple-700 font-bold py-4 px-8 rounded-full hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </button>
              <button
                onClick={() => navigate('/converters')}
                className="group inline-flex items-center gap-3 bg-white border-2 border-blue-300 text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <ImageIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Browse Tools
              </button>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          
          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg) translateY(0px); }
            25% { transform: rotate(-5deg) translateY(-5px); }
            75% { transform: rotate(5deg) translateY(-5px); }
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
          
          .animate-slide-up-delay {
            animation: slide-up 1s ease-out 0.2s both;
          }
        `}</style>
      </div>
    </>
  );
}

