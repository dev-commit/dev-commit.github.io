root = 'react-hooks/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/memoization',  emoji.star+'useCallback vs useMemo'],
        ]
    },
    {
        title: 'Hooks',
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
        title: 'Custom Hooks',
        themes: [
            [root+'custom-hooks/info',                  emoji.theory+'Кастомные хуки'],
            [root+'custom-hooks/use-did-update-effect', setTheme(6, ['useDidUpdateEffect'])],
            [root+'custom-hooks/use-debounce',          setTheme(6, ['useDebounce'])],
            [root+'custom-hooks/use-input',             setTheme(6, ['useInput'])],
            [root+'custom-hooks/use-logger',            setTheme(6, ['useLogger'])],
            [root+'custom-hooks/use-previous',          setTheme(6, ['usePrevious'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/questions',     emoji.theory+'Вопросы']
        ]
    },
]
