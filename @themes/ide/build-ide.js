root = 'ide/';

ARR_MODULE = [
    {
        title: 'VSCode',
        themes: [
            [root+'vscode/settings',  emoji.fire+'Настройки'],
            [root+'vscode/snippets',  'Сниппеты'],
            [root+'vscode/shortcuts', 'Shortcuts'],
        ]
    },
    {
        title: 'Cases',
        child: true,
        themes: [
            [root+'vscode/cases/workspases', emoji.star+'Несколько Workspaces'],
            [root+'vscode/cases/open-vscode-with-url', 'Opening VS Code with URLs'],
            [root+'vscode/cases/default-git-editor', 'Default editor for Git'],
            [root+'vscode/cases/linter-onsave', 'Linter OnSave'],
        ]
    },
    {
        title: 'Редакторы код',
        themes: [
            [root+'editors/codesandbox',  'CodeSandbox'],
            [root+'editors/sublime-text', 'Sublime Text'],
            [root+'editors/notepad',      'Notepad++'],
        ]
    },
    {
        title: 'Плагины',
        themes: [
            [root+'plugins/emmet', 'Emmet'],
        ]
    },
];
