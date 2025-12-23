root = 'react-router/';

ARR_MODULE = [
	{
		title: 'Основное',
		accent: true,
		themes: [
			getLink(root, 'info', true),
			getLink(root, 'install', true),
			getLink(root, 'use', true),
			[root+'main/modes',  'Режимы работы', false, 'done'],
		]
	},
	{
		title: 'Общее API',
		themes: [
			[root+'api/Routes',          setTheme(1, ['&lt;Routes /&gt;', '&lt;Route /&gt;']), false, 'done'],
			[root+'api/Link',            setTheme(1, ['&lt;Link /&gt;', '&lt;NavLink /&gt;']), false, 'done'],
			[root+'api/Outlet',          setTheme(1, ['&lt;Outlet /&gt;']), false, 'done'],
			[root+'api/useNavigate',     setTheme(3, ['useNavigate()']), false, 'done'],
			[root+'api/useParams',       setTheme(3, ['useParams()']), false, 'done'],
			[root+'api/useSearchParams', setTheme(5, ['useSearchParams()'])],
			[root+'api/useLocation',     setTheme(5, ['useLocation()'])],
		]
	},
	{
		title: 'Declarative Mode',
		themes: [
			[root+'api-declarative-mode/BrowserRouter',   setTheme(1, ['&lt;BrowserRouter /&gt;']), false, 'done'],
		]
	},
	{
		title: 'Data Mode',
		themes: [
			[root+'api-data-mode/RouterProvider', setTheme(1, ['&lt;RouterProvider /&gt;', 'createBrowserRouter()']), false, 'done'],
		]
	},
]
