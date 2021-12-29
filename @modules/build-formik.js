root = 'formik/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/info',         emoji.theory+'Информация'],
            [root+'main/install',      emoji.code+'Установка и настройка'],
            [root+'main/basic-sample', emoji.fire+'Базовый пример'],
        ]
    },
    {
        title: 'API',
        themes: [
            // [root+'api/Formik',           setTheme(1, ['Formik', 'Form', 'Field'])],
            [root+'api/Formik',           setTheme(1, ['&lt;Formik /&gt;', '&lt;Form /&gt;', '&lt;Field /&gt;'])],
            [root+'api/setFieldTouched',  setTheme(5, ['setFieldTouched()'])],
            [root+'api/withFormik',       setTheme(5, ['withFormik()'])],
        ]
    },
    {
        title: 'Хуки',
        themes: [
            [root+'hooks/useField',         emoji.chevron+setTheme(4, ['useField()'])],
            [root+'hooks/useFormikContext', emoji.chevron+setTheme(4, ['useFormikContext()'])],
        ]
    },
    {
        title: 'Валидиция',
        themes: [
            [root+'validation/validation-schema',  emoji.chevron+setTheme(4, ['validationSchema'])],
            [root+'validation/validate',           emoji.chevron+setTheme(4, ['validate'])],

        ]
    },
]
