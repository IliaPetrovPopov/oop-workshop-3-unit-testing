import fs from 'fs';

export class FileReader {

  readFile(filename) {
    return fs.readFileSync(filename, { encoding: 'utf-8' });
  }

}
