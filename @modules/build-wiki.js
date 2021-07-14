ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['@wiki/main/settings',         'Настройка'],
            ['@wiki/main/snippets',         'Сниппеты'],
            ['@wiki/main/symbols',          'Символы'],
        ]
    },
    {
    	title: 'Custom Elements',
        themes: [
            ['@wiki/custom-elements/u-text',         setTheme(1, ['u-text-*', 'u-code-*', 'u-menu-*'])],
            ['@wiki/custom-elements/u-block',        setTheme(1, ['u-block-*'])],
            ['@wiki/custom-elements/u-link-wrapper', setTheme(1, ['u-link-wrapper'])],
            ['@wiki/custom-elements/u-clipboard',    setTheme(1, ['u-clipboard'])],
            ['@wiki/custom-elements/u-code-wrapper', setTheme(1, ['u-code-wrapper'])],
            ['@wiki/custom-elements/u-code-title',   setTheme(1, ['u-code-title'])],
            ['@wiki/custom-elements/u-message',      setTheme(1, ['u-message'])],
        ]
    },
    {
    	title: 'Vue Components',
        themes: [
            ['@wiki/vue-components/v-two',       setTheme(1, ['v-two'])],
            ['@wiki/vue-components/v-two-fix',   setTheme(1, ['v-two-fix'])],
            ['@wiki/vue-components/v-two-code',  setTheme(1, ['v-two-code'])],

            ['@wiki/vue-components/v-code',      setTheme(1, ['v-code'])],
            ['@wiki/vue-components/v-pre-npm',   setTheme(1, ['v-pre-npm'])],

            ['@wiki/vue-components/v-method',    setTheme(1, ['v-method'])],
            ['@wiki/vue-components/v-details',   setTheme(1, ['v-details'])],
            ['@wiki/vue-components/v-iframe',    setTheme(1, ['v-iframe'])],
            ['@wiki/vue-components/v-marker',    setTheme(1, ['v-marker'])],
        ]
    },
    {
    	title: 'Class',
        themes: [
            ['@wiki/class/links',   'Ссылки на разделы'],
        ]
    },
];
