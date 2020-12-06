
const MENU_ITEMS = [
    { href: 'assessment',             class: 'menu-other', name: 'Ассессмент' },
    { href: 'js-tasks',               class: 'menu-other', name: '🍕 Задачи' },
    { href: 'theory',                 class: 'menu-other', name: '📑 Теория' },
    null,
    { href: 'theory-patterns',        class: 'menu-other', name: '⚡️ Паттерны' },
    { href: 'theory-paradigms',       class: 'menu-other', name: '⚡️ Парадигмы' },
    { href: 'theory-algoritms',       class: 'menu-other', name: '⚡️ Алгоритмы' },
    { href: 'theory-data-structures', class: 'menu-other', name: '⚡️ Структуры данных' },
    null,
    { href: 'js',                     class: 'menu-js',    name: '🥑 JavaScript' },
    { href: 'js-objects',             class: 'menu-js',    name: '🥑 Классы' },
    { href: 'js-async',               class: 'menu-js',    name: '🍋 Асинхронность' },
    { href: 'js-client-server',       class: 'menu-js',    name: '🍋 Клиент-сервер' },
    null,
    { href: 'js-web-api',             class: 'menu-js',    name: 'Web API' },
    { href: 'js-web-components',      class: 'menu-js',    name: 'WebComponents' },
    { href: 'canvas',                 class: 'menu-js',    name: 'Canvas' },
    null,
    { href: 'react-js',               class: 'menu-fw',    name: '💥 React.js' },
    { href: 'react-api',              class: 'menu-fw',    name: '💥 React API' },
    { href: 'react-hooks',            class: 'menu-fw',    name: '💥 React Hooks' },
    { href: 'redux',                  class: 'menu-fw',    name: '🍋 Redux' },
    { href: 'react-router',           class: 'menu-fw',    name: 'React Router' },
    { href: 'vue-js',                 class: 'menu-fw',    name: 'Vue.js' },
    null,
    { href: 'testing',                class: 'menu-other', name: '📑 Тестирование' },
    { href: 'jest',                   class: 'menu-other', name: '🔰 Jest' },
    { href: 'enzyme',                 class: 'menu-other', name: '🔰 Enzyme + Jest' },
    { href: 'react-testing',          class: 'menu-other', name: '🍋 React Testing' },
    { href: 'cypress',                class: 'menu-other', name: '🔰 Cypress' },
    null,
    { href: 'html',                   class: 'menu-html',  name: 'HTML' },
    { href: 'css',                    class: 'menu-html',  name: 'CSS' },
    { href: 'css-flexbox',            class: 'menu-html',  name: 'Flexbox' },
    { href: 'css-grid',               class: 'menu-html',  name: 'CSS Grid' },
    { href: 'svg',                    class: 'menu-html',  name: 'SVG' },
    { href: 'sass',                   class: 'menu-html',  name: 'Sass' },
    { href: 'bootstrap',              class: 'menu-html',  name: 'Bootstrap' },
    null,
    { href: 'git',                    class: 'menu-php',   name: '🥥 Git' },
    { href: 'typescript',             class: 'menu-php',   name: '🍋 TypeScript' },
    { href: 'flow',                   class: 'menu-php',   name: '🍋 Flow' },
    { href: 'npm',                    class: 'menu-php',   name: '🥥 Webpack' },
    { href: 'webpack',                class: 'menu-php',   name: 'NPM' },
    { href: 'material-ui',            class: 'menu-php',   name: 'Material-UI' },
    { href: 'ramda',                  class: 'menu-php',   name: 'Ramda' },
    null,
    { href: 'other',                  class: 'menu-other', name: '📑 Other' },
    { href: 'node-js',                class: 'menu-other', name: 'Node.js' },
    { href: 'php',                    class: 'menu-other', name: 'PHP' },
    { href: 'python',                 class: 'menu-other', name: 'Python' },
    { href: 'mysql',                  class: 'menu-other', name: 'mySql' },
    { href: 'linux',                  class: 'menu-other', name: 'Linux' },
    { href: 'jquery',                 class: 'menu-other', name: 'jQuery' },
];

function getMenu() {
    const splitter = '<div style="width: 100%; flex-shrink: 0"></div>';
    
    let html = '';
    
    MENU_ITEMS.forEach((element) => {
        if (element) {
            html += `<a href="/pages/${element.href}.html" class="menu ${element.class}">${element.name}</a>`
        } else {
            html += splitter
        }
    })

    return html;
}
