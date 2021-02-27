ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['css-flexbox/main/info', 'Информация'],
        ]
    },
    {
        title: 'Flex Container',
        themes: [
            ['css-flexbox/container/display',         setTheme(1, ['display'])],
            ['css-flexbox/container/justify-content', setTheme(1, ['justify-content'])],
            ['css-flexbox/container/align-items',     setTheme(1, ['align-items'])],
            ['css-flexbox/container/align-content',   setTheme(1, ['align-content'])],
            ['css-flexbox/container/flex-flow',       setTheme(1, ['flex-flow', 'flex-direction', 'flex-wrap'])],
        ]
    },
    {
        title: 'Flex Element',
        themes: [
            ['css-flexbox/element/flex',        setTheme(1, ['flex', 'flex-grow', 'flex-shrink', 'flex-basis'])],
            ['css-flexbox/element/order',       setTheme(1, ['order'])],
            ['css-flexbox/element/align-self',  setTheme(1, ['align-self'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['css-flexbox/other/margin',  'Поведение margin'],
            ['css-flexbox/other/samples', 'Примеры'],
        ]
    },
]
