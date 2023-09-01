root = 'next-js/';

ARR_MODULE = [
    {
        title: 'Основное',
        accent: true,
        themes: [
            getLink(root, 'info', 'done'),
            getLink(root, 'install', 'done'),
            [root+'main/ssr', setTheme(1, ['SSR']), false, 'done'],
            [root+'main/ssg', setTheme(1, ['SSG']), false, 'done'],
            [root+'main/cdn', setTheme(1, ['CDN']), false, 'done'],
        ]
    },
    {
        title: 'Компоненты',
        accent: true,
        themes: [
            [root+'components/img',   'Images', false, 'done'],
            [root+'components/fonts', 'Fonts', false, 'done'],
        ]
    },
    {
        title: 'Структура',
        accent: true,
        themes: [
            [root+'structure/pages',     'Pages', false, 'done'],
            [root+'structure/layouts',   'Layouts', false, 'done'],
            [root+'structure/templates', 'Templates', false, 'done'],
        ]
    },
    {
        title: 'Деплой',
        accent: true,
        themes: [
            [root+'deploy/vercel',      'Vercel (SSR)', false, 'done'],
            ['git/github/github-pages', 'Github Pages (SSG)', false, 'done'],
        ]
    },
    {
        title: 'Общее',
        themes: [
            [root+'common/layout',       'Создание Layout'],
            [root+'common/google-fonts', 'Добавление Google Fonts'],
            [root+'common/App',          'App'],
            [root+'common/backend',      'Backend'],
            [root+'common/Head',         setTheme(1, ['Head'])],
            [root+'common/Document',     setTheme(1, ['Document'])],  
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
            [root+'routing/useRouter',      setTheme(3, ['useRouter'])],
            [root+'routing/Router',         setTheme(1, ['Router'])],
            [root+'routing/Link',           setTheme(1, ['Link'])],
            [root+'routing/dynamic-route',  emoji.code+'Динамический параметр в URL'],
            [root+'routing/push-route',     emoji.code+'Программное добавление роута'],
            [root+'routing/links-route',    emoji.code+'Ссылки на страницы'],
            [root+'routing/page-404',       emoji.code+'Страница 404'],
        ]
    },
    {
        title: 'Настройки',
        themes: [
            [root+'settings/next-config',  setTheme(5, ['next.config.js'])],
            [root+'settings/typescript',   'TypeScript'],
        ]
    },
]
