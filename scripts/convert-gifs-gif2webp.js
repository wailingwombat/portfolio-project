const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');

const execPromise = util.promisify(exec);

// List of GIFs to convert
const gifsToConvert = [
  '/images/projects/dashboard-survey/survey_demo.gif',
  '/images/projects/dashboard-survey/logo_iteration.gif',
  '/images/projects/it-support-chatbot/demo.gif',
  '/images/projects/it-support-chatbot/one-clickbutton.gif',
  '/images/projects/it-support-chatbot/feedback-flow.gif',
  '/images/projects/mail-migration/updating-legacy.gif',
  '/images/projects/blockchain/fancy-blockchain.gif',
  '/images/projects/blockchain/heatmap.gif'
];

const convertGifToWebP = async (relativePath) => {
  try {
    const inputPath = path.join('public', relativePath);
    const outputPath = inputPath.replace('.gif', '.webp');
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error(`Input file not found: ${inputPath}`);
      return;
    }

    console.log(`\nProcessing: ${path.basename(inputPath)}`);
    
    // Get original file size
    const inputStats = fs.statSync(inputPath);
    console.log(`Original size: ${(inputStats.size / 1024 / 1024).toFixed(2)}MB`);

    // Convert using gif2webp with specified options
    // -f 0: lossless compression
    // -m 6: maximum compression method
    // -min_size: minimize output size
    const command = `gif2webp -f 0 -m 6 -min_size "${inputPath}" -o "${outputPath}"`;
    
    console.log('Running command:', command);
    await execPromise(command);

    // Get converted file size
    const outputStats = fs.statSync(outputPath);
    console.log(`Converted size: ${(outputStats.size / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Success: ${outputPath}`);
    
    // Calculate compression ratio
    const ratio = ((1 - (outputStats.size / inputStats.size)) * 100).toFixed(1);
    console.log(`Compression: ${ratio}% smaller`);

  } catch (error) {
    console.error(`\nError converting ${relativePath}:`);
    console.error(error.message);
    
    // Additional error information
    if (error.stderr) {
      console.error('\nError output:');
      console.error(error.stderr);
    }
  }
};

(async () => {
  console.log('Starting GIF conversions using gif2webp...');
  
  // Process each GIF sequentially
  for (const gif of gifsToConvert) {
    await convertGifToWebP(gif);
  }
  
  console.log('\nAll conversions completed!');
})(); 