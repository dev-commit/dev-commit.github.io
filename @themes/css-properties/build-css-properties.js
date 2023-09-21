root = 'css-properties/';

ARR_MODULE = [
    {
        title: 'Свойства',
        themes: [
            [root+'properties/properties-value', emoji.theory+'Значение свойств'],
            [root+'properties/box-shadow',       setTheme(1, ['box-shadow', 'text-shadow'])],
            [root+'properties/overflow',         setTheme(1, ['overflow'])],
            [root+'properties/background',       setTheme(1, ['background'])],
            [root+'properties/border',           setTheme(1, ['border'])],
            [root+'properties/ul',               setTheme(1, ['ul', 'ol'])],
            [root+'properties/scrollbar',        setTheme(1, ['scrollbar'])],
            [root+'properties/caret-color',      setTheme(1, ['caret-color'])],
        ]
    },
    {
        title: 'Функции',
        themes: [
            [root+'functions/calc',      setTheme(3, ['calc()'])],
            [root+'functions/attr',      setTheme(3, ['attr()'])],
            [root+'functions/image-set', setTheme(3, ['image-set()'])],
        ]
    },
    {
        title: 'Псевдо-классы',
        themes: [
            [root+'pseudo-classes/pseudo-classes', emoji.theory+'Псевдоклассы'],
            [root+'pseudo-classes/where',          setTheme(2, [':where'])],
            [root+'pseudo-classes/is',             setTheme(2, [':is'])],
        ]
    },
    {
        title: 'Псевдо-элементы',
        themes: [
            [root+'pseudo-elements/pseudo-elements', emoji.theory+'Псевдоэлементы'],
            [root+'pseudo-elements/before',          setTheme(2, ['::before', '::after'])],
            [root+'pseudo-elements/slotted',         setTheme(2, ['::slotted'])],
        ]
    },
    {
        title: 'Правила',
        themes: [
            [root+'rules/import',   setTheme(5, ['@import'])],
            [root+'rules/supports', setTheme(5, ['@supports'])],
        ]
    },
]
