root = 'html/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/semantics',       emoji.theory+'Семантика'],
            [root+'main/content-model',   'Content Model'],
            [root+'main/custom-elements', 'Custom Elements'],
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/img',     emoji.items+'Изображения'],
            [root+'elements/form',    emoji.items+'Элементы формы'],
            [root+'elements/link',    emoji.items+'Ссылки'],
            [root+'elements/video',   emoji.items+'Видео и аудио'],
            [root+'elements/table',   emoji.items+'Таблицы'],
        ]
    },
    {
        title: 'Теги',
        themes: [
            [root+'tags/fieldset',  setTheme(1, ['&lt;fieldset&gt;', '&lt;legend&gt;'])],
            [root+'tags/header',    setTheme(1, ['&lt;header&gt;', '&lt;section&gt;', '...'])],
            [root+'tags/iframe',    setTheme(1, ['&lt;iframe&gt;'])],
            [root+'tags/details',   setTheme(1, ['&lt;details&gt;', '&lt;summary&gt;'])],
            [root+'tags/datalist',  setTheme(1, ['&lt;datalist&gt;', '&lt;option&gt;'])],
        ]
    },
    {
        title: 'Атрибуты',
        themes: [
            [root+'attr/tabindex',    setTheme(1, ['tabindex'])],
            [root+'attr/aria-label',  setTheme(1, ['aria-label'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/yandex-map',  'Яндекс Карты'],
            [root+'other/samples',     'Примеры'],
        ]
    },
]
