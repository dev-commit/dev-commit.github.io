root = 'vue-router/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/src-script',           'Подключение через &lt;script&gt;'],
            [root+'main/src-npm',              'Подключение через NPM'],
            [root+'main/server-configuration', 'Конфигурование сервера'],
        ]
    },
    {
        title: 'Варианты',
        themes: [
            [root+'variants/path-static',       'Статический путь'],
            [root+'variants/path-dynamic',      'Динамический путь'],
            [root+'variants/path-comparison',   'Сопоставление путей'],
            [root+'variants/navigation',        'Программная навигация'],
            [root+'variants/passing-props',     'Входные параметры (props)'],
            [root+'variants/navigation-guards', 'Навигационные хуки'],
            [root+'variants/scroll-behavior',   'Поведение прокрутки страницы'],
            [root+'variants/lazy-loading',      'Леннивая загрузка маршрутов'],
            [root+'variants/active-link',       'Стилизация активной ссылки'],
        ]
    },
]
