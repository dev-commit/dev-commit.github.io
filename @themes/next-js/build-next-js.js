root = 'next-js/';

ARR_MODULE = [
    {
        title: 'Основное',
        accent: true,
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
            [root+'main/ssr', setTheme(1, ['SSR'])],
            [root+'main/ssg', setTheme(1, ['SSG'])],
            [root+'main/cdn', setTheme(1, ['CDN'])],
            [root+'main/lazy-loading', 'Lazy Loading'],
        ]
    },
    {
        title: 'Компоненты',
        accent: true,
        themes: [
            [root+'components/images', emoji.star+'Images'],
            [root+'components/fonts',  emoji.star+'Fonts'],
            [root+'components/styles', emoji.star+'Styles'],
        ]
    },
    {
        title: 'Структура',
        accent: true,
        themes: [
            [root+'structure/pages',     'Pages'],
            [root+'structure/layouts',   'Layouts'],
            [root+'structure/templates', 'Templates'],
        ]
    },
    {
        title: 'Роутинг',
        accent: true,
        themes: [
            [root+'routing/components/Link',   setTheme(1, ['Link'])],
            [root+'routing/hooks/usePathname', setTheme(3, ['usePathname'])],
            [root+'routing/hooks/useRouter',   setTheme(3, ['useRouter'])],
            [root+'routing/hooks/useParams',   setTheme(3, ['useParams'])],
            [root+'routing/page-404',          emoji.code+'Страница 404'],
        ]
    },
    {
        title: 'Настройки',
        themes: [
            [root+'settings/env',  setTheme(5, ['ENV-переменные'])],
        ]
    },

    {
        title: 'TypeScript',
        themes: [
            [root+'typescript/install', emoji.code+'Установка и настройка'],
            [root+'typescript/tsconfig', 'tsconfig.json'],
            [root+'typescript/custom-types', 'Пользовательские типы'],
        ]
    },

    {
        title: 'Деплой',
        themes: [
            [root+'deploy/vercel',      'Vercel (SSR)'],
            [root+'deploy/github-pages', 'Github Pages (SSG)'],
        ]
    },
    {
        title: 'Запросы на сервер',
        themes: [
            [root+'fetch/info',               emoji.theory+'Информация', false, 'check'],
            [root+'fetch/getInitialProps',    setTheme(1, ['getInitialProps']), false, 'check'],
            [root+'fetch/getServerSideProps', setTheme(1, ['getServerSideProps']), false, 'check'],
            [root+'fetch/getStaticProps',     setTheme(1, ['getStaticProps']), false, 'check'],
        ]
    },
]
