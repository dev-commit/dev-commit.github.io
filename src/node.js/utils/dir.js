import fs from 'fs';
import rimraf from 'rimraf';

export const createDir = (path) => {
    rimraf.sync(path);

    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
};
