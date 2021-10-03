root = 'formik/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/info', emoji.theory+'Информация'],
            [root+'main/use',  emoji.code+'Использование'],
        ]
    },
    {
        title: 'Хуки',
        themes: [
            [root+'hooks/useField',         emoji.chevron+setTheme(4, ['useField'])],
            [root+'hooks/useFormikContext', emoji.chevron+setTheme(4, ['useFormikContext'])],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/formik',             emoji.chevron+setTheme(1, ['&lt;Formik /&gt;', '&lt;Form /&gt;'])],
            [root+'elements/validation-schema',  emoji.chevron+setTheme(4, ['validationSchema'])],
            [root+'elements/validate',           emoji.chevron+setTheme(4, ['validate'])],
            [root+'elements/set-field-touched',  emoji.chevron+setTheme(4, ['setFieldTouched'])+' (событие)'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/samples', 'Примеры'],
        ]
    },
]
