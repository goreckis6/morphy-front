import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Upload, Eye, Download, Share2, ArrowLeft, Zap, Grid3x3, Cpu, CheckCircle } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';

export const STLViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFilesSelected = (files: File[]) => {
    // Filter only STL files
    const stlFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'stl';
    });
    setSelectedFiles(stlFiles);
  };

  const openViewer = (file: File) => {
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
        <title>STL Viewer - Free Online 3D Model Viewer for STL Files</title>
        <meta name="description" content="View STL (Stereolithography) 3D model files online for free. Interactive 3D viewer with rotation, zoom, and pan controls. Perfect for 3D printing and CAD. Up to 20 files, 100MB total. No registration required." />
        <meta name="keywords" content="STL viewer, 3D model viewer, stereolithography viewer, 3D printing viewer, CAD viewer, 3D file viewer, free STL viewer online, batch viewing" />
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
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <a
                  href="/viewers"
                  className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all border border-white/20"
                >
                  <ArrowLeft className="w-6 h-6 text-white" />
                </a>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <Box className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">
                    STL Viewer
                  </h1>
                  <p className="text-xl text-blue-100">
                    View 3D models with interactive rotation and zoom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload STL Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your 3D model (STL) files or click to browse. Supports ASCII and binary STL formats up to 100MB total.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['stl']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
            />
          </div>

          {/* Preview Section */}
          {selectedFiles.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your 3D Models ({selectedFiles.length})
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden shadow-md flex items-center justify-center">
                      <Box className="w-20 h-20 text-blue-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 truncate mb-2" title={file.name}>
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-3 font-medium">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • STL
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openViewer(file)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View 3D</span>
                      </button>
                      <button 
                        onClick={() => {
                          const url = URL.createObjectURL(file);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = file.name;
                          a.click();
                          URL.revokeObjectURL(url);
                        }}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Zap className="w-8 h-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Interactive 3D View
            </h3>
            <p className="text-gray-600">
              Rotate, zoom, and pan your 3D models with smooth WebGL-powered controls
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Grid3x3 className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              3D Printing Ready
            </h3>
            <p className="text-gray-600">
              STL is the industry standard format for 3D printing and rapid prototyping
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Cpu className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No Upload Required
            </h3>
            <p className="text-gray-600">
              Files are processed locally in your browser for maximum privacy and speed
            </p>
          </div>
        </div>

        {/* STL Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            About STL Format
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              STL (Stereolithography) is a file format native to 3D Systems' stereolithography CAD software. 
              It is the most widely used format for 3D printing and additive manufacturing. STL files describe 
              only the surface geometry of a 3D object as a triangular mesh, without any representation of color, 
              texture, or other common CAD model attributes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Universal support</strong> - Supported by all 3D printers</li>
                  <li>• <strong>Simple format</strong> - Easy to generate and parse</li>
                  <li>• <strong>Industry standard</strong> - Default for 3D printing</li>
                  <li>• <strong>Mesh accuracy</strong> - Precise triangle representation</li>
                  <li>• <strong>Two variants</strong> - ASCII (text) and binary formats</li>
                  <li>• <strong>CAD compatible</strong> - Exports from all CAD software</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>3D Printing</strong> - Slicing and printing preparation</li>
                  <li>• <strong>Rapid Prototyping</strong> - Quick design iterations</li>
                  <li>• <strong>CAD/CAM</strong> - Manufacturing and engineering</li>
                  <li>• <strong>3D Modeling</strong> - Design verification and review</li>
                  <li>• <strong>Architecture</strong> - Building and structure models</li>
                  <li>• <strong>Medical</strong> - Anatomical models and prosthetics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            STL Technical Specifications
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Specification</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">File Extension</td>
                  <td className="px-6 py-4 text-sm text-gray-600">.stl</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">MIME Type</td>
                  <td className="px-6 py-4 text-sm text-gray-600">application/sla, model/stl, application/vnd.ms-pki.stl</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Format Types</td>
                  <td className="px-6 py-4 text-sm text-gray-600">ASCII (text-based) and Binary</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Geometry</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Triangle mesh (facets with normals)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Coordinate System</td>
                  <td className="px-6 py-4 text-sm text-gray-600">3D Cartesian coordinates (X, Y, Z)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Color Support</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Not officially supported (extensions exist)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Texture/Materials</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Not supported</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Maximum Resolution</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Limited by number of triangles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

          {/* Back to Viewers Button */}
          <div className="text-center">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ← Back to All Viewers
            </a>
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
