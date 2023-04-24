root = 'node-js/';

ARR_MODULE = [
    {
        title: 'Теория',
        themes: [
            [root+'theory/architecture',  emoji.star+'Архитектура Node.js'],
            [root+'theory/event-loop',    emoji.star+'Event Loop'],
            [root+'theory/thread-pool',   emoji.star+'Thread Pool'],
            [root+'theory/libuv',         emoji.star+'libuv'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/stream',   emoji.fire+'Node.js Stream'],
        ]
    },
    {
        title: 'Модуль <u-code-text>fs</u-code-text>',
        themes: [
            [root+'module-fs/fs',               'Команды'],
            [root+'module-fs/readFile',         setTheme(1, ['readFile', 'writeFile'])],
            [root+'module-fs/appendFile',       setTheme(1, ['appendFile', 'unlink'])],
            [root+'module-fs/existsSync',       setTheme(1, ['existsSync'])],
            [root+'module-fs/mkdir',            setTheme(1, ['mkdir', 'rmdir'])],
            [root+'module-fs/createReadStream', setTheme(1, ['createReadStream', 'createWriteStream'])],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/pipe',     setTheme(1, ['.pipe'])],
        ]
    },
    {
        title: 'Встроенные модули',
        themes: [
            [root+'nodejs-modules/http',           setTheme(2, ['http'])],
            [root+'nodejs-modules/path',           setTheme(2, ['path'])],
            [root+'nodejs-modules/events',         setTheme(2, ['events'])],
            [root+'nodejs-modules/util',           setTheme(2, ['util'])],
            [root+'nodejs-modules/os',             setTheme(2, ['os'])],
            [root+'nodejs-modules/worker_threads', setTheme(2, ['worker_threads'])],
        ]
    },
    {
        title: 'Пакеты',
        themes: [
            [root+'package/body-parser', setTheme(2, ['body-parser'])],
            [root+'package/nodemailer',  setTheme(2, ['nodemailer'])],
            [root+'package/nodemon',     setTheme(2, ['nodemon'])],
            [root+'package/rimraf',      setTheme(2, ['rimraf'])],
        ]
    },
    {
        title: 'Модули',
        themes: [
            [root+'modules/module-system',        emoji.theory+'Модульная система'],
        ]
    },
    {
        title: 'ES6 Modules',
        child: true,
        themes: [
            [root+'modules/module-es6-command',   setTheme(1, ['import', 'export'])],
            [root+'modules/module-es6-use',       'Usage Node.js, Browser'],
        ]
    },
    {
        title: 'RequireJS',
        child: true,
        themes: [
            [root+'modules/require-js-structure', emoji.theory+'Структура модуля'],
            [root+'modules/require-js-command',   setTheme(1, ['require', 'module.exports'])],
        ]
    },

]
