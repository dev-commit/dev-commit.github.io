ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['wiki/main/settings',         'Настройка'],
            ['wiki/main/snippets',         'Сниппеты'],
            ['wiki/main/symbols',          'Символы'],
        ]
    },
    {
    	title: 'Custom Elements',
        themes: [
            ['wiki/custom-elements/labels',    emoji.chevron+'Метки'],
            ['wiki/custom-elements/code',      emoji.chevron+'Код'],
            ['wiki/custom-elements/links',     emoji.chevron+'Ссылки'],
            ['wiki/custom-elements/blocks',    emoji.chevron+'Блоки'],
            ['wiki/custom-elements/alert',     emoji.chevron+'Сообщения'],
            ['wiki/custom-elements/clipboard', emoji.chevron+'Clipboard'],
        ]
    },
    {
    	title: 'Vue Components',
        themes: [
            ['wiki/vue-components/v-two',       setTheme(1, ['v-two'])],
            ['wiki/vue-components/v-two-fix',   setTheme(1, ['v-two-fix'])],
            ['wiki/vue-components/v-two-code',  setTheme(1, ['v-two-code'])],

            ['wiki/vue-components/v-code',      setTheme(1, ['v-code'])],
            ['wiki/vue-components/v-pre-npm',   setTheme(1, ['v-pre-npm'])],

            ['wiki/vue-components/v-method',    setTheme(1, ['v-method'])],
            ['wiki/vue-components/v-details',   setTheme(1, ['v-details'])],
            ['wiki/vue-components/v-iframe',    setTheme(1, ['v-iframe'])],
        ]
    },
    {
    	title: 'Class',
        themes: [
            ['wiki/class/links',   'Ссылки на разделы'],
        ]
    },
];
