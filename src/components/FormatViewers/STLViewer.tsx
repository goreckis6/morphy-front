import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Zap, Box, RotateCw, ZoomIn, ZoomOut, Maximize } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const STLViewer: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewData, setPreviewData] = useState<{ modelUrl: string; fileSize: number; triangles: number } | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const { validateFiles, errors: validationErrors } = useFileValidation({
    maxFileSize: 100 * 1024 * 1024, // 100MB
    maxTotalSize: 100 * 1024 * 1024,
    maxFiles: 1,
    allowedFormats: ['stl']
  });

  const handleFileSelect = async (files: File[]) => {
    setError(null);
    setPreviewData(null);

    if (files.length === 0) {
      return;
    }

    const selectedFile = files[0];
    
    // Validate file
    const validation = validateFiles([selectedFile]);
    if (!validation.isValid) {
      setError(validation.errors[0] || 'Invalid file');
      return;
    }

    // Check file size (max 100MB)
    if (selectedFile.size > 100 * 1024 * 1024) {
      setError('File size exceeds 100MB limit for preview');
      return;
    }

    setFile(selectedFile);
    setIsLoading(true);

    try {
      // Create object URL for the STL file
      const modelUrl = URL.createObjectURL(selectedFile);
      
      // Load STL to count triangles (simplified)
      const fileSize = selectedFile.size;
      const estimatedTriangles = Math.floor(fileSize / 50); // Rough estimate
      
      setPreviewData({
        modelUrl,
        fileSize,
        triangles: estimatedTriangles
      });

      // Initialize Three.js viewer after state update
      setTimeout(() => {
        initThreeJS(modelUrl);
      }, 100);

    } catch (err) {
      console.error('Error loading STL:', err);
      setError('Failed to load STL file. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const initThreeJS = async (modelUrl: string) => {
    if (!canvasRef.current) return;

    try {
      // Dynamically import Three.js to reduce initial bundle size
      const THREE = await import('three');
      const { STLLoader } = await import('three/examples/jsm/loaders/STLLoader.js');
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');

      // Clear previous content
      canvasRef.current.innerHTML = '';

      // Setup scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf5f5f5);

      // Setup camera
      const camera = new THREE.PerspectiveCamera(
        75,
        canvasRef.current.clientWidth / canvasRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 100);

      // Setup renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      canvasRef.current.appendChild(renderer.domElement);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight1.position.set(1, 1, 1);
      scene.add(directionalLight1);

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
      directionalLight2.position.set(-1, -1, -1);
      scene.add(directionalLight2);

      // Add grid helper
      const gridHelper = new THREE.GridHelper(200, 20, 0xcccccc, 0xeeeeee);
      scene.add(gridHelper);

      // Setup controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.screenSpacePanning = false;
      controls.minDistance = 10;
      controls.maxDistance = 500;

      // Load STL
      const loader = new STLLoader();
      loader.load(
        modelUrl,
        (geometry) => {
          // Center geometry
          geometry.center();

          // Calculate bounding box for auto-scaling
          geometry.computeBoundingBox();
          const boundingBox = geometry.boundingBox!;
          const size = new THREE.Vector3();
          boundingBox.getSize(size);
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 50 / maxDim;
          
          // Create material
          const material = new THREE.MeshPhongMaterial({
            color: 0x3b82f6,
            specular: 0x111111,
            shininess: 200,
            flatShading: false
          });

          // Create mesh
          const mesh = new THREE.Mesh(geometry, material);
          mesh.scale.set(scale, scale, scale);
          mesh.rotation.x = -Math.PI / 2; // Rotate to standard orientation
          
          scene.add(mesh);

          // Add wireframe overlay (optional)
          const wireframe = new THREE.WireframeGeometry(geometry);
          const line = new THREE.LineSegments(wireframe);
          (line.material as THREE.LineBasicMaterial).color.setHex(0x1e40af);
          (line.material as THREE.LineBasicMaterial).opacity = 0.1;
          (line.material as THREE.LineBasicMaterial).transparent = true;
          line.scale.set(scale, scale, scale);
          line.rotation.x = -Math.PI / 2;
          scene.add(line);

          // Update triangle count
          const triangleCount = geometry.attributes.position.count / 3;
          setPreviewData(prev => prev ? { ...prev, triangles: Math.floor(triangleCount) } : null);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
          console.error('Error loading STL:', error);
          setError('Failed to parse STL file');
        }
      );

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const handleResize = () => {
        if (!canvasRef.current) return;
        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        controls.dispose();
      };

    } catch (err) {
      console.error('Error initializing Three.js:', err);
      setError('Failed to initialize 3D viewer. Please ensure your browser supports WebGL.');
    }
  };

  const handleDownload = () => {
    if (!file) return;
    
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <>
      <Helmet>
        <title>Free STL Viewer Online - View 3D Models | MorphyIMG</title>
        <meta name="description" content="Free online STL file viewer. Preview 3D models, STL files, and stereolithography files directly in your browser with interactive 3D rendering. No software installation required." />
        <meta name="keywords" content="stl viewer, 3d model viewer, stereolithography viewer, 3d file viewer, stl preview, 3d printing viewer, free stl viewer online" />
        <link rel="canonical" href="https://morphyimg.com/viewers/stl" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free STL Viewer Online - View 3D Models | MorphyIMG" />
        <meta property="og:description" content="Free online STL file viewer. Preview 3D models directly in your browser with interactive 3D rendering." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/stl" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free STL Viewer Online - View 3D Models" />
        <meta name="twitter:description" content="Free online STL file viewer. Preview 3D models directly in your browser." />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "STL Viewer",
            "description": "Free online STL file viewer for 3D models",
            "url": "https://morphyimg.com/viewers/stl",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <a
            href="/viewers"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Viewers
          </a>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-4">
              <Box className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              STL File Viewer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              View and interact with 3D models in STL format. Rotate, zoom, and inspect your 3D printing models directly in your browser.
            </p>
          </div>

          {/* About STL Format */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start space-x-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">About STL Format</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>STL (Stereolithography)</strong> is a file format native to 3D Systems' stereolithography CAD software. 
                  It's the most widely used format for 3D printing and is supported by almost all 3D printers and slicing software.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">✨ Common Uses</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 3D Printing & Rapid Prototyping</li>
                      <li>• CAD/CAM Manufacturing</li>
                      <li>• 3D Modeling & Design</li>
                      <li>• Engineering & Architecture</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🔧 Features</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Universal 3D Format</li>
                      <li>• ASCII & Binary Variants</li>
                      <li>• Triangle Mesh Representation</li>
                      <li>• Wide Software Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interactive 3D View
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rotate, zoom, and pan your 3D models with smooth controls powered by Three.js and WebGL
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Instant Preview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No server upload required - STL files are rendered locally in your browser for maximum privacy
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Box className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Model Information
              </h3>
              <p className="text-gray-600 leading-relaxed">
                View file size, triangle count, and other mesh statistics of your 3D models
              </p>
            </div>
          </div>

          {/* File Upload Area */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <FileUpload
              onFilesSelected={handleFileSelect}
              accept=".stl"
              maxFiles={1}
              maxSize={100 * 1024 * 1024}
              title="Upload STL File"
              description="Drag and drop your STL file here, or click to browse"
              subtitle="✓ Max 20 files • Up to 100 MB Total"
            />

            {validationErrors.length > 0 && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Validation Error</p>
                    {validationErrors.map((error, index) => (
                      <p key={index} className="text-red-600 text-sm mt-1">{error}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Preview Error</p>
                    <p className="text-red-600 text-sm mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="mt-8 text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600">Loading 3D model...</p>
              </div>
            )}

            {previewData && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">3D Model Preview</h3>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>

                {/* Model Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">File Size</p>
                    <p className="text-lg font-bold text-gray-900">{formatFileSize(previewData.fileSize)}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Triangles</p>
                    <p className="text-lg font-bold text-gray-900">{previewData.triangles.toLocaleString()}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Format</p>
                    <p className="text-lg font-bold text-gray-900">STL</p>
                  </div>
                </div>

                {/* 3D Canvas */}
                <div 
                  ref={canvasRef}
                  className="w-full bg-gray-50 rounded-lg border-2 border-gray-200"
                  style={{ height: '600px' }}
                />

                {/* Controls Help */}
                <div className="mt-4 bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium mb-2">🖱️ Controls:</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div><strong>Rotate:</strong> Left click + drag</div>
                    <div><strong>Pan:</strong> Right click + drag</div>
                    <div><strong>Zoom:</strong> Scroll wheel</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-bold text-gray-900 mb-2">Upload STL File</h3>
                <p className="text-gray-600 text-sm">Select your 3D model file from your computer</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-bold text-gray-900 mb-2">3D Rendering</h3>
                <p className="text-gray-600 text-sm">Model is rendered using WebGL in your browser</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-bold text-gray-900 mb-2">Interact & Download</h3>
                <p className="text-gray-600 text-sm">Explore your model and download if needed</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-600">
              <p className="mb-2">
                <strong>STL Viewer</strong> - View 3D models online with interactive rendering
              </p>
              <p className="text-sm">
                Supports ASCII and binary STL files • Powered by Three.js & WebGL • 100% client-side processing
              </p>
              <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
                <a href="/viewers" className="text-blue-600 hover:text-blue-800">All Viewers</a>
                <span className="text-gray-400">•</span>
                <a href="/converters" className="text-blue-600 hover:text-blue-800">Converters</a>
                <span className="text-gray-400">•</span>
                <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

