const fs = require('fs');
const rimraf = require('rimraf');

export const createDir = (path) => {
    rimraf.sync(path);

    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}
