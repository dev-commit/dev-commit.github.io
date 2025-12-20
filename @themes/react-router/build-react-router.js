root = 'react-router/';

ARR_MODULE = [
    {
        title: 'Основное',
        accent: true,
        themes: [
            getLink(root, 'info', true),
            getLink(root, 'install', true),
            getLink(root, 'use', true),
        ]
    },
    {
        title: 'Declarative Mode',
        themes: [
            [root+'mode-declarative/BrowserRouter', setTheme(1, ['&lt;BrowserRouter /&gt;']), false, 'done'],
            [root+'mode-declarative/Routes',        setTheme(1, ['&lt;Routes /&gt;', '&lt;Route /&gt;']), false, 'done'],
            [root+'mode-declarative/Link',          setTheme(1, ['&lt;Link /&gt;', '&lt;NavLink /&gt;']), false, 'done'],
            [root+'mode-declarative/useNavigate',   setTheme(3, ['useNavigate()']), false, 'done'],
            [root+'mode-declarative/useParams',     setTheme(3, ['useParams()']), false, 'done'],

            [root+'mode-declarative/useSearchParams',     setTheme(3, ['useSearchParams()'])],
            [root+'mode-declarative/useLocation',     setTheme(3, ['useLocation()'])],
        ]
    },
    // {
    //     title: 'Data Mode',
    //     themes: [
    //         [root+'data-declarative/name', setTheme(1, ['name'])],
    //     ]
    // },
]
