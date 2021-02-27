const fs = require('fs');
const nodeEval = require('node-eval');

import { getThemesHTML } from './html/html-themes';
import { createDir } from './utils/dir';
import { getIndexHTML } from './html/html-page';

const PATH_PAGES = 'build';

createDir(PATH_PAGES);

nodeEval(fs.readFileSync('./__modules__/__links__.js', 'utf8'));

ARR_LINKS.forEach(module => {
    if (module) {
        const { html, menu } = getThemesHTML(module.page);

        const page = getIndexHTML({
            up: '../',
            title: module.title,
            script: module.page,
            menu,
            content: html,
        });
        
        fs.writeFileSync(`${PATH_PAGES}/${module.page}.html`, page);
    }
})
