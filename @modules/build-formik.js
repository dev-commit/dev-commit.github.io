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
            [root+'api/Formik',           setTheme(5, ['1.0'])+ ' '+setTheme(1, ['&lt;Formik /&gt;'])],
            [root+'api/Form',             setTheme(5, ['2.0'])+ ' '+setTheme(1, ['&lt;Form /&gt;'])],
            [root+'api/Field',            setTheme(5, ['3.1'])+ ' '+setTheme(1, ['&lt;Field /&gt;'])],
            [root+'api/useField',         setTheme(5, ['3.2'])+ ' '+setTheme(3, ['useField'])],
            ['', ''],
            [root+'api/useFormikContext', setTheme(3, ['useFormikContext'])],
            [root+'api/setFieldTouched',  setTheme(5, ['setFieldTouched'])],
            [root+'api/withFormik',       setTheme(5, ['withFormik'])],
        ]
    },
    {
        title: 'Валидиция',
        themes: [
            [root+'validation/validation-schema',  setTheme(1, ['validationSchema'])],
            [root+'validation/validate',           setTheme(2, ['validate'])],
        ]
    },
    {
        title: 'TypeScript',
        themes: [
            [root+'typescript/onSubmit',         setTheme(1, ['onSubmit'])],
            [root+'typescript/validationSchema', setTheme(1, ['validationSchema'])],
            [root+'typescript/FormikProps',      setTheme(1, ['FormikProps'])],
        ]
    },
]
