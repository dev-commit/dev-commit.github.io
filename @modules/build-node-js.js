root = 'node-js/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',     emoji.theory+'Информация'],
            [root+'main/pipe',     setTheme(1, ['.pipe'])],
            [root+'main/stream',   'Потоки'],
            [root+'main/router',   'Маршрутизация'],
            [root+'main/url',      'Данные из url'],
        ]
    },
    {
        title: 'Модульный принцип',
        themes: [
            [root+'modules/structure', emoji.theory+'Структура модуля'],
            [root+'modules/require',   setTheme(1, ['require', 'module.exports'])],
        ]
    },
    {
        title: 'Встроенные модули',
        themes: [
            [root+'own-modules/fs',     setTheme(2, ['fs'])+' Файлы и директории'],
            [root+'own-modules/http',   setTheme(2, ['http'])+' Сервер'],
            [root+'own-modules/path',   setTheme(2, ['path'])],
            [root+'own-modules/events', setTheme(2, ['events'])],
            [root+'own-modules/util',   setTheme(2, ['util'])],
        ]
    },
    {
        title: 'Пакеты',
        themes: [
            [root+'package/express',     setTheme(2, ['express'])],
            [root+'package/body-parser', setTheme(2, ['body-parser'])],
            [root+'package/nodemailer',  setTheme(2, ['nodemailer'])],
            [root+'package/nodemon',     setTheme(2, ['nodemon'])],
            [root+'package/rimraf',      setTheme(2, ['rimraf'])],
        ]
    },
]
