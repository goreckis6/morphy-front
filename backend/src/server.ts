import express from 'express';
import multer from 'multer';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 200 * 1024 * 1024, // 200MB limit
    files: 1
  },
  fileFilter: (req, file, cb) => {
    // Allow common image formats and RAW formats
    const allowedMimes = [
      'image/jpeg', 'image/jpg', 'image/png', 'image/bmp', 'image/tiff', 'image/tif',
      'image/webp', 'image/gif', 'image/avif', 'image/heic', 'image/heif',
      'image/x-canon-cr2', 'image/x-canon-crw', 'image/x-nikon-nef', 'image/x-sony-arw',
      'image/x-adobe-dng', 'image/x-panasonic-raw', 'image/x-olympus-orf',
      'image/x-pentax-pef', 'image/x-epson-erf', 'image/x-raw'
    ];
    
    if (allowedMimes.includes(file.mimetype) || file.originalname.match(/\.(cr2|crw|nef|arw|dng|raw|orf|pef|erf)$/i)) {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type'), false);
    }
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Main conversion endpoint
app.post('/api/convert', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const { 
      quality = 'high', 
      lossless = 'false',
      format = 'webp',
      width,
      height,
      iconSize = '16'
    } = req.body;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log(`Processing file: ${file.originalname}, size: ${file.size} bytes`);

    // Parse quality value
    const qualityValue = quality === 'high' ? 95 : quality === 'medium' ? 80 : 60;
    const isLossless = lossless === 'true';

    let sharpInstance = sharp(file.buffer, { 
      failOn: 'truncated',
      unlimited: true // Allow very large images
    });

    // Get image metadata
    const metadata = await sharpInstance.metadata();
    console.log(`Image metadata: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);

    // Handle different output formats
    let outputBuffer: Buffer;
    let contentType: string;
    let fileExtension: string;

    switch (format.toLowerCase()) {
      case 'webp':
        sharpInstance = sharpInstance.webp({ 
          quality: Number(qualityValue), 
          lossless: isLossless 
        });
        contentType = 'image/webp';
        fileExtension = 'webp';
        break;

      case 'ico':
        // For ICO, we need to create a PNG first, then convert to ICO format
        const iconSizeNum = parseInt(iconSize) || 16;
        sharpInstance = sharpInstance
          .resize(iconSizeNum, iconSizeNum, { 
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .png();
        contentType = 'image/x-icon';
        fileExtension = 'ico';
        break;

      case 'png':
        sharpInstance = sharpInstance.png({ 
          quality: Number(qualityValue),
          compressionLevel: 9
        });
        contentType = 'image/png';
        fileExtension = 'png';
        break;

      case 'jpeg':
      case 'jpg':
        sharpInstance = sharpInstance.jpeg({ 
          quality: Number(qualityValue),
          progressive: true
        });
        contentType = 'image/jpeg';
        fileExtension = 'jpg';
        break;

      default:
        return res.status(400).json({ error: 'Unsupported output format' });
    }

    // Apply resizing if specified
    if (width || height) {
      sharpInstance = sharpInstance.resize(
        width ? parseInt(width) : undefined,
        height ? parseInt(height) : undefined,
        { 
          fit: 'inside',
          withoutEnlargement: true
        }
      );
    }

    // Process the image
    outputBuffer = await sharpInstance.toBuffer();

    // Generate output filename
    const originalName = file.originalname.replace(/\.[^.]+$/, '');
    const outputFilename = `${originalName}.${fileExtension}`;

    console.log(`Conversion successful: ${outputFilename}, size: ${outputBuffer.length} bytes`);

    // Set response headers
    res.set({
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="${outputFilename}"`,
      'Content-Length': outputBuffer.length.toString(),
      'Cache-Control': 'no-cache'
    });

    // Send the converted file
    res.send(outputBuffer);

  } catch (error) {
    console.error('Conversion error:', error);
    
    // Handle specific Sharp errors
    if (error instanceof Error) {
      if (error.message.includes('Input file is missing')) {
        return res.status(400).json({ error: 'Invalid or corrupted image file' });
      }
      if (error.message.includes('unsupported image format')) {
        return res.status(400).json({ error: 'Unsupported image format' });
      }
    }

    res.status(500).json({ 
      error: 'Conversion failed', 
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Batch conversion endpoint
app.post('/api/convert/batch', upload.array('files', 10), async (req, res) => {
  try {
    const files = req.files as Express.Multer.File[];
    const { 
      quality = 'high', 
      lossless = 'false',
      format = 'webp'
    } = req.body;

    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    console.log(`Processing batch: ${files.length} files`);

    const results = [];
    const qualityValue = quality === 'high' ? 95 : quality === 'medium' ? 80 : 60;
    const isLossless = lossless === 'true';

    for (const file of files) {
      try {
        let sharpInstance = sharp(file.buffer, { 
          failOn: 'truncated',
          unlimited: true
        });

        let outputBuffer: Buffer;
        let fileExtension: string;

        switch (format.toLowerCase()) {
          case 'webp':
            outputBuffer = await sharpInstance.webp({ 
              quality: Number(qualityValue), 
              lossless: isLossless 
            }).toBuffer();
            fileExtension = 'webp';
            break;
          case 'png':
            outputBuffer = await sharpInstance.png({ 
              quality: Number(qualityValue)
            }).toBuffer();
            fileExtension = 'png';
            break;
          case 'jpeg':
          case 'jpg':
            outputBuffer = await sharpInstance.jpeg({ 
              quality: Number(qualityValue)
            }).toBuffer();
            fileExtension = 'jpg';
            break;
          default:
            throw new Error('Unsupported format');
        }

        const originalName = file.originalname.replace(/\.[^.]+$/, '');
        const outputFilename = `${originalName}.${fileExtension}`;

        results.push({
          originalName: file.originalname,
          outputFilename,
          size: outputBuffer.length,
          success: true
        });

      } catch (fileError) {
        console.error(`Error processing ${file.originalname}:`, fileError);
        results.push({
          originalName: file.originalname,
          success: false,
          error: fileError instanceof Error ? fileError.message : 'Unknown error'
        });
      }
    }

    res.json({
      success: true,
      processed: results.length,
      results
    });

  } catch (error) {
    console.error('Batch conversion error:', error);
    res.status(500).json({ 
      error: 'Batch conversion failed',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Error handling middleware
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', error);
  
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Maximum size is 200MB.' });
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ error: 'Too many files. Maximum is 10 files.' });
    }
  }

  res.status(500).json({ 
    error: 'Internal server error',
    details: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Health check: http://localhost:${PORT}/health`);
  console.log(`🔄 Convert endpoint: http://localhost:${PORT}/api/convert`);
});

export default app;
