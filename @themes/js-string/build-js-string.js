root = 'js-string/';

ARR_MODULE = [
    {
        title: 'Методы',
        themes: [
            [root+'methods/main', 'Основные'],
            [root+'methods/indexOf', setTheme(1, ['indexOf', 'lastIndexOf'])],
            [root+'methods/substring', setTheme(1, ['substring', 'substr', 'slice'])],
            [root+'methods/charAt', setTheme(1, ['charAt', 'charCodeAt'])],
            [root+'methods/req-exp', 'ReqExp'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/samples', 'Примеры'],
        ]
    },
]
