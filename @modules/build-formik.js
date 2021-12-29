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
            [root+'api/Formik',           setTheme(5, ['1.0'])+ ' '+setTheme(1, ['&lt;Formik /&gt;', '&lt;Form /&gt;'])],
            [root+'api/Field',            setTheme(5, ['2.1'])+ ' '+setTheme(1, ['&lt;Field /&gt;'])],
            [root+'api/useField',         setTheme(5, ['2.2'])+ ' '+setTheme(3, ['useField'])],

            ['', ''],

            [root+'api/useFormikContext', setTheme(3, ['useFormikContext'])],

            [root+'api/setFieldTouched',  setTheme(5, ['setFieldTouched'])],
            [root+'api/withFormik',       setTheme(5, ['withFormik'])],
        ]
    },
    {
        title: 'Хуки',
        themes: [

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
