root = 'linux/';

ARR_MODULE = [
    {
        title: 'WSL',
        themes: [
            [root+'wsl/info', emoji.theory+'Информация'],
            [root+'wsl/nvm',  emoji.code+'Установка NVM'],
        ]
    },
    {
        title: 'Ubuntu (Debian)',
        themes: [
            [root+'ubuntu/command', 'Команды'],
            [root+'ubuntu/package', 'Пакеты'],
            [root+'ubuntu/nodejs',  emoji.libs+'Node.js'],
            [root+'ubuntu/npm',     emoji.libs+'NPM'],
            [root+'ubuntu/setting', 'Настройка'],
            [root+'ubuntu/other',   'Прочее'],
        ]
    },
]
