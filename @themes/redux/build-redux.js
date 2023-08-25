root = 'redux/';

ARR_MODULE = [
    {
        title: 'React Redux',
        themes: [
            [root+'scheme/structure-common',      emoji.fire+'Структура общая'],
            [root+'scheme/structure-realization', emoji.fire+'Структура реализации'],
            [root+'code/redux',                   emoji.code+'Redux'],
            [root+'code/react-redux',             emoji.code+'React-Redux'],
            [root+'main/redux-compare',           setTheme(2, ['redux', 'react-redux', 'redux-toolkit'])],
            [root+'code/redux-toolkit',           'Redux Toolkit'],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/execution-order', emoji.theory+'Порядок выполнения'],
            [root+'elements/view',            emoji.star+'1. View'],
            [root+'elements/action',          emoji.star+'2. Action'],
            [root+'elements/middleware',      emoji.star+'3. Middleware'],
            [root+'elements/reducer',         emoji.star+'4. Reducer'],
            [root+'elements/store',           emoji.star+'5. Store'],
        ]
    },
    { title: 'Методы', },
    {
        title: 'Redux',
        child: true,
        themes: [
            [root+'methods/create-store',      setTheme(1, ['createStore']), false, 'done'],
            [root+'methods/apply-middleware',  setTheme(1, ['applyMiddleware'])],
            [root+'methods/combine-reducers',  setTheme(1, ['combineReducers'])],
        ]
    },
    {
        title: 'React-Redux',
        child: true,
        themes: [
            [root+'methods/provider',          setTheme(3, ['Provider'])],
            [root+'methods/connect',           setTheme(3, ['connect'])],
            [root+'methods/hooks',             setTheme(3, ['useDispatch', 'useSelector'])],
        ]
    },
    {
        title: 'Flux и Redux',
        themes: [
            [root+'redux/info-flux',              emoji.theory+'Flux'],
            [root+'redux/info-redux',             emoji.theory+'Redux'],
            [root+'redux/functional-programming', emoji.theory+'Принципы FP'],
        ]
    },
    {
        title: 'Redux Plugins',
        themes: [
            [root+'plugins/redux-toolkit',            setTheme(2, ['@reduxjs/toolkit'])],
            [root+'plugins/redux-devtools-extension', setTheme(2, ['redux-devtools-extension'])],
            [root+'plugins/redux-thunk',              setTheme(2, ['redux-thunk'])],
            [root+'plugins/redux-saga',               setTheme(2, ['redux-saga'])],
            [root+'plugins/redux-form',               setTheme(2, ['redux-form'])],
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
