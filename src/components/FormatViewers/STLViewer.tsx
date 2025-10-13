import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Upload, Eye, Download, Share2, ArrowLeft } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';

export const STLViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only STL files
    const stlFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'stl';
    });
    setSelectedFiles(stlFiles);
  };

  const openViewer = (file: File) => {
    setViewerFile(file);
    
    // Open in new window with 3D viewer
    const newWindow = window.open('', '_blank', 'width=1200,height=800');
    if (newWindow) {
      const modelUrl = URL.createObjectURL(file);
      
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>STL 3D Viewer - ${file.name}</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              overflow: hidden;
              font-family: Arial, sans-serif;
            }
            #header-bar {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
              color: white;
              padding: 12px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              z-index: 1000;
            }
            #header-bar h1 {
              margin: 0;
              font-size: 18px;
              font-weight: 600;
            }
            .header-actions {
              display: flex;
              gap: 10px;
            }
            .header-btn {
              background: rgba(255,255,255,0.2);
              border: 1px solid rgba(255,255,255,0.3);
              color: white;
              padding: 8px 16px;
              border-radius: 6px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 500;
              transition: all 0.2s;
              border: none;
            }
            .header-btn:hover {
              background: rgba(255,255,255,0.3);
            }
            #canvas-container {
              position: fixed;
              top: 60px;
              left: 0;
              right: 0;
              bottom: 40px;
            }
            #info-bar {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              background: #f3f4f6;
              padding: 10px 20px;
              border-top: 1px solid #e5e7eb;
              font-size: 12px;
              color: #6b7280;
              text-align: center;
            }
            canvas {
              display: block;
              width: 100%;
              height: 100%;
            }
          </style>
        </head>
        <body>
          <div id="header-bar">
            <h1>📦 3D Model Viewer - ${file.name}</h1>
            <div class="header-actions">
              <button class="header-btn" onclick="resetView()">🔄 Reset View</button>
              <button class="header-btn" onclick="window.close()">✖️ Close</button>
            </div>
          </div>
          <div id="canvas-container"></div>
          <div id="info-bar">
            🖱️ Left Click: Rotate • Right Click: Pan • Scroll: Zoom • File: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)
          </div>

          <script type="importmap">
            {
              "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@0.163.0/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.163.0/examples/jsm/"
              }
            }
          </script>
          
          <script type="module">
            import * as THREE from 'three';
            import { STLLoader } from 'three/addons/loaders/STLLoader.js';
            import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

            let camera, scene, renderer, controls, mesh;

            function init() {
              const container = document.getElementById('canvas-container');
              
              // Scene
              scene = new THREE.Scene();
              scene.background = new THREE.Color(0xf5f5f5);

              // Camera
              camera = new THREE.PerspectiveCamera(
                75,
                container.clientWidth / container.clientHeight,
                0.1,
                1000
              );
              camera.position.set(0, 0, 100);

              // Renderer
              renderer = new THREE.WebGLRenderer({ antialias: true });
              renderer.setSize(container.clientWidth, container.clientHeight);
              renderer.setPixelRatio(window.devicePixelRatio);
              container.appendChild(renderer.domElement);

              // Lights
              const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
              scene.add(ambientLight);

              const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
              directionalLight1.position.set(1, 1, 1);
              scene.add(directionalLight1);

              const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
              directionalLight2.position.set(-1, -1, -1);
              scene.add(directionalLight2);

              // Grid
              const gridHelper = new THREE.GridHelper(200, 20, 0xcccccc, 0xeeeeee);
              scene.add(gridHelper);

              // Controls
              controls = new OrbitControls(camera, renderer.domElement);
              controls.enableDamping = true;
              controls.dampingFactor = 0.05;
              controls.screenSpacePanning = false;
              controls.minDistance = 10;
              controls.maxDistance = 500;

              // Load STL
              const loader = new STLLoader();
              loader.load(
                '${modelUrl}',
                function (geometry) {
                  geometry.center();
                  geometry.computeBoundingBox();
                  
                  const boundingBox = geometry.boundingBox;
                  const size = new THREE.Vector3();
                  boundingBox.getSize(size);
                  const maxDim = Math.max(size.x, size.y, size.z);
                  const scale = maxDim > 0 ? 50 / maxDim : 1;
                  
                  const material = new THREE.MeshPhongMaterial({
                    color: 0x3b82f6,
                    specular: 0x111111,
                    shininess: 200
                  });

                  mesh = new THREE.Mesh(geometry, material);
                  mesh.scale.set(scale, scale, scale);
                  mesh.rotation.x = -Math.PI / 2;
                  scene.add(mesh);

                  // Update info
                  const triangles = geometry.attributes.position.count / 3;
                  document.getElementById('info-bar').innerHTML += 
                    \` • Triangles: \${triangles.toLocaleString()}\`;
                },
                function (xhr) {
                  console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                },
                function (error) {
                  console.error('Error loading STL:', error);
                  alert('Failed to load STL file');
                }
              );

              // Handle resize
              window.addEventListener('resize', onWindowResize);
            }

            function onWindowResize() {
              const container = document.getElementById('canvas-container');
              camera.aspect = container.clientWidth / container.clientHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(container.clientWidth, container.clientHeight);
            }

            function resetView() {
              camera.position.set(0, 0, 100);
              controls.reset();
            }

            function animate() {
              requestAnimationFrame(animate);
              controls.update();
              renderer.render(scene, camera);
            }

            // Make resetView global
            window.resetView = resetView;

            // Start
            init();
            animate();
          </script>
        </body>
        </html>
      `);
      
      newWindow.document.close();
    }
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

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.location.href = '/viewers'}
                className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="p-3 bg-blue-100 rounded-xl">
                <Box className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  STL 3D Model Viewer
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  Upload and preview STL 3D model files online
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Upload Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Upload STL Files
            </h2>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['stl']}
              maxFiles={20}
            />
          </div>

          {/* Preview Section */}
          {selectedFiles.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Preview STL Files ({selectedFiles.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-3 overflow-hidden flex items-center justify-center">
                      <Box className="w-16 h-16 text-blue-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-700 truncate mb-2">
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-500 mb-3">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openViewer(file)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
                      >
                        <Eye className="w-3 h-3" />
                        <span>View 3D</span>
                      </button>
                      <button className="p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors">
                        <Download className="w-3 h-3" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-purple-500 hover:bg-purple-50 rounded-lg transition-colors">
                        <Share2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Format Information */}
          {/* Back to Home Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Back to All Viewers - Supported Formats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">3D Model Formats</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• STL (Stereolithography) - ASCII & Binary</li>
                  <li>• Used for 3D Printing</li>
                  <li>• CAD/CAM Manufacturing</li>
                  <li>• Triangle Mesh Representation</li>
                  <li>• Universal 3D Format</li>
                  <li>• Supports Complex Geometries</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Other Formats Available</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Image formats (JPG, PNG, WebP, GIF)</li>
                  <li>• Document formats (PDF, DOCX, ODT)</li>
                  <li>• Spreadsheet formats (XLSX, CSV, ODS)</li>
                  <li>• Presentation formats (PPTX, ODP)</li>
                  <li>• Code formats (JS, Python, CSS, HTML)</li>
                  <li>• RAW Camera formats (NEF, CR2, DNG)</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6">
              <a
                href="/viewers"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Back to All Viewers
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                  <Box className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Professional STL 3D model viewer for all your 3D printing and CAD needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for 3D professionals.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
