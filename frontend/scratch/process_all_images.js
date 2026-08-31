import products from '../src/data/products.js';
import fs from 'fs';
import path from 'path';
import https from 'https';

const transparentDir = './public/products/transparent';
if (!fs.existsSync(transparentDir)) {
  fs.mkdirSync(transparentDir, { recursive: true });
}

console.log(`Loaded ${products.length} products from products.js`);

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const processAll = async () => {
  const itemsToProcess = [];

  for (const p of products) {
    const mainImg = p.images?.[0];
    if (!mainImg || !mainImg.url) continue;

    const url = mainImg.url;
    const publicId = mainImg.publicId;
    let filename = publicId ? publicId.split('/').pop() : url.split('/').pop();
    if (!filename.endsWith('.png')) {
      filename += '.png';
    }

    const rawFilename = `raw_${filename}`;
    const rawPath = path.join(transparentDir, rawFilename);
    const targetPath = path.join(transparentDir, filename);

    itemsToProcess.push({
      name: p.name,
      url,
      filename,
      rawPath,
      targetPath
    });
  }

  console.log(`Found ${itemsToProcess.length} products with valid images.`);

  for (const item of itemsToProcess) {
    console.log(`Downloading: ${item.name} (${item.url}) -> ${item.rawPath}`);
    try {
      await downloadFile(item.url, item.rawPath);
    } catch (e) {
      console.error(`Error downloading ${item.name}: ${e.message}`);
    }
  }

  console.log("All raw images downloaded successfully!");
};

processAll();
