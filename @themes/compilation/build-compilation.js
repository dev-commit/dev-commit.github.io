root = 'compilation/';

ARR_MODULE = [
    {
        title: 'MVC ...',
        themes: [
            [root+'application-architecture/info', emoji.theory+'Шаблоны проектирования'],
            [root+'application-architecture/mvc',  emoji.lemon+'MVC'],
            [root+'application-architecture/mvvm', emoji.lemon+'MVVM'],
        ]
    },
    {
        title: 'Web',
        themes: [
            [root+'web/i18n',                 setTheme(1, ['i18n', 'L10n', 'a11y'])],
            [root+'web/web-applications',     'Виды веб-приложений'],
            [root+'web/evolution-web-design', 'Эволюция веб-дизайна'],
            [root+'web/frameworks',           'Фреймворки'],
            [root+'web/webkit',               'Браузерные движки'],
        ]
    },
    {
        title: 'Технологии',
        themes: [
            [root+'tech/windows',        setTheme(1, ['Windows'])],
            [root+'tech/telegram',       setTheme(1, ['Telegram'])],
            [root+'tech/google-chrome',  setTheme(1, ['Google Chrome'])],
            [root+'tech/timeweb',        setTheme(1, ['Timeweb'])],
            [root+'tech/photoshop',      setTheme(1, ['Adobe Photoshop'])],
            [root+'tech/denwer',         setTheme(1, ['Denwer'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/imports',              emoji.chevron+'Порядок импортов'],
            [root+'other/version',              emoji.chevron+'Политика версионирования'],
            [root+'other/name-case',            'Соглашение по именованию'],
            [root+'other/prefix',               'Префиксы'],
            [root+'other/specification-stage',  'Стадии спецификации'],
            [root+'other/dictionary',           'Словарь'],
            [root+'other/polyfill',             'Полифиллы'],
            [root+'other/trash',                'Свалка'],
        ]
    },
]
