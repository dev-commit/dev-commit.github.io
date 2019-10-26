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
    ['js',         'main',       'context',              'Контекст'],
    ['js',         'functions',  'closures',             'Замыкания'],
    ['theory',     'javascript', 'architecture-runtime', 'Event Loop'],
    ['js',         'type-data',  'variables',            setTheme(1, ['var', 'let', 'const'])],
    ['js',         'array',      'array-cycle',          setTheme(1, ['map', 'forEach', '...'])],

    [1, 'Парадигмы'],
    ['theory', 'programming-paradigms', 'oop',            setTheme(1, ['ООП'])],
    ['theory', 'programming-paradigms', 'functional',     setTheme(1, ['ФП'])],
    ['theory', 'programming-paradigms', 'composition',    'Композиция'],
    ['theory', 'programming-paradigms', 'currying',       'Каррирование / Частичное применение функций'],

    [1, 'Клиент-сервер'],
    ['theory', 'client-server', 'info',  'Клиент-сервер'],
    ['theory', 'client-server', 'http',  'HTTP'],
    ['theory', 'client-server', 'https', 'HTTPS'],
    ['theory', 'client-server', 'rest',  'REST API'],

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

    //--------------------------------------------------------------------
    [2, 'React-Жизненный цикл'],
    //--------------------------------------------------------------------
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
    [2, 'React-Hooks'],
    //--------------------------------------------------------------------
    ['react-js', 'hooks', 'info',                  emoji.theory+'Информация'],
    ['react-js', 'hooks', 'use-state',             emoji.fire+setTheme(4, ['useState'])],
    ['react-js', 'hooks', 'use-effect',            emoji.fire+setTheme(4, ['useEffect'])],
    ['react-js', 'hooks', 'use-context',           emoji.fire+setTheme(4, ['useContext'])],
    ['react-js', 'hooks', 'use-ref',               emoji.fire+setTheme(4, ['useRef'])],
    ['react-js', 'hooks', 'use-memo',              emoji.fire+setTheme(4, ['useMemo'])],
    ['react-js', 'hooks', 'use-callback',          emoji.fire+setTheme(4, ['useCallback'])],
    ['react-js', 'hooks', 'use-reducer',           emoji.fire+setTheme(4, ['useReducer'])],
    ['react-js', 'hooks', 'use-imperative-handle', emoji.fire+setTheme(4, ['useImperativeHandle'])],
    ['react-js', 'hooks', 'use-layout-effect',     emoji.fire+setTheme(4, ['useLayoutEffect'])],
    ['react-js', 'hooks', 'use-debug-value',       emoji.fire+setTheme(4, ['useDebugValue'])],
    ['react-js', 'hooks', 'own-hooks',             emoji.theory+'Создание собственных хуков'],

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
    ['react-js', 'other',  'error-boundaries',             point+'Предохранители'],
    ['react-js', 'other',  'dangerously-set-inner-html',   setTheme(1, ['dangerouslySetInnerHTML'])],

    [1, 'Тестирование'],
    ['react-js', 'testing', 'react-developer-tools',       'React Developer Tools'],
    ['react-js', 'testing', 'redux-developer-tools',       'Redux DevTools'],

    //--------------------------------------------------------------------
    [2, 'Redux'],
    //--------------------------------------------------------------------
    ['react-js', 'redux', 'info',                   'Информация'],
    ['react-js', 'redux', 'functional-programming', 'Принципы FP'],
    ['react-js', 'redux', 'methods',                'Методы'],
    ['react-js', 'redux', 'structure',              code+'Структура'],
    ['react-js', 'redux', 'connect',                setTheme(1, ['Connect'])],
    ['react-js', 'redux', 'middleware',             setTheme(1, ['Middleware'])],
    ['react-js', 'redux', 'info-flux',              'Flux'],
    ['react-js', 'redux', 'info-redux',             'Redux'],

    [1, 'Redux Plugins'],
    ['react-js', 'redux-plugins', 'redux-thunk',    setTheme(2, ['redux-thunk', 'redux-devtools-extension'])],
    ['react-js', 'redux-plugins', 'redux-form',     setTheme(2, ['redux-form'])],
    ['react-js', 'redux-plugins', 'redux-actions',  setTheme(2, ['redux-actions'])],
    ['react-js', 'redux-plugins', 'redux-saga',     setTheme(2, ['redux-saga'])],
    ['react-js', 'redux-plugins', 'redux-logger',   setTheme(2, ['redux-logger'])],

    //--------------------------------------------------------------------
    [2, 'React Router'],
    //--------------------------------------------------------------------
    ['react-js', 'react-router', 'react-router',      setTheme(2, ['react-router', 'react-router-dom'])],
    ['react-js', 'react-router', 'basic-routing',     point+'Basic Routing'],
    ['react-js', 'react-router', 'style-active-link', point+'Style Active Link'],
    ['react-js', 'react-router', 'url-parameters',    point+'URL Parameters'],
    ['react-js', 'react-router', 'page-404',          'Page 404'],

    //--------------------------------------------------------------------
    [2, 'Material-UI'],
    //--------------------------------------------------------------------
    ['react-js', 'material-ui', 'spacing',     setTheme(1, ['spacing'])],
    ['react-js', 'material-ui', 'with-styles', setTheme(1, ['makeStyles', 'withStyles'])],
    ['react-js', 'material-ui', 'css-in-js',   'CSS in JS'],
];


//---------------------------------------------------------------------
// JAVASCRIPT
//---------------------------------------------------------------------
var arrJavaScript = [
    //--------------------------------------------------------------------
    [2, 'Work'],
    //--------------------------------------------------------------------
    ['js', 'main',           'ternary-operator',  'Тернарные операторы'],
    ['js', 'functions',      'arrow',             'Стрелочные функции (ES6)'],
    ['js', 'modules',        'module-es6',        'Модули (ES6)'],
    ['js', 'es6+',           'spread-array',      'Spread-оператор массивов (ES6)'],
    ['js', 'es6+',           'spread-obj',        'Spread-оператор объектов (ES-2018)'],
    ['js', 'es6+',           'destructive-array', 'Деструктуризация массивов (ES6)'],
    ['js', 'es6+',           'destructive-obj',   'Деструктуризация объектов (ES6)'],
    ['js', 'array',          'array-cycle',       setTheme(1, ['map', 'forEach', '...'])],
    ['js', 'ajax',           'axios',             'Axios'],
    ['js', 'async',          'async-func',        'Async Function'],
    ['js', 'type-data',      'json',              'JSON'],
    ['js', 'main',           'context',           setTheme(1, ['this', 'call', 'apply', 'bind'])],
    ['js', 'client-storage', 'web-storage',       'WebStorage'],


    //--------------------------------------------------------------------
    [2, 'JavaScript'],
    //--------------------------------------------------------------------
    [1, 'Promise'],
    ['js', 'promise', 'info',                  'Информация'],
    ['js', 'promise', 'methods',               'Методы'],
    ['js', 'promise', 'method-new',            setTheme(1, ['new Promise'])],
    ['js', 'promise', 'method-then-catch',     setTheme(1, ['.then', '.catch', '.finally'])],
    ['js', 'promise', 'method-resolve-reject', setTheme(1, ['Promise.resolve', 'Promise.reject'])],
    ['js', 'promise', 'method-all-rase',       setTheme(1, ['Promise.all', 'Promise.race'])],
    ['js', 'promise', 'chaining',              'Цепочки промисов'],
    ['js', 'promise', 'executor',              'Внутренние свойства new Promise'],
    ['js', 'promise', 'samples',               'Примеры'],

    [1, 'Функции'],
    ['js', 'functions', 'info',                      'Информация'],
    ['js', 'functions', 'announcement',              'Объявление'],
    ['js', 'functions', 'arguments',                 'Псевдомассив аргументов arguments'],
    ['js', 'functions', 'parameters',                'Параметры функции (ES6)'],
    ['js', 'functions', 'arrow',                     'Стрелочные функции (ES6)'],
    ['js', 'functions', 'closures',                  'Замыкания'],
    ['js', 'functions', 'recursion',                 'Рекурсия'],
    ['js', 'functions', 'named-function-expression', 'Named Function Expression'],

    [1, 'Типы данных'],
    ['js', 'type-data', 'type-data',         'Типы данных'],
    ['js', 'type-data', 'variables',         setTheme(1, ['var', 'let', 'const'])],
    ['js', 'type-data', 'typeof',            setTheme(1, ['typeof'])],
    ['js', 'type-data', 'number',            'Числа'],
    ['js', 'type-data', 'math',              'Math'],
    ['js', 'type-data', 'string',            'Строки'],
    ['js', 'type-data', 'json',              'JSON'],
    ['js', 'type-data', 'date-time',         'Дата и время'],
    ['js', 'type-data', 'comparison-values', 'Сравнение и логические значения'],
    ['js', 'type-data', 'regexr',            'Регулярные выражения'],
    ['js', 'type-data', 'object-wrappers',   'Autoboxing (Object Wrappers)'],

    [1, 'Массивы'],
    ['js', 'array', 'array-cycle', setTheme(1, ['forEach', 'filter', 'map', 'every/some', 'reduce/reduceRight'])],
    ['js', 'array', 'array',       'Массивы'],
    ['js', 'array', 'array-obj',   'Массивы обьектов'],

    [1, 'ES6+'],
    ['js', 'es6+', 'map',               'Коллекции '+setTheme(1, ['Map', 'WeakMap'])],
    ['js', 'es6+', 'set',               'Коллекции '+setTheme(1, ['Set', 'WeakSet'])],
    ['js', 'es6+', 'spread-array',      'Spread-оператор массивов'],
    ['js', 'es6+', 'spread-obj',        'Spread-оператор объектов (ES-2018)'],
    ['js', 'es6+', 'destructive-array', 'Деструктуризация массивов'],
    ['js', 'es6+', 'destructive-obj',   'Деструктуризация объектов'],
    ['js', 'es6+', 'pattern-string',    'Шаблонные строки'],
    ['js', 'es6+', 'proxy',             'Proxy'],
    ['js', 'es6+', 'symbol',            'Symbol'],
    ['js', 'es6+', 'iterators',         'Iterators'],

    [1, 'Асинхронный код'],
    ['js', 'async', 'collback',   setTheme(3, ['1'])+' Collback Function'],
    ['js', 'async', 'generators', setTheme(3, ['2'])+' Generators (ES6)'],
    ['js', 'async', 'async-func', setTheme(3, ['3'])+' Async Function (ES2017)'],
    ['js', 'async', 'timeout',    setTheme(1, ['setTimeout', 'setInterval'])],

    [1, 'AJAX'],
    ['js', 'ajax', 'info',           'Описание'],
    ['js', 'ajax', 'xmlhttprequest', setTheme(3, ['1'])+' XMLHttpRequest'],
    ['js', 'ajax', 'fetch',          setTheme(3, ['2'])+' Fetch'],
    ['js', 'ajax', 'axios',          setTheme(3, ['3'])+' Axios'],
    ['js', 'ajax', 'request-js',     'Request JS'],
    ['js', 'ajax', 'response-php',   'Response PHP'],
    ['js', 'ajax', 'jsonp',          'JSONP'],
    ['js', 'ajax', 'cors',           'CORS'],
    ['js', 'ajax', 'websocket',      'WebSocket'],
    ['js', 'ajax', 'comet',          'Comet'],

    [1, 'Клиентское хранилище'],
    ['js', 'client-storage', 'web-storage', setTheme(1, ['localStorage', 'sessionStorage'])],
    ['js', 'client-storage', 'indexed-db',  setTheme(1, ['IndexedDB'])],
    ['js', 'client-storage', 'cookie',      setTheme(1, ['cookie'])],

    [1, 'Основное'],
    ['js', 'main', 'context',                setTheme(1, ['this', 'call', 'apply', 'bind'])],
    ['js', 'main', 'cycle',                  'Циклы'],
    ['js', 'main', 'exceptions',             'Исключения'],
    ['js', 'main', 'conditional-statements', 'Условные операторы'],
    ['js', 'main', 'ternary-operator',       'Тернарные операторы'],

    [1, 'Дополнительно'],
    ['js', 'additional', 'asynchronous-scripts',   'Асинхронные скрипты: defer/async'],
    ['js', 'additional', 'method-chaining',        'Цепные вызовы методов'],
    ['js', 'additional', 'web-workers',            'Web Workers'],
    ['js', 'additional', 'console',                setTheme(1, ['console'])],
    ['js', 'additional', 'eval',                   setTheme(1, ['eval'])],
    ['js', 'additional', 'notifications-api',      'Notifications API'],
    ['js', 'additional', 'ecmascript',             'ECMAScript'],
    ['js', 'additional', 'jsdoc',                  'Синтаксис JSDoc'],
    ['js', 'additional', 'strict-mode',            'Strict Mode'],

    //--------------------------------------------------------------------
    [2, 'DOM'],
    //--------------------------------------------------------------------
    [1, 'Документ и объекты страницы'],
    ['js', 'dom', 'info',            'Информация'],
    ['js', 'dom', 'dom',             'DOM'],
    ['js', 'dom', 'bom',             'BOM'],
    ['js', 'dom', 'node',            setTheme(1, ['nodeType', 'nodeName', 'tagName'])],
    ['js', 'dom', 'element-get',     setTheme(3, ['1'])+' Выборка элементов'],
    ['js', 'dom', 'element-method',  setTheme(3, ['2'])+' Методы и свойства элементов'],
    ['js', 'dom', 'element-create',  setTheme(3, ['3'])+' Добавление и удаление узлов'],
    ['js', 'dom', 'multi-insert',    setTheme(3, ['3'])+' Мультивставка'],
    ['js', 'dom', 'metrics',         setTheme(3, ['4'])+' Размеры и прокрутка элементов'],
    ['js', 'dom', 'metrics-window',  setTheme(3, ['5'])+' Размеры и прокрутка страницы'],

    ['js', 'dom', 'attribute',       setTheme(1, ['attributes'])],
    ['js', 'dom', 'class-list',      setTheme(1, ['classList'])],
    ['js', 'dom', 'css',             setTheme(1, ['style', 'getComputedStyle'])],
    ['js', 'dom', 'input',           setTheme(1, ['input', 'select'])],
    ['js', 'dom', 'contains',        setTheme(1, ['contains', 'compareDocumentPosition'])],
    ['js', 'dom', 'media-queries',   setTheme(1, ['matchMedia'])],
    ['js', 'dom', 'location',        setTheme(1, ['open', 'location'])],

    [1, 'События'],
    ['js', 'dom-events', 'propagation-model', 'Модель распространения событий'],
    ['js', 'dom-events', 'handlers',          'Назначение обработчиков событий'],
    ['js', 'dom-events', 'delegate',          'Делегирование событий'],
    ['js', 'dom-events', 'params-event',      'Передаваемый параметр (Event)'],
    ['js', 'dom-events', 'list-events',       'Список событий'],
    ['js', 'dom-events', 'prevent',           'Отмена обычного поведения'],
    ['js', 'dom-events', 'samples',           'Примеры'],

    //--------------------------------------------------------------------
    [2, 'Веб-компоненты'],
    //--------------------------------------------------------------------
    
    [1, 'Модули'],
    ['js', 'modules', 'module-system', 'Модульная система'],
    ['js', 'modules', 'module-es6',    'Модули (ES6)'],

    [1, 'Веб-компоненты'],
    ['js', 'web-components', 'info',            'Теория'],
    ['js', 'web-components', 'shadow-dom',      setTheme(3, ['1'])+' Shadow DOM'],
    ['js', 'web-components', 'template',        setTheme(3, ['2'])+' HTML Templates'],
    ['js', 'web-components', 'custom-elements', setTheme(3, ['3'])+' Custom Elements'],
    ['js', 'web-components', 'imports',         setTheme(3, ['4'])+' HTML Imports'],
];


//---------------------------------------------------------------------
// JAVASCRIPT OBJECTS
//---------------------------------------------------------------------
var arrJsObjects = [
    [1, 'Основное'],
    ['js-objects', 'main', 'inheritance',   'Наследование'],
    ['js-objects', 'main', 'new',           setTheme(1, ['new'])],
    ['js-objects', 'main', 'prototype',     setTheme(1, ['__proto__', 'prototype'])],
    ['js-objects', 'main', 'constructor',   setTheme(1, ['constructor'])],
    ['js-objects', 'main', 'return',        setTheme(1, ['return'])],

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
    ['js-objects', 'objects', 'info',             'Теория'],
    ['js-objects', 'objects', 'literal-notation', 'Литеральная нотация'],
    ['js-objects', 'objects', 'constructor',      'Конструктор создания объекта'],
    ['js-objects', 'objects', 'prototype',        'Прототип'],
    ['js-objects', 'objects', 'conversion',       '<u-menu>toString</u-menu> <u-menu>valueOf</u-menu>'],
    ['js-objects', 'objects', 'samples',          'Примеры'],

    [1, 'Классы ES6+'],
    ['js-objects', 'class-es6', 'info',             'Теория'],
    ['js-objects', 'class-es6', 'create',           'Объявление'],
    ['js-objects', 'class-es6', 'inherit',          'Наследование'],
    ['js-objects', 'class-es6', 'class-properties', 'Свойства классов'],
    ['js-objects', 'class-es6', 'expression',       'Выражения классов'],

    [1, 'Классы ES5 «Функциональный стиль»'],
    ['js-objects', 'class-es5-functional', 'info',                'Теория'],
    ['js-objects', 'class-es5-functional', 'create',              'Объявление'],
    ['js-objects', 'class-es5-functional', 'methods-private',     'Приватный метод'],
    ['js-objects', 'class-es5-functional', 'getters-and-setters', 'Геттеры и сеттеры'],
    ['js-objects', 'class-es5-functional', 'inherit',             'Наследование'],

    [1, 'Классы ES5 «Прототипный стиль»'],
    ['js-objects', 'class-es5-prototype', 'info',        'Теория'],
    ['js-objects', 'class-es5-prototype', 'methods',     'Добавление методов'],
    ['js-objects', 'class-es5-prototype', 'inherit',     'Наследование классов'],
    ['js-objects', 'class-es5-prototype', 'mixins',      'Примеси'],
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
    ['git', 'usecase', 'checkout-branch',   'Сменить ветку без коммита'],

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
    ['theory', 'javascript', 'architecture-runtime', 'Архитектура среды выполнения (Event Loop)'],
    ['theory', 'javascript', 'garbage-collection',   'Сборщик мусора'],
    ['theory', 'javascript', 'dictionary',           'Словарь'],
    ['theory', 'javascript', 'polyfill',             'Полифиллы'],

    [1, 'Верстка'],
    ['theory', 'html', 'critical-rendering-path', 'Critical Rendering Path'],

    [1, 'Клиент-сервер'],
    ['theory', 'client-server', 'info',  'Клиент-сервер'],
    ['theory', 'client-server', 'http',  'HTTP'],
    ['theory', 'client-server', 'https', 'HTTPS'],
    ['theory', 'client-server', 'rest',  'REST API'],

    [1, 'Паттерны проектирования'],
    ['theory', 'design-patterns', 'info',             'Паттерны проектирования'],
    ['theory', 'design-patterns', 'singleton',        '<u-menu>[1]</u-menu> Порожд. «Синглтон»'],
    ['theory', 'design-patterns', 'builder',          '<u-menu>[1]</u-menu> Порожд. «Строитель»'],
    ['theory', 'design-patterns', 'simple-factory',   '<u-menu>[1]</u-menu> Порожд. «Простая фабрика»'],
    ['theory', 'design-patterns', 'decorator',        '<u-menu>[2]</u-menu> Структурн. «Декоратор»'],
    ['theory', 'design-patterns', 'facade',           '<u-menu>[2]</u-menu> Структурн. «Фасад»'],
    ['theory', 'design-patterns', 'observer',         '<u-menu>[3]</u-menu> Поведен. «Наблюдатель»'],
    ['theory', 'design-patterns', 'module',           '<u-menu>[?]</u-menu> Неизвестно. «Модуль»'],
    ['theory', 'design-patterns', 'module-revealing', '<u-menu>[?]</u-menu> Неизвестно. «Открытый модуль»'],

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

    [1, 'Тестирование'],
    ['theory', 'testing', 'info',             'Тестирование'],
    ['theory', 'testing', 'pyramid',          'Пирамида тестирования'],
    ['theory', 'testing', 'unit-test',        '<u-menu>1</u-menu> Юнит-тесты'],
    ['theory', 'testing', 'integration-test', '<u-menu>2</u-menu> Интеграционные тесты'],
    ['theory', 'testing', 'e2e-test',         '<u-menu>3</u-menu> E2E-тесты'],
    ['theory', 'testing', 'tdd',              'TDD'],
    ['theory', 'testing', 'bdd',              'BDD'],
    ['theory', 'testing', 'chrome-dev-tools', 'Chrome DevTools'],

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

    [1, 'Прочее'],
    ['theory', 'other', 'typing',               'Типизация'],
    ['theory', 'other', 'web-applications',     'Виды веб-приложений'],
    ['theory', 'other', 'evolution-web-design', 'Эволюция веб-дизайна'],
    ['theory', 'other', 'frameworks',           'Фреймворки'],
];

//---------------------------------------------------------------------
// OTHER
//---------------------------------------------------------------------
var arrOther = [
    [1, 'Информация'],
    ['other', 'main', 'code-editors',  'Редакторы кода'],
    ['other', 'main', 'version',       'Политика версионирования'],
    ['other', 'main', 'server-online', 'Server Online'],
    ['other', 'main', 'name-case',     'Соглашение по именованию'],
    ['other', 'main', 'prefix',        'Префиксы'],
    ['other', 'main', 'emmet',         'Emmet'],
    ['other', 'main', 'photoshop',     'Adobe Photoshop'],
    ['other', 'main', 'denwer',        'Denwer'],
    ['other', 'main', 'google-chrome', 'Google Chrome'],
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
    ['js-task', 'other', 'type-casting',            'Приведение типов'],
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
    ['css', 'selectors', 'selectors',       'Селекторы'],
    ['css', 'selectors', 'pseudo-classes',  'Псевдоклассы'],
    ['css', 'selectors', 'pseudo-elements', 'Псевдоэлементы'],

    [1, 'Основное'],
    ['css', 'main', 'info',              'Информация'],
    ['css', 'main', 'custom-properties', 'Custom Properties'],
    ['css', 'main', 'mixins',            'Native CSS Mixins'],
    ['css', 'main', 'import',            '@import'],
    ['css', 'main', 'supports',          '@supports'],
    ['css', 'main', 'transition',        'Transition'],
    ['css', 'main', 'transform',         'Transform'],
    ['css', 'main', 'animation',         'Animation'],
    ['css', 'main', 'shadow',            'Box-Shadow, Text-Shadow'],
    ['css', 'main', 'overflow',          'Overflow'],
    ['css', 'main', 'px',                'Единицы измерения'],
    ['css', 'main', 'font',              'Font / Text'],
    ['css', 'main', 'viewport',          'Viewport width / height'],
    ['css', 'main', 'display',           'Display'],
    ['css', 'main', 'position',          'Position'],
    ['css', 'main', 'background',        'Background'],
    ['css', 'main', 'lists',             'Списки'],
    ['css', 'main', 'samples',           'Примеры'],

    [1, 'Адаптивность'],
    ['css', 'adaptive', 'html',          'HTML'],
    ['css', 'adaptive', 'media-queries', 'CSS Media queries'],

    [1, 'Графика'],
    ['css', 'graphics', 'blend-mode',      'CSS Blend Modes'],
    ['css', 'graphics', 'filter',          'CSS Filters'],
    ['css', 'graphics', 'backdrop-filter', 'CSS Backdrop-Filter'],
    ['css', 'graphics', 'clip-path',       'CSS Clipping (Clip-path)'],
    ['css', 'graphics', 'css-shapes',      'CSS Shapes'],
    ['css', 'graphics', 'css-masking',     'CSS Masking'],
];


//---------------------------------------------------------------------
// Sass
//---------------------------------------------------------------------
var arrSass = [
    [1, 'Основное'],
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
    ['flow', 'main', 'info',    'Информация'],
    ['flow', 'main', 'install', 'Установка и настройка'],
    ['flow', 'main', 'types',   'Types'],
    ['flow', 'main', 'vscode',  'Настройка VSCode'],
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
// Ramda
//---------------------------------------------------------------------
var arrTypescript = [
    [1, 'Основное'],
    ['typescript', 'main', 'info',    'Информация'],
    ['typescript', 'main', 'install', 'Установка и настройка'],
];




var page = window.location.pathname.split('/');
var pageName = page[page.length-1];

switch(pageName) {
    case 'js.html':          var arrCurrent = arrJavaScript; break;
    case 'js-objects.html':  var arrCurrent = arrJsObjects;  break;
    case 'vue-js.html':      var arrCurrent = arrVuejs;      break;
    case 'react-js.html':    var arrCurrent = arrReactjs;    break;
    case 'webpack.html':     var arrCurrent = arrWebpack;    break;
    case 'npm.html':         var arrCurrent = arrNpm;        break;
    case 'theory.html':      var arrCurrent = arrTheory;     break;
    case 'git.html':         var arrCurrent = arrGit;        break;
    case 'linux.html':       var arrCurrent = arrLinux;      break;
    case 'other.html':       var arrCurrent = arrOther;      break;
    case 'js-tasks.html':    var arrCurrent = arrJsTasks;    break;
    case 'jquery.html':      var arrCurrent = arrJquery;     break;
    case 'canvas.html':      var arrCurrent = arrCanvas;     break;
    case 'html.html':        var arrCurrent = arrHTML;       break;
    case 'css.html':         var arrCurrent = arrCSS;        break;
    case 'assessment.html':  var arrCurrent = arrAssessment; break;
    case 'sass.html':        var arrCurrent = arrSass;       break;
    case 'bootstrap.html':   var arrCurrent = arrBootstrap;  break;
    case 'flow.html':        var arrCurrent = arrFlow;       break;
    case 'svg.html':         var arrCurrent = arrSvg;        break;
    case 'css-flexbox.html': var arrCurrent = arrCssFlexbox; break;
    case 'css-grid.html':    var arrCurrent = arrCssGrid;    break;
    case 'node-js.html':     var arrCurrent = arrNodejs;     break;
    case 'php.html':         var arrCurrent = arrPhp;        break;
    case 'python.html':      var arrCurrent = arrPython;     break;
    case 'mysql.html':       var arrCurrent = arrMySql;      break;
    case 'ramda.html':       var arrCurrent = arrRamda;      break;
    case 'typescript.html':  var arrCurrent = arrTypescript; break;
    default:                 var arrCurrent = [];
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
