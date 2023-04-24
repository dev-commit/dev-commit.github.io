root = 'react-api/';

ARR_MODULE = [
    {
        title: 'React',
        themes: [
            [root+'react/component',        setTheme(1, ['React.Component'])],   
            [root+'react/create-element',   setTheme(1, ['React.createElement()'])],
            [root+'react/clone-element',    setTheme(1, ['React.cloneElement()'])],
            [root+'react/create-factory',   setTheme(1, ['React.createFactory'])],
            [root+'react/is-valid-element', setTheme(1, ['React.isValidElement()'])],
        ]
    },
    {
        title: 'Оптимизация',
        themes: [
            [root+'optimization/info',                 emoji.theory+'Информация'],
            [root+'optimization/react-pure-component', setTheme(1, ['React.PureComponent'])],
            [root+'optimization/react-memo',           setTheme(1, ['React.memo'])],
            [root+'optimization/react-lazy',           setTheme(1, ['React.lazy', 'React.Suspense'])],
        ]
    },
    {
        title: 'Компоненты',
        themes: [
            [root+'components/set-state',    setTheme(1, ['setState()'])],
            [root+'components/force-update', setTheme(1, ['forceUpdate()'])],
        ]
    },
    {
        title: 'DOM-атрибуты',
        themes: [
            [root+'dom/dangerously-set-inner-html',  setTheme(1, ['dangerouslySetInnerHTML'])],
        ]
    },
]
