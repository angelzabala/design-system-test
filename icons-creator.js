import fs from 'fs';
import path from 'path';

var icons = [];

const loopFiles = async (dir) => {
  try {
    const files = await fs.promises.readdir(dir);
    for (const file of files) {
      const p = path.join(dir, file);
      const fileName = path.basename(p);
      const stat = await fs.promises.stat(p);

      if (stat.isFile() && !fileName.toLowerCase().includes('.ds_store')) {
        const fileContent = fs.readFileSync(p, 'utf8');

        icons.push({
          name: fileName
            .substring(0, fileName.length - 4)
            .toLowerCase()
            .replaceAll(' ', '-')
            .replaceAll('---', '-'),
          icon: fileContent
        });
      } else if (stat.isDirectory()) {
        await loopFiles(p);
      }
    }
  } catch (e) {
    console.error(e);
  }
};

await loopFiles('./src/icons/linear');
fs.writeFileSync('./src/icons/icons.json', '{ icons: ' + JSON.stringify(icons) + '}');
