root = 'vue-cli/';

ARR_MODULE = [
    {
        title: 'Vue CLI',
        themes: [
            [root+'vue-cli/info',              emoji.theory+'Информация'],
            [root+'vue-cli/components-system', 'Компоненты системы'],
            [root+'vue-cli/npm-command',       'Npm / Vue Command'],
            [root+'vue-cli/import_export',     setTheme(1, ['import', 'export'])],
            [root+'vue-cli/vscode',            'Настройка Visual Studio Code'],
        ]
    },
    {
        title: 'Плагины',
        themes: [
            [root+'plugins/vuetify',     'Vuetify'],
            [root+'plugins/fontawesome', 'FontAwesome'],
            [root+'plugins/vue-loader',  'Vue Loader'],
        ]
    },
    {
        title: 'Тестирование',
        themes: [
            [root+'testing/unit-testing', 'Модульное тестирование'],
            [root+'testing/vue-devtools', 'Vue-DevTools'],
        ]
    },
]
