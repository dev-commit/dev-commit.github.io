root = 'react-router/';

ARR_MODULE = [
    {
        title: 'v6',
        accent: true,
        themes: [
            [root+'v6/main/info',          emoji.theory+'Информация'],
            [root+'v6/main/migration',     emoji.theory+'Миграция с v5'],
            [root+'v6/main/install',       emoji.code+'Установка и настройка'],
            [root+'v6/main/basic-sample',  emoji.fire+'Базовый пример'],
        ]
    },
    {
        title: 'API',
        themes: [
            [root+'v6/api/BrowserRouter',  setTheme(1, ['&lt;BrowserRouter /&gt;'])],
            [root+'v6/api/Link',           setTheme(1, ['&lt;Link /&gt;'])],
            [root+'v6/api/NavLink',        setTheme(1, ['&lt;NavLink /&gt;'])],
            [root+'v6/api/Routes',         setTheme(1, ['&lt;Routes /&gt;'])],
            [root+'v6/api/Route',          setTheme(1, ['&lt;Route /&gt;'])],
            [root+'v6/api/useNavigate',    setTheme(3, ['useNavigate()'])],
            [root+'v6/api/useParams',      setTheme(3, ['useParams()'])],
        ]
    },

    //---------------------------------------------------------------------------------------------------------

    {
        title: 'v5',
        accent: true,
        themes: [
            [root+'v5/main/info',          emoji.theory+'Информация'],
            [root+'v5/main/install',       emoji.code+'Установка и настройка'],
            [root+'v5/main/basic-sample',  emoji.fire+'Базовый пример'],
        ]
    },
    {
        title: 'API',
        themes: [
            [root+'v5/api/Switch',  setTheme(1, ['&lt;Switch /&gt;'])],
        ]
    },
    {
        title: 'Варианты',
        themes: [
            [root+'v5/variants/url-parameters',    emoji.pizza+'URL Parameters'],
            [root+'v5/variants/query-parameters',  emoji.pizza+'Query Parameters'],
            [root+'v5/variants/page-404',          emoji.pizza+'Page 404'],
        ]
    },
]
