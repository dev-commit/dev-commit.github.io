
//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrCSS = [
    [1, 'База'],
    ['css', 'basic',  'pattern',              emoji.code+'Шаблон'],
    ['css', 'basic',  'priority-styles',      emoji.fire+'Приоритетность стилей'],
    ['css', 'basic',  'selector-specificity', emoji.fire+'Специфичность селекторов'],

    [1, 'CSS Selectors'],
    ['css', 'selectors', 'selectors',         emoji.pizza+'Селекторы'],
    ['css', 'selectors', 'pseudo-classes',    emoji.pizza+'Псевдоклассы'],
    ['css', 'selectors', 'pseudo-elements',   emoji.pizza+'Псевдоэлементы'],
    ['css', 'selectors', 'properties',        emoji.pizza+'Свойства'],

    [1, 'Адаптивность'],
    ['css', 'adaptive', 'meta-viewport',      emoji.lemon+'Meta Viewport'],
    ['css', 'adaptive', 'media-queries',      emoji.lemon+'CSS Media queries'],
    ['css', 'adaptive', 'browser-style',      emoji.lemon+'Стилизация браузера'],

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
    ['css', 'graphics', 'blend-mode',         emoji.lemon+'CSS Blend Modes'],
    ['css', 'graphics', 'filter',             emoji.lemon+'CSS Filters'],
    ['css', 'graphics', 'backdrop-filter',    emoji.lemon+'CSS Backdrop-Filter'],
    ['css', 'graphics', 'clip-path',          emoji.lemon+'CSS Clipping (Clip-path)'],
    ['css', 'graphics', 'css-shapes',         emoji.lemon+'CSS Shapes'],
    ['css', 'graphics', 'css-masking',        emoji.lemon+'CSS Masking'],

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
    ['css', 'main', 'scrollbar',              setTheme(1, ['scrollbar'])],

    ['css', 'main', 'info',                   'Информация'],
    ['css', 'main', 'actions',                'События браузера'],
    ['css', 'main', 'px',                     'Единицы измерения'],
    ['css', 'main', 'font',                   'Текст'],
    ['css', 'main', 'pixel-perfect',          'Pixel Perfect'],
    ['css', 'main', 'samples',                'Примеры'],
];


    "css/basic/pattern",
    "css/basic/priority-styles",
    "css/basic/selector-specificity",
    "css/selectors/selectors",
    "css/selectors/pseudo-classes",
    "css/selectors/pseudo-elements",
    "css/selectors/properties",
    "css/adaptive/meta-viewport",
    "css/adaptive/media-queries",
    "css/adaptive/browser-style",
    "css/features/custom-properties",
    "css/features/mixins",
    "css/features/custom-selector",
    "css/color-module/colors",
    "css/color-module/colors-func",
    "css/color-module/linear-gradient",
    "css/color-module/conic-gradient",
    "css/layout/info",
    "css/layout/css-multi-columns",
    "css/layout/css-writing-models",
    "css/layout/css-exclusions",
    "css/transform/transition",
    "css/transform/transform",
    "css/transform/animation",
    "css/graphics/blend-mode",
    "css/graphics/filter",
    "css/graphics/backdrop-filter",
    "css/graphics/clip-path",
    "css/graphics/css-shapes",
    "css/graphics/css-masking",
    "css/special/collapse-margin",
    "css/special/dropping-out-margin",
    "css/main/viewport",
    "css/main/import",
    "css/main/supports",
    "css/main/shadow",
    "css/main/overflow",
    "css/main/display",
    "css/main/position",
    "css/main/background",
    "css/main/lists",
    "css/main/calc",
    "css/main/scrollbar",
    "css/main/info",
    "css/main/actions",
    "css/main/px",
    "css/main/font",
    "css/main/pixel-perfect",
    "css/main/samples"
	
//---------------------------------------------------------------------
// Sass
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

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


    "sass/main/info",
    "sass/main/variables",
    "sass/main/cascade",
    "sass/main/color",
    "sass/main/operations",
    "sass/main/mixin",
    "sass/main/extend",
    "sass/main/import",
    "sass/main/each",
    "sass/main/at-root",
    "sass/main/if-else",
    "sass/main/for",
    "sass/main/other"

//---------------------------------------------------------------------
// Flow
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

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


    "flow/main/type-data",
    "flow/main/var",
    "flow/main/function",
    "flow/main/type",
    "flow/main/react",
    "flow/main/variants",
    "flow/install/info",
    "flow/install/install",
    "flow/install/vscode"

//---------------------------------------------------------------------
// CSS Flexbox
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

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


    "css-flexbox/main/info",
    "css-flexbox/container/display",
    "css-flexbox/container/justify-content",
    "css-flexbox/container/align-items",
    "css-flexbox/container/align-content",
    "css-flexbox/container/flex-flow",
    "css-flexbox/element/flex",
    "css-flexbox/element/order",
    "css-flexbox/element/align-self",
    "css-flexbox/other/margin",
    "css-flexbox/other/samples"


//---------------------------------------------------------------------
// Node.js
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

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


    "node-js/main/info",
    "node-js/main/function",
    "node-js/main/modules",
    "node-js/main/files",
    "node-js/main/export",
    "node-js/main/pipe",
    "node-js/main/server",
    "node-js/main/stream",
    "node-js/main/router",
    "node-js/main/url",
    "node-js/package/express",
    "node-js/package/body-parser",
    "node-js/package/nodemailer",
    "node-js/other/samples"
	

//---------------------------------------------------------------------
// PHP
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

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

    "php/main/info",
    "php/main/variables",
    "php/main/cycle",
    "php/main/array",
    "php/main/function",
    "php/main/if",
    "php/main/switch",
    "php/other/function-php",
    "php/other/server",
    "php/other/open-server",
    "php/samples/files",
    "php/samples/image-loader",
    "php/samples/email",
    "php/samples/json-server",
    "php/mysql/mysql"

//---------------------------------------------------------------------
// Python
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

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

    "python/main/cmd",
    "python/main/type",
    "python/main/base",
    "python/main/if",
    "python/main/circle",
    "python/main/array",
    "python/main/function",
    "python/main/module",
    "python/main/pyowm",
    "python/main/encode",
    "python/main/format",
    "python/main/docstring",
    "python/oop/class",
    "python/oop/object",
    "python/mysql/base",
    "python/sqlalchemy/base",
    "python/falcon/base"


//---------------------------------------------------------------------
// TypeScript
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrTypescript = [
    [1, 'Основное'],
    ['typescript', 'main', 'info',    emoji.theory+'Информация'],
    ['typescript', 'main', 'install', emoji.lemon+'Установка и настройка'],

    [1, 'Типы'],
    ['typescript', 'types', 'basic',   emoji.chevron+setTheme(4, ['Базовые'])],
    ['typescript', 'types', 'typle',   emoji.chevron+setTheme(4, ['Typle'])],
    ['typescript', 'types', 'any',     emoji.chevron+setTheme(4, ['Any'])],
    ['typescript', 'types', 'never',   emoji.chevron+setTheme(4, ['Never'])],
    ['typescript', 'types', 'type',    emoji.chevron+setTheme(4, ['Type'])],

    [1, 'Интерфейсы'],
    ['typescript', 'interface', 'main',             emoji.favorite+'Основы'],
    ['typescript', 'interface', 'inherit',          emoji.favorite+'Наследование интерфейсов'],
    ['typescript', 'interface', 'with-class',       emoji.favorite+'Взаимодействие с классами'],
    ['typescript', 'interface', 'dynamic-key-obj',  emoji.favorite+'Динамические ключи объекта'],

    [1, 'Функции'],
    ['typescript', 'function', 'main',               emoji.cookie+'Основы'],
    ['typescript', 'function', 'functions-overload', emoji.cookie+'Перегрузка функций'],

    [1, 'Классы'],
    ['typescript', 'class', 'main',         emoji.coconut+'Основы'],
    ['typescript', 'class', 'modificator',  emoji.coconut+'Модификаторы полей'],
    ['typescript', 'class', 'abstract',     emoji.coconut+'Абстрактные классы'],

    [1, 'Другие возможности'],
    ['typescript', 'capabilities', 'enums',      emoji.baseball+'Enums'],
    ['typescript', 'capabilities', 'guards',     emoji.baseball+'Guards'],
    ['typescript', 'capabilities', 'generics',   emoji.baseball+'Generics'],
    ['typescript', 'capabilities', 'operators',  emoji.baseball+'Операторы'],
];


    "typescript/main/info",
    "typescript/main/install",
    "typescript/types/basic",
    "typescript/types/typle",
    "typescript/types/any",
    "typescript/types/never",
    "typescript/types/type",
    "typescript/interface/main",
    "typescript/interface/inherit",
    "typescript/interface/with-class",
    "typescript/interface/dynamic-key-obj",
    "typescript/function/main",
    "typescript/function/functions-overload",
    "typescript/class/main",
    "typescript/class/modificator",
    "typescript/class/abstract",
    "typescript/capabilities/enums",
    "typescript/capabilities/guards",
    "typescript/capabilities/generics",
    "typescript/capabilities/operators"
	

