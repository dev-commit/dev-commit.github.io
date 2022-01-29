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
            [root+'api/Formik',           setTheme(1, ['&lt;Formik /&gt;'])],
            [root+'api/Form',             setTheme(1, ['&lt;Form /&gt;'])],
            [root+'api/Field',            setTheme(1, ['&lt;Field /&gt;'])],
            [root+'api/useField',         setTheme(3, ['useField()'])],
            [root+'api/useFormikContext', setTheme(3, ['useFormikContext()'])],
            [root+'api/withFormik',       setTheme(5, ['withFormik()'])],
            ['', ''],
            [root+'api/setFieldTouched',  setTheme(5, ['setFieldTouched'])],
        ]
    },
    {
        title: 'Валидиция',
        themes: [
            [root+'validation/validation-schema',  setTheme(2, ['validationSchema'])],
            [root+'validation/validate',           setTheme(2, ['validate'])],
        ]
    },
    {
        title: 'TypeScript',
        themes: [
            [root+'typescript/onSubmit',         'onSubmit'],
            [root+'typescript/validationSchema', 'validationSchema'],
            [root+'typescript/FormikProps',      'FormikProps'],
        ]
    },
]
