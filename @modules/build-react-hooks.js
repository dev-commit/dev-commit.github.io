root = 'react-hooks/';

ARR_MODULE = [
    {
        title: 'Хуки',
        themes: [
            [root+'hooks/use-state',             setTheme(3, ['useState'])],
            [root+'hooks/use-effect',            setTheme(3, ['useEffect'])],
            [root+'hooks/use-ref',               setTheme(3, ['useRef'])],
            [root+'hooks/use-memo',              setTheme(1, ['useMemo'])],
            [root+'hooks/use-callback',          setTheme(1, ['useCallback'])],
            [root+'hooks/use-context',           setTheme(1, ['useContext'])],
            [root+'hooks/use-reducer',           setTheme(1, ['useReducer'])],
            ['', ''],
            [root+'hooks/use-imperative-handle', setTheme(1, ['useImperativeHandle'])],
            [root+'hooks/use-layout-effect',     setTheme(1, ['useLayoutEffect'])],
            [root+'hooks/use-debug-value',       setTheme(1, ['useDebugValue'])],
        ]
    },
    {
        title: 'Информация',
        themes: [
            [root+'main/info',       emoji.theory+'Информация'],
            [root+'main/own-hooks',  emoji.theory+'Создание собственных хуков'],
            [root+'main/questions',  emoji.theory+'Ответы на вопросы']
        ]
    },
]
