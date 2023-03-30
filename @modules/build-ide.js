root = 'ide/';

ARR_MODULE = [
    {
        title: 'VSCode',
        themes: [
            [root+'vscode/info',              emoji.theory+'Информация'],
            [root+'vscode/plugins',           emoji.fire+'Плагины'],
            [root+'vscode/snippets',          emoji.code+'Сниппеты'],
            [root+'vscode/settings',          emoji.code+'Настройки'],
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
