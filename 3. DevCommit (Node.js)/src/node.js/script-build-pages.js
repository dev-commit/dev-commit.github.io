import fs from 'fs';
import nodeEval from 'node-eval';

import { createDir } from './utils/dir.js';
import { renderPage } from './templates/renderPage.js';

const PATH_PAGES = 'pages';

createDir(PATH_PAGES);

nodeEval(fs.readFileSync('./@modules/@links.js', 'utf8'));

ARR_LINKS.forEach(module => {
    if (module && module.length !== 0) {
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
