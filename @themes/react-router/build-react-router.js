root = 'react-router/';

ARR_MODULE = [
    {
        title: 'v6',
        accent: true,
        themes: [
            getLink(root+'v6/', 'info'),
            [root+'v6/main/migration',     emoji.theory+'Миграция с v5'],
            getLink(root+'v6/', 'install'),
            getLink(root+'v6/', 'use'),
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
            getLink(root+'v5/', 'info'),
            getLink(root+'v5/', 'install'),
            getLink(root+'v5/', 'use'),
        ]
    },
    {
        title: 'API',
        themes: [
            [root+'v5/api/Switch',     setTheme(1, ['&lt;Switch /&gt;'])],
            [root+'v5/api/Route',      setTheme(1, ['&lt;Route /&gt;'])],
            [root+'v5/api/useHistory', setTheme(3, ['useHistory()'])],
        ]
    },
    {
        title: 'Варианты',
        themes: [
            [root+'v5/variants/url-parameters',    emoji.items+'URL Parameters'],
            [root+'v5/variants/query-parameters',  emoji.items+'Query Parameters'],
            [root+'v5/variants/page-404',          emoji.items+'Page 404'],
        ]
    },
]
