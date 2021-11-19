root = 'yup/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/info',       emoji.theory+'Информация'],
            [root+'main/pattert',    'Шаблон'],
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
