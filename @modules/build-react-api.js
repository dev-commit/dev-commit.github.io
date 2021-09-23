ARR_MODULE = [
    {
        title: 'React',
        themes: [
            ['react-api/react/component',        setTheme(1, ['React.Component'])],   
            ['react-api/react/create-element',   setTheme(1, ['React.createElement()'])],
            ['react-api/react/clone-element',    setTheme(1, ['React.cloneElement()'])],
            ['react-api/react/create-factory',   setTheme(1, ['React.createFactory'])],
            ['react-api/react/is-valid-element', setTheme(1, ['React.isValidElement()'])],
        ]
    },
    {
        title: 'Оптимизация',
        themes: [
            ['react-api/optimization/info',                 emoji.theory+'Информация'],
            ['react-api/optimization/react-pure-component', setTheme(1, ['React.PureComponent'])],
            ['react-api/optimization/react-memo',           setTheme(1, ['React.memo'])],
            ['react-api/optimization/react-lazy',           setTheme(1, ['React.lazy', 'React.Suspense'])],
        ]
    },
    {
        title: 'Компоненты',
        themes: [
            ['react-api/components/set-state',    setTheme(1, ['setState()'])],
            ['react-api/components/force-update', setTheme(1, ['forceUpdate()'])],
        ]
    },
    {
        title: 'DOM-атрибуты',
        themes: [
            ['react-api/dom/dangerously-set-inner-html',  setTheme(1, ['dangerouslySetInnerHTML'])],
        ]
    },
]
