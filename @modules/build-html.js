ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['html/main/info',            emoji.theory+'Информация'],
            ['html/main/semantics',       emoji.theory+'Семантика'],
            ['html/main/content-model',   'Content Model'],
            ['html/main/custom-elements', 'Custom Elements'],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            ['html/elements/img',     emoji.cookie+'Изображения'],
            ['html/elements/form',    emoji.cookie+'Элементы формы'],
            ['html/elements/link',    emoji.cookie+'Ссылки'],
            ['html/elements/video',   emoji.cookie+'Видео и аудио'],
            ['html/elements/table',   emoji.cookie+'Таблицы'],
        ]
    },
    {
        title: 'Теги',
        themes: [
            ['html/tags/fieldset',  setTheme(1, ['&lt;fieldset&gt;', '&lt;legend&gt;'])],
            ['html/tags/header',    setTheme(1, ['&lt;header&gt;', '&lt;section&gt;', '...'])],
            ['html/tags/iframe',    setTheme(1, ['&lt;iframe&gt;'])],
            ['html/tags/details',   setTheme(1, ['&lt;details&gt;', '&lt;summary&gt;'])],
            ['html/tags/datalist',  setTheme(1, ['&lt;datalist&gt;', '&lt;option&gt;'])],
        ]
    },
    {
        title: 'Атрибуты',
        themes: [
            ['html/attr/tabindex',    setTheme(1, ['tabindex'])],
            ['html/attr/aria-label',  setTheme(1, ['aria-label'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['html/other/yandex-map',  'Яндекс Карты'],
            ['html/other/samples',     'Примеры'],
        ]
    },
]
