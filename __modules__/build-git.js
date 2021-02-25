ARR_MODULE = [
    {
        title: 'Use Case',
        themes: [
            ['git/usecase/common',            'Общее'],
            ['git/usecase/squash-commit',     'Squash Commit'],
            ['git/usecase/resolve-conflists', 'Разрешение конфликтов merge'],
            ['git/usecase/reset-changes',     'Отмена изменений'],
            ['git/usecase/other',             'Прочее'],
        ]
    },
    {
        title: 'Команды Основные',
        themes: [
            ['git/command/init',         setTheme(1, ['init'])],
            ['git/command/clone',        setTheme(1, ['clone'])],
            ['git/command/add',          setTheme(1, ['add'])],
            ['git/command/commit',       setTheme(1, ['commit'])],
            ['git/command/push',         setTheme(1, ['push'])],
            ['git/command/fetch',        setTheme(1, ['fetch'])],
            ['git/command/pull',         setTheme(1, ['pull'])],
            ['git/command/branch',       setTheme(1, ['branch'])],
            ['git/command/checkout',     setTheme(1, ['checkout'])],
            ['git/command/merge',        setTheme(1, ['merge'])],
            ['git/command/rebase',       setTheme(1, ['rebase'])],
            ['git/command/cherry-pick',  setTheme(1, ['cherry-pick'])],
            ['git/command/revert',       setTheme(1, ['revert'])],
            ['git/command/stash',        setTheme(1, ['stash'])],
            ['git/command/reset',        setTheme(1, ['reset'])],
        ]
    },
    {
        title: 'Команды Дополнительно',
        themes: [
            ['git/command/diff',         setTheme(1, ['diff'])],
            ['git/command/config',       setTheme(1, ['config'])],
            ['git/command/help',         setTheme(1, ['help'])],
            ['git/command/status',       setTheme(1, ['status'])],
            ['git/command/log',          setTheme(1, ['log'])],
            ['git/command/clean',        setTheme(1, ['clean'])],
            ['git/main/command',         setTheme(1, ['...'])],
        ]
    },
    {
        title: 'GitHub',
        themes: [
            ['git/github/terminal-connect', 'Подключение по SSH'],
            ['git/github/info',             'Теория'],
            ['git/github/github-desktop',   'GitHub Desktop'],
            ['git/github/smart-git',        'SmartGit'],
        ]
    },
    {
        title: 'Теория',
        themes: [
            ['git/theory/info',    'Информация'],
            ['git/theory/vcs',     'Системы управления версиями'],
            ['git/theory/gitflow', 'Gitflow'],
        ]
    },
]
