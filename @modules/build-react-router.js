ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['react-router/main/info',                  emoji.theory+'Информация'],
        ]
    },
    {
        title: 'API',
        themes: [
            ['react-router/api/Link',                   emoji.chevron+setTheme(1, ['&lt;Link /&gt;', '&lt;NavLink /&gt;'])],
            ['react-router/api/BrowserRouter',          emoji.chevron+setTheme(1, ['&lt;BrowserRouter /&gt;'])],
            ['react-router/api/Switch',                 emoji.chevron+setTheme(1, ['&lt;Switch /&gt;'])],
            ['react-router/api/Route',                  emoji.chevron+setTheme(1, ['&lt;Route /&gt;'])],
        ]
    },
    {
        title: 'Варианты',
        themes: [
            ['react-router/variants/pattern',           emoji.code+'Шаблон'],
            ['react-router/variants/url-parameters',    emoji.pizza+'URL Parameters'],
            ['react-router/variants/query-parameters',  emoji.pizza+'Query Parameters'],
            ['react-router/variants/page-404',          emoji.pizza+'Page 404'],
        ]
    },
    {
        title: 'Пакеты',
        themes: [
            ['react-router/packages/react-router',      setTheme(2, ['react-router', 'react-router-dom'])],
        ]
    },
]
