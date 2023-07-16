const fs = require('fs');
const nodeEval = require('node-eval');

import { createDir } from './utils/dir';
import { renderPage } from './templates/renderPage';

const PATH_PAGES = 'pages';

createDir(PATH_PAGES);

nodeEval(fs.readFileSync('./@modules/@links.js', 'utf8'));

ARR_LINKS.forEach(module => {
    if (module) {
        const page = renderPage({
            up: '../',
            title: module.title,
            page: module.page,
            menu: null,
            content: null,
        });
        
        fs.writeFileSync(`${PATH_PAGES}/${module.page}.html`, page);
    }
})
