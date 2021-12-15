root = 'next-js/';

// [root+'main/info',     emoji.theory+'Информация'],
// [root+'main/pipe',     setTheme(1, ['.pipe'])],

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',    emoji.theory+'Информация'],
            [root+'main/install', emoji.code+'Установка и настройка'],
        ]
    },
    {
        title: 'Роутинг',
        themes: [
            [root+'routing/structure',      emoji.theory+'Структура'],
            [root+'routing/dynamic-route',  emoji.code+'Динамический параметр в URL'],
            [root+'routing/push-route',     emoji.code+'Программное добавление роута'],
            [root+'routing/links-route',    emoji.code+'Ссылки на страницы'],
            ['', ''],
            [root+'routing/useRouter',      setTheme(3, ['useRouter'])],
            [root+'routing/Router',         setTheme(1, ['Router'])],
            [root+'routing/Link',           setTheme(1, ['Link'])],
        ]
    },
]
