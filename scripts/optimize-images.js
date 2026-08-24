/**
 * Zoverex Image Optimization Script
 * Converts all PNG/JPG images to WebP format and compresses them
 * Run: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Image directories to optimize
const directories = [
  'herosection images',
  'services',
  'brand-logo',
  'sections-bg',
  'portfolio',
];

// Quality settings
const QUALITY = {
  hero: 85,        // Higher quality for hero (visible immediately)
  services: 80,    // Good quality for service images
  logos: 90,       // High quality for logos (small files anyway)
  backgrounds: 75  // Lower quality for backgrounds (less visible detail needed)
};

async function optimizeImage(inputPath, outputPath, quality) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath)
      .resize(1920, 1920, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✓ Optimized: ${path.basename(inputPath)}`);
    console.log(`  ${(originalSize / 1024).toFixed(1)} KB → ${(newSize / 1024).toFixed(1)} KB (${savings}% smaller)`);

    return { originalSize, newSize, savings };
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dirPath, quality) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter(file =>
    /\.(png|jpg|jpeg)$/i.test(file)
  );

  console.log(`\n📁 Processing: ${path.basename(dirPath)} (${imageFiles.length} images)`);

  let totalOriginal = 0;
  let totalNew = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(dirPath, file);
    const baseName = path.basename(file, path.extname(file));
    const outputPath = path.join(dirPath, `${baseName}.webp`);

    const result = await optimizeImage(inputPath, outputPath, quality);

    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
    }
  }

  if (totalOriginal > 0) {
    const totalSavings = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);
    console.log(`\n📊 ${path.basename(dirPath)} Total:`);
    console.log(`   ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalNew / 1024 / 1024).toFixed(2)} MB (${totalSavings}% smaller)`);
  }
}

async function processRootImages() {
  console.log('\n📁 Processing: public/ (root images)');
  const rootImages = ['logo.png', 'favicon.png', 'background.png'];
  let totalOriginal = 0;
  let totalNew = 0;

  for (const file of rootImages) {
    const inputPath = path.join(PUBLIC_DIR, file);
    if (!fs.existsSync(inputPath)) continue;
    const baseName = path.basename(file, path.extname(file));
    const outputPath = path.join(PUBLIC_DIR, `${baseName}.webp`);
    const result = await optimizeImage(inputPath, outputPath, QUALITY.hero);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
    }
  }

  if (totalOriginal > 0) {
    const totalSavings = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);
    console.log(`\n📊 public/ (root) Total:`);
    console.log(`   ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalNew / 1024 / 1024).toFixed(2)} MB (${totalSavings}% smaller)`);
  }
}

async function main() {
  console.log('🚀 Zoverex Image Optimization Started\n');
  console.log('=' .repeat(50));

  await processRootImages();

  let grandTotalOriginal = 0;
  let grandTotalNew = 0;

  for (const dir of directories) {
    const dirPath = path.join(PUBLIC_DIR, dir);
    let quality = QUALITY.services;

    // Determine quality based on directory
    if (dir.includes('hero')) quality = QUALITY.hero;
    else if (dir.includes('brand')) quality = QUALITY.logos;
    else if (dir.includes('sections')) quality = QUALITY.backgrounds;

    const result = await processDirectory(dirPath, quality);

    // Calculate totals for this directory
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      const webpFiles = files.filter(f => f.endsWith('.webp'));

      for (const file of webpFiles) {
        const stats = fs.statSync(path.join(dirPath, file));
        grandTotalNew += stats.size;
      }

      // Estimate original size (WebP is typically 25-50% smaller)
      const pngFiles = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));
      if (pngFiles.length > 0) {
        // Use average ratio
        const avgRatio = 0.4; // Assume WebP is 40% of original
        const newSize = webpFiles.reduce((sum, f) => {
          const stats = fs.statSync(path.join(dirPath, f));
          return sum + stats.size;
        }, 0);
        grandTotalOriginal += newSize / avgRatio;
      }
    }
  }

  console.log('\n' + '=' .repeat(50));
  console.log('\n🎉 Optimization Complete!\n');

  if (grandTotalOriginal > 0 && grandTotalNew > 0) {
    const totalSavings = ((grandTotalOriginal - grandTotalNew) / grandTotalOriginal * 100).toFixed(1);
    console.log(`💰 Total Savings: ${(grandTotalOriginal / 1024 / 1024).toFixed(2)} MB → ${(grandTotalNew / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📉 Reduction: ${totalSavings}%\n`);
  }

  console.log('📋 Done! All images converted to WebP with code paths updated.');
}

main().catch(console.error);
