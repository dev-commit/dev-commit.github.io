root = 'wiki/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/settings', 'Настройка'],
            [root+'main/snippets', 'Сниппеты'],
            [root+'main/symbols',  'Символы'],
        ]
    },
    {
    	title: 'Tags & Classes',
        themes: [
            [root+'tags/tags',    emoji.star+'Tags'],
            [root+'tags/classes', emoji.star+'Classes'],
            [root+'tags/badges',  'Badges'],
            [root+'tags/list',    'Списки'],
            [root+'tags/link',    'Ссылки на разделы'],
        ]
    },
    {
    	title: 'Custom Elements',
        themes: [
            [root+'custom-elements/u-text',         setTheme(1, ['u-text-*', 'u-code-*', 'u-menu-*'])],
            [root+'custom-elements/u-inline',       setTheme(1, ['u-inline-*'])],
            [root+'custom-elements/u-lt',           setTheme(1, ['u-lt-*'])],
            [root+'custom-elements/u-block',        setTheme(1, ['u-block-*'])],
            [root+'custom-elements/u-link-wrapper', setTheme(1, ['u-link-wrapper'])],
            [root+'custom-elements/u-clipboard',    setTheme(1, ['u-clipboard'])],
            [root+'custom-elements/u-code-wrapper', setTheme(1, ['u-code-wrapper'])],
            [root+'custom-elements/u-code-title',   setTheme(1, ['u-code-title'])],
            [root+'custom-elements/u-message',      setTheme(1, ['u-message'])],
        ]
    },
    {
    	title: 'Vue Components',
        themes: [
            [root+'vue-components/v-two',              setTheme(1, ['v-two'])],
            [root+'vue-components/v-two-fix',          setTheme(1, ['v-two-fix'])],
            [root+'vue-components/v-two-code',         setTheme(1, ['v-two-code'])],
            [root+'vue-components/v-two-code-comment', setTheme(1, ['v-two-code-comment'])],
            [root+'vue-components/v-two-border',       setTheme(1, ['v-two-border'])],
            [],
            [root+'vue-components/v-code',      setTheme(1, ['v-code'])],
            [root+'vue-components/v-pre-npm',   setTheme(1, ['v-pre-npm'])],
            [],
            [root+'vue-components/v-method',    setTheme(1, ['v-method'])],
            [root+'vue-components/v-details',   setTheme(1, ['v-details'])],
            [root+'vue-components/v-iframe',    setTheme(1, ['v-iframe'])],
            [root+'vue-components/v-marker',    setTheme(1, ['v-marker'])],
            [root+'vue-components/v-alert',     setTheme(1, ['v-alert'])],
            [root+'vue-components/v-path',      setTheme(1, ['v-path'])],
            [root+'vue-components/v-copy',      setTheme(1, ['v-copy'])],
            [root+'vue-components/v-link',      setTheme(1, ['v-link'])],
            [root+'vue-components/v-tree',      setTheme(1, ['v-tree'])],
            [root+'vue-components/v-sandbox',   setTheme(1, ['v-sandbox'])],
        ]
    },
    {
        title: 'Структуры',
        themes: [
            [root+'structure/login', 'Логин и пароль'],
        ]
    },
];
