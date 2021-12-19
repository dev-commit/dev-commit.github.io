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
        title: 'Общее',
        themes: [
            [root+'common/layout',       emoji.chevron+'Создание Layout'],
            [root+'common/google-fonts', emoji.chevron+'Добавление Google Fonts'],
        ]
    },
    {
        title: 'Компоненты',
        themes: [
            [root+'components/Head',    setTheme(1, ['Head'])],
        ]
    },
    {
        title: 'Custom',
        themes: [
            [root+'custom/Document', setTheme(5, ['Document'])],
            [root+'custom/App',      setTheme(5, ['App'])],
        ]
    },
    {
        title: 'Запросы на сервер',
        themes: [
            [root+'fetch/info',               emoji.theory+'Информация'],
            [root+'fetch/getInitialProps',    setTheme(1, ['getInitialProps'])],
            [root+'fetch/getServerSideProps', setTheme(1, ['getServerSideProps'])],
            [root+'fetch/getStaticProps',     setTheme(1, ['getStaticProps'])],
        ]
    },
    {
        title: 'Стили',
        themes: [
            [root+'styles/jsx',  'JSX'],
            [root+'styles/css',  'CSS-файл'],
            [root+'styles/sass', 'Sass'],
        ]
    },
    {
        title: 'Роутинг',
        themes: [
            [root+'routing/structure',      emoji.theory+'Структура'],
            [root+'routing/dynamic-route',  emoji.code+'Динамический параметр в URL'],
            [root+'routing/push-route',     emoji.code+'Программное добавление роута'],
            [root+'routing/links-route',    emoji.code+'Ссылки на страницы'],
            [root+'routing/page-404',       emoji.code+'Страница 404'],
            ['', ''],
            [root+'routing/useRouter',      setTheme(3, ['useRouter'])],
            [root+'routing/Router',         setTheme(1, ['Router'])],
            [root+'routing/Link',           setTheme(1, ['Link'])],
        ]
    },
    {
        title: 'Backend',
        themes: [
            [root+'backend/info',        emoji.theory+'Информация'],
            [root+'backend/api',         emoji.code+'API'],
            [root+'backend/api-dynamic', emoji.code+'API с динамическим параметром в URL'],
        ]
    },
    {
        title: 'Настройки',
        themes: [
            [root+'settings/next-config',  setTheme(5, ['next.config.js'])],
            [root+'settings/typescript',   'TypeScript'],
        ]
    },
    {
        title: 'Деплой',
        themes: [
            [root+'deploy/vercel', 'Vercel'],
        ]
    },
]
