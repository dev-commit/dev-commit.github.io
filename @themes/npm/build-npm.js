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
            
        ]
    },
    {
        title: 'Пакеты',
        themes: [
            [root+'packages/http-server',  setTheme(2, ['http-server'])],
            [root+'packages/json-server',  setTheme(2, ['json-server'])],
            [root+'packages/npm-check-updates', setTheme(2, ['npm-check-updates'])],
            [root+'packages/concurrently', setTheme(2, ['concurrently'])],
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
]
