root = 'yup/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
            getLink(root, 'sample'),
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/types',         emoji.fire+'Типы'],
            [root+'methods/methods',       emoji.fire+'Методы'],
            [root+'methods/test',          setTheme(1, ['.test'])],
            [root+'methods/chain-values',  emoji.code+'Связанные значения'],
            [root+'methods/reg-exp',       emoji.code+'RegExp'],
        ]
    },
]
