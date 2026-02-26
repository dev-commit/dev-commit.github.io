root = 'css-flexbox/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
        ]
    },
    {
        title: 'Flex Container',
        themes: [
            [root+'container/display',         setTheme(1, ['display'])],
            [root+'container/gap',             setTheme(1, ['gap'])],
            [root+'container/justify-content', setTheme(1, ['justify-content'])],
            [root+'container/align-items',     setTheme(1, ['align-items'])],
            [root+'container/align-content',   setTheme(1, ['align-content'])],
            [root+'container/flex-flow',       setTheme(1, ['flex-flow', 'flex-direction', 'flex-wrap'])],
        ]
    },
    {
        title: 'Flex Element',
        themes: [
            [root+'element/flex',        setTheme(1, ['flex', 'flex-grow', 'flex-shrink', 'flex-basis'])],
            [root+'element/order',       setTheme(1, ['order'])],
            [root+'element/align-self',  setTheme(1, ['align-self'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/margin',  'Поведение margin'],
            [root+'other/samples', 'Примеры'],
        ]
    },
]
