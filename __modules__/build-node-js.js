ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['node-js/main/info',     emoji.theory+'Информация'],
            ['node-js/main/function', emoji.pizza+'Функции'],
            ['node-js/main/modules',  emoji.pizza+'Модули'],
            ['node-js/main/files',    emoji.pizza+'Файлы и директории'],
            ['node-js/main/export',   setTheme(1, ['require', 'exports'])],
            ['node-js/main/pipe',     setTheme(1, ['.pipe'])],
        
            ['node-js/main/server',   'Сервер'],
            ['node-js/main/stream',   'Потоки'],
            ['node-js/main/router',   'Маршрутизация'],
            ['node-js/main/url',      'Данные из url'],
        ]
    },
    {
        title: 'NPM пакеты',
        themes: [
            ['node-js/package/express',     setTheme(2, ['express'])],
            ['node-js/package/body-parser', setTheme(2, ['body-parser'])],
            ['node-js/package/nodemailer',  setTheme(2, ['nodemailer'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['node-js/other/samples', 'Примеры'],
        ]
    },
]
