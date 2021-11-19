root = 'material-ui/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/use',     emoji.code+'Использование'],
            [root+'main/spacing', setTheme(1, ['spacing'])],
        ]
    },
    {
        title: 'Методы',
        themes: [
            [root+'methods/with-styles', emoji.chevron+setTheme(1, ['withStyles'])],
            [root+'methods/make-styles', emoji.chevron+setTheme(1, ['makeStyles'])],
        ]
    },
]
