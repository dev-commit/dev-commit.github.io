root = 'react-router/';

ARR_MODULE = [
    {
        title: 'Основное',
        accent: true,
        themes: [
            getLink(root, 'info', true),
            getLink(root, 'install', true),
        ]
    },
    {
        title: 'Declarative Mode',
        themes: [
            [root+'mode-declarative/use', emoji.fire+'Базовый пример', false, 'done'],
            [root+'mode-declarative/api/BrowserRouter', setTheme(1, ['&lt;BrowserRouter /&gt;']), false, 'done'],
            [root+'mode-declarative/api/Routes',        setTheme(1, ['&lt;Routes /&gt;', '&lt;Route /&gt;']), false, 'done'],
            [root+'mode-declarative/api/Link',          setTheme(1, ['&lt;Link /&gt;', '&lt;NavLink /&gt;']), false, 'done'],
            [root+'mode-declarative/api/useNavigate',   setTheme(3, ['useNavigate()']), false, 'done'],
            [root+'mode-declarative/api/useParams',     setTheme(3, ['useParams()']), false, 'done'],
            [root+'mode-declarative/api/useSearchParams',     setTheme(3, ['useSearchParams()'])],
            [root+'mode-declarative/api/useLocation',     setTheme(3, ['useLocation()'])],
        ]
    },
    // {
    //     title: 'Data Mode',
    //     themes: [
    //         [root+'data-declarative/name', setTheme(1, ['name'])],
    //     ]
    // },
]
