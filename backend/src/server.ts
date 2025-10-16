import express from 'express';
import multer from 'multer';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import os from 'os';
import papaparse from 'papaparse';
import { Document, Packer, Paragraph, Table, TableRow, TableCell } from 'docx';
import * as XLSX from 'xlsx';
import pptxgen from 'pptxgenjs';
import dotenv from 'dotenv';
import { initializeDatabase, closeDatabase, Conversion } from './database/index.js';
import { DatabaseService } from './services/databaseService.js';

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// RAW file extensions
const RAW_EXTENSIONS = ['dng', 'cr2', 'cr3', 'nef', 'arw', 'rw2', 'pef', 'orf', 'raf', 'x3f', 'raw'];

// Function to check if file is RAW
const isRAWFile = (filename: string): boolean => {
  const ext = filename.split('.').pop()?.toLowerCase();
  return RAW_EXTENSIONS.includes(ext || '');
};

// Function to process RAW file with dcraw
const processRAWFile = async (inputBuffer: Buffer, filename: string): Promise<Buffer> => {
  const tempDir = os.tmpdir();
  const inputPath = path.join(tempDir, `input_${Date.now()}_${filename}`);
  
  try {
    // Write input buffer to temporary file
    await fs.writeFile(inputPath, inputBuffer);
    
    // Use dcraw to convert RAW to TIFF
    // -T: write TIFF instead of PPM
    // -w: use camera white balance
    // -6: 16-bit output
    // -c: write to stdout
    const dcrawCommand = `dcraw -T -w -6 -c "${inputPath}"`;
    
    const { stdout } = await execAsync(dcrawCommand);
    const convertedBuffer = Buffer.from(stdout, 'binary');
    
    return convertedBuffer;
  } finally {
    // Clean up temporary files
    try {
      await fs.unlink(inputPath);
    } catch (cleanupError) {
      console.warn('Failed to clean up temporary file:', cleanupError);
    }
  }
};

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    process.env.FRONTEND_URL_ALT || 'https://morphy-1-ulvv.onrender.com',
    'https://morphyimg.com',
    'https://morphy-1-ulvv.onrender.com'
  ],
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

// Configure multer for image file uploads
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

// Configure multer for single CSV file uploads
const uploadSingle = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
    files: 1
  },
  fileFilter: (req, file, cb) => {
    // Decode filename for proper UTF-8 handling
    try {
      file.originalname = decodeURIComponent(file.originalname);
    } catch (e) {
      // If decoding fails, use original name
    }
    
    const allowedMimes = [
      'text/csv', 'application/csv', 'text/plain'
    ];
    
    if (allowedMimes.includes(file.mimetype) || file.originalname.toLowerCase().endsWith('.csv')) {
      cb(null, true);
    } else {
      cb(new Error('Only CSV files are allowed'), false);
    }
  }
});

// Configure multer for batch CSV file uploads  
const uploadBatch = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB per file
    files: 20 // Max 20 files
  },
  fileFilter: (req, file, cb) => {
    // Decode filename for proper UTF-8 handling
    try {
      file.originalname = decodeURIComponent(file.originalname);
    } catch (e) {
      // If decoding fails, use original name
    }
    
    const allowedMimes = [
      'text/csv', 'application/csv', 'text/plain'
    ];
    
    if (allowedMimes.includes(file.mimetype) || file.originalname.toLowerCase().endsWith('.csv')) {
      cb(null, true);
    } else {
      cb(new Error('Only CSV files are allowed'), false);
    }
  }
});

// CSV processing helper functions
const processCSVToDocx = async (csvBuffer: Buffer, options: any) => {
  const csvText = csvBuffer.toString('utf-8');
  const parsed = papaparse.parse(csvText, { header: true });
  
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          children: [{ text: "CSV Data", bold: true }]
        }),
        new Table({
          rows: [
            // Header row
            new TableRow({
              children: Object.keys(parsed.data[0] || {}).map(header => 
                new TableCell({ children: [new Paragraph(header)] })
              )
            }),
            // Data rows
            ...parsed.data.map((row: any) => 
              new TableRow({
                children: Object.values(row).map((cell: any) => 
                  new TableCell({ children: [new Paragraph(String(cell || ''))] })
                )
              })
            )
          ]
        })
      ]
    }]
  });
  
  return await Packer.toBuffer(doc);
};

const processCSVToXlsx = async (csvBuffer: Buffer, options: any) => {
  const csvText = csvBuffer.toString('utf-8');
  const parsed = papaparse.parse(csvText, { header: true });
  
  const ws = XLSX.utils.json_to_sheet(parsed.data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Data');
  
  return XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
};

const processCSVToPptx = async (csvBuffer: Buffer, options: any) => {
  const csvText = csvBuffer.toString('utf-8');
  const parsed = papaparse.parse(csvText, { header: true });
  
  const pres = new pptxgen();
  const slide = pres.addSlide();
  
  const headers = Object.keys(parsed.data[0] || {});
  const tableData = [
    headers,
    ...parsed.data.map((row: any) => headers.map(header => String(row[header] || '')))
  ];
  
  slide.addTable(tableData, {
    x: 1, y: 1, w: 8, h: 5,
    fontSize: 12,
    border: { pt: 1, color: '363636' }
  });
  
  return await pres.write({ outputType: 'nodebuffer' });
};

const processCSVToText = async (csvBuffer: Buffer) => {
  const csvText = csvBuffer.toString('utf-8');
  const parsed = papaparse.parse(csvText, { header: true });
  
  let output = '';
  const headers = Object.keys(parsed.data[0] || {});
  
  // Add headers
  output += headers.join('\t') + '\n';
  
  // Add data rows
  parsed.data.forEach((row: any) => {
    output += headers.map(header => String(row[header] || '')).join('\t') + '\n';
  });
  
  return Buffer.from(output, 'utf-8');
};

const processCSVToHtml = async (csvBuffer: Buffer) => {
  const csvText = csvBuffer.toString('utf-8');
  const parsed = papaparse.parse(csvText, { header: true });
  
  let html = `<!DOCTYPE html>
<html>
<head>
  <title>CSV Data</title>
  <style>
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #f2f2f2; }
  </style>
</head>
<body>
  <h1>CSV Data</h1>
  <table>
    <thead>
      <tr>`;
  
  const headers = Object.keys(parsed.data[0] || {});
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  
  html += `</tr>
    </thead>
    <tbody>`;
  
  parsed.data.forEach((row: any) => {
    html += '<tr>';
    headers.forEach(header => {
      html += `<td>${String(row[header] || '')}</td>`;
    });
    html += '</tr>';
  });
  
  html += `</tbody>
  </table>
</body>
</html>`;
  
  return Buffer.from(html, 'utf-8');
};

const processCSVToMarkdown = async (csvBuffer: Buffer) => {
  const csvText = csvBuffer.toString('utf-8');
  const parsed = papaparse.parse(csvText, { header: true });
  
  let markdown = '# CSV Data\n\n';
  const headers = Object.keys(parsed.data[0] || {});
  
  // Table header
  markdown += '| ' + headers.join(' | ') + ' |\n';
  markdown += '| ' + headers.map(() => '---').join(' | ') + ' |\n';
  
  // Table data
  parsed.data.forEach((row: any) => {
    markdown += '| ' + headers.map(header => String(row[header] || '')).join(' | ') + ' |\n';
  });
  
  return Buffer.from(markdown, 'utf-8');
};

const convertWithLibreOffice = async (inputPath: string, outputPath: string, format: string) => {
  const command = `soffice --headless --convert-to ${format} --outdir "${path.dirname(outputPath)}" "${inputPath}"`;
  await execAsync(command);
};

const convertWithCalibre = async (inputPath: string, outputPath: string, format: string) => {
  const command = `ebook-convert "${inputPath}" "${outputPath}"`;
  await execAsync(command);
};

// Helper function to send buffer as download
const sendBufferAsDownload = (res: express.Response, buffer: Buffer, filename: string, mimeType: string) => {
  res.set({
    'Content-Type': mimeType,
    'Content-Disposition': `attachment; filename="${filename}"`,
    'Content-Length': buffer.length.toString()
  });
  res.send(buffer);
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Database analytics endpoints
app.get('/api/analytics/conversions', async (req, res) => {
  try {
    const stats = await DatabaseService.getConversionStats();
    res.json(stats);
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to fetch conversion statistics' });
  }
});

app.get('/api/analytics/formats', async (req, res) => {
  try {
    const popularFormats = await DatabaseService.getPopularFormats();
    res.json(popularFormats);
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to fetch format statistics' });
  }
});

app.get('/api/analytics/recent', async (req, res) => {
  try {
    const recentConversions = await DatabaseService.getRecentConversions();
    res.json(recentConversions);
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to fetch recent conversions' });
  }
});

// Database checker endpoint
app.get('/api/dbchecker', async (req, res) => {
  try {
    const startTime = Date.now();
    
    // Test database connection
    await sequelize.authenticate();
    const connectionTime = Date.now() - startTime;
    
    // Get database info
    const dbInfo = {
      host: process.env.DB_HOST || 'Not configured',
      port: process.env.DB_PORT || 'Not configured',
      database: process.env.DB_NAME || 'Not configured',
      user: process.env.DB_USER || 'Not configured',
      ssl: process.env.DB_SSL === 'true',
      connectionTime: `${connectionTime}ms`
    };
    
    // Get table counts
    const tableStats = await sequelize.getQueryInterface().showAllTables();
    const userCount = await User.count();
    const conversionCount = await Conversion.count();
    
    // Get recent errors from logs (simplified version)
    const recentErrors = await Conversion.findAll({
      where: { status: 'failed' },
      order: [['updatedAt', 'DESC']],
      limit: 10,
      attributes: ['id', 'originalFilename', 'errorMessage', 'updatedAt']
    });
    
    res.json({
      status: 'connected',
      timestamp: new Date().toISOString(),
      database: dbInfo,
      tables: tableStats,
      stats: {
        users: userCount,
        conversions: conversionCount,
        totalTables: tableStats.length
      },
      recentErrors: recentErrors,
      environment: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT
      }
    });
    
  } catch (error) {
    console.error('Database check error:', error);
    
    res.status(500).json({
      status: 'disconnected',
      timestamp: new Date().toISOString(),
      error: {
        message: error.message,
        code: error.code,
        detail: error.detail
      },
      database: {
        host: process.env.DB_HOST || 'Not configured',
        port: process.env.DB_PORT || 'Not configured',
        database: process.env.DB_NAME || 'Not configured',
        user: process.env.DB_USER || 'Not configured',
        ssl: process.env.DB_SSL === 'true'
      },
      environment: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT
      }
    });
  }
});

// Main conversion endpoint - handle both images and CSV files
app.post('/api/convert', (req, res, next) => {
  // Determine if this is a CSV request based on the format parameter
  const format = req.body.format || req.query.format;
  
  if (format && ['doc', 'docx', 'pdf', 'html', 'md', 'txt', 'xlsx', 'xls', 'ppt', 'pptx', 'rtf', 'odt', 'odp', 'mobi'].includes(format.toLowerCase())) {
    // Use CSV upload configuration
    uploadSingle.single('file')(req, res, next);
  } else {
    // Use image upload configuration
    upload.single('file')(req, res, next);
  }
}, async (req, res) => {
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
    
    const startTime = Date.now();
    const originalFormat = file.originalname.split('.').pop()?.toLowerCase() || 'unknown';

    // Handle CSV conversion early
    if (file.originalname.toLowerCase().endsWith('.csv') && ['doc', 'docx', 'pdf', 'html', 'md', 'txt', 'xlsx', 'xls', 'ppt', 'pptx', 'rtf', 'odt', 'odp', 'mobi'].includes(format.toLowerCase())) {
      console.log(`Processing CSV to ${format} conversion`);
      
      try {
        let outputBuffer: Buffer;
        let mimeType: string;
        let filename = file.originalname.replace(/\.csv$/i, `.${format.toLowerCase()}`);
        
        switch (format.toLowerCase()) {
          case 'doc':
          case 'docx':
            outputBuffer = await processCSVToDocx(file.buffer, req.body);
            mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            break;
          case 'xlsx':
            outputBuffer = await processCSVToXlsx(file.buffer, req.body);
            mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            break;
          case 'ppt':
          case 'pptx':
            outputBuffer = await processCSVToPptx(file.buffer, req.body);
            mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
            break;
          case 'txt':
            outputBuffer = await processCSVToText(file.buffer);
            mimeType = 'text/plain';
            break;
          case 'html':
            outputBuffer = await processCSVToHtml(file.buffer);
            mimeType = 'text/html';
            break;
          case 'md':
            outputBuffer = await processCSVToMarkdown(file.buffer);
            mimeType = 'text/markdown';
            break;
          case 'pdf':
          case 'rtf':
          case 'odt':
          case 'odp':
          case 'xls':
          case 'mobi':
            // For formats requiring LibreOffice/Calibre, use file-based conversion
            const tempDir = os.tmpdir();
            const inputPath = path.join(tempDir, `input_${Date.now()}.csv`);
            const outputPath = path.join(tempDir, `output_${Date.now()}.${format.toLowerCase()}`);
            
            try {
              await fs.writeFile(inputPath, file.buffer);
              
              if (['pdf', 'rtf', 'odt', 'odp', 'xls'].includes(format.toLowerCase())) {
                await convertWithLibreOffice(inputPath, outputPath, format.toLowerCase());
              } else if (['mobi'].includes(format.toLowerCase())) {
                // First convert to HTML, then to MOBI
                const htmlBuffer = await processCSVToHtml(file.buffer);
                const htmlPath = path.join(tempDir, `temp_${Date.now()}.html`);
                await fs.writeFile(htmlPath, htmlBuffer);
                await convertWithCalibre(htmlPath, outputPath, format.toLowerCase());
                await fs.unlink(htmlPath);
              }
              
              outputBuffer = await fs.readFile(outputPath);
              
              // Set appropriate MIME type
              const mimeTypes: Record<string, string> = {
                pdf: 'application/pdf',
                rtf: 'application/rtf',
                odt: 'application/vnd.oasis.opendocument.text',
                odp: 'application/vnd.oasis.opendocument.presentation',
                xls: 'application/vnd.ms-excel',
                mobi: 'application/x-mobipocket-ebook'
              };
              mimeType = mimeTypes[format.toLowerCase()] || 'application/octet-stream';
              
              // Cleanup
              await fs.unlink(inputPath);
              await fs.unlink(outputPath);
            } catch (conversionError) {
              console.error('External conversion error:', conversionError);
              return res.status(500).json({ 
                error: 'Conversion failed', 
                details: `Failed to convert CSV to ${format.toUpperCase()}` 
              });
            }
            break;
          default:
            return res.status(400).json({ error: `Unsupported CSV conversion format: ${format}` });
        }
        
        return sendBufferAsDownload(res, outputBuffer, filename, mimeType);
        
      } catch (csvError) {
        console.error('CSV conversion error:', csvError);
        return res.status(500).json({ 
          error: 'CSV conversion failed', 
          details: csvError instanceof Error ? csvError.message : 'Unknown error' 
        });
      }
    }

    // Parse quality value
    const qualityValue = quality === 'high' ? 95 : quality === 'medium' ? 80 : 60;
    const isLossless = lossless === 'true';

    // Check if this is a RAW file and process it first
    let imageBuffer = file.buffer;
    if (isRAWFile(file.originalname)) {
      console.log(`Detected RAW file: ${file.originalname}, processing with dcraw...`);
      try {
        imageBuffer = await processRAWFile(file.buffer, file.originalname);
        console.log(`RAW file processed successfully, converted buffer size: ${imageBuffer.length} bytes`);
      } catch (rawError) {
        console.error('RAW processing error:', rawError);
        return res.status(400).json({ error: 'Failed to process RAW file. Please ensure the file is a valid RAW format.' });
      }
    }

    let sharpInstance = sharp(imageBuffer, { 
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

    // Log conversion to database
    try {
      await DatabaseService.createConversion({
        originalFilename: file.originalname,
        convertedFilename: outputFilename,
        originalFormat: originalFormat,
        convertedFormat: format,
        fileSize: file.size,
        conversionTime: Date.now() - startTime,
        status: 'completed',
        ipAddress: req.ip || req.connection.remoteAddress,
        userAgent: req.get('User-Agent')
      });
    } catch (dbError) {
      console.error('Failed to log conversion to database:', dbError);
      // Don't fail the conversion if database logging fails
    }

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
        // Check if this is a RAW file and process it first
        let imageBuffer = file.buffer;
        if (isRAWFile(file.originalname)) {
          console.log(`Processing RAW file in batch: ${file.originalname}`);
          try {
            imageBuffer = await processRAWFile(file.buffer, file.originalname);
          } catch (rawError) {
            console.error(`RAW processing error for ${file.originalname}:`, rawError);
            results.push({
              originalName: file.originalname,
              success: false,
              error: 'Failed to process RAW file'
            });
            continue;
          }
        }

        let sharpInstance = sharp(imageBuffer, { 
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

// Load environment variables
dotenv.config();

// Start server with database initialization
const startServer = async () => {
  try {
    // Initialize database
    await initializeDatabase();
    
    // Start server
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📁 Health check: http://localhost:${PORT}/health`);
      console.log(`🔄 Convert endpoint: http://localhost:${PORT}/api/convert`);
      console.log(`🗄️ Database connected successfully`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down server...');
  await closeDatabase();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down server...');
  await closeDatabase();
  process.exit(0);
});

// Start the server
startServer();

export default app;
