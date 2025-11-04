import React, { useState, useMemo } from 'react';
import { FileText, Archive, FileSpreadsheet, ArrowLeft, Search, Download, Code, Box, Video, Music, Image, Smartphone, Package, Palette, Database, Camera } from 'lucide-react';
import { Header } from './Header';

export const SamplesHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sampleCategories = [
    {
      title: "DOCUMENT SAMPLES",
      icon: <FileText className="w-6 h-6 text-green-600" />,
      formats: [
        { 
          name: "DOCX Sample Files", 
          description: "Download free DOCX sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.",
          path: "/samples/sample-docx",
          format: "DOCX",
          icon: <FileText className="w-5 h-5 text-green-600" />,
          iconColor: "text-green-600"
        },
        { 
          name: "DOC Sample Files", 
          description: "Download free DOC sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.",
          path: "/samples/sample-doc",
          format: "DOC",
          icon: <FileText className="w-5 h-5 text-green-600" />,
          iconColor: "text-green-600"
        },
        { 
          name: "PDF Sample Files", 
          description: "Download free PDF sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.",
          path: "/samples/sample-pdf",
          format: "PDF",
          icon: <FileText className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "ODP Sample Files", 
          description: "Download free ODP sample OpenDocument presentation files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing presentation conversion and viewing tools.",
          path: "/samples/sample-odp",
          format: "ODP",
          icon: <FileText className="w-5 h-5 text-purple-600" />,
          iconColor: "text-purple-600"
        },
        { 
          name: "RTF Sample Files", 
          description: "Download free RTF sample Rich Text Format document files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion and viewing tools.",
          path: "/samples/sample-rtf",
          format: "RTF",
          icon: <FileText className="w-5 h-5 text-cyan-600" />,
          iconColor: "text-cyan-600"
        }
      ]
    },
    {
      title: "DATA SAMPLES",
      icon: <FileSpreadsheet className="w-6 h-6 text-purple-600" />,
      formats: [
        { 
          name: "CSV Sample Files", 
          description: "Download free CSV sample data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CSV conversion and data processing tools.",
          path: "/samples/sample-csv",
          format: "CSV",
          icon: <FileSpreadsheet className="w-5 h-5 text-purple-600" />,
          iconColor: "text-purple-600"
        },
        { 
          name: "XLS Sample Files", 
          description: "Download free XLS sample Excel spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Excel conversion and data processing tools.",
          path: "/samples/sample-xls",
          format: "XLS",
          icon: <FileSpreadsheet className="w-5 h-5 text-green-600" />,
          iconColor: "text-green-600"
        },
        { 
          name: "XLSX Sample Files", 
          description: "Download free XLSX sample Excel spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Excel conversion and data processing tools.",
          path: "/samples/sample-xlsx",
          format: "XLSX",
          icon: <FileSpreadsheet className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "XML Sample Files", 
          description: "Download free XML sample markup files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing XML parsing and data conversion tools.",
          path: "/samples/sample-xml",
          format: "XML",
          icon: <Code className="w-5 h-5 text-indigo-600" />,
          iconColor: "text-indigo-600"
        },
        { 
          name: "ODS Sample Files", 
          description: "Download free ODS sample OpenDocument spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing spreadsheet conversion and data processing tools.",
          path: "/samples/sample-ods",
          format: "ODS",
          icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
          iconColor: "text-emerald-600"
        },
        { 
          name: "Ansible YML Sample Files", 
          description: "Download free Ansible YML sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing YAML parsing and configuration management tools.",
          path: "/samples/sample-ansible-yml",
          format: "YML",
          icon: <Code className="w-5 h-5 text-red-600" />,
          iconColor: "text-red-600"
        },
        { 
          name: "API Response JSON Sample Files", 
          description: "Download free API response JSON sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSON parsing and API response handling tools.",
          path: "/samples/sample-api-response-json",
          format: "JSON",
          icon: <Code className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "Arduino INO Sample Files", 
          description: "Download free Arduino INO sample code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Arduino code compilation and syntax checking tools.",
          path: "/samples/sample-arduino-ino",
          format: "INO",
          icon: <Code className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "ASC Sample Files", 
          description: "Download free ASC sample ASCII text files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing text file processing and ASCII encoding tools.",
          path: "/samples/sample-asc",
          format: "ASC",
          icon: <FileText className="w-5 h-5 text-gray-600" />,
          iconColor: "text-gray-600"
        },
        { 
          name: "BAT Sample Files", 
          description: "Download free BAT sample batch script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing batch script execution and Windows automation tools.",
          path: "/samples/sample-bat",
          format: "BAT",
          icon: <Code className="w-5 h-5 text-gray-600" />,
          iconColor: "text-gray-600"
        },
        { 
          name: "BIB Sample Files", 
          description: "Download free BIB sample BibTeX bibliography files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing bibliography management and citation processing tools.",
          path: "/samples/sample-bib",
          format: "BIB",
          icon: <FileText className="w-5 h-5 text-indigo-600" />,
          iconColor: "text-indigo-600"
        },
        { 
          name: "C Sample Files", 
          description: "Download free C sample source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C code compilation and syntax checking tools.",
          path: "/samples/sample-c",
          format: "C",
          icon: <Code className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "CAN Log Sample Files", 
          description: "Download free CAN log sample CAN bus log files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAN bus analysis and log parsing tools.",
          path: "/samples/sample-can-log",
          format: "CAN Log",
          icon: <FileText className="w-5 h-5 text-red-600" />,
          iconColor: "text-red-600"
        },
        { 
          name: "CMD Sample Files", 
          description: "Download free CMD sample command script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing command script execution and Windows automation tools.",
          path: "/samples/sample-cmd",
          format: "CMD",
          icon: <Code className="w-5 h-5 text-slate-600" />,
          iconColor: "text-slate-600"
        },
        { 
          name: "CONF Sample Files", 
          description: "Download free CONF sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing configuration file parsing and system setup tools.",
          path: "/samples/sample-conf",
          format: "CONF",
          icon: <FileText className="w-5 h-5 text-gray-600" />,
          iconColor: "text-gray-600"
        },
        { 
          name: "Config INI Sample Files", 
          description: "Download free Config INI sample INI configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing INI file parsing and configuration management tools.",
          path: "/samples/sample-config-ini",
          format: "Config INI",
          icon: <FileText className="w-5 h-5 text-indigo-600" />,
          iconColor: "text-indigo-600"
        },
        { 
          name: "C++ Sample Files", 
          description: "Download free C++ sample source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C++ code compilation and syntax checking tools.",
          path: "/samples/sample-cpp",
          format: "C++",
          icon: <Code className="w-5 h-5 text-purple-600" />,
          iconColor: "text-purple-600"
        },
        { 
          name: "C# Sample Files", 
          description: "Download free C# sample source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C# code compilation and syntax checking tools.",
          path: "/samples/sample-cs",
          format: "C#",
          icon: <Code className="w-5 h-5 text-indigo-600" />,
          iconColor: "text-indigo-600"
        },
        { 
          name: "CSS Sample Files", 
          description: "Download free CSS sample Cascading Style Sheets files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CSS parsing and styling tools.",
          path: "/samples/sample-css",
          format: "CSS",
          icon: <Code className="w-5 h-5 text-cyan-600" />,
          iconColor: "text-cyan-600"
        },
        { 
          name: "CSR Sample Files", 
          description: "Download free CSR sample Certificate Signing Request files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SSL certificate generation and CSR parsing tools.",
          path: "/samples/sample-csr",
          format: "CSR",
          icon: <FileText className="w-5 h-5 text-emerald-600" />,
          iconColor: "text-emerald-600"
        },
        { 
          name: "Customer Database SQL Sample Files", 
          description: "Download free Customer Database SQL sample SQL database files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SQL database imports and SQL parsing tools.",
          path: "/samples/sample-customer-database-sql",
          format: "Customer Database SQL",
          icon: <Database className="w-5 h-5 text-amber-600" />,
          iconColor: "text-amber-600"
        },
        { 
          name: "DBF Sample Files", 
          description: "Download free DBF sample dBASE database files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing database conversion and DBF parsing tools.",
          path: "/samples/sample-dbf",
          format: "DBF",
          icon: <Database className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "DEM Sample Files", 
          description: "Download free DEM sample Digital Elevation Model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing GIS mapping and terrain analysis tools.",
          path: "/samples/sample-dem",
          format: "DEM",
          icon: <FileText className="w-5 h-5 text-green-600" />,
          iconColor: "text-green-600"
        },
        { 
          name: "DER Sample Files", 
          description: "Download free DER sample DER certificate files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SSL certificate processing and DER parsing tools.",
          path: "/samples/sample-der",
          format: "DER",
          icon: <FileText className="w-5 h-5 text-teal-600" />,
          iconColor: "text-teal-600"
        },
        { 
          name: "DMP Sample Files", 
          description: "Download free DMP sample memory dump files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing crash dump analysis and memory dump parsing tools.",
          path: "/samples/sample-dmp",
          format: "DMP",
          icon: <FileText className="w-5 h-5 text-orange-600" />,
          iconColor: "text-orange-600"
        },
        { 
          name: "Docker Compose YML Sample Files", 
          description: "Download free Docker Compose YML sample Docker Compose configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Docker Compose parsing and container orchestration tools.",
          path: "/samples/sample-docker-compose-yml",
          format: "Docker Compose YML",
          icon: <Code className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "Dockerfile Sample Files", 
          description: "Download free Dockerfile sample Dockerfile configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Docker image building and Dockerfile parsing tools.",
          path: "/samples/sample-dockerfile",
          format: "Dockerfile",
          icon: <Code className="w-5 h-5 text-indigo-600" />,
          iconColor: "text-indigo-600"
        }
      ]
    },
    {
      title: "APPLICATION SAMPLES",
      icon: <Smartphone className="w-6 h-6 text-green-600" />,
      formats: [
        { 
          name: "APK Sample Files", 
          description: "Download free APK sample Android application package files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Android app installation and APK analysis tools.",
          path: "/samples/sample-apk",
          format: "APK",
          icon: <Smartphone className="w-5 h-5 text-green-600" />,
          iconColor: "text-green-600"
        },
        { 
          name: "AppImage Sample Files", 
          description: "Download free AppImage sample Linux application package files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Linux app installation and AppImage analysis tools.",
          path: "/samples/sample-appimage",
          format: "AppImage",
          icon: <Package className="w-5 h-5 text-slate-600" />,
          iconColor: "text-slate-600"
        }
      ]
    },
    {
      title: "3D & DESIGN SAMPLES",
      icon: <Box className="w-6 h-6 text-amber-600" />,
      formats: [
        { 
          name: "3DS Sample Files", 
          description: "Download free 3DS sample 3D model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D model conversion and viewing tools.",
          path: "/samples/sample-3ds",
          format: "3DS",
          icon: <Box className="w-5 h-5 text-amber-600" />,
          iconColor: "text-amber-600"
        },
        { 
          name: "3MF Sample Files", 
          description: "Download free 3MF sample 3D printing files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D printing conversion and viewing tools.",
          path: "/samples/sample-3mf",
          format: "3MF",
          icon: <Box className="w-5 h-5 text-violet-600" />,
          iconColor: "text-violet-600"
        },
        { 
          name: "AI Sample Files", 
          description: "Download free AI sample Adobe Illustrator vector graphics files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing vector graphics conversion and viewing tools.",
          path: "/samples/sample-ai",
          format: "AI",
          icon: <Image className="w-5 h-5 text-pink-600" />,
          iconColor: "text-pink-600"
        },
        { 
          name: "ASE Sample Files", 
          description: "Download free ASE sample Adobe Swatch Exchange color palette files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing color palette conversion and viewing tools.",
          path: "/samples/sample-ase",
          format: "ASE",
          icon: <Palette className="w-5 h-5 text-purple-600" />,
          iconColor: "text-purple-600"
        },
        { 
          name: "Animation FBX Sample Files", 
          description: "Download free animation FBX sample 3D animation files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D animation conversion and viewing tools.",
          path: "/samples/sample-animation-fbx",
          format: "FBX",
          icon: <Box className="w-5 h-5 text-indigo-600" />,
          iconColor: "text-indigo-600"
        },
        { 
          name: "AssetBundle Sample Files", 
          description: "Download free AssetBundle sample Unity game asset files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Unity asset loading and game development tools.",
          path: "/samples/sample-assetbundle",
          format: "AssetBundle",
          icon: <Box className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "BLEND Sample Files", 
          description: "Download free BLEND sample Blender 3D model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D model conversion and viewing tools.",
          path: "/samples/sample-blend",
          format: "BLEND",
          icon: <Box className="w-5 h-5 text-orange-600" />,
          iconColor: "text-orange-600"
        },
        { 
          name: "BVH Sample Files", 
          description: "Download free BVH sample motion capture files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing motion capture processing and animation conversion tools.",
          path: "/samples/sample-bvh",
          format: "BVH",
          icon: <Box className="w-5 h-5 text-purple-600" />,
          iconColor: "text-purple-600"
        }
      ]
    },
    {
      title: "IMAGE & VIDEO SAMPLES",
      icon: <Image className="w-6 h-6 text-cyan-600" />,
      formats: [
        { 
          name: "Animated GIF Sample Files", 
          description: "Download free animated GIF sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing GIF animation conversion and viewing tools.",
          path: "/samples/sample-animated-gif",
          format: "Animated GIF",
          icon: <Image className="w-5 h-5 text-cyan-600" />,
          iconColor: "text-cyan-600"
        },
        { 
          name: "APNG Sample Files", 
          description: "Download free APNG sample animated PNG files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing animated PNG conversion and viewing tools.",
          path: "/samples/sample-apng",
          format: "APNG",
          icon: <Image className="w-5 h-5 text-teal-600" />,
          iconColor: "text-teal-600"
        },
        { 
          name: "AVIF Sample Files", 
          description: "Download free AVIF sample image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing AVIF conversion and viewing tools.",
          path: "/samples/sample-avif",
          format: "AVIF",
          icon: <Image className="w-5 h-5 text-emerald-600" />,
          iconColor: "text-emerald-600"
        },
        { 
          name: "BMP Sample Files", 
          description: "Download free BMP sample bitmap image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing bitmap image conversion and viewing tools.",
          path: "/samples/sample-bmp",
          format: "BMP",
          icon: <Image className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "Barcode SVG Sample Files", 
          description: "Download free barcode SVG sample vector graphics files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing barcode scanning and SVG conversion tools.",
          path: "/samples/sample-barcode-svg",
          format: "Barcode SVG",
          icon: <Image className="w-5 h-5 text-violet-600" />,
          iconColor: "text-violet-600"
        },
        { 
          name: "DDS Sample Files", 
          description: "Download free DDS sample DirectDraw Surface texture files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing texture conversion and DDS processing tools.",
          path: "/samples/sample-dds",
          format: "DDS",
          icon: <Image className="w-5 h-5 text-purple-600" />,
          iconColor: "text-purple-600"
        },
        { 
          name: "DNG Sample Files", 
          description: "Download free DNG sample Digital Negative RAW image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing RAW image conversion and DNG processing tools.",
          path: "/samples/sample-dng",
          format: "DNG",
          icon: <Camera className="w-5 h-5 text-amber-600" />,
          iconColor: "text-amber-600"
        },
        { 
          name: "AVI Sample Files", 
          description: "Download free AVI sample video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video conversion and playback tools.",
          path: "/samples/sample-avi",
          format: "AVI",
          icon: <Video className="w-5 h-5 text-red-600" />,
          iconColor: "text-red-600"
        },
        { 
          name: "3GP Sample Files", 
          description: "Download free 3GP sample mobile video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video conversion and playback tools.",
          path: "/samples/sample-3gp",
          format: "3GP",
          icon: <Video className="w-5 h-5 text-red-600" />,
          iconColor: "text-red-600"
        },
        { 
          name: "DAV Sample Files", 
          description: "Download free DAV sample DAV video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video conversion and playback tools.",
          path: "/samples/sample-dav",
          format: "DAV",
          icon: <Video className="w-5 h-5 text-red-600" />,
          iconColor: "text-red-600"
        }
      ]
    },
    {
      title: "AUDIO SAMPLES",
      icon: <Music className="w-6 h-6 text-rose-600" />,
      formats: [
        { 
          name: "AAC Sample Files", 
          description: "Download free AAC sample Advanced Audio Coding files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.",
          path: "/samples/sample-aac",
          format: "AAC",
          icon: <Music className="w-5 h-5 text-rose-600" />,
          iconColor: "text-rose-600"
        },
        { 
          name: "AC3 Sample Files", 
          description: "Download free AC3 sample Dolby Digital audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.",
          path: "/samples/sample-ac3",
          format: "AC3",
          icon: <Music className="w-5 h-5 text-yellow-600" />,
          iconColor: "text-yellow-600"
        },
        { 
          name: "AIF Sample Files", 
          description: "Download free AIF sample Audio Interchange File Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.",
          path: "/samples/sample-aif",
          format: "AIF",
          icon: <Music className="w-5 h-5 text-lime-600" />,
          iconColor: "text-lime-600"
        },
        { 
          name: "AIFF Sample Files", 
          description: "Download free AIFF sample Audio Interchange File Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.",
          path: "/samples/sample-aiff",
          format: "AIFF",
          icon: <Music className="w-5 h-5 text-emerald-600" />,
          iconColor: "text-emerald-600"
        },
        { 
          name: "AMR Sample Files", 
          description: "Download free AMR sample Adaptive Multi-Rate audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.",
          path: "/samples/sample-amr",
          format: "AMR",
          icon: <Music className="w-5 h-5 text-fuchsia-600" />,
          iconColor: "text-fuchsia-600"
        },
        { 
          name: "CAF Sample Files", 
          description: "Download free CAF sample Core Audio Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.",
          path: "/samples/sample-caf",
          format: "CAF",
          icon: <Music className="w-5 h-5 text-pink-600" />,
          iconColor: "text-pink-600"
        },
        { 
          name: "CUE Sample Files", 
          description: "Download free CUE sample CUE sheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio CD burning and CUE sheet parsing tools.",
          path: "/samples/sample-cue",
          format: "CUE",
          icon: <Music className="w-5 h-5 text-violet-600" />,
          iconColor: "text-violet-600"
        }
      ]
    },
    {
      title: "ARCHIVE SAMPLES",
      icon: <Archive className="w-6 h-6 text-orange-600" />,
      formats: [
        { 
          name: "ACE Sample Files", 
          description: "Download free ACE sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction and compression tools.",
          path: "/samples/sample-ace",
          format: "ACE",
          icon: <Archive className="w-5 h-5 text-slate-600" />,
          iconColor: "text-slate-600"
        },
        { 
          name: "ARJ Sample Files", 
          description: "Download free ARJ sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction and compression tools.",
          path: "/samples/sample-arj",
          format: "ARJ",
          icon: <Archive className="w-5 h-5 text-orange-600" />,
          iconColor: "text-orange-600"
        },
        { 
          name: "BZ2 Sample Files", 
          description: "Download free BZ2 sample bzip2 compressed archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive decompression and compression tools.",
          path: "/samples/sample-bz2",
          format: "BZ2",
          icon: <Archive className="w-5 h-5 text-slate-600" />,
          iconColor: "text-slate-600"
        },
        { 
          name: "CAB Sample Files", 
          description: "Download free CAB sample Windows cabinet archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction and compression tools.",
          path: "/samples/sample-cab",
          format: "CAB",
          icon: <Archive className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "CPIO Sample Files", 
          description: "Download free CPIO sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction and compression tools.",
          path: "/samples/sample-cpio",
          format: "CPIO",
          icon: <Archive className="w-5 h-5 text-teal-600" />,
          iconColor: "text-teal-600"
        },
        { 
          name: "DMG Sample Files", 
          description: "Download free DMG sample macOS disk image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing disk image mounting and DMG extraction tools.",
          path: "/samples/sample-dmg",
          format: "DMG",
          icon: <Package className="w-5 h-5 text-slate-600" />,
          iconColor: "text-slate-600"
        },
        { 
          name: "ZIP Sample Files", 
          description: "Download free ZIP sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction and compression tools.",
          path: "/samples/sample-zip",
          format: "ZIP",
          icon: <Archive className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        },
        { 
          name: "7Z Sample Files", 
          description: "Download free 7Z sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive conversion and extraction tools.",
          path: "/samples/sample-7z",
          format: "7Z",
          icon: <Archive className="w-5 h-5 text-orange-600" />,
          iconColor: "text-orange-600"
        }
      ]
    }
  ];

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return sampleCategories;
    }

    const query = searchQuery.toLowerCase();
    return sampleCategories.map(category => ({
      ...category,
      formats: category.formats.filter(format => {
        const searchableText = `${format.name} ${format.description} ${format.format}`.toLowerCase();
        return searchableText.includes(query);
      })
    })).filter(category => category.formats.length > 0);
  }, [searchQuery]);

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Button */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl">
              <Download className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Sample Files</h1>
          </div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Download free sample files for testing. Multiple file sizes available for various formats to test your conversion and processing tools.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search sample files... (e.g., DOCX, JPG, PDF)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center">
                Found {filteredCategories.reduce((sum, cat) => sum + cat.formats.length, 0)} sample file(s)
              </p>
            )}
          </div>
        </div>

        {/* Sample Categories */}
        <div className="space-y-8 sm:space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
                {category.icon}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {category.formats.map((format, formatIndex) => (
                  <div
                    key={formatIndex}
                    className={`px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors ${
                      formatIndex === 0 ? 'rounded-t-lg' : ''
                    } ${formatIndex === category.formats.length - 1 ? 'rounded-b-lg' : ''}`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 w-full sm:w-auto flex-1">
                        <div className={`flex-shrink-0 p-2 rounded-lg ${
                          format.iconColor === 'text-green-600' ? 'bg-green-100' :
                          format.iconColor === 'text-blue-600' ? 'bg-blue-100' :
                          format.iconColor === 'text-purple-600' ? 'bg-purple-100' :
                          format.iconColor === 'text-orange-600' ? 'bg-orange-100' :
                          format.iconColor === 'text-red-600' ? 'bg-red-100' :
                          format.iconColor === 'text-teal-600' ? 'bg-teal-100' : 'bg-gray-100'
                        }`}>
                          {format.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-1">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{format.name}</h3>
                            <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                format.iconColor === 'text-green-600' ? 'bg-green-100 text-green-800' :
                                format.iconColor === 'text-blue-600' ? 'bg-blue-100 text-blue-800' :
                                format.iconColor === 'text-purple-600' ? 'bg-purple-100 text-purple-800' :
                                format.iconColor === 'text-orange-600' ? 'bg-orange-100 text-orange-800' :
                                format.iconColor === 'text-red-600' ? 'bg-red-100 text-red-800' :
                                format.iconColor === 'text-teal-600' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {format.format}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm">{format.description}</p>
                        </div>
                      </div>
                      <div className="w-full sm:w-auto sm:ml-4">
                        <a
                          href={format.path}
                          className="inline-flex items-center justify-center space-x-2 bg-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-teal-700 transition-colors w-full sm:w-auto"
                        >
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No sample files found</h3>
              <p className="text-gray-600 mb-4">
                Try searching for something like "DOCX" or "JPG"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">MorphyIMG</h2>
            </div>
            
            <p className="text-gray-300 mb-6">
              Download free sample files for testing conversions, compression, and viewing tools.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
              <span>© 2025 MorphyIMG. Built for file format professionals.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

