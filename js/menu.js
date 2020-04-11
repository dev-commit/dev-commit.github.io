
const splitter = '<div style="width: 100%; flex-shrink: 0"></div>';

const menu =
    '<a href="/pages/assessment.html"        class="menu menu-other">Ассессмент</a>' +
    '<a href="/pages/js-tasks.html"          class="menu menu-other">🍕 Задачи</a>' +
    '<a href="/pages/theory-patterns.html"   class="menu menu-other">⚡️ Паттерны</a>' +
    '<a href="/pages/theory-paradigms.html"  class="menu menu-other">⚡️ Парадигмы</a>' +
    '<a href="/pages/theory-algoritms.html"  class="menu menu-other">⚡️ Алгоритмы</a>' +
    '<a href="/pages/theory.html"            class="menu menu-other">Теория</a>' +

    splitter +
    '<a href="/pages/testing.html"           class="menu menu-fw">🍕 Тестирование</a>' +
    '<a href="/pages/jest.html"              class="menu menu-fw">🍕 Jest</a>' +

    splitter +
    '<a href="/pages/js.html"                class="menu menu-js">⚾️ JavaScript</a>' +
    '<a href="/pages/js-objects.html"        class="menu menu-js">⚾️ Классы</a>' +
    '<a href="/pages/js-function.html"       class="menu menu-js">⚾️ Функции</a>' +
    '<a href="/pages/js-async.html"          class="menu menu-js">⚡️ Асинхронность</a>' +
    '<a href="/pages/js-client-server.html"  class="menu menu-js">⚡️ Клиент-сервер</a>' +

    splitter +
    '<a href="/pages/js-web-api.html"        class="menu menu-js">Web API</a>' +
    '<a href="/pages/js-web-components.html" class="menu menu-js">WebComponents</a>' +
    '<a href="/pages/canvas.html"            class="menu menu-js">Canvas</a>' +

    splitter +
    '<a href="/pages/react-js.html"       class="menu menu-fw">💥 React.js</a>' +
    '<a href="/pages/react-api.html"      class="menu menu-fw">💥 React API</a>' +
    '<a href="/pages/react-hooks.html"    class="menu menu-fw">💥 React Hooks</a>' +
    '<a href="/pages/redux.html"          class="menu menu-fw">Redux</a>' +
    '<a href="/pages/react-router.html"   class="menu menu-fw">React Router</a>' +
    '<a href="/pages/vue-js.html"         class="menu menu-fw">Vue.js</a>' +

    splitter +
    '<a href="/pages/html.html"        class="menu menu-html">HTML</a>' +
    '<a href="/pages/css.html"         class="menu menu-html">CSS</a>' +
    '<a href="/pages/css-flexbox.html" class="menu menu-html">Flexbox</a>' +
    '<a href="/pages/css-grid.html"    class="menu menu-html">CSS Grid</a>' +
    '<a href="/pages/svg.html"         class="menu menu-html">SVG</a>' +
    '<a href="/pages/sass.html"        class="menu menu-html">Sass</a>' +
    '<a href="/pages/bootstrap.html"   class="menu menu-html">Bootstrap</a>' +

    splitter +
    '<a href="/pages/git.html"         class="menu menu-php">🔥 Git</a>' +
    '<a href="/pages/flow.html"        class="menu menu-php">🔥 Flow</a>' +
    '<a href="/pages/npm.html"         class="menu menu-php">🥤 NPM</a>' +
    '<a href="/pages/webpack.html"     class="menu menu-php">🥤 Webpack</a>' +
    '<a href="/pages/material-ui.html" class="menu menu-php">Material-UI</a>' +
    '<a href="/pages/typescript.html"  class="menu menu-php">TypeScript</a>' +
    '<a href="/pages/ramda.html"       class="menu menu-php">Ramda</a>' +

    splitter +
    '<a href="/pages/linux.html"       class="menu menu-other">Linux</a>' +
    '<a href="/pages/other.html"       class="menu menu-other">Other</a>' +
    '<a href="/pages/jquery.html"      class="menu menu-other">jQuery</a>' +
    '<a href="/pages/node-js.html"     class="menu menu-other">Node.js</a>' +
    '<a href="/pages/php.html"         class="menu menu-other">PHP</a>' +
    '<a href="/pages/python.html"      class="menu menu-other">Python</a>' +
    '<a href="/pages/mysql.html"       class="menu menu-other">mySql</a>' +
    ''
;

document.getElementById('menu-top').innerHTML = menu;
