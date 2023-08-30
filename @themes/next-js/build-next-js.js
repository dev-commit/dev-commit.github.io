root = 'next-js/';

ARR_MODULE = [
    {
        title: 'Основное',
        accent: true,
        themes: [
            getLink(root, 'info', 'done'),
            getLink(root, 'install', 'done'),
            [root+'main/ssr',     setTheme(1, ['SSR']), false, 'done'],
            [root+'main/ssg',     setTheme(1, ['SSG']), false, 'done'],
            [root+'main/cdn',     setTheme(1, ['CDN']), false, 'done'],
            [root+'main/img',     'Images', false, 'done'],
            [root+'main/fonts',   'Fonts', false, 'done'],
            [root+'main/layouts', 'Layouts', false, 'done'],
            [root+'main/pages',   'Pages', false, 'done'],
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
        ]
    },
    {
        title: 'Компоненты',
        themes: [
            [root+'components/Head',     setTheme(1, ['Head'])],
            [root+'components/Document', setTheme(1, ['Document'])],   
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
