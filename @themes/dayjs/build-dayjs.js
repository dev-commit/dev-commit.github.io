root = 'dayjs/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'variants'),
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/format',     setTheme(1, ['format'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/typescript', 'TypeScript'],
        ]
    },
]
