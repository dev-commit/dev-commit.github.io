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
            [root+'hooks/use-state',               setTheme(3, ['useState'])],
            [root+'hooks/use-effect',              setTheme(3, ['useEffect'])],
            [root+'hooks/use-ref',                 setTheme(3, ['useRef'])],
            [root+'hooks/use-memo',                setTheme(3, ['useMemo'])],
            [root+'hooks/use-callback',            setTheme(3, ['useCallback'])],
            [root+'hooks/use-context',             setTheme(3, ['useContext'])],
            [root+'hooks/use-reducer',             setTheme(3, ['useReducer'])],
            ['', ''],
            [root+'hooks/use-id',                  setTheme(1, ['useId'])],
            [root+'hooks/use-transition',          setTheme(1, ['useTransition'])],
            [root+'hooks/use-sync-external-store', setTheme(1, ['useSyncExternalStore'])],
            [root+'hooks/use-deferred-value',      setTheme(1, ['useDeferredValue'])],
            [root+'hooks/use-imperative-handle',   setTheme(1, ['useImperativeHandle'])],
            [root+'hooks/use-debug-value',         setTheme(1, ['useDebugValue'])],
            ['', ''],
            [root+'hooks/use-layout-effect',       setTheme(6, ['useLayoutEffect'])],
            [root+'hooks/use-insertion-effect',    setTheme(6, ['useInsertionEffect'])],
        ]
    },
    {
        title: 'Custom Hooks',
        themes: [
            [root+'custom-hooks/info',                  emoji.theory+'Кастомные хуки'],
            [root+'custom-hooks/use-did-update-effect', setTheme(5, ['useDidUpdateEffect'])],
            [root+'custom-hooks/use-debounce',          setTheme(5, ['useDebounce'])],
            [root+'custom-hooks/use-input',             setTheme(5, ['useInput'])],
            [root+'custom-hooks/use-logger',            setTheme(5, ['useLogger'])],
            [root+'custom-hooks/use-previous',          setTheme(5, ['usePrevious'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/questions',     emoji.theory+'Вопросы']
        ]
    },
]
