
//---------------------------------------------------------------------
// ASSESSMENT
//---------------------------------------------------------------------
var arrSingle = [
    ['css', 'graphics', 'css-shapes',         emoji.donut+'CSS Shapes'],
];



//---------------------------------------------------------------------
// ASSESSMENT
//---------------------------------------------------------------------
var arrAssessment = [
    [1, 'Типизация'],
    ['js',         'typing',  'typing',         emoji.theory+'Типизация'],
    ['js',         'typing',  'type-data',      emoji.theory+'Типы данных'],
    ['js',         'typing',  'type-casting',   emoji.code+'Сравнение типов'],
    ['js-objects', 'objects', 'conversion',     setTheme(1, ['toString', 'valueOf'])],
    ['js',         'typing',  'typeof',         setTheme(1, ['typeof'])],
    ['js',         'typing',  'symbol',         emoji.pizza+'Symbol (ES6)'],
    ['js',         'typing',  'hoisting',       emoji.fire+'Всплытие'],

    [1, 'Классы'],
    ['js-objects', 'main',            'inheritance',   emoji.fire+'Наследование'],
    ['js-objects', 'main',            'prototype',     emoji.fire+setTheme(1, ['__proto__', 'prototype'])],
    ['js-objects', 'main',            'new',           emoji.fire+setTheme(1, ['new'])],
    ['js-objects', 'objects-methods', 'object-create', emoji.pizza+setTheme(4, ['Object.create'])],
    ['js-objects', 'objects-methods', 'object-assign', emoji.pizza+setTheme(4, ['Object.assign'])],
    ['js-objects', 'main',            'constructor',   emoji.pizza+setTheme(4, ['constructor'])],
    ['js-objects', 'main',            'return',        emoji.pizza+setTheme(4, ['return'])],

    [1, 'Основы'],
    ['js',          'main',       'bind',                 emoji.baseball+setTheme(1, ['bind', 'call', 'apply'])],
    ['js',          'main',       'context',              emoji.baseball+'Контекст'],
    ['js',          'function',   'arrow',                emoji.fire+'Стрелочные функции'],
    ['js-async',    'theory',     'event-loop',           emoji.lemon+'Event Loop'],
    ['js-async',    'theory',     'event-loop-tasks',     emoji.lemon+'Event Loop: Tasks'],

    [1, 'Замыкания'],
    ['js', 'closures', 'closures',          emoji.theory+'Замыкания'],
    ['js', 'closures', 'environment',       emoji.theory+'Области видимости'],
    ['js', 'closures', 'funarg',            emoji.theory+'Фунарг-проблема'],

    [1, 'Практика'],
    ['js',          'main',       'array-cycle',          emoji.boom+setTheme(1, ['map', 'forEach', '...'])],
    ['js',          'main',       'spread-array',         emoji.code+'Spread Arr (ES6)'],
    ['js',          'main',       'spread-obj',           emoji.code+'Spread Obj (ES-2018)'],
    ['js',          'main',       'destructive-array',    emoji.pizza+'Деструктуризация Arr (ES6)'],
    ['js',          'main',       'destructive-obj',      emoji.pizza+'Деструктуризация Obj (ES6)'],
    ['js-async',    'async',      'async-func',           emoji.boom+'Async Function (ES2017)'],

    [1, 'Теория'],
    ['theory-paradigms', 'oop',                    'principles',              emoji.theory+'ООП'],
    ['theory-paradigms', 'fp',                     'concept',                 emoji.theory+'ФП'],
    ['theory',           'programming-principles', 'solid',                   emoji.theory+'SOLID'],
    ['theory-patterns',  'main',                   'info',                    emoji.theory+'Паттерны'],
    ['theory',           'html',                   'critical-rendering-path', emoji.theory+'Critical Rendering Path'],
    ['testing',          'theory',                 'pyramid',                 emoji.theory+'Пирамида тестирования'],
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
    ['react-js', 'info',  'components',                               emoji.cookie+'Компоненты'],
    ['react-js', 'info',  'props',                                    emoji.cookie+'Пропсы'],

    [1, 'API'],
    ['react-js', 'api',  'jsx',                                       emoji.boom+'JSX'],
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
    ['react-js', 'lifecycle', 'hook-constructor',                  emoji.pizza+'constructor()'],
    ['react-js', 'lifecycle', 'hook-get-derived-state-from-props', emoji.pizza+'getDerivedStateFromProps()'],
    ['react-js', 'lifecycle', 'hook-should-component-update',      emoji.pizza+'shouldComponentUpdate()'],
    ['react-js', 'lifecycle', 'hook-render',                       emoji.pizza+'render()'],
    ['react-js', 'lifecycle', 'hook-get-snapshot-before-update',   emoji.pizza+'getSnapshotBeforeUpdate()'],
    ['react-js', 'lifecycle', 'hook-component-did-mount',          emoji.cup+'componentDidMount()'],
    ['react-js', 'lifecycle', 'hook-component-did-update',         emoji.cup+'componentDidUpdate()'],
    ['react-js', 'lifecycle', 'hook-component-will-unmount',       emoji.cup+'componentWillUnmount()'],
    ['react-js', 'lifecycle', 'hook-get-derived-state-from-error', emoji.cookie+'getDerivedStateFromError()'],
    ['react-js', 'lifecycle', 'hook-component-did-catch',          emoji.cookie+'componentDidCatch()'],

    //--------------------------------------------------------------------
    [2, 'React.js-Остальное'],
    //--------------------------------------------------------------------
    [1, 'Прочее'],
    ['react-js', 'other', 'samples',       'Примеры'],

    [1, 'React Plugins'],
    ['react-js', 'react-plugins', 'create-react-app',      setTheme(2, ['react', 'react-dom', 'create-react-app'])],
    ['react-js', 'react-plugins', 'prop-types',            setTheme(2, ['prop-types'])],
    ['react-js', 'react-plugins', 'formik',                setTheme(2, ['formik'])],

    [1, 'Тестирование'],
    ['react-js', 'testing', 'react-developer-tools',       'React Developer Tools'],
    ['react-js', 'testing', 'redux-developer-tools',       'Redux DevTools'],
];


//---------------------------------------------------------------------
// REACT API
//---------------------------------------------------------------------
var arrReactApi = [
    [1, 'React'],
    ['react-api', 'react',  'component',                    emoji.pizza+setTheme(4, ['React.Component'])],   
    ['react-api', 'react',  'create-element',               emoji.pizza+setTheme(4, ['React.createElement()'])],
    ['react-api', 'react',  'clone-element',                emoji.pizza+setTheme(4, ['React.cloneElement()'])],
    ['react-api', 'react',  'create-factory',               emoji.pizza+setTheme(4, ['React.createFactory'])],
    ['react-api', 'react',  'is-valid-element',             emoji.pizza+setTheme(4, ['React.isValidElement()'])],

    [1, 'Мемоизация'],
    ['react-api', 'memoization', 'info',                    emoji.theory+'Информация'],
    ['react-api', 'memoization', 'react-pure-component',    emoji.pizza+setTheme(4, ['React.PureComponent'])],
    ['react-api', 'memoization', 'react-memo',              emoji.pizza+setTheme(4, ['React.memo'])],

    [1, 'Компоненты'],
    ['react-api', 'components',  'set-state',               emoji.pizza+setTheme(4, ['setState()'])],
    ['react-api', 'components',  'force-update',            emoji.pizza+setTheme(4, ['forceUpdate()'])],

    [1, 'DOM-атрибуты'],
    ['react-api', 'dom',  'dangerously-set-inner-html',     emoji.pizza+setTheme(4, ['dangerouslySetInnerHTML'])],
];


//---------------------------------------------------------------------
// REACT-HOOKS
//---------------------------------------------------------------------
var arrReactHooks = [
    [1, 'Хуки'],
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

    [1, 'Информация'],
    ['react-hooks', 'main', 'info',                   emoji.theory+'Информация'],
    ['react-hooks', 'main', 'own-hooks',              emoji.theory+'Создание собственных хуков'],
    ['react-hooks', 'main', 'questions',              emoji.theory+'Ответы на вопросы'],
];


//---------------------------------------------------------------------
// REDUX
//---------------------------------------------------------------------
var arrRedux = [
    [1, 'Код'],
    ['redux', 'code', 'elements',          emoji.fire+'Элементы'],
    ['redux', 'code', 'react-redux',       emoji.code+'React-Redux'],
    ['redux', 'code', 'redux',             emoji.code+'Redux'],
    ['redux', 'code', 'create-store',      emoji.pizza+setTheme(1, ['createStore'])+' <u>redux</u>'],
    ['redux', 'code', 'combine-reducers',  emoji.pizza+setTheme(1, ['combineReducers'])+' <u>redux</u>'],
    ['redux', 'code', 'provider',          emoji.pizza+setTheme(1, ['Provider'])+' <u>react-redux</u>'],
    ['redux', 'code', 'connect',           emoji.pizza+setTheme(1, ['connect'])+' <u>react-redux</u>'],
    ['redux', 'code', 'apply-middleware',  emoji.pizza+setTheme(1, ['applyMiddleware'])+' <u>redux</u>'],

    [1, 'Информация'],
    ['redux', 'main', 'info-flux',              emoji.theory+'Flux'],
    ['redux', 'main', 'info',                   emoji.theory+'Redux'],
    ['redux', 'main', 'functional-programming', emoji.theory+'Принципы FP'],

    [1, 'Redux Plugins'],
    ['redux', 'plugins', 'redux-thunk',    setTheme(2, ['redux-thunk'])+'<br>'+setTheme(2, ['redux-devtools-extension'])],
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
    ['react-router', 'main', 'basic-routing',     emoji.cookie+'Basic Routing'],
    ['react-router', 'main', 'style-active-link', emoji.cookie+'Style Active Link'],
    ['react-router', 'main', 'url-parameters',    emoji.cookie+'URL Parameters'],
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
    ['js', 'typing', 'type-casting',   emoji.code+'Сравнение типов'],
    ['js', 'typing', 'typeof',         setTheme(1, ['typeof'])],
    ['js', 'typing', 'symbol',         emoji.pizza+'Symbol (ES6)'],
    ['js', 'typing', 'hoisting',       emoji.fire+'Всплытие'],
    ['js', 'typing', 'variables',      setTheme(1, ['var', 'let', 'const'])],

    [1, 'Модули'],
    ['js', 'modules', 'module-system', 'Модульная система'],
    ['js', 'modules', 'module-es6',    'Модули (ES6)'],

    [1, 'Основное'],
    ['js', 'main', 'context',           emoji.baseball+'Контекст'],
    ['js', 'main', 'bind',              emoji.baseball+setTheme(1, ['bind', 'call', 'apply'])],
    ['js', 'main', 'array-cycle',       setTheme(1, ['map', 'forEach', '...'])],
    ['js', 'main', 'spread-array',      emoji.fire+'Spread Arr (ES6)'],
    ['js', 'main', 'spread-obj',        emoji.fire+'Spread Obj (ES-2018)'],
    ['js', 'main', 'destructive-array', emoji.fire+'Деструктуризация Arr (ES6)'],
    ['js', 'main', 'destructive-obj',   emoji.fire+'Деструктуризация Obj (ES6)'],
    ['js', 'main', 'ternary-operator',  'Тернарные операторы'],

    [1, 'Структуры данных'],
    ['js', 'data-structures', 'number',     setTheme(1, ['Number'])],
    ['js', 'data-structures', 'string',     setTheme(1, ['String'])],
    ['js', 'data-structures', 'json',       setTheme(1, ['Json'])],
    ['js', 'data-structures', 'array',      setTheme(1, ['Array'])],
    ['js', 'data-structures', 'iterators',  setTheme(1, ['Iterators (ES6)'])],
    ['js', 'data-structures', 'map',        setTheme(1, ['Map', 'WeakMap'])],
    ['js', 'data-structures', 'set',        setTheme(1, ['Set', 'WeakSet'])],
    ['js', 'data-structures', 'date-time',  setTheme(1, ['Date'])],

    [1, 'Клиентское хранилище'],
    ['js', 'client-storage', 'web-storage', setTheme(1, ['localStorage', 'sessionStorage'])],
    ['js', 'client-storage', 'indexed-db',  setTheme(1, ['IndexedDB'])],
    ['js', 'client-storage', 'cookie',      setTheme(1, ['cookie'])],

    [1, 'Замыкания'],
    ['js', 'closures', 'closures',          emoji.theory+'Замыкания'],
    ['js', 'closures', 'environment',       emoji.theory+'Области видимости'],
    ['js', 'closures', 'funarg',            emoji.theory+'Фунарг-проблема'],

    [1, 'Функции'],
    ['js', 'function', 'info',                      emoji.theory+'Информация'],
    ['js', 'function', 'announcement',              'Объявление'],
    ['js', 'function', 'arguments',                 'Псевдомассив аргументов arguments'],
    ['js', 'function', 'parameters',                'Параметры функции (ES6)'],
    ['js', 'function', 'arrow',                     'Стрелочные функции (ES6)'],
    ['js', 'function', 'recursion',                 'Рекурсия'],
    ['js', 'function', 'named-function-expression', 'Named Function Expression'],

    [1, 'Дополнительно'],
    ['js', 'other', 'pattern-string',         'Шаблонные строки (ES6)'],
    ['js', 'other', 'object-wrappers',        'Autoboxing (Object Wrappers)'],
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
// JAVASCRIPT ASYNC
//---------------------------------------------------------------------
var arrJsAsync = [
    [1, 'Теория'],
    ['js-async', 'theory', 'event-loop',       emoji.theory+'Event Loop'],
    ['js-async', 'theory', 'event-loop-tasks', emoji.theory+'Event Loop: Tasks'],

    [1, 'Promise'],
    ['js-async', 'promise', 'info',                  emoji.theory+'Информация'],
    ['js-async', 'promise', 'methods',               emoji.code+'Методы'],
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
    ['js-client-server', 'theory', 'info',          emoji.theory+'Информация'],
    ['js-client-server', 'theory', 'http',          emoji.theory+'HTTP'],
    ['js-client-server', 'theory', 'https',         emoji.theory+'HTTPS'],
    ['js-client-server', 'theory', 'soap',          emoji.theory+'SOAP'],
    ['js-client-server', 'theory', 'rest',          emoji.boom+'1. REST API'],
    ['js-client-server', 'theory', 'rest-json-api', emoji.boom+'2. REST JSON API'],
    ['js-client-server', 'theory', 'graphql',       emoji.boom+'3. GraphQL'],

    [1, 'AJAX и технологии'],
    ['js-client-server', 'ajax', 'info',           emoji.theory+'Описание'],
    ['js-client-server', 'ajax', 'xmlhttprequest', emoji.fire+'1. XMLHttpRequest'],
    ['js-client-server', 'ajax', 'fetch',          emoji.fire+'2. Fetch'],
    ['js-client-server', 'ajax', 'axios',          emoji.fire+'3. Axios'],
    ['js-client-server', 'ajax', 'request-js',     emoji.code+'Request JS'],
    ['js-client-server', 'ajax', 'response-php',   emoji.code+'Response PHP'],

    [1, 'Технологии'],
    ['js-client-server', 'tech', 'websocket',      emoji.lemon+'WebSocket'],
    ['js-client-server', 'tech', 'cors',           emoji.lemon+'CORS'],
    ['js-client-server', 'tech', 'xss',            emoji.lemon+'XSS'],
    ['js-client-server', 'tech', 'jsonp',          'JSONP'],
    ['js-client-server', 'tech', 'comet',          'Comet'],
];


//---------------------------------------------------------------------
// JAVASCRIPT WEB-API
//---------------------------------------------------------------------
var arrJsWebApi = [
    [1, 'События'],
    ['js-web-api', 'dom-events', 'handlers',          emoji.pizza+'Обработчики событий'],
    ['js-web-api', 'dom-events', 'list-events',       emoji.pizza+'Список событий'],
    ['js-web-api', 'dom-events', 'params-event',      emoji.pizza+'Объект события (Event)'],

    ['js-web-api', 'dom-events', 'propagation-model',     emoji.baseball+'Модель распространения событий'],
    ['js-web-api', 'dom-events', 'propagation-capturing', emoji.baseball+'1. Фаза погружения'],
    ['js-web-api', 'dom-events', 'propagation-target',    emoji.baseball+'2. Фаза цели'],
    ['js-web-api', 'dom-events', 'propagation-bubbling',  emoji.baseball+'3. Фаза всплытия'],

    ['js-web-api', 'dom-events', 'propagation-delegate',  emoji.fire+'Делегирование событий'],
    ['js-web-api', 'dom-events', 'prevent',               setTheme(1, ['event.preventDefault()'])],
    ['js-web-api', 'dom-events', 'samples',               'Примеры'],

    //--------------------------------------------------------------------
    [2, 'DOM'],
    //--------------------------------------------------------------------
    [1, 'Документ и объекты страницы'],
    ['js-web-api', 'dom', 'info',            emoji.theory+'Информация'],
    ['js-web-api', 'dom', 'dom',             emoji.theory+'DOM'],
    ['js-web-api', 'dom', 'bom',             emoji.theory+'BOM'],
    ['js-web-api', 'dom', 'node',            setTheme(1, ['nodeType', 'nodeName', 'tagName'])],
    ['js-web-api', 'dom', 'element-get',     emoji.baseball+'1. Выборка элементов'],
    ['js-web-api', 'dom', 'element-method',  emoji.baseball+'2. Методы и свойства элементов'],
    ['js-web-api', 'dom', 'element-create',  emoji.baseball+'3. Добавление и удаление узлов'],
    ['js-web-api', 'dom', 'multi-insert',    emoji.baseball+'4. Мультивставка'],
    ['js-web-api', 'dom', 'metrics',         emoji.baseball+'5. Размеры и прокрутка элементов'],
    ['js-web-api', 'dom', 'metrics-window',  emoji.baseball+'6. Размеры и прокрутка страницы'],

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
    ['js-objects', 'main', 'new',           emoji.fire+setTheme(1, ['new'])],
    ['js-objects', 'main', 'prototype',     emoji.fire+setTheme(1, ['__proto__', 'prototype'])],
    ['js-objects', 'main', 'constructor',   emoji.donut+setTheme(1, ['constructor'])],
    ['js-objects', 'main', 'return',        emoji.donut+setTheme(1, ['return'])],
    ['js-objects', 'main', 'new-target',    emoji.cup+setTheme(1, ['new.target'])],

    [1, 'Методы Object'],
    ['js-objects', 'objects-methods', 'object-create',      emoji.pizza+setTheme(4, ['Object.create'])+' <u-code-list>__proto__</u-code-list>'],
    ['js-objects', 'objects-methods', 'object-assign',      emoji.pizza+setTheme(4, ['Object.assign'])],
    ['js-objects', 'objects-methods', 'set-prototype-of',   emoji.pizza+setTheme(4, ['Object.setPrototypeOf'])+' <u-code-list>__proto__</u-code-list>'],
    ['js-objects', 'objects-methods', 'get-prototype-of',   emoji.pizza+setTheme(4, ['Object.getPrototypeOf'])+' <u-code-list>__proto__</u-code-list>'],
    ['js-objects', 'objects-methods', 'is-prototype-of',    emoji.pizza+setTheme(4, ['isPrototypeOf'])+' <u-code-list>__proto__</u-code-list>'],
    ['js-objects', 'objects-methods', 'instanceof',         emoji.pizza+setTheme(4, ['instanceof'])],

    ['js-objects', 'objects',         'for',                'Перебор объекта'],
    ['js-objects', 'objects',         'check-property',     'Проверка наличия свойства'],
    ['js-objects', 'objects',         'descriptor',         'Дескрипторы свойств'],
    ['js-objects', 'objects',         'extends',            'Расширяемость объектов'],

    [1, 'Объекты ES6+'],
    ['js-objects', 'objects', 'info',             emoji.theory+'Теория'],
    ['js-objects', 'objects', 'literal-notation', emoji.boom+'Литеральная нотация'],
    ['js-objects', 'objects', 'constructor',      'Конструктор создания объекта'],
    ['js-objects', 'objects', 'prototype',        'Прототип'],
    ['js-objects', 'objects', 'conversion',       emoji.donut+setTheme(1, ['toString', 'valueOf'])],
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
    ['webpack', 'loaders', 'image-webpack-loader',    setTheme(1, ['image-webpack-loader'])],
    ['webpack', 'loaders', 'html-loader',             setTheme(1, ['html-loader'])],

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
    ['git', 'command',  'cherry-pick',  setTheme(1, ['cherry-pick'])],
    ['git', 'command',  'revert',       setTheme(1, ['revert'])],
    ['git', 'command',  'stash',        setTheme(1, ['stash'])],
    ['git', 'command',  'reset',        setTheme(1, ['reset'])],

    [1, 'Команды Дополнительно'],
    ['git', 'command',  'diff',         setTheme(1, ['diff'])],
    ['git', 'command',  'config',       setTheme(1, ['config'])],
    ['git', 'command',  'help',         setTheme(1, ['help'])],
    ['git', 'command',  'status',       setTheme(1, ['status'])],
    ['git', 'command',  'log',          setTheme(1, ['log'])],
    ['git', 'command',  'clean',        setTheme(1, ['clean'])],
    ['git', 'main',     'command',      setTheme(1, ['...'])],

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
    ['npm', 'npm-package', 'http-server', setTheme(2, ['http-server'])],

    [1, 'Gulp'],
    ['npm', 'gulp', 'npm',       'NPM'],
    ['npm', 'gulp', 'structure', 'Структура'],
    ['npm', 'gulp', 'gulp4',     'Gulp 4'],
    ['npm', 'gulp', 'gulpfile',  'gulpfile.js'],
    ['npm', 'gulp', 'other',     'Примечания'],

    [1, 'Parcel'],
    ['npm', 'parcel', 'info',       'Информация'],
];


//---------------------------------------------------------------------
// VUE.JS
//---------------------------------------------------------------------
var arrVuejs = [
    [1, 'Информация'],
    ['vue-js', 'main',  'info',            emoji.theory+'Информация'],
    ['vue-js', 'main',  'structure-files', 'Структура проекта'],
    ['vue-js', 'main',  'structure-code',  emoji.code+'Пример кода vue-cli'],
    ['vue-js', 'main',  'instance-vue',    emoji.code+'Экземпляр Vue'],
    ['vue-js', 'main',  'lifecycle-hooks', 'Хуки жизненного цикла'],
    ['theory', 'other', 'virtual-dom',     'Virtual DOM'],

    [1, 'Реактивность'],
    ['vue-js', 'reactivity', 'reactivity',   'Реактивность'],
    ['vue-js', 'reactivity', 'set',          setTheme(1, ['vm.$set'])+' - добаление реакт. элементов'],
    ['vue-js', 'reactivity', 'next-tick',    setTheme(1, ['vm.$nextTick'])+' - обновление'],
    ['vue-js', 'reactivity', 'force-update', setTheme(1, ['vm.$forceUpdate'])+' - переотрисовка'],

    [1, 'Директивы'],
    ['vue-js', 'directives', 'info',          'Шаблоны и директивы'],
    ['vue-js', 'directives', 'v-text_v-html', setTheme(1, ['v-text', 'v-html'])],
    ['vue-js', 'directives', 'v-show_v-if',   setTheme(1, ['v-show', 'v-if', 'v-else', 'v-else-if'])],
    ['vue-js', 'directives', 'v-for',         setTheme(1, ['v-for'])],
    ['vue-js', 'directives', 'v-on',          setTheme(1, ['v-on:'])],
    ['vue-js', 'directives', 'v-bind',        setTheme(1, ['v-bind:'])+' :class :style'],
    ['vue-js', 'directives', 'v-model',       setTheme(1, ['v-model'])],
    ['vue-js', 'directives', 'v-pre',         setTheme(1, ['v-pre'])],
    ['vue-js', 'directives', 'v-cloak',       setTheme(1, ['v-cloak'])],
    ['vue-js', 'directives', 'v-once',        setTheme(1, ['v-once'])],

    [1, 'Компоненты'],
    ['vue-js', 'components', 'info',                   emoji.theory+'Информация'],
    ['vue-js', 'components', 'component-simple',       'Простой компонент'],
    ['vue-js', 'components', 'component-registration', 'Регистрация компонента'],
    ['vue-js', 'components', 'component-global',       'Глобальный компонент'],
    ['vue-js', 'components', 'component-dynamic',      'Динамические компоненты'],
    ['vue-js', 'components', 'props',                  setTheme(1, ['props'])],
    ['vue-js', 'components', 'slot',                   setTheme(1, ['&lt;slot&gt;'])],
    ['vue-js', 'components', 'template',               setTheme(1, ['&lt;template&gt;'])],
    ['vue-js', 'components', 'emit',                   setTheme(1, ['$emit'])],

    [1, 'Опции и прочее'],
    ['vue-js', 'options-and-other', 'computed',   setTheme(1, ['computed'])],
    ['vue-js', 'options-and-other', 'watch',      setTheme(1, ['watch'])],
    ['vue-js', 'options-and-other', 'created',    setTheme(1, ['created'])],
    ['vue-js', 'options-and-other', 'transition', setTheme(1, ['&lt;transition&gt;'])],
    ['vue-js', 'options-and-other', 'vue-extend', setTheme(1, ['Vue.extend'])],

    [1, 'DOM'],
    ['vue-js', 'dom', 'event',  setTheme(1, ['$event'])+' - доступ к событию'],
    ['vue-js', 'dom', 'refs',   setTheme(1, ['$refs'])+' - ссылка на DOM элемент'],

    [1, 'Переиспользование и композиция'],
    ['vue-js', 'composition', 'mixins',          'Примеси'],
    ['vue-js', 'composition', 'user-directives', 'Пользовательские директивы'],
    ['vue-js', 'composition', 'render',          'Render-функции'],
    ['vue-js', 'composition', 'plugins',         'Плагины'],
    ['vue-js', 'composition', 'filters',         'Фильтры'],

    [1, 'Vuex'],
    ['vue-js', 'vuex', 'info',      emoji.theory+'Информация'],
    ['vue-js', 'vuex', 'src',       'Подключение'],
    ['vue-js', 'vuex', 'store',     emoji.fire+'0. Хранилище (store)'],
    ['vue-js', 'vuex', 'state',     emoji.fire+'1. Состояние (state)'],
    ['vue-js', 'vuex', 'getters',   emoji.fire+'2. Геттеры (getters)'],
    ['vue-js', 'vuex', 'mutations', emoji.fire+'3. Мутации (mutations)'],
    ['vue-js', 'vuex', 'actions',   emoji.fire+'4. Действия (actions)'],
    ['vue-js', 'vuex', 'modules',   emoji.fire+'5. Модули (modules)'],
    ['vue-js', 'vuex', 'samples',   'Примеры'],

    [1, 'Vue Router'],
    ['vue-js', 'vue-router', 'info',                 emoji.theory+'Информация'],
    ['vue-js', 'vue-router', 'src-script',           'Подключение через &lt;script&gt;'],
    ['vue-js', 'vue-router', 'src-npm',              'Подключение через NPM'],
    ['vue-js', 'vue-router', 'server-configuration', 'Конфигурование сервера'],
    ['vue-js', 'vue-router', 'path-static',          emoji.cookie+'Статический путь'],
    ['vue-js', 'vue-router', 'path-dynamic',         emoji.cookie+'Динамический путь'],
    ['vue-js', 'vue-router', 'path-comparison',      emoji.cookie+'Сопоставление путей'],
    ['vue-js', 'vue-router', 'navigation',           emoji.cookie+'Программная навигация'],
    ['vue-js', 'vue-router', 'passing-props',        emoji.cookie+'Входные параметры (props)'],
    ['vue-js', 'vue-router', 'navigation-guards',    emoji.cookie+'Навигационные хуки'],
    ['vue-js', 'vue-router', 'scroll-behavior',      emoji.cookie+'Поведение прокрутки страницы'],
    ['vue-js', 'vue-router', 'lazy-loading',         emoji.cookie+'Леннивая загрузка маршрутов'],
    ['vue-js', 'vue-router', 'active-link',          'Стилизация активной ссылки'],

    [1, 'Vue CLI'],
    ['vue-js', 'vue-cli', 'info',              emoji.theory+'Информация'],
    ['vue-js', 'vue-cli', 'components-system', 'Компоненты системы'],
    ['vue-js', 'vue-cli', 'npm-command',       'Npm/Vue Command'],
    ['vue-js', 'vue-cli', 'import_export',     setTheme(1, ['import', 'export'])],
    ['vue-js', 'vue-cli', 'vscode',            'Настройка Visual Studio Code'],

    [1, 'VueLoader'],
    ['vue-js', 'vue-loader', 'package',        emoji.code+'Пакеты'],

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
    [1, 'Стандарты кода'],
    ['theory', 'programming-principles', 'solid',         emoji.fire+'SOLID'],
    ['theory', 'programming-principles', 'dry',           emoji.fire+'DRY'],
    ['theory', 'programming-principles', 'kiss',          emoji.fire+'KISS'],
    ['theory', 'programming-principles', 'yagni',         emoji.fire+'YAGNI'],
    ['theory', 'programming-principles', 'code-smell',    'Запахи кода'],
    ['theory', 'programming-principles', 'refactoring',   'Рефакторинг'],
    ['theory', 'programming-principles', 'code-standart', 'Стандарты кода'],

    [1, 'Deployment'],
    ['theory', 'deployment', 'info',                   emoji.theory+'Информация'],
    ['theory', 'deployment', 'continuous-integration', emoji.baseball+'1. Continuous Integration'],
    ['theory', 'deployment', 'continuous-delivery',    emoji.baseball+'2. Continuous Delivery'],
    ['theory', 'deployment', 'continuous-deployment',  emoji.baseball+'3. Continuous Deployment'],
    ['theory', 'deployment', 'software-deployment',    emoji.baseball+'Software Deployment'],

    [1, 'Верстка'],
    ['theory', 'html', 'critical-rendering-path', 'Critical Rendering Path'],

    [1, 'Методологии разработки'],
    ['theory', 'development-methodologies', 'info',       'Методологии разработки'],
    ['theory', 'development-methodologies', 'waterfall',  'Waterfall'],
    ['theory', 'development-methodologies', 'agile',      'Agile / Scrum / Kanban'],
    ['theory', 'development-methodologies', 'estimation', 'Эстимация'],

    //---------------------------------------------------------------------

    [1, 'JavaScript'],
    ['theory', 'javascript', 'site-load',            'Загрузка сайта'],
    ['theory', 'javascript', 'webkit',               'Браузерные движки'],
    ['theory', 'javascript', 'garbage-collection',   'Сборщик мусора'],
    ['theory', 'javascript', 'dictionary',           'Словарь'],
    ['theory', 'javascript', 'polyfill',             'Полифиллы'],

    [1, 'Шаблон проектирования архитектуры приложения'],
    ['theory', 'application-architecture', 'info', 'Шаблоны проектирования'],
    ['theory', 'application-architecture', 'mvc',  'MVC'],
    ['theory', 'application-architecture', 'mvvm', 'MVVM'],

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
// PARADIGMS
//---------------------------------------------------------------------
var arrParadigms = [
    [1, 'ФП'],
    ['theory-paradigms', 'fp', 'functional',     'Информация'],
    ['theory-paradigms', 'fp', 'concept',        'Концепции'],
    ['theory-paradigms', 'fp', 'currying',       'Каррирование / Частичное применение функций'],

    [1, 'ООП'],
    ['theory-paradigms', 'oop', 'principles',       'Принципы'],
    ['theory-paradigms', 'oop', 'access-modifiers', 'Модификаторы доступа'],

    [1, 'Основное'],
    ['theory-paradigms', 'main', 'info',           'Парадигмы'],
    ['theory-paradigms', 'main', 'imperative',     '1. Императивное'],
    ['theory-paradigms', 'main', 'declarative',    '2. Декларативное'],
    ['theory-paradigms', 'main', 'ddd',            'DDD'],
    ['theory-paradigms', 'main', 'cqrs',           'CQRS'],
    ['theory-paradigms', 'main', 'event-sourcing', 'Event Sourcing'],
    ['theory-paradigms', 'main', 'composition',    'Композиция'],
];


//---------------------------------------------------------------------
// ALGORITMS
//---------------------------------------------------------------------
var arrAlgoritms = [
    [1, 'Big-O Notation'],
    ['theory-algoritms', 'big-o', 'info',      emoji.theory+'Информация'],
    ['theory-algoritms', 'big-o', 'variants',  emoji.avocado+'Варианты'],
    ['theory-algoritms', 'big-o', 'structure', emoji.avocado+'Структуры данных'],
    ['theory-algoritms', 'big-o', 'samples',   emoji.avocado+'Примеры'],

    [1, 'Основное'],
    ['theory-algoritms', 'main', 'info',            emoji.theory+'Информация'],
    ['theory-algoritms', 'main', 'paradigms',       emoji.theory+'Методы разработки алгоритмов'],

    [1, 'Алгоритмы'],
    ['theory-algoritms', 'algoritms', 'sort',           emoji.code+'Сортировка'],
    ['theory-algoritms', 'algoritms', 'search',         emoji.code+'Поиск'],
    ['theory-algoritms', 'algoritms', 'string-reverse', emoji.code+'Переворот строки'],
    ['theory-algoritms', 'algoritms', 'hashing',        emoji.code+'Хеширование'],
    ['theory-algoritms', 'algoritms', 'fibonacci',      emoji.code+'Число Фибоначчи'],
    ['theory-algoritms', 'algoritms', 'factorial',      emoji.code+'Факториал'],
];


//---------------------------------------------------------------------
// DATA STRUCTURES
//---------------------------------------------------------------------
var arrDataStructures = [
    [1, 'Основное'],
    ['theory-data-structures', 'main', 'info',  emoji.theory+'Информация'],

    [1, 'Структуры данных'],

    //--------------------------------------------------------------------
    [2, 'Линейные'],
    //--------------------------------------------------------------------
    ['theory-data-structures', 'structures', 'stack',        emoji.favorite+'Стек'],
    ['theory-data-structures', 'structures', 'queue',        emoji.favorite+'Очередь'],
    ['theory-data-structures', 'structures', 'list-linked',  emoji.favorite+'Связанный список'],

    //--------------------------------------------------------------------
    [2, 'Остальные'],
    //--------------------------------------------------------------------
    ['theory-data-structures', 'structures', 'set',          emoji.favorite+'Множество'],
    ['theory-data-structures', 'structures', 'map',          emoji.favorite+'Map'],
    ['theory-data-structures', 'structures', 'hash',         emoji.favorite+'Хэш-таблица'],
    ['theory-data-structures', 'structures', 'list',         emoji.favorite+'Список'],
    ['theory-data-structures', 'structures', 'graph',        emoji.favorite+'Граф'],
    ['theory-data-structures', 'structures', 'tree',         emoji.favorite+'Дерево'],
    ['theory-data-structures', 'structures', 'tree-prefix',  emoji.favorite+'Префиксное дерево'],
    ['theory-data-structures', 'structures', 'heap',         emoji.favorite+'Куча'],

    [1, 'Примеры'],
    ['theory-data-structures', 'samples', 'intersection-array', emoji.code+'Пересечение массивов'],
    ['theory-data-structures', 'samples', 'multiple-checks',    emoji.code+'Множественные проверки'],

    [1, 'Структуры данных в JavaScript'],
    ['js', 'data-structures', 'map',        setTheme(1, ['Map', 'WeakMap'])],
    ['js', 'data-structures', 'set',        setTheme(1, ['Set', 'WeakSet'])],
];


//---------------------------------------------------------------------
// DESIGN PATTERNS
//---------------------------------------------------------------------
var arrDesignPatterns = [
    [1, 'Основное'],
    ['theory-patterns', 'main',                 'info',             emoji.theory+'Информация'],

    [1, '1. Порождающие'],
    ['theory-patterns', 'patterns-generating', 'singleton',         emoji.pizza+setTheme(4, ['«Синглтон»'])],
    ['theory-patterns', 'patterns-generating', 'builder',           emoji.pizza+setTheme(4, ['«Строитель»'])],
    ['theory-patterns', 'patterns-generating', 'simple-factory',    emoji.pizza+setTheme(4, ['«Простая фабрика»'])],

    [1, '2. Структурные'],
    ['theory-patterns', 'patterns-structural', 'decorator',         emoji.pizza+setTheme(4, ['«Декоратор»'])],
    ['theory-patterns', 'patterns-structural', 'facade',            emoji.pizza+setTheme(4, ['«Фасад»'])],

    [1, '3. Поведенческие'],
    ['theory-patterns', 'patterns-behavioral', 'observer',          emoji.pizza+setTheme(4, ['«Наблюдатель»'])],

    [1, '4. Неизвестно'],
    ['theory-patterns', 'patterns-other',      'module',            emoji.pizza+setTheme(4, ['«Модуль»'])],
    ['theory-patterns', 'patterns-other',      'module-revealing',  emoji.pizza+setTheme(4, ['«Открытый модуль»'])],
];


//---------------------------------------------------------------------
// OTHER
//---------------------------------------------------------------------
var arrOther = [
    [1, 'Технологии'],
    ['other', 'technology', 'jira',                   'Jira'],
    ['other', 'technology', 'emmet',                  'Emmet'],
    ['other', 'technology', 'react-native',           'React.Native'],

    [1, 'Информация'],
    ['other', 'main', 'code-editors',           'Редакторы кода'],
    ['other', 'main', 'chrome-mobile-version',  'Chrome: Мобильная версия'],
    ['other', 'main', 'server-online',          'Server Online'],
    ['other', 'main', 'photoshop',              'Adobe Photoshop'],
    ['other', 'main', 'denwer',                 'Denwer'],
    ['other', 'main', 'google-chrome',          'Google Chrome'],
    ['other', 'main', 'windows',                'Windows'],
    ['other', 'main', 'trash',                  'Свалка'],
];


//---------------------------------------------------------------------
// LINUX
//---------------------------------------------------------------------
var arrLinux = [
    [1, 'Ubuntu (Debian)'],
    ['linux', 'ubuntu', 'command', 'Команды'],
    ['linux', 'ubuntu', 'package', 'Пакеты'],
    ['linux', 'ubuntu', 'nodejs',  emoji.cookie+'Node.js'],
    ['linux', 'ubuntu', 'npm',     emoji.cookie+'Npm'],
    ['linux', 'ubuntu', 'setting', 'Настройка'],
    ['linux', 'ubuntu', 'other',   'Прочее'],
];


//---------------------------------------------------------------------
// JS-TASKS
//---------------------------------------------------------------------
var arrJsTasks = [
    [1, 'Полифилы'],
    ['js-objects', 'main',      'new',            emoji.cookie+setTheme(4, ['new'])],
    ['js-task',    'polyphyls', 'object-create',  emoji.cookie+setTheme(4, ['Object.create'])],
    ['js-task',    'polyphyls', 'bind',           emoji.cookie+setTheme(4, ['bind()'])],
    ['js-task',    'polyphyls', 'promise-all',    emoji.cookie+setTheme(4, ['Promise.all'])],
    ['js-task',    'polyphyls', 'map',            emoji.cookie+setTheme(4, ['Array.prototype.map'])],
    ['js-task',    'polyphyls', 'filter',         emoji.cookie+setTheme(4, ['Array.prototype.filter'])],
    ['js-task',    'polyphyls', 'reduce',         emoji.cookie+setTheme(4, ['Array.prototype.reduce'])],

    [1, 'Алгоритмы'],
    ['js-task', 'algoritms', 'compose',                  emoji.code+setTheme(4, ['Compose'])],
    ['js-task', 'algoritms', 'memoization',              emoji.code+setTheme(4, ['Memoization'])],
    ['js-task', 'algoritms', 'duplicate',                emoji.code+setTheme(4, ['Duplicate'])],
    ['js-task', 'algoritms', 'shallow-equal',            emoji.code+setTheme(4, ['Shallow Equal'])],
    ['js-task', 'algoritms', 'event-emitter',            emoji.code+setTheme(4, ['EventEmitter'])],
    ['js-task', 'algoritms', 'anagram',                  emoji.code+setTheme(4, ['Анаграмма'])],
    ['js-task', 'algoritms', 'palindrome',               emoji.code+setTheme(4, ['Палиндром'])],
    ['js-task', 'algoritms', 'closing-brackets',         emoji.code+setTheme(4, ['Проверить закрывающиеся скобки'])],
    ['js-task', 'algoritms', 'sum-sequence',             emoji.code+setTheme(4, ['Сумма последовательности'])],
    ['js-task', 'algoritms', 'sum-brackets',             emoji.code+setTheme(4, ['Сумма скобок sum(1)(2)(3)'])],
    ['js-task', 'algoritms', 'function-count',           emoji.code+setTheme(4, ['Функция считает свои вызовы'])],
    ['js-task', 'algoritms', 'promisification-function', emoji.code+setTheme(4, ['Промисификация функции'])],
    ['js-task', 'algoritms', 'series',                   emoji.code+setTheme(4, ['Series'])],
    ['js-task', 'algoritms', 'shop-queue',               emoji.code+setTheme(4, ['Магазин с кассами'])],

    [1, 'Декораторы'],
    ['js-task', 'decorators', 'debounce',  setTheme(1, ['debounce()'])],
    ['js-task', 'decorators', 'once',      setTheme(1, ['once()'])],
    ['js-task', 'decorators', 'after',     setTheme(1, ['after()'])],
    ['js-task', 'decorators', 'throttle',  setTheme(1, ['throttle()'])],
    ['js-task', 'decorators', 'partial',   setTheme(1, ['partial()'])],
    ['js-task', 'decorators', 'pipe',      setTheme(1, ['pipe()'])],

    [1, 'Асинхронность'],
    ['js-task', 'algoritms', 'retrier',              emoji.code+setTheme(4, ['Retrier (запросы по URL)'])],
    ['js-task', 'algoritms', 'promise-make-request', emoji.code+setTheme(4, ['Promise Make Request'])],
    ['js-task', 'algoritms', 'cancel-timeout',       emoji.code+setTheme(4, ['setTimeout: отмена всех'])],
    ['js-task', 'algoritms', 'settimeout-for-var',   emoji.code+setTheme(4, ['setTimeout: в for без let'])],

    [1, 'Массивы'],
    ['js-task', 'arrays', 'intersection-arrays',  emoji.code+setTheme(4, ['Пересечение массивов'])],
    ['js-task', 'arrays', 'flat-array',           emoji.code+setTheme(4, ['Плоский массив'])],
    ['js-task', 'arrays', 'max-array-element',    emoji.code+setTheme(4, ['Максимальный элемент массива'])],
    ['js-task', 'arrays', 'doit',                 emoji.code+setTheme(4, ['Двумерный массив сумм'])],
    ['js-task', 'arrays', 'merge-sort',           emoji.code+setTheme(4, ['MergeSort'])],
    ['js-task', 'arrays', 'array-average-value',  emoji.code+setTheme(4, ['Получить среднюю оценку'])],

    [1, 'Общие темы'],
    ['js-task', 'custom', 'hoisting',    emoji.pizza+setTheme(4, ['Всплытие'])],
    ['js-task', 'custom', 'closure',     emoji.pizza+setTheme(4, ['Замыкания'])],
    ['js-task', 'custom', 'prototype',   emoji.pizza+setTheme(4, ['Прототипы'])],
    ['js-task', 'custom', 'context',     emoji.pizza+setTheme(4, ['Контекст'])],
    ['js-task', 'custom', 'event-loop',  emoji.pizza+setTheme(4, ['Event Loop'])],
    ['js-task', 'custom', 'async',       emoji.pizza+setTheme(4, ['Асинхронность'])],
    ['js-task', 'custom', 'promise',     emoji.pizza+setTheme(4, ['Promise'])],
    ['js-task', 'custom', 'async-await', emoji.pizza+setTheme(4, ['Async Await'])],
    ['js-task', 'custom', 'currying',    emoji.pizza+setTheme(4, ['Каррирование'])],
    ['js-task', 'custom', 'objects',     emoji.pizza+setTheme(4, ['Объекты'])],
    ['js-task', 'custom', 'arrays',      emoji.pizza+setTheme(4, ['Массивы'])],

    [1, 'Прочее'],
    ['js-task', 'other', 'undefined-check',    emoji.code+setTheme(4, ['Проверка на "undefined"'])],
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
    ['html', 'main', 'info',            emoji.theory+'Информация'],
    ['html', 'main', 'semantics',       emoji.theory+'Семантика'],
    ['html', 'main', 'content-model',   'Content Model'],
    ['html', 'main', 'custom-elements', 'Custom Elements'],

    [1, 'Элементы'],
    ['html', 'elements', 'img',     emoji.cookie+'Изображения'],
    ['html', 'elements', 'form',    emoji.cookie+'Элементы формы'],
    ['html', 'elements', 'link',    emoji.cookie+'Ссылки'],
    ['html', 'elements', 'video',   emoji.cookie+'Видео и аудио'],
    ['html', 'elements', 'table',   emoji.cookie+'Таблицы'],

    [1, 'Теги'],
    ['html', 'tags', 'fieldset',  setTheme(1, ['&lt;fieldset&gt;', '&lt;legend&gt;'])],
    ['html', 'tags', 'header',    setTheme(1, ['&lt;header&gt;', '&lt;section&gt;', '...'])],
    ['html', 'tags', 'iframe',    setTheme(1, ['&lt;iframe&gt;'])],
    ['html', 'tags', 'details',   setTheme(1, ['&lt;details&gt;', '&lt;summary&gt;'])],
    ['html', 'tags', 'datalist',  setTheme(1, ['&lt;datalist&gt;', '&lt;option&gt;'])],

    [1, 'Атрибуты'],
    ['html', 'attr', 'tabindex',    setTheme(1, ['tabindex'])],
    ['html', 'attr', 'aria-label',  setTheme(1, ['aria-label'])],

    [1, 'Прочее'],
    ['html', 'other', 'yandex-map',  'Яндекс Карты'],
    ['html', 'other', 'samples',     'Примеры'],
];


//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
var arrCSS = [
    [1, 'База'],
    ['css', 'basic',  'priority-styles',      emoji.fire+'Приоритетность стилей'],
    ['css', 'basic',  'selector-specificity', emoji.fire+'Специфичность селекторов'],

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

    [1, 'CSS Color Module'],
    ['css', 'color-module', 'colors',          emoji.panda+'Цветовые схемы'],
    ['css', 'color-module', 'colors-func',     emoji.panda+'Цветовые функции'],
    ['css', 'color-module', 'linear-gradient', setTheme(1, ['linear-gradient'])],
    ['css', 'color-module', 'conic-gradient',  setTheme(1, ['conic-gradient'])],

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

    [1, 'Особенности'],
    ['css', 'special',  'collapse-margin',     emoji.pizza+'Схлопывание внешних отступов'],
    ['css', 'special',  'dropping-out-margin', emoji.pizza+'Выпадение внешних отступов'],

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
    ['flow', 'main', 'type-data',   emoji.pizza+'Типы данных'],
    ['flow', 'main', 'var',         emoji.fire+'Задание переменной'],
    ['flow', 'main', 'function',    emoji.fire+'Задание функции'],
    ['flow', 'main', 'type',        emoji.fire+'Задание типа'],
    ['flow', 'main', 'react',       'Использование с React.js'],
    ['flow', 'main', 'variants',    'Варианты'],

    [1, 'Установка'],
    ['flow', 'install', 'info',        emoji.theory+'Информация'],
    ['flow', 'install', 'install',     emoji.lemon+'Установка и настройка'],
    ['flow', 'install', 'vscode',      emoji.theory+'Настройка VSCode'],
];


//---------------------------------------------------------------------
// SVG
//---------------------------------------------------------------------
var arrSvg = [
    [1, 'Основное'],
    ['svg', 'main', 'info',       'Информация'],
    ['svg', 'main', 'figure',     'Фигуры'],
    ['svg', 'main', 'filters',    'Фильтры'],
    ['svg', 'main', 'gradients',  'Градиенты'],
    ['svg', 'main', 'background', 'Background'],
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
    ['css-flexbox', 'other', 'margin',  'Поведение margin'],
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
    ['css-grid', 'other', 'grid-auto-flow',  setTheme(1, ['grid-auto-flow'])],
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
    ['node-js', 'main', 'info',     emoji.theory+'Информация'],
    ['node-js', 'main', 'function', emoji.pizza+'Функции'],
    ['node-js', 'main', 'modules',  emoji.pizza+'Модули'],
    ['node-js', 'main', 'files',    emoji.pizza+'Файлы и директории'],
    ['node-js', 'main', 'export',   setTheme(1, ['require', 'exports'])],
    ['node-js', 'main', 'pipe',     setTheme(1, ['.pipe'])],

    ['node-js', 'main', 'server',   'Сервер'],
    ['node-js', 'main', 'stream',   'Потоки'],
    ['node-js', 'main', 'router',   'Маршрутизация'],
    ['node-js', 'main', 'url',      'Данные из url'],

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
    ['php', 'main', 'info',       'Информация'],
    ['php', 'main', 'variables',  'Переменные'],
    ['php', 'main', 'cycle',      'Циклы'],
    ['php', 'main', 'array',      'Массивы'],
    ['php', 'main', 'function',   'Функции'],
    ['php', 'main', 'if',         setTheme(1, ['if-else'])],
    ['php', 'main', 'switch',     setTheme(1, ['switch-case'])],

    [1, 'Прочее'],
    ['php', 'other', 'function-php',   'Функции PHP'],
    ['php', 'other', 'server',         'Суперглобальный массив SERVER'],
    ['php', 'other', 'open-server',    'PHP Open Server'],

    [1, 'Примеры'],
    ['php', 'samples', 'files',         emoji.code+'Файлы и директории'],
    ['php', 'samples', 'image-loader',  emoji.code+'Изображения'],
    ['php', 'samples', 'email',         emoji.code+'Отправка email'],
    ['php', 'samples', 'json-server',   emoji.code+'JSON Server'],

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
    ['typescript', 'main', 'info',    emoji.theory+'Информация'],
    ['typescript', 'main', 'install', emoji.lemon+'Установка и настройка'],
];


//---------------------------------------------------------------------
// ТЕСТИРОВАНИЕ
//---------------------------------------------------------------------
var arrTesting = [
    [1, 'Теория'],
    ['testing', 'theory', 'info',             emoji.theory+'Тестирование'],
    ['testing', 'theory', 'pyramid',          emoji.theory+'Пирамида тестирования'],
    ['testing', 'theory', 'unit-test',        emoji.favorite+'1. Юнит-тесты'],
    ['testing', 'theory', 'integration-test', emoji.favorite+'2. Интеграционные тесты'],
    ['testing', 'theory', 'e2e-test',         emoji.favorite+'3. E2E-тесты'],
    ['testing', 'theory', 'tdd',              emoji.avocado+'TDD'],
    ['testing', 'theory', 'bdd',              emoji.avocado+'BDD'],
    ['testing', 'theory', 'types',            emoji.theory+'Разновидности'],

    [1, 'Основное'],
    ['testing', 'main', 'frameworks',       emoji.pizza+'Фреймворки'],
    ['testing', 'main', 'chrome-dev-tools', 'Chrome DevTools'],
];


//---------------------------------------------------------------------
// JEST
//---------------------------------------------------------------------
var arrJest = [
    [1, 'Основное'],
    ['jest', 'main', 'info',        emoji.theory+'Информация'],
    ['jest', 'main', 'install',     emoji.lemon+'Установка и настройка'],
    ['jest', 'main', 'mocks',       'Mock'],

    [1, 'Элементы'],
    ['jest', 'elements', 'pattern',     emoji.code+'Шаблон'],
    ['jest', 'elements', 'functions',   emoji.fire+'Глобальные функции'],
    ['jest', 'elements', 'matchers',    emoji.fire+'Matchers'],
    ['jest', 'elements', 'hooks',       emoji.fire+'Хуки'],

    [1, 'JavaScript'],
    ['jest', 'javascript', 'sync',        '1. Синхронные тесты'],
    ['jest', 'javascript', 'async',       '2. Асинхронные тесты'],
    ['jest', 'javascript', 'mock',        '3. Mock-данные'],
    ['jest', 'javascript', 'mock-axios',  '4. Mock-данные в Axios'],

    [1, 'Redux'],
    ['jest', 'redux', 'reducers',  'Reducers'],
    ['jest', 'redux', 'actions',   'Actions'],
];


//---------------------------------------------------------------------
// REACT TESTING
//---------------------------------------------------------------------
var arrReactTesting = [
    [1, 'Основы'],
    ['react-testing', 'main',  'info',  emoji.theory+'Информация'],

    [1, '1. React Testing Library'],
    ['react-testing', 'react-tsting-library', 'info',                  emoji.theory+'Информация'],
    ['react-testing', 'react-tsting-library', 'npm',                   emoji.lemon+'Установка'],
    ['react-testing', 'react-tsting-library', 'methods',               emoji.fire+'Методы'],
    ['react-testing', 'react-tsting-library', 'code-react-cli',        'Использование с CreateReactApp'],
    ['react-testing', 'react-tsting-library', 'code-react-cli-samples', emoji.code+'Примеры'],

    [1, '2. React Test Renderer'],
    ['react-testing', 'react-test-renderer',  'info',  emoji.theory+'Информация'],
    ['react-testing', 'react-test-renderer',  'npm',   emoji.lemon+'Установка'],
    ['react-testing', 'react-test-renderer',  'code',  emoji.code+'Примеры'],
];


//---------------------------------------------------------------------
// ENZYME
//---------------------------------------------------------------------
var arrEnzyme = [
    [1, 'Основное'],
    ['enzyme', 'main',  'info',                emoji.theory+'Информация'],
    ['enzyme', 'main',  'npm',                 emoji.lemon+'Установка'],

    [1, 'API'],
    ['enzyme', 'api',  'methods-render',      emoji.fire+'Методы рендеринга'],
    ['enzyme', 'api',  'methods',             emoji.fire+'Методы'],

    [1, 'Методы'],
    ['enzyme', 'methods',  'other',        setTheme(1, ['...'])],
    ['enzyme', 'methods',  'state',        setTheme(1, ['state'])],
    ['enzyme', 'methods',  'props',        setTheme(1, ['props'])],
    ['enzyme', 'methods',  'simulate',     setTheme(1, ['simulate'])],
    ['enzyme', 'methods',  'debug',        setTheme(1, ['debug'])],
];


//---------------------------------------------------------------------
// CYPRESS
//---------------------------------------------------------------------
var arrCypress = [
    [1, 'Основное'],
    ['cypress', 'main',  'info',        emoji.theory+'Информация'],
    ['cypress', 'main',  'npm',         emoji.lemon+'Установка'],
    ['cypress', 'main',  'code',        emoji.code+'Структура'],

    [1, 'Методы'],
    ['cypress', 'methods',  'should',   setTheme(1, ['should'])],
    ['cypress', 'methods',  'type',     setTheme(1, ['type', 'clear', 'blur'])],
    ['cypress', 'methods',  'visit',    setTheme(1, ['visit', 'pause', 'wait'])],
    ['cypress', 'methods',  'get',      setTheme(1, ['get'])],
    ['cypress', 'methods',  'fixture',  setTheme(1, ['fixture'])],

    [1, 'Guides'],
    ['cypress', 'guides',  'network-requests', emoji.favorite+'Network Requests'],
];


// const PAGES = [
//     {
//         arr: arrAssessment,
//         file: 'assessment.html',
//         folder: '/pages/',
//         className: 'menu-other',
//         label: 'Ассессмент',
//     },
// ];

// const THEMES = [
//     {
//         title: 'CRM-UI (Input)',
//         content: [
//             {
//                 id: 'CRMTextArea',
//                 src: 'https://gist.github.com/anton-sergeenkov/dc8046594c9a2eea164045d6ee915c47.js',
//                 name: 'CRMTextArea',
//             }
//         ],
//     },
// ];


var page = window.location.pathname.split('/');
var pageName = page[page.length-1];

var arrCurrent = [];

switch(pageName) {
    case 'theory.html':                 arrCurrent = arrTheory;          break;
    case 'theory-patterns.html':        arrCurrent = arrDesignPatterns;  break;
    case 'theory-paradigms.html':       arrCurrent = arrParadigms;       break;
    case 'theory-algoritms.html':       arrCurrent = arrAlgoritms;       break;
    case 'theory-data-structures.html': arrCurrent = arrDataStructures;  break;

    case 'js.html':                     arrCurrent = arrJavaScript;      break;
    case 'js-objects.html':             arrCurrent = arrJsObjects;       break;
    case 'js-async.html':               arrCurrent = arrJsAsync;         break;
    case 'js-web-api.html':             arrCurrent = arrJsWebApi;        break;
    case 'js-web-components.html':      arrCurrent = arrJsWebComponents; break;
    case 'js-client-server.html':       arrCurrent = arrJsClientServer;  break;
    case 'react-js.html':               arrCurrent = arrReactjs;         break;
    case 'react-api.html':              arrCurrent = arrReactApi;        break;
    case 'react-hooks.html':            arrCurrent = arrReactHooks;      break;
    case 'react-router.html':           arrCurrent = arrReactRouter;     break;
    case 'redux.html':                  arrCurrent = arrRedux;           break;
    case 'vue-js.html':                 arrCurrent = arrVuejs;           break;

    case 'material-ui.html':            arrCurrent = arrMaterialUI;      break;
    case 'testing.html':                arrCurrent = arrTesting;         break;
    case 'webpack.html':                arrCurrent = arrWebpack;         break;
    case 'npm.html':                    arrCurrent = arrNpm;             break;
    case 'git.html':                    arrCurrent = arrGit;             break;
    case 'linux.html':                  arrCurrent = arrLinux;           break;
    case 'other.html':                  arrCurrent = arrOther;           break;
    case 'js-tasks.html':               arrCurrent = arrJsTasks;         break;
    case 'jquery.html':                 arrCurrent = arrJquery;          break;
    case 'canvas.html':                 arrCurrent = arrCanvas;          break;
    case 'html.html':                   arrCurrent = arrHTML;            break;
    case 'css.html':                    arrCurrent = arrCSS;             break;
    case 'assessment.html':             arrCurrent = arrAssessment;      break;
    case 'sass.html':                   arrCurrent = arrSass;            break;
    case 'bootstrap.html':              arrCurrent = arrBootstrap;       break;
    case 'flow.html':                   arrCurrent = arrFlow;            break;
    case 'svg.html':                    arrCurrent = arrSvg;             break;
    case 'css-flexbox.html':            arrCurrent = arrCssFlexbox;      break;
    case 'css-grid.html':               arrCurrent = arrCssGrid;         break;
    case 'node-js.html':                arrCurrent = arrNodejs;          break;
    case 'php.html':                    arrCurrent = arrPhp;             break;
    case 'python.html':                 arrCurrent = arrPython;          break;
    case 'mysql.html':                  arrCurrent = arrMySql;           break;
    case 'ramda.html':                  arrCurrent = arrRamda;           break;
    case 'typescript.html':             arrCurrent = arrTypescript;      break;
    case 'jest.html':                   arrCurrent = arrJest;            break;
    case 'react-testing.html':          arrCurrent = arrReactTesting;    break;
    case 'enzyme.html':                 arrCurrent = arrEnzyme;          break;
    case 'cypress.html':                arrCurrent = arrCypress;         break;

    case '_single.html':                arrCurrent = arrSingle;          break;
    default:                            arrCurrent = [];
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
