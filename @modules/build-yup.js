root = 'yup/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',         emoji.theory+'Информация'],
            [root+'main/install',      emoji.code+'Установка и настройка'],
            [root+'main/basic-sample', emoji.fire+'Базовый пример'],
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
