root = 'js-string/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/length', setTheme(1, ['length'])],
            [root+'methods/trim', setTheme(1, ['trim'])],
            [root+'methods/toString', setTheme(1, ['toString'])],
            ['', ''],
            [root+'methods/toUpperCase', setTheme(1, ['toUpperCase', 'toLowerCase'])],
            [root+'methods/indexOf', setTheme(1, ['indexOf', 'lastIndexOf'])],
            [root+'methods/split', setTheme(1, ['split']) + ' + ReqExp'],
            [root+'methods/substring', setTheme(1, ['substring', 'substr', 'slice'])],
            [root+'methods/charAt', setTheme(1, ['charAt', 'charCodeAt'])],
        ]
    },
    {
        title: 'ReqExp',
        themes: [
            [root+'reqexp/replace', setTheme(1, ['replace'])],
            [root+'reqexp/match', setTheme(1, ['match'])],
            [root+'reqexp/search', setTheme(1, ['search'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/samples', 'Примеры'],
        ]
    },
]
