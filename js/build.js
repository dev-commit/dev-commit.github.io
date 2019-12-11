const point = '<div class="circle-menu"></div> ';
const code = '<u-menu-code>&lt;/&gt;</u-menu-code> ';

const emoji = {
    theory:    '📑 ',
    code:      '⚡️ ',
    panda:     '🐼 ',
    bear:      '🐻 ',
    koala:     '🐨 ',
    cookie:    '🍪 ',
    babuin:    '🦍 ',
    mouse:     '🐹 ',
    boom:      '💥 ',
    fire:      '🔥 ',
    donut:     '🍩 ',
    pizza:     '🍕 ',
    clover:    '🍀 ',
}

function setTheme(tag, arr) {
    let resultTag = '';
    switch(tag) {
        case 1: resultTag = 'u-menu'; break;
        case 2: resultTag = 'u-menu-border'; break;
        case 3: resultTag = 'u-menu-accent'; break;
        case 3: resultTag = 'u-menu-accent'; break;
        case 4: resultTag = 'u-menu-unactive'; break;
    }
    let result = arr.map(function(element) {
        return `<${resultTag}>`+element+`</${resultTag}>`
    });
    return result.join(' ');
}


//---------------------------------------------------------------------
// ASSESSMENT
//---------------------------------------------------------------------
var arrAssessment = [
    [1, 'JavaScript. Объекты'],
    ['js-objects', 'main',            'inheritance',   'Наследование'],
    ['js-objects', 'objects-methods', 'object-create', setTheme(1, ['Object.create'])],
    ['js-objects', 'objects-methods', 'object-assign', setTheme(1, ['Object.assign'])],
    ['js-objects', 'main',            'new',           setTheme(1, ['new'])],
    ['js-objects', 'main',            'prototype',     setTheme(1, ['__proto__', 'prototype'])],
    ['js-objects', 'main',            'constructor',   setTheme(1, ['constructor'])],
    ['js-objects', 'main',            'return',        setTheme(1, ['return'])],

    [1, 'JavaScript'],
    ['js',          'main',       'context',              setTheme(1, ['this', 'call', 'apply', 'bind'])],
    ['js-function', 'main',       'closures',             'Замыкания'],
    ['js-async',    'theory',     'event-loop',           'Event Loop'],
    ['js-async',    'theory',     'event-loop-tasks',     'Event Loop: Tasks'],
    ['js',          'type-data',  'variables',            setTheme(1, ['var', 'let', 'const'])],
    ['js',          'array',      'array-cycle',          setTheme(1, ['map', 'forEach', '...'])],
    ['js',          'es6+',       'spread-array',         'Spread-оператор массивов (ES6)'],
    ['js',          'es6+',       'spread-obj',           'Spread-оператор объектов (ES-2018)'],
    ['js',          'es6+',       'destructive-array',    'Деструктуризация массивов (ES6)'],
    ['js',          'es6+',       'destructive-obj',      'Деструктуризация объектов (ES6)'],
    ['js-async',    'async',      'async-func',           ' Async Function (ES2017)'],

    [1, 'Парадигмы'],
    ['theory', 'programming-paradigms', 'oop',            setTheme(1, ['ООП'])],
    ['theory', 'programming-paradigms', 'functional',     setTheme(1, ['ФП'])],
    ['theory', 'programming-paradigms', 'composition',    'Композиция'],
    ['theory', 'programming-paradigms', 'currying',       'Каррирование / Частичное применение функций'],

    [1, 'Теория'],
    ['theory', 'html', 'critical-rendering-path', 'Critical Rendering Path'],
];


//---------------------------------------------------------------------
// REACT.JS
//---------------------------------------------------------------------
var arrReactjs = [
    //--------------------------------------------------------------------
    [2, 'React.js'],
    //--------------------------------------------------------------------
    [1, 'Информация'],
    ['react-js', 'info',  'info',                                     emoji.theory+'Информация'],
    ['theory',   'other', 'virtual-dom',                              emoji.theory+'Virtual DOM'],
    ['react-js', 'info',  'reconciliation',                           emoji.theory+'Reconciliation Algorithm'],
    ['react-js', 'info',  'fiber',                                    emoji.theory+'React Fiber'],
    ['react-js', 'info',  'structure',                                emoji.code+'Структура'],

    [1, 'Компоненты'],
    ['react-js', 'components',  'info',                               emoji.panda+'Компоненты'],
    ['react-js', 'components',  'jsx',                                emoji.panda+'JSX'],
    ['react-js', 'components',  'react-dom-create-element',           setTheme(1, ['ReactDOM.createElement'])],
    ['react-js', 'components',  'react-component',                    setTheme(1, ['React.Component'])],
    ['react-js', 'memoization', 'react-pure-component',               setTheme(1, ['React.PureComponent'])],
    ['react-js', 'components',  'state',                              setTheme(1, ['state', 'setState'])],
    ['react-js', 'components',  'props',                              setTheme(1, ['props'])],

    [1, 'API'],
    ['react-js', 'api',  'children',                                  emoji.boom+'Children'],
    ['react-js', 'api',  'context',                                   emoji.boom+'Context API'],
    ['react-js', 'api',  'refs',                                      emoji.boom+'Рефы'],
    ['react-js', 'api',  'fragments',                                 emoji.boom+'Фрагменты'],
    ['react-js', 'api',  'portals',                                   emoji.boom+'Порталы'],

    [1, 'Паттерны'],
    ['react-js', 'patterns',  'higher-order-components',              emoji.donut+'Higher-Order Component'],
    ['react-js', 'patterns',  'render-props',                         emoji.donut+'Render Props'],
    ['react-js', 'patterns',  'element-props',                        emoji.donut+'Свойства-элементы'],
    ['react-js', 'patterns',  'lifting-state-up',                     emoji.donut+'Подъём состояния'],

    [1, 'Обработка и вывод данных'],
    ['react-js', 'processing-data-output', 'handling-events',         emoji.cookie+'Обработка событий'],
    ['react-js', 'processing-data-output', 'controlled-components',   emoji.cookie+'Controlled Components'],
    ['react-js', 'processing-data-output', 'uncontrolled-components', emoji.cookie+'Uncontrolled Components'],
    ['react-js', 'processing-data-output', 'css',                     emoji.cookie+'CSS'],
    ['react-js', 'processing-data-output', 'conditional-rendering',   emoji.cookie+'Условный рендеринг'],
    ['react-js', 'processing-data-output', 'lists-and-keys',          emoji.cookie+'Списки и ключи'],
    ['react-js', 'processing-data-output', 'error-boundaries',        emoji.cookie+'Предохранители'],

    [1, 'Жизненный цикл компонентов'],
    ['react-js', 'lifecycle', 'info',                              emoji.theory+'Информация'],
    ['react-js', 'lifecycle', 'hook-render',                       emoji.pizza+setTheme(4, ['ReactDOM.render()'])],
    ['react-js', 'lifecycle', 'hook-constructor',                  emoji.pizza+setTheme(4, ['constructor()'])],
    ['react-js', 'lifecycle', 'hook-component-did-mount',          emoji.pizza+setTheme(4, ['componentDidMount()'])],
    ['react-js', 'lifecycle', 'hook-component-did-update',         emoji.pizza+setTheme(4, ['componentDidUpdate()'])],
    ['react-js', 'lifecycle', 'hook-component-will-unmount',       emoji.pizza+setTheme(4, ['componentWillUnmount()'])],
    ['react-js', 'lifecycle', 'hook-get-derived-state-from-props', emoji.pizza+setTheme(4, ['getDerivedStateFromProps()'])],
    ['react-js', 'lifecycle', 'hook-should-component-update',      emoji.pizza+setTheme(4, ['shouldComponentUpdate()'])],
    ['react-js', 'lifecycle', 'hook-get-snapshot-before-update',   emoji.pizza+setTheme(4, ['getSnapshotBeforeUpdate()'])],
    ['react-js', 'lifecycle', 'hook-get-derived-state-from-error', emoji.pizza+setTheme(4, ['getDerivedStateFromError()'])],
    ['react-js', 'lifecycle', 'hook-component-did-catch',          emoji.pizza+setTheme(4, ['componentDidCatch()'])],

    //--------------------------------------------------------------------
    [2, 'React.js-Остальное'],
    //--------------------------------------------------------------------
    [1, 'React Plugins'],
    ['react-js', 'react-plugins', 'create-react-app',      setTheme(2, ['react', 'react-dom', 'create-react-app'])],
    ['react-js', 'react-plugins', 'prop-types',            setTheme(2, ['prop-types'])],
    ['react-js', 'react-plugins', 'formik',                setTheme(2, ['formik'])],

    [1, 'Мемоизация'],
    ['react-js', 'memoization', 'info',                    'Информация'],
    ['react-js', 'memoization', 'react-pure-component',    setTheme(1, ['React.PureComponent'])],
    ['react-js', 'memoization', 'react-memo',              setTheme(1, ['React.memo'])],

    [1, 'Прочее'],
    ['react-js', 'other',  'dangerously-set-inner-html',   setTheme(1, ['dangerouslySetInnerHTML'])],

    [1, 'Тестирование'],
    ['react-js', 'testing', 'react-developer-tools',       'React Developer Tools'],
    ['react-js', 'testing', 'redux-developer-tools',       'Redux DevTools'],
];


//---------------------------------------------------------------------
// REACT-HOOKS
//---------------------------------------------------------------------
var arrReactHooks = [
    ['react-hooks', 'main', 'info',                   emoji.theory+'Информация'],
    ['react-hooks', 'hooks', 'use-state',             emoji.fire+setTheme(4, ['useState'])],
    ['react-hooks', 'hooks', 'use-effect',            emoji.fire+setTheme(4, ['useEffect'])],
    ['react-hooks', 'hooks', 'use-context',           emoji.fire+setTheme(4, ['useContext'])],
    ['react-hooks', 'hooks', 'use-ref',               emoji.fire+setTheme(4, ['useRef'])],
    ['react-hooks', 'hooks', 'use-memo',              emoji.fire+setTheme(4, ['useMemo'])],
    ['react-hooks', 'hooks', 'use-callback',          emoji.fire+setTheme(4, ['useCallback'])],
    ['react-hooks', 'hooks', 'use-reducer',           emoji.fire+setTheme(4, ['useReducer'])],
    ['react-hooks', 'hooks', 'use-imperative-handle', emoji.fire+setTheme(4, ['useImperativeHandle'])],
    ['react-hooks', 'hooks', 'use-layout-effect',     emoji.fire+setTheme(4, ['useLayoutEffect'])],
    ['react-hooks', 'hooks', 'use-debug-value',       emoji.fire+setTheme(4, ['useDebugValue'])],
    ['react-hooks', 'hooks', 'own-hooks',             emoji.theory+'Создание собственных хуков'],
];

//---------------------------------------------------------------------
// REDUX
//---------------------------------------------------------------------
var arrRedux = [
    ['redux', 'main', 'info',                   'Информация'],
    ['redux', 'main', 'functional-programming', 'Принципы FP'],
    ['redux', 'main', 'methods',                'Методы'],
    ['redux', 'main', 'structure',              code+'Структура'],
    ['redux', 'main', 'connect',                setTheme(1, ['Connect'])],
    ['redux', 'main', 'middleware',             setTheme(1, ['Middleware'])],
    ['redux', 'main', 'info-flux',              'Flux'],
    ['redux', 'main', 'info-redux',             'Redux'],

    [1, 'Redux Plugins'],
    ['redux', 'plugins', 'redux-thunk',    setTheme(2, ['redux-thunk', 'redux-devtools-extension'])],
    ['redux', 'plugins', 'redux-form',     setTheme(2, ['redux-form'])],
    ['redux', 'plugins', 'redux-actions',  setTheme(2, ['redux-actions'])],
    ['redux', 'plugins', 'redux-saga',     setTheme(2, ['redux-saga'])],
    ['redux', 'plugins', 'redux-logger',   setTheme(2, ['redux-logger'])],
];


//---------------------------------------------------------------------
// REACT-ROUTER
//---------------------------------------------------------------------
var arrReactRouter = [
    ['react-router', 'main', 'react-router',      setTheme(2, ['react-router', 'react-router-dom'])],
    ['react-router', 'main', 'basic-routing',     point+'Basic Routing'],
    ['react-router', 'main', 'style-active-link', point+'Style Active Link'],
    ['react-router', 'main', 'url-parameters',    point+'URL Parameters'],
    ['react-router', 'main', 'page-404',          'Page 404'],
];


//---------------------------------------------------------------------
// MATERIAL-UI
//---------------------------------------------------------------------
var arrMaterialUI = [
    ['material-ui', 'main', 'spacing',     setTheme(1, ['spacing'])],
    ['material-ui', 'main', 'with-styles', setTheme(1, ['makeStyles', 'withStyles'])],
    ['material-ui', 'main', 'css-in-js',   'CSS in JS'],
];


//---------------------------------------------------------------------
// JAVASCRIPT
//---------------------------------------------------------------------
var arrJavaScript = [
    [1, 'Типизация'],
    ['js', 'typing', 'typing',         emoji.theory+'Типизация'],
    ['js', 'typing', 'type-data',      emoji.theory+'Типы данных'],
    ['js', 'typing', 'type-casting',   emoji.code+'Приведение типов'],
    ['js', 'typing', 'typeof',         setTheme(1, ['typeof'])],

    [1, 'Модули'],
    ['js', 'modules', 'module-system', 'Модульная система'],
    ['js', 'modules', 'module-es6',    'Модули (ES6)'],

    [1, 'Основное'],
    ['js', 'main', 'variables',         setTheme(1, ['var', 'let', 'const'])],
    ['js', 'main', 'context',           setTheme(1, ['this', 'call', 'apply', 'bind'])],
    ['js', 'main', 'array-cycle',       setTheme(1, ['map', 'forEach', '...'])],
    ['js', 'main', 'spread-array',      'Spread Arr (ES6)'],
    ['js', 'main', 'spread-obj',        'Spread Obj (ES-2018)'],
    ['js', 'main', 'destructive-array', 'Деструктуризация Arr (ES6)'],
    ['js', 'main', 'destructive-obj',   'Деструктуризация Obj (ES6)'],
    ['js', 'main', 'object-wrappers',   'Autoboxing (Object Wrappers)'],
    ['js', 'main', 'ternary-operator',       'Тернарные операторы'],

    [1, 'Структуры данных'],
    ['js', 'data-structures', 'number',     setTheme(1, ['Number'])],
    ['js', 'data-structures', 'string',     setTheme(1, ['String'])],
    ['js', 'data-structures', 'json',       setTheme(1, ['Json'])],
    ['js', 'data-structures', 'date-time',  setTheme(1, ['Date'])],
    ['js', 'data-structures', 'array',      setTheme(1, ['Array'])],
    ['js', 'data-structures', 'symbol',     setTheme(1, ['Symbol (ES6)'])],
    ['js', 'data-structures', 'iterators',  setTheme(1, ['Iterators (ES6)'])],
    ['js', 'data-structures', 'map',        setTheme(1, ['Map', 'WeakMap'])],
    ['js', 'data-structures', 'set',        setTheme(1, ['Set', 'WeakSet'])],

    [1, 'Клиентское хранилище'],
    ['js', 'client-storage', 'web-storage', setTheme(1, ['localStorage', 'sessionStorage'])],
    ['js', 'client-storage', 'indexed-db',  setTheme(1, ['IndexedDB'])],
    ['js', 'client-storage', 'cookie',      setTheme(1, ['cookie'])],

    [1, 'Дополнительно'],
    ['js', 'other', 'pattern-string',         'Шаблонные строки (ES6)'],
    ['js', 'other', 'proxy',                  'Proxy (ES6)'],
    ['js', 'other', 'cycle',                  'Циклы'],
    ['js', 'other', 'exceptions',             'Исключения'],
    ['js', 'other', 'conditional-statements', 'Условные операторы'],
    ['js', 'other', 'math',                   'Math'],
    ['js', 'other', 'regexr',                 'Регулярные выражения'],
    ['js', 'other', 'asynchronous-scripts',   'Асинхронные скрипты: defer/async'],
    ['js', 'other', 'method-chaining',        'Цепные вызовы методов'],
    ['js', 'other', 'web-workers',            'Web Workers'],
    ['js', 'other', 'console',                setTheme(1, ['console'])],
    ['js', 'other', 'eval',                   setTheme(1, ['eval'])],
    ['js', 'other', 'notifications-api',      'Notifications API'],
    ['js', 'other', 'ecmascript',             'ECMAScript'],
    ['js', 'other', 'jsdoc',                  'Синтаксис JSDoc'],
    ['js', 'other', 'strict-mode',            'Strict Mode'],
    ['js', 'other', 'samples',                'Примеры'],
];


//---------------------------------------------------------------------
// JAVASCRIPT FUNCTION
//---------------------------------------------------------------------
var arrJsFunction = [
    ['js-function', 'main', 'info',                      'Информация'],
    ['js-function', 'main', 'announcement',              'Объявление'],
    ['js-function', 'main', 'arguments',                 'Псевдомассив аргументов arguments'],
    ['js-function', 'main', 'parameters',                'Параметры функции (ES6)'],
    ['js-function', 'main', 'arrow',                     'Стрелочные функции (ES6)'],
    ['js-function', 'main', 'closures',                  'Замыкания'],
    ['js-function', 'main', 'recursion',                 'Рекурсия'],
    ['js-function', 'main', 'named-function-expression', 'Named Function Expression'],
];


//---------------------------------------------------------------------
// JAVASCRIPT ASYNC
//---------------------------------------------------------------------
var arrJsAsync = [
    [1, 'Теория'],
    ['js-async', 'theory', 'event-loop', 'Event Loop'],
    ['js-async', 'theory', 'event-loop-tasks', 'Event Loop: Tasks'],

    [1, 'Promise'],
    ['js-async', 'promise', 'info',                  'Информация'],
    ['js-async', 'promise', 'methods',               'Методы'],
    ['js-async', 'promise', 'method-new',            setTheme(1, ['new Promise'])],
    ['js-async', 'promise', 'method-then-catch',     setTheme(1, ['.then', '.catch', '.finally'])],
    ['js-async', 'promise', 'method-resolve-reject', setTheme(1, ['Promise.resolve', 'Promise.reject'])],
    ['js-async', 'promise', 'method-all-rase',       setTheme(1, ['Promise.all', 'Promise.race'])],
    ['js-async', 'promise', 'chaining',              'Цепочки промисов'],
    ['js-async', 'promise', 'executor',              'Внутренние свойства new Promise'],
    ['js-async', 'promise', 'samples',               'Примеры'],

    [1, 'Асинхронный код'],
    ['js-async', 'async', 'collback',   setTheme(3, ['1'])+' Collback Function'],
    ['js-async', 'async', 'generators', setTheme(3, ['2'])+' Generators (ES6)'],
    ['js-async', 'async', 'async-func', setTheme(3, ['3'])+' Async Function (ES2017)'],
    ['js-async', 'async', 'timeout',    setTheme(1, ['setTimeout', 'setInterval'])],
];


//---------------------------------------------------------------------
// JAVASCRIPT CLIENT-SERVER
//---------------------------------------------------------------------
var arrJsClientServer = [
    [1, 'Клиент-сервер'],
    ['js-client-server', 'theory', 'info',          'Клиент-сервер'],
    ['js-client-server', 'theory', 'http',          'HTTP'],
    ['js-client-server', 'theory', 'https',         'HTTPS'],
    ['js-client-server', 'theory', 'soap',          'SOAP'],
    ['js-client-server', 'theory', 'rest',          '<u-menu>[1]</u-menu> REST API'],
    ['js-client-server', 'theory', 'rest-json-api', '<u-menu>[2]</u-menu> REST JSON API'],
    ['js-client-server', 'theory', 'graphql',       '<u-menu>[3]</u-menu> GraphQL'],

    [1, 'AJAX'],
    ['js-client-server', 'ajax', 'info',           'Описание'],
    ['js-client-server', 'ajax', 'xmlhttprequest', setTheme(3, ['1'])+' XMLHttpRequest'],
    ['js-client-server', 'ajax', 'fetch',          setTheme(3, ['2'])+' Fetch'],
    ['js-client-server', 'ajax', 'axios',          setTheme(3, ['3'])+' Axios'],
    ['js-client-server', 'ajax', 'request-js',     'Request JS'],
    ['js-client-server', 'ajax', 'response-php',   'Response PHP'],
    ['js-client-server', 'ajax', 'jsonp',          'JSONP'],
    ['js-client-server', 'ajax', 'cors',           'CORS'],
    ['js-client-server', 'ajax', 'websocket',      'WebSocket'],
    ['js-client-server', 'ajax', 'comet',          'Comet'],
];


//---------------------------------------------------------------------
// JAVASCRIPT WEB-API
//---------------------------------------------------------------------
var arrJsWebApi = [
    [1, 'События'],
    ['js-web-api', 'dom-events', 'handlers',          emoji.pizza+'Обработчики событий'],
    ['js-web-api', 'dom-events', 'list-events',       emoji.pizza+'Список событий'],
    ['js-web-api', 'dom-events', 'params-event',      emoji.pizza+'Объект события (Event)'],

    ['js-web-api', 'dom-events', 'propagation-model',     emoji.clover+'Модель распространения событий'],
    ['js-web-api', 'dom-events', 'propagation-capturing', emoji.clover+'1. Фаза погружения'],
    ['js-web-api', 'dom-events', 'propagation-target',    emoji.clover+'2. Фаза цели'],
    ['js-web-api', 'dom-events', 'propagation-bubbling',  emoji.clover+'3. Фаза всплытия'],

    ['js-web-api', 'dom-events', 'propagation-delegate',  emoji.fire+'Делегирование событий'],
    ['js-web-api', 'dom-events', 'prevent',               setTheme(1, ['event.preventDefault()'])],
    ['js-web-api', 'dom-events', 'samples',               'Примеры'],

    //--------------------------------------------------------------------
    [2, 'DOM'],
    //--------------------------------------------------------------------
    [1, 'Документ и объекты страницы'],
    ['js-web-api', 'dom', 'info',            'Информация'],
    ['js-web-api', 'dom', 'dom',             'DOM'],
    ['js-web-api', 'dom', 'bom',             'BOM'],
    ['js-web-api', 'dom', 'node',            setTheme(1, ['nodeType', 'nodeName', 'tagName'])],
    ['js-web-api', 'dom', 'element-get',     setTheme(3, ['1'])+' Выборка элементов'],
    ['js-web-api', 'dom', 'element-method',  setTheme(3, ['2'])+' Методы и свойства элементов'],
    ['js-web-api', 'dom', 'element-create',  setTheme(3, ['3'])+' Добавление и удаление узлов'],
    ['js-web-api', 'dom', 'multi-insert',    setTheme(3, ['3'])+' Мультивставка'],
    ['js-web-api', 'dom', 'metrics',         setTheme(3, ['4'])+' Размеры и прокрутка элементов'],
    ['js-web-api', 'dom', 'metrics-window',  setTheme(3, ['5'])+' Размеры и прокрутка страницы'],

    ['js-web-api', 'dom', 'attribute',       setTheme(1, ['attributes'])],
    ['js-web-api', 'dom', 'class-list',      setTheme(1, ['classList'])],
    ['js-web-api', 'dom', 'css',             setTheme(1, ['style', 'getComputedStyle'])],
    ['js-web-api', 'dom', 'input',           setTheme(1, ['input', 'select'])],
    ['js-web-api', 'dom', 'contains',        setTheme(1, ['contains', 'compareDocumentPosition'])],
    ['js-web-api', 'dom', 'media-queries',   setTheme(1, ['matchMedia'])],
    ['js-web-api', 'dom', 'location',        setTheme(1, ['open', 'location'])],
];


//---------------------------------------------------------------------
// JAVASCRIPT WEB-COMPONENTS
//---------------------------------------------------------------------
var arrJsWebComponents = [
    [1, 'Веб-компоненты'],
    ['js-web-components', 'main', 'info',            'Теория'],
    ['js-web-components', 'main', 'shadow-dom',      setTheme(3, ['1'])+' Shadow DOM'],
    ['js-web-components', 'main', 'template',        setTheme(3, ['2'])+' HTML Templates'],
    ['js-web-components', 'main', 'custom-elements', setTheme(3, ['3'])+' Custom Elements'],
    ['js-web-components', 'main', 'imports',         setTheme(3, ['4'])+' HTML Imports'],
];


//---------------------------------------------------------------------
// JAVASCRIPT OBJECTS
//---------------------------------------------------------------------
var arrJsObjects = [
    [1, 'Основное'],
    ['js-objects', 'main', 'inheritance',   emoji.fire+'Наследование'],
    ['js-objects', 'main', 'new',           emoji.clover+setTheme(1, ['new'])],
    ['js-objects', 'main', 'new-target',    emoji.clover+setTheme(1, ['new.target'])],
    ['js-objects', 'main', 'return',        emoji.clover+setTheme(1, ['return'])],
    ['js-objects', 'main', 'prototype',     emoji.donut+setTheme(1, ['__proto__', 'prototype'])],
    ['js-objects', 'main', 'constructor',   emoji.donut+setTheme(1, ['constructor'])],

    [1, 'Методы Objects'],
    ['js-objects', 'objects-methods', 'object-create',      setTheme(1, ['Object.create'])+' __proto__'],
    ['js-objects', 'objects-methods', 'object-assign',      setTheme(1, ['Object.assign'])],
    ['js-objects', 'objects-methods', 'set-prototype-of',   setTheme(1, ['Object.setPrototypeOf'])+' __proto__'],
    ['js-objects', 'objects-methods', 'get-prototype-of',   setTheme(1, ['Object.getPrototypeOf'])+' __proto__'],
    ['js-objects', 'objects-methods', 'is-prototype-of',    setTheme(1, ['isPrototypeOf'])+' __proto__'],
    ['js-objects', 'objects-methods', 'instanceof',         setTheme(1, ['instanceof'])],

    ['js-objects', 'objects',         'for',                'Перебор объекта'],
    ['js-objects', 'objects',         'check-property',     'Проверка наличия свойства'],
    ['js-objects', 'objects',         'descriptor',         'Дескрипторы свойств'],
    ['js-objects', 'objects',         'extends',            'Расширяемость объектов'],

    [1, 'Объекты ES6+'],
    ['js-objects', 'objects', 'info',             emoji.theory+'Теория'],
    ['js-objects', 'objects', 'literal-notation', emoji.boom+'Литеральная нотация'],
    ['js-objects', 'objects', 'constructor',      'Конструктор создания объекта'],
    ['js-objects', 'objects', 'prototype',        'Прототип'],
    ['js-objects', 'objects', 'conversion',       '<u-menu>toString</u-menu> <u-menu>valueOf</u-menu>'],
    ['js-objects', 'objects', 'samples',          'Примеры'],

    [1, 'Классы ES6+'],
    ['js-objects', 'class-es6', 'info',             emoji.theory+'Теория'],
    ['js-objects', 'class-es6', 'create',           emoji.fire+'Объявление'],
    ['js-objects', 'class-es6', 'inherit',          emoji.fire+'Наследование'],
    ['js-objects', 'class-es6', 'class-properties', 'Свойства классов'],
    ['js-objects', 'class-es6', 'expression',       'Выражения классов'],

    [1, 'Классы ES5 «Функциональный стиль»'],
    ['js-objects', 'class-es5-functional', 'info',                emoji.theory+'Теория'],
    ['js-objects', 'class-es5-functional', 'create',              emoji.pizza+'Объявление'],
    ['js-objects', 'class-es5-functional', 'methods-private',     emoji.pizza+'Приватный метод'],
    ['js-objects', 'class-es5-functional', 'getters-and-setters', emoji.pizza+'Геттеры и сеттеры'],
    ['js-objects', 'class-es5-functional', 'inherit',             emoji.pizza+'Наследование'],

    [1, 'Классы ES5 «Прототипный стиль»'],
    ['js-objects', 'class-es5-prototype', 'info',        emoji.theory+'Теория'],
    ['js-objects', 'class-es5-prototype', 'methods',     emoji.cookie+'Добавление методов'],
    ['js-objects', 'class-es5-prototype', 'inherit',     emoji.cookie+'Наследование классов'],
    ['js-objects', 'class-es5-prototype', 'mixins',      emoji.cookie+'Примеси'],
];


//---------------------------------------------------------------------
// BOOTSTRAP
//---------------------------------------------------------------------
var arrBootstrap = [
    [1, 'Основное'],
    ['bootstrap', 'main',  'info',   'Информация'],

    [1, 'Разметка'],
    ['bootstrap', 'layout', 'containers', 'Контейнеры'],
];


//---------------------------------------------------------------------
// WEBPACK
//---------------------------------------------------------------------
var arrWebpack = [
    [1, 'Информация'],
    ['webpack', 'main', 'info',      'Информация'],
    ['webpack', 'main', 'structure', 'Структура'],
    ['webpack', 'main', 'scripts',   'Скрипты'],

    [1, 'plugins'],
    ['webpack', 'plugins', 'webpack',                 setTheme(2, ['webpack', 'webpack-cli'])],
    ['webpack', 'plugins', 'webpack-dev-server',      setTheme(2, ['webpack-dev-server'])],
    ['webpack', 'plugins', 'babel',                   setTheme(2, ['babel-loader'])],
    ['webpack', 'plugins', 'html-webpack-plugin',     setTheme(2, ['html-webpack-plugin'])],
    ['webpack', 'plugins', 'clean-webpack-plugin',    setTheme(1, ['clean-webpack-plugin'])],
    ['webpack', 'plugins', 'react',                   setTheme(1, ['react'])],

    [1, 'loaders'],
    ['webpack', 'loaders', 'css-loader',              setTheme(2, ['css-loader'])],
    ['webpack', 'loaders', 'mini-css-extract-plugin', setTheme(2, ['mini-css-extract-plugin'])],
    ['webpack', 'loaders', 'style-loader',            setTheme(1, ['style-loader'])],
    ['webpack', 'loaders', 'sass-loader',             setTheme(1, ['sass-loader'])],
    ['webpack', 'loaders', 'file-loader',             setTheme(2, ['file-loader'])],
    ['webpack', 'loaders', 'image-webpack-loader',    setTheme(2, ['image-webpack-loader'])],
    ['webpack', 'loaders', 'html-loader',             setTheme(2, ['html-loader'])],

    [1, 'postcss'],
    ['webpack', 'postcss', 'postcss-loader',          setTheme(1, ['postcss-loader'])],
    ['webpack', 'postcss', 'autoprefixer',            setTheme(1, ['autoprefixer'])],
    ['webpack', 'postcss', 'cssnano',                 setTheme(1, ['cssnano'])],
    ['webpack', 'postcss', 'css-mqpacker',            setTheme(1, ['css-mqpacker'])],

    [1, 'options'],
    ['webpack', 'options', 'mode',                    setTheme(4, ['mode'])],
    ['webpack', 'options', 'devtool',                 setTheme(4, ['devtool'])],
    ['webpack', 'options', 'entry-output',            setTheme(4, ['entry', 'output'])],
    ['webpack', 'options', 'library',                 setTheme(4, ['library'])],
    ['webpack', 'options', 'watch',                   setTheme(4, ['watch', 'watchOptions'])],
    ['webpack', 'options', 'resolve',                 setTheme(4, ['resolve'])],
];

//---------------------------------------------------------------------
// GIT
//---------------------------------------------------------------------
var arrGit = [
    [1, 'Use Case'],
    ['git', 'usecase', 'common',            'Общее'],
    ['git', 'usecase', 'squash-commit',     'Squash Commit'],
    ['git', 'usecase', 'resolve-conflists', 'Разрешение конфликтов merge'],
    ['git', 'usecase', 'reset-changes',     'Отмена изменений'],

    [1, 'Команды Основные'],
    ['git', 'command',  'init',         setTheme(1, ['init'])],
    ['git', 'command',  'clone',        setTheme(1, ['clone'])],
    ['git', 'command',  'add',          setTheme(1, ['add'])],
    ['git', 'command',  'commit',       setTheme(1, ['commit'])],
    ['git', 'command',  'push',         setTheme(1, ['push'])],
    ['git', 'command',  'fetch',        setTheme(1, ['fetch'])],
    ['git', 'command',  'pull',         setTheme(1, ['pull'])],
    ['git', 'command',  'branch',       setTheme(1, ['branch'])],
    ['git', 'command',  'checkout',     setTheme(1, ['checkout'])],
    ['git', 'command',  'merge',        setTheme(1, ['merge'])],
    ['git', 'command',  'rebase',       setTheme(1, ['rebase'])],
    ['git', 'command',  'stash',        setTheme(1, ['stash'])],
    ['git', 'command',  'cherry-pick',  setTheme(1, ['cherry-pick'])],
    ['git', 'command',  'revert',       setTheme(1, ['revert'])],

    [1, 'Команды Дополнительно'],
    ['git', 'command',  'diff',         setTheme(1, ['diff'])],
    ['git', 'command',  'config',       setTheme(1, ['config'])],
    ['git', 'command',  'reset',        setTheme(1, ['reset'])],
    ['git', 'command',  'help',         setTheme(1, ['help'])],
    ['git', 'command',  'status',       setTheme(1, ['status'])],
    ['git', 'command',  'log',          setTheme(1, ['log'])],
    ['git', 'command',  'clean',        setTheme(1, ['clean'])],
    ['git', 'main',     'command',      'Остальные команды'],

    [1, 'GitHub'],
    ['git', 'github', 'terminal-connect', 'Подключение по SSH'],
    ['git', 'github', 'info',             'Теория'],
    ['git', 'github', 'github-desktop',   'GitHub Desktop'],
    ['git', 'github', 'smart-git',        'SmartGit'],

    [1, 'Теория'],
    ['git', 'theory', 'info',    'Информация'],
    ['git', 'theory', 'vcs',     'Системы управления версиями'],
    ['git', 'theory', 'gitflow', 'Gitflow'],
];


//---------------------------------------------------------------------
// NPM
//---------------------------------------------------------------------
var arrNpm = [
    [1, 'NPM'],
    ['npm', 'npm', 'info',         'Информация'],
    ['npm', 'npm', 'command',      'Команды'],
    ['npm', 'npm', 'shortcut',     'Сокращения'],
    ['npm', 'npm', 'package-json', 'package.json'],

    [1, 'NPM'],
    ['npm', 'npm-package', 'http-server', '<u-menu>http-server</u-menu>'],

    [1, 'Gulp'],
    ['npm', 'gulp', 'npm',       'NPM'],
    ['npm', 'gulp', 'structure', 'Структура'],
    ['npm', 'gulp', 'gulp4',     'Gulp 4'],
    ['npm', 'gulp', 'gulpfile',  'gulpfile.js'],
    ['npm', 'gulp', 'other',     'Примечания'],
];

//---------------------------------------------------------------------
// VUE.JS
//---------------------------------------------------------------------
var arrVuejs = [
    [1, 'Информация'],
    ['vue-js', 'main',  'info',            'Информация'],
    ['vue-js', 'main',  'structure-files', 'Структура проекта'],
    ['vue-js', 'main',  'structure-code',  code+'Пример кода vue-cli'],
    ['vue-js', 'main',  'instance-vue',    code+'Экземпляр Vue'],
    ['vue-js', 'main',  'lifecycle-hooks', 'Хуки жизненного цикла'],
    ['theory', 'other', 'virtual-dom',     'Virtual DOM'],

    [1, 'Реактивность'],
    ['vue-js', 'reactivity', 'reactivity',   'Реактивность'],
    ['vue-js', 'reactivity', 'set',          '<u-menu>vm.$set</u-menu> - добаление реакт. элементов'],
    ['vue-js', 'reactivity', 'next-tick',    '<u-menu>vm.$nextTick</u-menu> - обновление'],
    ['vue-js', 'reactivity', 'force-update', '<u-menu>vm.$forceUpdate</u-menu> - переотрисовка'],

    [1, 'Директивы'],
    ['vue-js', 'directives', 'info',          'Шаблоны и директивы'],
    ['vue-js', 'directives', 'v-text_v-html', '<u-menu>v-text</u-menu> <u-menu>v-html</u-menu>'],
    ['vue-js', 'directives', 'v-show_v-if',   '<u-menu>v-show</u-menu> <u-menu>v-if</u-menu> <u-menu>v-else</u-menu> <u-menu>v-else-if</u-menu>'],
    ['vue-js', 'directives', 'v-for',         '<u-menu>v-for</u-menu>'],
    ['vue-js', 'directives', 'v-on',          '<u-menu>v-on:</u-menu>'],
    ['vue-js', 'directives', 'v-bind',        '<u-menu>v-bind:</u-menu> :class :style'],
    ['vue-js', 'directives', 'v-model',       '<u-menu>v-model</u-menu>'],
    ['vue-js', 'directives', 'v-pre',         '<u-menu>v-pre</u-menu>'],
    ['vue-js', 'directives', 'v-cloak',       '<u-menu>v-cloak</u-menu>'],
    ['vue-js', 'directives', 'v-once',        '<u-menu>v-once</u-menu>'],

    [1, 'Компоненты'],
    ['vue-js', 'components', 'info',                   'Информация'],
    ['vue-js', 'components', 'component-simple',       'Простой компонент'],
    ['vue-js', 'components', 'component-registration', 'Регистрация компонента'],
    ['vue-js', 'components', 'component-global',       'Глобальный компонент'],
    ['vue-js', 'components', 'component-dynamic',      'Динамические компоненты'],
    ['vue-js', 'components', 'props',                  '<u-menu>props</u-menu>'],
    ['vue-js', 'components', 'slot',                   '<u-menu>&lt;slot&gt;</u-menu>'],
    ['vue-js', 'components', 'template',               '<u-menu>&lt;template&gt;</u-menu>'],
    ['vue-js', 'components', 'emit',                   '<u-menu>$emit</u-menu>'],

    [1, 'Опции и прочее'],
    ['vue-js', 'options-and-other', 'computed',   '<u-menu>computed</u-menu>'],
    ['vue-js', 'options-and-other', 'watch',      '<u-menu>watch</u-menu>'],
    ['vue-js', 'options-and-other', 'created',    '<u-menu>created</u-menu>'],
    ['vue-js', 'options-and-other', 'transition', '<u-menu>&lt;transition&gt;</u-menu>'],
    ['vue-js', 'options-and-other', 'vue-extend', '<u-menu>Vue.extend</u-menu>'],

    [1, 'DOM'],
    ['vue-js', 'dom', 'event',  '<u-menu>$event</u-menu> - доступ к событию'],
    ['vue-js', 'dom', 'refs',   '<u-menu>$refs</u-menu> - ссылка на dom элемент'],

    [1, 'Переиспользование и композиция'],
    ['vue-js', 'composition', 'mixins',          'Примеси'],
    ['vue-js', 'composition', 'user-directives', 'Пользовательские директивы'],
    ['vue-js', 'composition', 'render',          'Render-функции'],
    ['vue-js', 'composition', 'plugins',         'Плагины'],
    ['vue-js', 'composition', 'filters',         'Фильтры'],

    [1, 'Vuex'],
    ['vue-js', 'vuex', 'info',      'Информация'],
    ['vue-js', 'vuex', 'src',       'Подключение'],
    ['vue-js', 'vuex', 'store',     '<u-menu-accent>0.</u-menu-accent> Хранилище (store)'],
    ['vue-js', 'vuex', 'state',     '<u-menu-accent>1.</u-menu-accent> Состояние (state)'],
    ['vue-js', 'vuex', 'getters',   '<u-menu-accent>2.</u-menu-accent> Геттеры (getters)'],
    ['vue-js', 'vuex', 'mutations', '<u-menu-accent>3.</u-menu-accent> Мутации (mutations)'],
    ['vue-js', 'vuex', 'actions',   '<u-menu-accent>4.</u-menu-accent> Действия (actions)'],
    ['vue-js', 'vuex', 'modules',   '<u-menu-accent>5.</u-menu-accent> Модули (modules)'],
    ['vue-js', 'vuex', 'samples',   'Примеры'],

    [1, 'Vue Router'],
    ['vue-js', 'vue-router', 'info',                 'Информация'],
    ['vue-js', 'vue-router', 'src-script',           'Подключение через &lt;script&gt;'],
    ['vue-js', 'vue-router', 'src-npm',              'Подключение через NPM'],
    ['vue-js', 'vue-router', 'server-configuration', 'Конфигурование сервера'],
    ['vue-js', 'vue-router', 'path-static',          point+'Статический путь'],
    ['vue-js', 'vue-router', 'path-dynamic',         point+'Динамический путь'],
    ['vue-js', 'vue-router', 'path-comparison',      point+'Сопоставление путей'],
    ['vue-js', 'vue-router', 'navigation',           point+'Программная навигация'],
    ['vue-js', 'vue-router', 'passing-props',        point+'Входные параметры (props)'],
    ['vue-js', 'vue-router', 'navigation-guards',    point+'Навигационные хуки'],
    ['vue-js', 'vue-router', 'scroll-behavior',      point+'Поведение прокрутки страницы'],
    ['vue-js', 'vue-router', 'lazy-loading',         point+'Леннивая загрузка маршрутов'],
    ['vue-js', 'vue-router', 'active-link',          'Стилизация активной ссылки'],

    [1, 'Vue CLI'],
    ['vue-js', 'vue-cli', 'info',              'Информация'],
    ['vue-js', 'vue-cli', 'components-system', 'Компоненты системы'],
    ['vue-js', 'vue-cli', 'npm-command',       'Npm/Vue Command'],
    ['vue-js', 'vue-cli', 'import_export',     '<u-menu>import</u-menu> <u-menu>export</u-menu>'],
    ['vue-js', 'vue-cli', 'vscode',            'Настройка Visual Studio Code'],

    [1, 'Плагины'],
    ['vue-js', 'plugins', 'vuetify',     'Vuetify'],
    ['vue-js', 'plugins', 'fontawesome', 'FontAwesome'],

    [1, 'Тестирование'],
    ['vue-js', 'testing', 'unit-testing', 'Модульное тестирование'],
    ['vue-js', 'testing', 'vue-devtools', 'Vue-DevTools'],

    [1, 'Примеры'],
    ['vue-js', 'samples', 'cart',   'Добавить / удалить из корзины'],
];

//---------------------------------------------------------------------
// THEORY
//---------------------------------------------------------------------
var arrTheory = [
    [1, 'JavaScript'],
    ['theory', 'javascript', 'site-load',            'Загрузка сайта'],
    ['theory', 'javascript', 'webkit',               'Браузерные движки'],
    ['theory', 'javascript', 'garbage-collection',   'Сборщик мусора'],
    ['theory', 'javascript', 'dictionary',           'Словарь'],
    ['theory', 'javascript', 'polyfill',             'Полифиллы'],

    [1, 'Верстка'],
    ['theory', 'html', 'critical-rendering-path', 'Critical Rendering Path'],

    [1, 'Парадигмы программирования'],
    ['theory', 'programming-paradigms', 'info',           'Парадигмы'],
    ['theory', 'programming-paradigms', 'imperative',     '1. Императивное'],
    ['theory', 'programming-paradigms', 'declarative',    '2. Декларативное'],
    ['theory', 'programming-paradigms', 'functional',     '3. Функциональное'],
    ['theory', 'programming-paradigms', 'oop',            '4. Объектно-ориентированное'],
    ['theory', 'programming-paradigms', 'composition',    'Композиция'],
    ['theory', 'programming-paradigms', 'currying',       'Каррирование / Частичное применение функций'],
    ['theory', 'programming-paradigms', 'ddd',            'DDD'],
    ['theory', 'programming-paradigms', 'cqrs',           'CQRS'],
    ['theory', 'programming-paradigms', 'event-sourcing', 'Event Sourcing'],

    [1, 'Алгоритмы и структуры данных'],
    ['theory', 'algorithms', 'big-o-notation',  'Big-O Notation (сложность алгоритмов)'],
    ['theory', 'algorithms', 'structure-data',  'Структуры данных'],
    ['theory', 'algorithms', 'algoritms-sort',  'Алгоритмы сотрировки'],

    [1, 'Принципы программирования'],
    ['theory', 'programming-principles', 'solid',         'SOLID'],
    ['theory', 'programming-principles', 'dry',           'DRY'],
    ['theory', 'programming-principles', 'kiss',          'KISS'],
    ['theory', 'programming-principles', 'yagni',         'YAGNI'],
    ['theory', 'programming-principles', 'code-smell',    'Запахи кода'],
    ['theory', 'programming-principles', 'refactoring',   'Рефакторинг'],
    ['theory', 'programming-principles', 'code-standart', 'Стандарты кода'],

    [1, 'Deployment'],
    ['theory', 'deployment', 'continuous-integration', '1. Continuous Integration'],
    ['theory', 'deployment', 'continuous-delivery',    '2. Continuous Delivery'],
    ['theory', 'deployment', 'continuous-deployment',  '3. Continuous Deployment'],
    ['theory', 'deployment', 'software-deployment',    'Software Deployment'],

    [1, 'Методологии разработки'],
    ['theory', 'development-methodologies', 'info',       'Методологии разработки'],
    ['theory', 'development-methodologies', 'waterfall',  'Waterfall'],
    ['theory', 'development-methodologies', 'agile',      'Agile / Scrum / Kanban'],
    ['theory', 'development-methodologies', 'estimation', 'Эстимация'],

    [1, 'Шаблон проектирования архитектуры приложения'],
    ['theory', 'application-architecture', 'info', 'Шаблоны проектирования'],
    ['theory', 'application-architecture', 'mvc',  'MVC'],
    ['theory', 'application-architecture', 'mvvm', 'MVVM'],

    [1, 'Технологии'],
    ['theory', 'technology', 'jira', 'Jira'],
    ['theory', 'technology', 'emmet', 'Emmet'],

    [1, 'Прочее'],
    ['theory', 'other', 'typing',               'Типизация'],
    ['theory', 'other', 'web-applications',     'Виды веб-приложений'],
    ['theory', 'other', 'evolution-web-design', 'Эволюция веб-дизайна'],
    ['theory', 'other', 'frameworks',           'Фреймворки'],
    ['theory', 'other', 'version',              'Политика версионирования'],
    ['theory', 'other', 'name-case',            'Соглашение по именованию'],
    ['theory', 'other', 'prefix',               'Префиксы'],
    ['theory', 'other', 'specification-stage',  'Стадии спецификации'],
];

//---------------------------------------------------------------------
// OTHER
//---------------------------------------------------------------------
var arrDesignPatterns = [
    [1, 'Паттерны проектирования'],
    ['design-patterns', 'main', 'info',             'Паттерны проектирования'],
    ['design-patterns', 'main', 'singleton',        emoji.cookie+setTheme(1, ['Порожд'])+' «Синглтон»'],
    ['design-patterns', 'main', 'builder',          emoji.cookie+setTheme(1, ['Порожд'])+' «Строитель»'],
    ['design-patterns', 'main', 'simple-factory',   emoji.cookie+setTheme(1, ['Порожд'])+' «Простая фабрика»'],
    ['design-patterns', 'main', 'decorator',        emoji.donut+setTheme(1, ['Структурн'])+' «Декоратор»'],
    ['design-patterns', 'main', 'facade',           emoji.donut+setTheme(1, ['Структурн'])+' «Фасад»'],
    ['design-patterns', 'main', 'observer',         emoji.pizza+setTheme(1, ['Поведен'])+' «Наблюдатель»'],
    ['design-patterns', 'main', 'module',           setTheme(1, ['Неизвестно'])+' «Модуль»'],
    ['design-patterns', 'main', 'module-revealing', setTheme(1, ['Неизвестно'])+' «Открытый модуль»'],
];

//---------------------------------------------------------------------
// OTHER
//---------------------------------------------------------------------
var arrOther = [
    [1, 'Информация'],
    ['other', 'main', 'code-editors',  'Редакторы кода'],
    ['other', 'main', 'server-online', 'Server Online'],
    ['other', 'main', 'photoshop',     'Adobe Photoshop'],
    ['other', 'main', 'denwer',        'Denwer'],
    ['other', 'main', 'google-chrome', 'Google Chrome'],
    ['other', 'main', 'trash',         'Свалка'],
];

//---------------------------------------------------------------------
// LINUX
//---------------------------------------------------------------------
var arrLinux = [
    [1, 'Ubuntu (Debian)'],
    ['linux', 'ubuntu', 'command', 'Команды'],
    ['linux', 'ubuntu', 'package', 'Пакеты'],
    ['linux', 'ubuntu', 'nodejs',  point+'Node.js'],
    ['linux', 'ubuntu', 'npm',     point+'Npm'],
    ['linux', 'ubuntu', 'setting', 'Настройка'],
    ['linux', 'ubuntu', 'other',   'Прочее'],
];

//---------------------------------------------------------------------
// JS-TASKS
//---------------------------------------------------------------------
var arrJsTasks = [
    [1, 'Замыкания'],
    ['js-task', 'closures', 'sum-brackets', 'Сумма произвольного кол-ва скобок'],

    [1, 'Объекты'],
    ['js-task', 'objects', 'calling-function-as-object', 'Обращение к функции как к объекту'],
    ['js-task', 'objects', 'prototype-inheritance',      'Прототипное наследование'],
    ['js-task', 'objects', 'copy-and-null',              'Копирование и null'],

    [1, 'Полифилы'],
    ['js-task', 'polyphyls', 'object-create',     'Object.create'],
    ['js-task', 'polyphyls', 'object-create-jsr', 'Object.create (JSR)'],
    ['js-task', 'polyphyls', 'bind',              'bind()'],

    [1, 'Массивы'],
    ['js-task', 'arrays', 'popup-and-array-value',         'Всплытие и значение массива'],
    ['js-task', 'arrays', 'reduceright-and-create-object', 'reduceRight и создание объекта'],
    ['js-task', 'arrays', 'map-and-enumerate-objects',     'map и перебор массива объектов'],
    ['js-task', 'arrays', 'duplicate-array-method',        'Метод дублирующий массив'],

    [1, 'Асинхронность'],
    ['js-task', 'async', 'promise-make-request',       'Promise Make Request'],
    ['js-task', 'async', 'promise-and-settimeout',     'Promise и setTimeout'],
    ['js-task', 'async', 'promise-and-arguments-then', 'Promise и аргументы then'],
    ['js-task', 'async', 'promise-resolve-reject',     'Promise Resolve / Reject'],
    ['js-task', 'async', 'promise-resolve',            'Promise Resolve'],
    ['js-task', 'async', 'promise-reject',             'Promise Reject'],
    ['js-task', 'async', 'settimeout-for-var',         'setTimeout в for без let'],

    [1, 'Прочее'],
    ['js-task', 'other', 'popup-func-and-variable', 'Всплытие функции и переменной'],
];

//---------------------------------------------------------------------
// JQUERY
//---------------------------------------------------------------------
var arrJquery = [
    [1, 'События'],
    ['jquery', 'actions', 'handling-events', 'Обработчики событий'],
    ['jquery', 'actions', 'hover-toggle',    'События hover() и toggle()'],
    ['jquery', 'actions', 'event-object',    'Объект события eventObject()'],

    [1, 'Основное'],
    ['jquery', 'main', 'info',        'Информация'],
    ['jquery', 'main', 'ajax',        'AJAX'],
    ['jquery', 'main', 'css',         'CSS'],
    ['jquery', 'main', 'methods',     'Методы'],
    ['jquery', 'main', 'attributes',  'Атрибуты. Object this'],
    ['jquery', 'main', 'input',       'Input'],
    ['jquery', 'main', 'include',     'Подключение файлов'],
    ['jquery', 'main', 'is',          'Псевдо-селекторы :visible и :hidden'],
    ['jquery', 'main', 'animation',   'Анимация'],
    ['jquery', 'main', 'get-element', 'Выборка элементов'],
    ['jquery', 'main', 'samples',     'Примеры'],
];

//---------------------------------------------------------------------
// CANVAS
//---------------------------------------------------------------------
var arrCanvas = [
    [1, 'Основное'],
    ['canvas', 'main', 'info',   'Информация'],
    ['canvas', 'main', 'html',   'HTML'],
    ['canvas', 'main', 'basic',  'Основы'],
    ['canvas', 'main', 'figure', 'Фигуры'],
    ['canvas', 'main', 'other',  'Остальное'],
];

//---------------------------------------------------------------------
// HTML
//---------------------------------------------------------------------
var arrHTML = [
    [1, 'Основное'],
    ['html', 'main', 'info',            'Информация'],
    ['html', 'main', 'semantics',       'Семантика'],
    ['html', 'main', 'content-model',   'Content Model'],
    ['html', 'main', 'custom-elements', 'Custom Elements'],
    ['html', 'main', 'html5-layout',    'Теги HTML5 Layout'],
    ['html', 'main', 'web-forms',       'Web Forms'],
    ['html', 'main', 'element-link',    'Ссылки'],
    ['html', 'main', 'element-media',   'Видео и аудио'],
    ['html', 'main', 'yandex-map',      'Яндекс Карты'],
    ['html', 'main', 'element-table',   'Таблицы'],
    ['html', 'main', 'element-iframe',  'iframe'],
    ['html', 'main', 'samples',         'Примеры'],
];


//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
var arrCSS = [
    [1, 'CSS Selectors'],
    ['css', 'selectors', 'selectors',         emoji.pizza+'Селекторы'],
    ['css', 'selectors', 'pseudo-classes',    emoji.pizza+'Псевдоклассы'],
    ['css', 'selectors', 'pseudo-elements',   emoji.pizza+'Псевдоэлементы'],
    ['css', 'selectors', 'properties',        emoji.pizza+'Свойства'],

    [1, 'Адаптивность'],
    ['css', 'adaptive', 'html',               emoji.donut+'HTML'],
    ['css', 'adaptive', 'media-queries',      emoji.donut+'CSS Media queries'],

    [1, 'Features'],
    ['css', 'features', 'custom-properties',  emoji.fire+'Custom Properties'],
    ['css', 'features', 'mixins',             emoji.fire+'@apply'],
    ['css', 'features', 'custom-selector',    emoji.fire+'@custom-selector'],
    ['css', 'features', 'rrggbbaa',           emoji.fire+'RR-GG-BB-AA'],

    [1, 'Layout'],
    ['css', 'layout', 'info',                 emoji.theory+'Информация'],
    ['css', 'layout', 'css-multi-columns',    emoji.cookie+'CSS Multi Columns'],
    ['css', 'layout', 'css-writing-models',   emoji.cookie+'CSS Writing Models'],
    ['css', 'layout', 'css-exclusions',       emoji.cookie+'CSS Exclusions (IE)'],

    [1, 'Преобразования'],
    ['css', 'transform', 'transition',        setTheme(1, ['transition'])],
    ['css', 'transform', 'transform',         setTheme(1, ['transform'])],
    ['css', 'transform', 'animation',         setTheme(1, ['animation', '@keyframes'])],

    [1, 'Графика'],
    ['css', 'graphics', 'blend-mode',         emoji.donut+'CSS Blend Modes'],
    ['css', 'graphics', 'filter',             emoji.donut+'CSS Filters'],
    ['css', 'graphics', 'backdrop-filter',    emoji.donut+'CSS Backdrop-Filter'],
    ['css', 'graphics', 'clip-path',          emoji.donut+'CSS Clipping (Clip-path)'],
    ['css', 'graphics', 'css-shapes',         emoji.donut+'CSS Shapes'],
    ['css', 'graphics', 'css-masking',        emoji.donut+'CSS Masking'],

    [1, 'Основное'],
    ['css', 'main', 'viewport',               setTheme(1, ['vw', 'vh', 'vmin', 'vmax'])],
    ['css', 'main', 'import',                 setTheme(1, ['@import'])],
    ['css', 'main', 'supports',               setTheme(1, ['@supports'])],
    ['css', 'main', 'shadow',                 setTheme(1, ['box-shadow', 'text-shadow'])],
    ['css', 'main', 'overflow',               setTheme(1, ['overflow'])],
    ['css', 'main', 'display',                setTheme(1, ['display'])],
    ['css', 'main', 'position',               setTheme(1, ['position'])],,
    ['css', 'main', 'background',             setTheme(1, ['background'])],
    ['css', 'main', 'lists',                  setTheme(1, ['ul', 'ol'])],
    ['css', 'main', 'calc',                   setTheme(1, ['calc()'])],
    ['css', 'main', 'linear-gradient',        setTheme(1, ['linear-gradient'])],
    ['css', 'main', 'scrollbar',              setTheme(1, ['::-webkit-scrollbar'])],

    ['css', 'main', 'info',                   'Информация'],
    ['css', 'main', 'actions',                'События браузера'],
    ['css', 'main', 'px',                     'Единицы измерения'],
    ['css', 'main', 'font',                   'Текст'],
    ['css', 'main', 'pixel-perfect',          'Pixel Perfect'],
    ['css', 'main', 'samples',                'Примеры'],
];


//---------------------------------------------------------------------
// Sass
//---------------------------------------------------------------------
var arrSass = [
    [1, 'Основное'],
    ['sass', 'main', 'info',       'Информация'],
    ['sass', 'main', 'variables',  'Переменные (SassScript)'],
    ['sass', 'main', 'cascade',    'Вложенности'],
    ['sass', 'main', 'color',      'Операции над цветами'],
    ['sass', 'main', 'operations', 'Операции'],
    ['sass', 'main', 'mixin',      '@mixin'],
    ['sass', 'main', 'extend',     '@extend'],
    ['sass', 'main', 'import',     '@import'],
    ['sass', 'main', 'each',       '@each'],
    ['sass', 'main', 'at-root',    '@at-root'],
    ['sass', 'main', 'if-else',    'Условия if-else'],
    ['sass', 'main', 'for',        'Циклы For, While'],
    ['sass', 'main', 'other',      'Дополнительно'],
];


//---------------------------------------------------------------------
// Flow
//---------------------------------------------------------------------
var arrFlow = [
    [1, 'Основное'],
    ['flow', 'main', 'type-data',   'Типы данных'],
    ['flow', 'main', 'type',        setTheme(1, ['type'])],

    [1, 'Информация'],
    ['flow', 'main', 'info',        'Информация'],
    ['flow', 'main', 'install',     'Установка и настройка'],
    ['flow', 'main', 'vscode',      'Настройка VSCode'],
];


//---------------------------------------------------------------------
// SVG
//---------------------------------------------------------------------
var arrSvg = [
    [1, 'Основное'],
    ['svg', 'main', 'info',      'Информация'],
    ['svg', 'main', 'figure',    'Фигуры'],
    ['svg', 'main', 'filters',   'Фильтры'],
    ['svg', 'main', 'gradients', 'Градиенты'],
];


//---------------------------------------------------------------------
// CSS Flexbox
//---------------------------------------------------------------------
var arrCssFlexbox = [
    [1, 'Основное'],
    ['css-flexbox', 'main', 'info', 'Информация'],

    [1, 'Flex Container'],
    ['css-flexbox', 'container', 'display',         setTheme(1, ['display'])],
    ['css-flexbox', 'container', 'justify-content', setTheme(1, ['justify-content'])],
    ['css-flexbox', 'container', 'align-items',     setTheme(1, ['align-items'])],
    ['css-flexbox', 'container', 'align-content',   setTheme(1, ['align-content'])],
    ['css-flexbox', 'container', 'flex-flow',       setTheme(1, ['flex-flow', 'flex-direction', 'flex-wrap'])],

    [1, 'Flex Element'],
    ['css-flexbox', 'element', 'flex',        setTheme(1, ['flex', 'flex-grow', 'flex-shrink', 'flex-basis'])],
    ['css-flexbox', 'element', 'order',       setTheme(1, ['order'])],
    ['css-flexbox', 'element', 'align-self',  setTheme(1, ['align-self'])],

    [1, 'Прочее'],
    ['css-flexbox', 'other', 'margin',  'Margin'],
    ['css-flexbox', 'other', 'samples', 'Примеры'],
];


//---------------------------------------------------------------------
// CSS Grid
//---------------------------------------------------------------------
var arrCssGrid = [
    [1, 'Основное'],
    ['css-grid', 'main', 'info',           'Информация'],
    ['css-grid', 'main', 'container',      'Grid Container'],

    [1, 'Объединение ячеек'],
    ['css-grid', 'element-union', 'grid-column', setTheme(1, ['grid-column', 'grid-row'])],
    ['css-grid', 'element-union', 'grid-area',   setTheme(1, ['grid-area'])],

    [1, 'Прочее'],
    ['css-grid', 'other', 'align-elements', 'Выравнивание элементов'],
];


//---------------------------------------------------------------------
// MySQL
//---------------------------------------------------------------------
var arrMySql = [
    [1, 'Основное'],
    ['mysql', 'main', 'sql',             'SQL-запросы'],
    ['mysql', 'main', 'create-database', 'Создание базы данных'],
];


//---------------------------------------------------------------------
// Node.js
//---------------------------------------------------------------------
var arrNodejs = [
    [1, 'Основное'],
    ['node-js', 'main', 'info',     'Информация'],
    ['node-js', 'main', 'function', 'Функции'],
    ['node-js', 'main', 'export',   setTheme(1, ['require', 'exports'])],
    ['node-js', 'main', 'modules',  'Модули'],
    ['node-js', 'main', 'files',    'Файлы и директории'],
    ['node-js', 'main', 'server',   'Сервер'],
    ['node-js', 'main', 'stream',   'Потоки'],
    ['node-js', 'main', 'pipe',     setTheme(1, ['.pipe'])],
    ['node-js', 'main', 'router',   'Маршрутизация'],
    ['node-js', 'main', 'url',     'Данные из url'],

    [1, 'NPM пакеты'],
    ['node-js', 'package', 'express',     setTheme(2, ['express'])],
    ['node-js', 'package', 'body-parser', setTheme(2, ['body-parser'])],
    ['node-js', 'package', 'nodemailer',  setTheme(2, ['nodemailer'])],

    [1, 'Прочее'],
    ['node-js', 'other', 'samples', 'Примеры'],
];


//---------------------------------------------------------------------
// PHP
//---------------------------------------------------------------------
var arrPhp = [
    [1, 'Основное'],
    ['php', 'main', 'info',   'Информация'],
    ['php', 'main', 'variables', 'Переменные'],
    ['php', 'main', 'if',   'Конструкция if-else'],
    ['php', 'main', 'switch',   'Конструкция switch-case'],
    ['php', 'main', 'cycle',   'Циклы'],
    ['php', 'main', 'array',   'Массивы'],
    ['php', 'main', 'function',   'Функции'],

    [1, 'Прочее'],
    ['php', 'other', 'function-php',   'Функции PHP'],
    ['php', 'other', 'server',   'Суперглобальный массив SERVER'],

    [1, 'Примеры'],
    ['php', 'samples', 'sample1',   '#1. Файлы и директории'],
    ['php', 'samples', 'sample2',   '#2. Изображения'],
    ['php', 'samples', 'sample3',   '#3. Отправка email'],

    [1, 'MySQL'],
    ['php', 'mysql', 'mysql',   'Работа с MySQL'],
];


//---------------------------------------------------------------------
// Python
//---------------------------------------------------------------------
var arrPython = [
    [1, 'Основное'],
    ['python', 'main', 'cmd',       'CMD'],
    ['python', 'main', 'type',      'Типы данных'],
    ['python', 'main', 'base',      'Базовые принципы'],
    ['python', 'main', 'if',        'Условный оператор if'],
    ['python', 'main', 'circle',    'Циклы'],
    ['python', 'main', 'array',     'Списки (массивы)'],
    ['python', 'main', 'function',  'Функции'],
    ['python', 'main', 'module',    'Модули'],
    ['python', 'main', 'pyowm',     'Модуль определения погоды (pyowm)'],
    ['python', 'main', 'encode',    'Изменение кодировки на utf-8'],
    ['python', 'main', 'format',    'Форматирование строк. Метод format'],
    ['python', 'main', 'docstring', 'Строки документирования (docstring)'],

    [1, 'ООП'],
    ['python', 'oop', 'class',   'Классы, ООП'],
    ['python', 'oop', 'object',  'Объекты (словари)'],

    [1, 'Python и MySQL'],
    ['python', 'mysql', 'base', 'Базовые принципы'],

    [1, 'SQLAlchemy'],
    ['python', 'sqlalchemy', 'base', 'Базовые принципы'],

    [1, 'Falcon'],
    ['python', 'falcon', 'base', 'Базовые принципы'],
];


//---------------------------------------------------------------------
// Ramda
//---------------------------------------------------------------------
var arrRamda = [
    [1, 'Методы'],
    ['ramda', 'methods', 'path', setTheme(1, ['path', 'pathOr'])],
];


//---------------------------------------------------------------------
// TypeScript
//---------------------------------------------------------------------
var arrTypescript = [
    [1, 'Основное'],
    ['typescript', 'main', 'info',    'Информация'],
    ['typescript', 'main', 'install', 'Установка и настройка'],
];


//---------------------------------------------------------------------
// ТЕСТИРОВАНИЕ
//---------------------------------------------------------------------
var arrTesting = [
    ['testing', 'theory', 'info',             'Тестирование'],
    ['testing', 'theory', 'pyramid',          'Пирамида тестирования'],
    ['testing', 'theory', 'unit-test',        '<u-menu>1</u-menu> Юнит-тесты'],
    ['testing', 'theory', 'integration-test', '<u-menu>2</u-menu> Интеграционные тесты'],
    ['testing', 'theory', 'e2e-test',         '<u-menu>3</u-menu> E2E-тесты'],
    ['testing', 'theory', 'tdd',              'TDD'],
    ['testing', 'theory', 'bdd',              'BDD'],
    ['testing', 'theory', 'chrome-dev-tools', 'Chrome DevTools'],
];



var page = window.location.pathname.split('/');
var pageName = page[page.length-1];

switch(pageName) {
    case 'js.html':                var arrCurrent = arrJavaScript;      break;
    case 'js-objects.html':        var arrCurrent = arrJsObjects;       break;
    case 'js-function.html':       var arrCurrent = arrJsFunction;      break;
    case 'js-async.html':          var arrCurrent = arrJsAsync;         break;
    case 'js-web-api.html':        var arrCurrent = arrJsWebApi;        break;
    case 'js-web-components.html': var arrCurrent = arrJsWebComponents; break;
    case 'js-client-server.html':  var arrCurrent = arrJsClientServer;  break;
    case 'react-js.html':          var arrCurrent = arrReactjs;         break;
    case 'redux.html':             var arrCurrent = arrRedux;           break;
    case 'react-hooks.html':       var arrCurrent = arrReactHooks;      break;
    case 'react-router.html':      var arrCurrent = arrReactRouter;     break;
    case 'material-ui.html':       var arrCurrent = arrMaterialUI;      break;
    case 'testing.html':           var arrCurrent = arrTesting;         break;
    case 'vue-js.html':            var arrCurrent = arrVuejs;           break;
    case 'webpack.html':           var arrCurrent = arrWebpack;         break;
    case 'npm.html':               var arrCurrent = arrNpm;             break;
    case 'theory.html':            var arrCurrent = arrTheory;          break;
    case 'git.html':               var arrCurrent = arrGit;             break;
    case 'linux.html':             var arrCurrent = arrLinux;           break;
    case 'other.html':             var arrCurrent = arrOther;           break;
    case 'js-tasks.html':          var arrCurrent = arrJsTasks;         break;
    case 'jquery.html':            var arrCurrent = arrJquery;          break;
    case 'canvas.html':            var arrCurrent = arrCanvas;          break;
    case 'html.html':              var arrCurrent = arrHTML;            break;
    case 'css.html':               var arrCurrent = arrCSS;             break;
    case 'assessment.html':        var arrCurrent = arrAssessment;      break;
    case 'sass.html':              var arrCurrent = arrSass;            break;
    case 'bootstrap.html':         var arrCurrent = arrBootstrap;       break;
    case 'flow.html':              var arrCurrent = arrFlow;            break;
    case 'svg.html':               var arrCurrent = arrSvg;             break;
    case 'css-flexbox.html':       var arrCurrent = arrCssFlexbox;      break;
    case 'css-grid.html':          var arrCurrent = arrCssGrid;         break;
    case 'node-js.html':           var arrCurrent = arrNodejs;          break;
    case 'php.html':               var arrCurrent = arrPhp;             break;
    case 'python.html':            var arrCurrent = arrPython;          break;
    case 'mysql.html':             var arrCurrent = arrMySql;           break;
    case 'ramda.html':             var arrCurrent = arrRamda;           break;
    case 'typescript.html':        var arrCurrent = arrTypescript;      break;
    case 'design-patterns.html':   var arrCurrent = arrDesignPatterns;  break;
    default:                       var arrCurrent = [];
}

if ( (pageName!=='index.html') && (pageName!=='index') && (pageName!=='') ) {
    build();
}

function build() {
    let wrapperMenu = document.createElement('slot');
    let wrapperContent = document.createElement('slot');

    arrCurrent.forEach(function(item){

        if (isNaN(item[0])) {
            let elementMenu = document.createElement('a');
            elementMenu.setAttribute('href', `#${item[1]}-${item[2]}`);
            elementMenu.innerHTML = item[3];

            let path = `../themes/${item[0]}/${item[1]}/${item[2]}.html`;

            $.ajax({
                type: "GET",
                url: path,
                async: false,
                success: function (data) {
                    let elementContent = document.createElement('div');
                    elementContent.setAttribute('id', `${item[1]}-${item[2]}`);
                    elementContent.innerHTML = data;
                    wrapperContent.appendChild(elementContent);
                }
            });

            wrapperMenu.appendChild(elementMenu);
        }

        if (item[0] === 1) {
            let elementMenu = document.createElement('div');
            elementMenu.setAttribute('class', 'theme');
            elementMenu.innerHTML = item[1];
            wrapperMenu.appendChild(elementMenu);
        }

        if (item[0] === 2) {
            let elementMenu = document.createElement('div');
            elementMenu.setAttribute('class', 'section');
            elementMenu.innerHTML = item[1];
            wrapperMenu.appendChild(elementMenu);
        }

    });

    document.querySelector('#menu-build').appendChild(wrapperMenu);
    document.querySelector('#content').appendChild(wrapperContent);
}

$('#menu-build a').on('click', function() {
    $('#menu-build a').removeClass('active');
    $(this).addClass('active');
});
