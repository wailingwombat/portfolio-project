const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Increase the pixel limit for large images
sharp.cache(false);
sharp.concurrency(1);

const convertToWebP = async (inputPath, outputPath) => {
  try {
    const inputBuffer = fs.readFileSync(inputPath);
    const isGif = inputPath.toLowerCase().endsWith('.gif');
    
    if (isGif) {
      // For GIFs, we'll use a higher quality to maintain animation quality
      await sharp(inputBuffer, { 
        animated: true,
        limitInputPixels: false // Remove pixel limit for large images
      })
        .webp({ 
          quality: 80,
          effort: 6, // Higher effort for better compression
          lossless: false,
          mixed: true // Allows mixing lossy and lossless frames
        })
        .toFile(outputPath);
    } else {
      // For static images, use standard settings
      await sharp(inputBuffer, {
        limitInputPixels: false // Remove pixel limit for large images
      })
        .webp({ quality: 80 })
        .toFile(outputPath);
    }
    console.log(`Converted ${inputPath} to WebP`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
};

const processDirectory = async (directory) => {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const inputPath = path.join(directory, file);
    const stat = fs.statSync(inputPath);
    
    if (stat.isDirectory()) {
      await processDirectory(inputPath);
    } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
      const outputPath = inputPath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
      await convertToWebP(inputPath, outputPath);
    }
  }
};

// Process images in these directories
const directories = [
  'src/assets/images/thumbnails',
  'src/assets/images/header',
  'public/images',
  'public/images/projects'
];

(async () => {
  for (const directory of directories) {
    if (fs.existsSync(directory)) {
      await processDirectory(directory);
    }
  }
  console.log('Conversion complete!');
})(); 