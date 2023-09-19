root = 'git-managers/';

ARR_MODULE = [
    {
        title: 'GitHub',
        accent: true,
        themes: [
            [root+'github/ssh',                emoji.code+'Подключение по SSH'],
            [root+'github/github-pages',       emoji.star+'Github Pages'],
            [root+'github/github-cli',         emoji.star+'GitHub CLI'],
            [root+'github/github-desktop',     'GitHub Desktop'],
            [root+'github/github-api',         'Github API'],
            [root+'github/github-readme-stats', setTheme(1, ['github-readme-stats'])],
        ]
    },
    {
        title: 'Bitbucket',
        accent: true,
        themes: [
            [root+'bitbucket/ssh', emoji.code+'Подключение по SSH'],
        ]
    },
]
