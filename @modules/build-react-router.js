root = 'react-router/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info', emoji.theory+'Информация'],
        ]
    },
    {
        title: 'API',
        themes: [
            [root+'api/Link',                   emoji.chevron+setTheme(1, ['&lt;Link /&gt;', '&lt;NavLink /&gt;'])],
            [root+'api/BrowserRouter',          emoji.chevron+setTheme(1, ['&lt;BrowserRouter /&gt;'])],
            [root+'api/Switch',                 emoji.chevron+setTheme(1, ['&lt;Switch /&gt;'])],
            [root+'api/Route',                  emoji.chevron+setTheme(1, ['&lt;Route /&gt;'])],
        ]
    },
    {
        title: 'Варианты',
        themes: [
            [root+'variants/pattern',           emoji.code+'Шаблон'],
            [root+'variants/url-parameters',    emoji.pizza+'URL Parameters'],
            [root+'variants/query-parameters',  emoji.pizza+'Query Parameters'],
            [root+'variants/page-404',          emoji.pizza+'Page 404'],
        ]
    },
    {
        title: 'Пакеты',
        themes: [
            [root+'packages/react-router', setTheme(2, ['react-router', 'react-router-dom'])],
        ]
    },
]
