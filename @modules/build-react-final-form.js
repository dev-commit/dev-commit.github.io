root = 'react-final-form/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
        ]
    },
    {
        title: 'API',
        themes: [
            [root+'api/FormSpy',  setTheme(1, ['&lt;FormSpy /&gt;'])],
            [root+'api/Field',    setTheme(1, ['&lt;Field /&gt;'])],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/simple',    'Простой пример'],
            [root+'samples/type-form', 'Тип для &lt;Form /&gt;'],
        ]
    },
]
