root = 'material-ui/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info', 'done'),
            getLink(root, 'install', 'done'),
            getLink(root, 'use', 'done'),
            [root+'main/styles', 'Стилизация', false, 'done'],
        ]
    },
    {
        title: 'Стилизация',
        themes: [
            [root+'styling/with-styles', setTheme(1, ['withStyles']), false, 'check'],
            [root+'styling/make-styles', setTheme(1, ['makeStyles']), false, 'check'],
            [root+'styling/spacing',     setTheme(5, ['spacing']), false, 'check'],
            [root+'styling/variants',    'Варианты CSS in JS', false, 'check'],
        ]
    },
]
