root = 'starter/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/info',         emoji.theory+'Информация'],
            [root+'main/install',      emoji.code+'Установка и настройка'],
            [root+'main/basic-sample', emoji.fire+'Базовый пример'],
        ]
    },
    {
        title: 'Установка темы',
        themes: [
            [root+'common/onSubmit', setTheme(1, ['onSubmit'])],
            ['', ''],
            [root+'common/onChange', setTheme(5, ['onChange'])],
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
        title: styleSubHeader('Дочерний блок'),
        child: true,
        themes: [
            ['', ''],
        ]
    },
]
