root = 'react-testing/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'info'),
        ]
    },
    {
        title: '1. React Testing Library',
        themes: [
            [root+'react-tsting-library/info',                  emoji.theory+'Информация'],
            [root+'react-tsting-library/npm',                   emoji.settings+'Установка'],
            [root+'react-tsting-library/methods',               emoji.fire+'Методы'],
            [root+'react-tsting-library/code-react-cli',        'Использование с CreateReactApp'],
            [root+'react-tsting-library/code-react-cli-samples', emoji.code+'Примеры'],
        ]
    },
    {
        title: '2. React Test Renderer',
        themes: [
            [root+'react-test-renderer/info',  emoji.theory+'Информация'],
            [root+'react-test-renderer/npm',   emoji.settings+'Установка'],
            [root+'react-test-renderer/code',  emoji.code+'Примеры'],
        ]
    },
]
