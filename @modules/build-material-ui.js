root = 'material-ui/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/use',  emoji.code+'Использование'],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/with-styles', emoji.chevron+setTheme(1, ['withStyles'])],
            [root+'methods/make-styles', emoji.chevron+setTheme(1, ['makeStyles'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/spacing',          setTheme(1, ['spacing'])],
            [root+'other/classes-props',    'Передача classes'],
            [root+'other/classes-override', 'Переопределение стилей из classes'],
            [root+'other/css-in-js',        'Варианты CSS in JS'],
        ]
    },
]
