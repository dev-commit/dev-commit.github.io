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
            [root+'variants/path-static',       emoji.chevron+'Статический путь'],
            [root+'variants/path-dynamic',      emoji.chevron+'Динамический путь'],
            [root+'variants/path-comparison',   emoji.chevron+'Сопоставление путей'],
            [root+'variants/navigation',        emoji.chevron+'Программная навигация'],
            [root+'variants/passing-props',     emoji.chevron+'Входные параметры (props)'],
            [root+'variants/navigation-guards', emoji.chevron+'Навигационные хуки'],
            [root+'variants/scroll-behavior',   emoji.chevron+'Поведение прокрутки страницы'],
            [root+'variants/lazy-loading',      emoji.chevron+'Леннивая загрузка маршрутов'],
            [root+'variants/active-link',       emoji.chevron+'Стилизация активной ссылки'],
        ]
    },
]
