root = 'vue-cli/';

ARR_MODULE = [
    {
        title: 'Vue CLI',
        themes: [
            getLink(root, 'info'),
            [root+'main/components-system', 'Компоненты системы'],
            [root+'main/npm-command',       'Npm / Vue Command'],
            [root+'main/import-export',     setTheme(1, ['import', 'export'])],
            [root+'main/vscode',            'Настройка Visual Studio Code'],
        ]
    },
]
