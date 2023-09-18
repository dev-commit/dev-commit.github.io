root = 'react-redux/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
            getLink(root, 'use'),
            [root+'main/structure-common',         emoji.star+'Структура общая'],
            [root+'main/structure-implementation', emoji.star+'Структура реализации'],

        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/provider', setTheme(3, ['Provider'])],
            [root+'methods/connect',  setTheme(3, ['connect'])],
            [root+'methods/hooks',    setTheme(3, ['useDispatch', 'useSelector'])],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/execution-order', emoji.theory+'Порядок выполнения'],
            [root+'elements/view',            '1. View'],
            [root+'elements/action',          '2. Action'],
            [root+'elements/middleware',      '3. Middleware'],
            [root+'elements/reducer',         '4. Reducer'],
            [root+'elements/store',           '5. Store'],
        ]
    },
    {
        title: 'Redux Plugins',
        themes: [
            [root+'plugins/redux-thunk',              setTheme(2, ['redux-thunk'])],
            [root+'plugins/redux-devtools-extension', setTheme(2, ['redux-devtools-extension'])],
            [root+'plugins/redux-actions',            setTheme(2, ['redux-actions'])],
            [root+'plugins/redux-logger',             setTheme(2, ['redux-logger'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/constants-name', 'Название констант'],
        ]
    },
]
