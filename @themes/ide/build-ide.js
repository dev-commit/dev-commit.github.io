root = 'ide/';

ARR_MODULE = [
    {
        title: 'VSCode',
        themes: [
            [root+'vscode/info',              emoji.theory+'Информация'],
            [root+'vscode/plugins',           emoji.code+'Плагины'],
            [root+'vscode/snippets',          'Сниппеты'],
            [root+'vscode/settings',          'Настройки'],
            [root+'vscode/shortcuts',         'Shortcuts'],
            [root+'vscode/extension-eslint',   setTheme(1, ['ESLint'])],
            [root+'vscode/extension-prettier', setTheme(1, ['Prettier'])],
        ]
    },
    {
        title: 'Редакторы код',
        themes: [
            [root+'editors/atom',          'Atom'],
            [root+'editors/sublime-text',  'Sublime Text'],
            [root+'editors/codesandbox',   'CodeSandbox'],
        ]
    },
    {
        title: 'Плагины',
        themes: [
            [root+'plugins/emmet',  'Emmet'],
        ]
    },
];
