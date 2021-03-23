ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            ['formik/main/info', emoji.theory+'Информация'],
            ['formik/main/use',  emoji.code+'Использование'],
        ]
    },
    {
        title: 'Хуки',
        themes: [
            ['formik/hooks/useField',         emoji.chevron+setTheme(4, ['useField'])],
            ['formik/hooks/useFormikContext', emoji.chevron+setTheme(4, ['useFormikContext'])],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            ['formik/elements/formik',             emoji.chevron+setTheme(1, ['&lt;Formik /&gt;', '&lt;Form /&gt;'])],
            ['formik/elements/validation-schema',  emoji.chevron+setTheme(4, ['validationSchema'])],
            ['formik/elements/validate',           emoji.chevron+setTheme(4, ['validate'])],
            ['formik/elements/set-field-touched',  emoji.chevron+setTheme(4, ['setFieldTouched'])+' (событие)'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['formik/other/samples', 'Примеры'],
        ]
    },
]
