const fs = require('fs');
const nodeEval = require('node-eval');

import { createDir } from './utils/dir';
import { renderThemes } from './templates/renderThemes';
import { renderPage } from './templates/renderPage';

const PATH_PAGES = 'build';

createDir(PATH_PAGES);

nodeEval(fs.readFileSync('./@modules/@links.js', 'utf8'));

ARR_LINKS.forEach(module => {
    if (module) {
        const { html, menu } = renderThemes(module.page);

        const page = renderPage({
            up: '../',
            title: module.title,
            page: module.page,
            menu,
            content: html,
        });
        
        fs.writeFileSync(`${PATH_PAGES}/${module.page}.html`, page);
    }
})
