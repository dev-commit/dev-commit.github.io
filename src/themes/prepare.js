import { THEMES } from '../../src/themes/themes.js';

const fs = require('fs');
const rimraf = require('rimraf');

const PATH_PAGES = 'src/themes/pages';
const PATH_PAGES_DATA = 'src/themes/files';

rimraf.sync(PATH_PAGES);

const keys = Object.keys(THEMES);

keys.forEach(key => {
    const content = THEMES[key].content;
    const values = Object.values(content);

    const url = [];

    values.forEach(item => {
        item.content.forEach(item => {
            url.push(item);
        });
    });

    let html = '';

    url.forEach(item => {
        const path = `${item[0]}/${item[1]}/${item[2]}`;
        const file = `${PATH_PAGES_DATA}/${path}.html`;
        const data = fs.readFileSync(file, 'utf8');

        html += `<div id="${item[0]}-${item[1]}-${item[2]}">${data}</div>`;
    });

    if (!fs.existsSync(PATH_PAGES)) {
        fs.mkdirSync(PATH_PAGES);
    }

    fs.writeFileSync(`${PATH_PAGES}/${key}.vue`, `<template><div>${html}</div></template>`);
});
