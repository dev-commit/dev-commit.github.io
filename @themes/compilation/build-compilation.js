root = 'compilation/';

ARR_MODULE = [
    {
        title: 'CI / CD',
        themes: [
            [root+'deployment/info',                   emoji.theory+'Информация'],
            [root+'deployment/continuous-integration', emoji.baseball+'1. Continuous Integration'],
            [root+'deployment/continuous-delivery',    emoji.baseball+'2. Continuous Delivery'],
            [root+'deployment/continuous-deployment',  emoji.baseball+'3. Continuous Deployment'],
            [root+'deployment/software-deployment',    emoji.baseball+'Software Deployment'],
        ]
    },
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
            [root+'web/site-load',            'Загрузка сайта'],
            [root+'web/webkit',               'Браузерные движки'],
        ]
    },
    {
        title: 'Flow разработки',
        themes: [
            [root+'dev-flow/info',        emoji.fire+'Методологии разработки'],
            [root+'dev-flow/agile',       emoji.fire+'Agile / Scrum / Kanban'],
            [root+'dev-flow/waterfall',   'Waterfall'],
            [root+'dev-flow/estimation',  'Эстимация'],
            [root+'dev-flow/jira',         setTheme(1, ['Jira'])],
        ]
    },
    {
        title: 'Технологии',
        themes: [
            [root+'tech/windows',        setTheme(1, ['Windows'])],
            [root+'tech/telegram',       setTheme(1, ['Telegram'])],
            [root+'tech/google-chrome',  setTheme(1, ['Google Chrome'])],
            [root+'tech/react-native',   setTheme(1, ['React.Native'])],
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
