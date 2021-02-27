const nodeEval = require('node-eval');
const fs = require('fs');

const getListHTML = (id, title) => (
    `  
        <li>
            <a
                class="menu-link"
                id="id__${id}"
                href="#${id}"
            >${title}</a>
        </li>
    `
)

export const getThemesHTML = (module) => {
    nodeEval(fs.readFileSync('src/js/utils.js', 'utf8'));
    nodeEval(fs.readFileSync(`@modules/build-${module}.js`, 'utf8'));

    let html = '';
    let menu = '';

    ARR_MODULE.forEach(({ title, themes }) => {
        menu += `<h4>🥥 ${title}</h4>`;
        menu += '<ul>';

        themes.forEach(elements => {
            const file = `@themes/${elements[0]}.html`;
            const content = fs.readFileSync(file, 'utf8');
            const id = elements[0];

            menu += getListHTML(id, elements[1]);
            html += `<div id="${id}">${content}</div>`;
        })

        menu += '</ul>';
    })

    return {
        html,
        menu,
    }
}
