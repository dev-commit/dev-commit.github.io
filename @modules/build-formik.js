root = 'formik/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/info',    emoji.theory+'Информация'],
            [root+'main/install', emoji.code+'Установка и настройка'],
            [root+'main/samples', emoji.code+'Примеры'],
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
        ]
    },
    {
        title: 'Валидиция',
        themes: [
            [root+'validation/info',               emoji.theory+'Информация'],
            [root+'validation/validate',           setTheme(3, ['validate'])],
            [root+'validation/validation-schema',  setTheme(3, ['validationSchema'])],
    
            [root+'validation/setFieldTouched',    setTheme(1, ['onBlur', 'setFieldTouched'])],
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
