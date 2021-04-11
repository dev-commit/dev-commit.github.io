ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['node-js/main/info',     emoji.theory+'Информация'],
            ['node-js/main/pipe',     setTheme(1, ['.pipe'])],
            ['node-js/main/stream',   'Потоки'],
            ['node-js/main/router',   'Маршрутизация'],
            ['node-js/main/url',      'Данные из url'],
        ]
    },
    {
        title: 'Модульный принцип',
        themes: [
            ['node-js/modules/structure', emoji.theory+'Структура модуля'],
            ['node-js/modules/require',   setTheme(1, ['require', 'module.exports'])],
        ]
    },
    {
        title: 'Встроенные модули',
        themes: [
            ['node-js/own-modules/path',   setTheme(2, ['path'])],
            ['node-js/own-modules/fs',     setTheme(2, ['fs'])+' Файлы и директории'],
            ['node-js/own-modules/http',   setTheme(2, ['http'])+' Сервер'],
            ['node-js/own-modules/events', setTheme(2, ['events'])],
            ['node-js/own-modules/util',   setTheme(2, ['util'])],
        ]
    },
    {
        title: 'Пакеты',
        themes: [
            ['node-js/package/express',     setTheme(2, ['express'])],
            ['node-js/package/body-parser', setTheme(2, ['body-parser'])],
            ['node-js/package/nodemailer',  setTheme(2, ['nodemailer'])],
            ['node-js/package/nodemon',     setTheme(2, ['nodemon'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['node-js/other/samples',  'Примеры'],
            ['node-js/other/function', 'Функции'],
        ]
    },
]
