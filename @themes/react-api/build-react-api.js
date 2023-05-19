root = 'react-api/';

ARR_MODULE = [
    {
        title: 'React',
        themes: [
            [root+'react/Component',      setTheme(1, ['Component'])],   
            [root+'react/Fragment',       setTheme(1, ['Fragment'])],
            ['', ''],
            [root+'react/createElement',  setTheme(1, ['createElement'])],
            [root+'react/createContext',  setTheme(1, ['createContext'])],
            [root+'react/createRef',      setTheme(1, ['createRef'])],
            [root+'react/createFactory',  setTheme(1, ['createFactory'])],
            ['', ''],
            [root+'react/cloneElement',   setTheme(1, ['cloneElement'])],
            [root+'react/isValidElement', setTheme(1, ['isValidElement'])],
        ]
    },
    {
        title: 'ReactDOM',
        themes: [
            [root+'react-dom/createPortal', setTheme(1, ['createPortal'])],
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
            [root+'dom/dangerously-set-inner-html', setTheme(1, ['dangerouslySetInnerHTML'])],
        ]
    },
]
