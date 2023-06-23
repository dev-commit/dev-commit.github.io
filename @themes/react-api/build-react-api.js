root = 'react-api/';

ARR_MODULE = [
    {
        title: 'React',
        themes: [
            [root+'react/startTransition', setTheme(1, ['startTransition'])],
            [root+'react/createContext',   setTheme(1, ['createContext'])],
            [root+'react/Fragment',        setTheme(1, ['&lt;Fragment&gt;'])],
            [root+'react/StrictMode',        setTheme(1, ['&lt;StrictMode&gt;'])],
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
            [root+'optimization/react-memo',           setTheme(1, ['React.memo'])],
            [root+'optimization/react-lazy',           setTheme(1, ['React.lazy', '&lt;Suspense&gt;'])],
        ]
    },
    {
        title: 'Общее',
        themes: [
            [root+'common/dangerously-set-inner-html', setTheme(5, ['dangerouslySetInnerHTML'])],
        ]
    },
    {
        title: 'Legacy',
        themes: [
            [root+'legacy/set-state',            setTheme(7, ['setState()'])],
            [root+'legacy/force-update',         setTheme(7, ['forceUpdate()'])],
            [root+'legacy/Component',            setTheme(7, ['Component'])],
            [root+'legacy/react-pure-component', setTheme(7, ['React.PureComponent'])],
            ['', ''],
            [root+'legacy/children',             setTheme(7, ['Children'])],
            [root+'legacy/createElement',        setTheme(7, ['createElement'])],
            [root+'legacy/createRef',            setTheme(7, ['createRef'])+' '+setTheme(1, ['forwardRef'])],
            [root+'legacy/createFactory',        setTheme(7, ['createFactory'])],
            [root+'legacy/cloneElement',         setTheme(7, ['cloneElement'])],
            [root+'legacy/isValidElement',       setTheme(7, ['isValidElement'])],
        ]
    },
]


 