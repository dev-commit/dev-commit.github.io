root = 'react-hooks/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
        ]
    },
    {
        title: 'Hooks',
        themes: [
            [root+'hooks/useState',             setTheme(3, ['useState'])],
            [root+'hooks/useEffect',            setTheme(3, ['useEffect'])],
            [root+'hooks/useRef',               setTheme(3, ['useRef'])],
            [root+'hooks/useCallback',          setTheme(3, ['useCallback'])],
            [root+'hooks/useMemo',              setTheme(3, ['useMemo'])],
            [root+'hooks/useContext',           setTheme(3, ['useContext']), false, 'done'],
            [root+'hooks/useReducer',           setTheme(3, ['useReducer'])],
            [],
            [root+'hooks/use',                  setTheme(5, ['use'])],
            [root+'hooks/useId',                setTheme(1, ['useId'])],
            [root+'hooks/useTransition',        setTheme(1, ['useTransition'])],
            [root+'hooks/useSyncExternalStore', setTheme(1, ['useSyncExternalStore'])],
            [root+'hooks/useDeferredValue',     setTheme(1, ['useDeferredValue'])],
            [root+'hooks/useImperativeHandle',  setTheme(1, ['useImperativeHandle'])],
            [root+'hooks/useDebugValue',        setTheme(1, ['useDebugValue'])],
            [],
            [root+'hooks/useLayoutEffect',      setTheme(6, ['useLayoutEffect'])],
            [root+'hooks/useInsertionEffect',   setTheme(6, ['useInsertionEffect'])],
        ]
    },
    {
        title: 'Custom Hooks',
        themes: [
            [root+'custom-hooks/info',               emoji.theory+'Кастомные хуки'],
            [root+'custom-hooks/useDidUpdateEffect', setTheme(5, ['useDidUpdateEffect'])],
            [root+'custom-hooks/useDebounce',        setTheme(5, ['useDebounce'])],
            [root+'custom-hooks/useInput',           setTheme(5, ['useInput'])],
            [root+'custom-hooks/useLogger',          setTheme(5, ['useLogger'])],
            [root+'custom-hooks/usePrevious',        setTheme(5, ['usePrevious'])],
            [root+'custom-hooks/useFirstMountState', setTheme(5, ['useFirstMountState'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/questions', emoji.theory+'Вопросы']
        ]
    },
]
