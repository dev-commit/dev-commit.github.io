root = 'material-ui/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'use'),
            [root+'main/bugs-styled-components', 'Bugs Styled Components'],
            [root+'main/spacing',                setTheme(1, ['spacing'])],
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
