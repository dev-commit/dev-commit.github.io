root = 'node-js/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',     emoji.theory+'Информация'],
        ]
    },
    {
        title: 'Модуль <u-code>fs</u-code>',
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
            [root+'nodejs-modules/http',   setTheme(2, ['http'])],
            [root+'nodejs-modules/path',   setTheme(2, ['path'])],
            [root+'nodejs-modules/events', setTheme(2, ['events'])],
            [root+'nodejs-modules/util',   setTheme(2, ['util'])],
            [root+'nodejs-modules/os',     setTheme(2, ['os'])],
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
            [root+'modules/structure', emoji.theory+'Структура модуля'],
            [root+'modules/require',   setTheme(1, ['require', 'module.exports'])],
        ]
    },
]
