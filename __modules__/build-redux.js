ARR_MODULE = [
    {
        title: 'React Redux',
        themes: [
            ['redux/scheme/structure-common',      emoji.fire+'Структура общая'],
            ['redux/scheme/structure-realization', emoji.fire+'Структура реализации'],
            ['redux/code/redux',                   emoji.code+'Redux'],
            ['redux/code/react-redux',             emoji.code+'React-Redux'],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            ['redux/elements/execution-order', emoji.theory+'Порядок выполнения'],
            ['redux/elements/view',            emoji.cookie+'1. View'],
            ['redux/elements/action',          emoji.cookie+'2. Action'],
            ['redux/elements/middleware',      emoji.cookie+'3. Middleware'],
            ['redux/elements/reducer',         emoji.cookie+'4. Reducer'],
            ['redux/elements/store',           emoji.cookie+'5. Store'],
        ]
    },
    {
        title: 'Методы',
        themes: [
            // TODO SUB-TITLE: Redux
            ['redux/methods/create-store',      emoji.chevron+setTheme(4, ['createStore'])],
            ['redux/methods/apply-middleware',  emoji.chevron+setTheme(4, ['applyMiddleware'])],
            ['redux/methods/combine-reducers',  emoji.chevron+setTheme(4, ['combineReducers'])],
            // TODO SUB-TITLE: React-Redux
            ['redux/methods/provider',          emoji.chevron+setTheme(4, ['Provider'])],
            ['redux/methods/connect',           emoji.chevron+setTheme(4, ['connect'])],
            ['redux/methods/hooks',             emoji.chevron+setTheme(4, ['useDispatch', 'useSelector'])],
        ]
    },
    {
        title: 'Flux и Redux',
        themes: [
            ['redux/redux/info-flux',              emoji.theory+'Flux'],
            ['redux/redux/info-redux',             emoji.theory+'Redux'],
            ['redux/redux/functional-programming', emoji.theory+'Принципы FP'],
        ]
    },
    {
        title: 'Redux Plugins',
        themes: [
            ['redux/plugins/redux-devtools-extension', setTheme(2, ['redux-devtools-extension'])],
            ['redux/plugins/redux-thunk',              setTheme(2, ['redux-thunk'])],
            ['redux/plugins/redux-saga',               setTheme(2, ['redux-saga'])],
            ['redux/plugins/redux-form',               setTheme(2, ['redux-form'])],
            ['redux/plugins/redux-actions',            setTheme(2, ['redux-actions'])],
            ['redux/plugins/redux-logger',             setTheme(2, ['redux-logger'])],
        ]
    },
]
