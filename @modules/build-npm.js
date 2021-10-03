root = 'npm/';

ARR_MODULE = [
    {
        title: 'NPM',
        themes: [
            [root+'npm/info',                emoji.theory+'Информация'],
            [root+'npm/command',             emoji.code+'Команды'],
            [root+'npm/package-version',     emoji.code+'Установка версии пакета'],
            [root+'npm/nvm',                 'Node Version Manager'],
            [root+'npm/package-publishing',  'Публикация пакета'],
            [root+'npm/linux',               'Linux'],
            [root+'npm-package/http-server', setTheme(2, ['http-server'])],
        ]
    },
    {
        title: 'package.json',
        themes: [
            [root+'package-json/scripts',       emoji.code+'Скрипты'],
            [root+'package-json/dependencies', 'Виды зависимостей'],
        ]
    },
    {
        title: 'Yarn',
        themes: [
            [root+'yarn/main', 'Основное'],
        ]
    },
    {
        title: 'Терминал',
        themes: [
            [root+'terminal/command', emoji.code+'Команды'],
        ]
    },
]
