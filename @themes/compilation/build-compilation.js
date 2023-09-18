root = 'compilation/';

ARR_MODULE = [
    {
        title: 'Web',
        themes: [
            [root+'web/i18n',                 setTheme(1, ['i18n', 'L10n', 'a11y'])],
            [root+'web/web-applications',     'Виды веб-приложений'],
            [root+'web/frameworks',           'Фреймворки'],
            [root+'web/webkit',               'Браузерные движки'],
            [root+'web/evolution-web-design', 'Эволюция веб-дизайна'],
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
            [root+'other/specification-stage',  'Стадии спецификации'],
            [],
            [root+'other/dictionary',           'Словарь'],
            [root+'other/prefix',               'Префиксы'],
            [root+'other/polyfill',             'Полифиллы'],
            [root+'other/trash',                'Свалка'],
        ]
    },
]
