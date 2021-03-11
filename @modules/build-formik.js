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
            ['formik/hooks/useField',  emoji.chevron+setTheme(4, ['useField'])], 
        ]
    },
    {
        title: 'Элементы',
        themes: [
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
