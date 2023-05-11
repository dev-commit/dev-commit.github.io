root = 'starter/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
            getLink(root, 'use'),
        ]
    },
    {
        title: 'Установка темы',
        themes: [
            [root+'common/onSubmit', setTheme(1, ['onSubmit'])],
            ['', ''],
            [root+'common/onChange', setTheme(5, ['onChange'])],
            ['', emoji.pizza+'Emoji'],
        ]
    },
    {
        title: 'Акцентный блок',
        accent: true,
        themes: [
            ['', ''],
        ]
    },
    {
        title: 'Блок из одной категории',
        selected: true,
        themes: [
            ['', ''],
        ]
    },
    {
        title: 'Дочерний блок',
        child: true,
        themes: [
            ['', ''],
        ]
    },
    {
        title: 'Дочерний блок как вложенный список',
        accent: true,
        themes: [
            ['', 'Родительский блок'],
            ['', 'Дочерний блок', true],
            ['', 'Дочерний блок', true],
            ['',  'Тема разобрана хорошо', false, 'done'],
            ['',  'Тема разобрана плохо', false, 'check'],
        ]
    },
]
