ARR_MODULE = [
    {
        title: 'Use Case',
        themes: [
            ['git/usecase/squash-commit',   emoji.code+setTheme(4, ['Squash Commit'])],
            ['git/usecase/reset-changes',   emoji.code+setTheme(4, ['Отмена изменений'])],
            ['git/usecase/common',          'Общее'],
        ]
    },
    {
        title: 'Команды',
        accent: true,
        themes: [
            ['git/command/rebase',       setTheme(3, ['rebase'])],
            ['git/command/merge',        setTheme(3, ['merge'])],
            ['git/command/reset',        setTheme(3, ['reset'])],
            ['git/command/branch',       setTheme(3, ['branch'])],
            ['', ''],
            ['git/command/push',         setTheme(1, ['push'])],
            ['git/command/pull',         setTheme(1, ['pull'])],
            ['git/command/fetch',        setTheme(1, ['fetch'])],
            ['git/command/checkout',     setTheme(1, ['checkout'])],
            ['git/command/cherry-pick',  setTheme(1, ['cherry-pick'])],
            ['', ''],
            ['git/command/init',         setTheme(1, ['init'])],
            ['git/command/clone',        setTheme(1, ['clone'])],
            ['git/command/add',          setTheme(1, ['add'])],
            ['git/command/commit',       setTheme(1, ['commit'])],
            ['git/command/remote',       setTheme(1, ['remote'])],
            ['', ''],
            ['git/command/restore',      setTheme(1, ['restore'])],
            ['git/command/stash',        setTheme(1, ['stash'])],
            ['git/command/revert',       setTheme(1, ['revert'])],
            ['git/command/status',       setTheme(1, ['status'])],
            ['git/command/diff',         setTheme(1, ['diff'])],
            ['git/command/config',       setTheme(1, ['config'])],
            ['git/command/help',         setTheme(1, ['help'])],
            ['git/command/log',          setTheme(1, ['log'])],
            ['git/command/shortlog',     setTheme(1, ['shortlog'])],
            ['git/command/clean',        setTheme(1, ['clean'])],
            ['', ''],
            ['git/command/mv',           setTheme(1, ['mv'])],
            ['git/command/rm',           setTheme(1, ['rm'])],
            ['git/command/show',         setTheme(1, ['show'])],
            ['git/command/blame',        setTheme(1, ['blame'])],
            ['', ''],
            ['git/command/tag',          setTheme(5, ['tag'])],
        ]
    },
    {
        title: 'Теория',
        themes: [
            ['git/theory/info',       emoji.theory+'Информация'],
            ['git/theory/principle',  emoji.code+'Принцип работы'],
            ['git/theory/gitflow',    emoji.code+'Gitflow'],
            ['git/theory/vcs',        'Системы управления версиями'],
        ]
    },
    {
        title: 'GitHub',
        themes: [
            ['git/github/ssh',              'Подключение по SSH'],
            ['git/github/github-desktop',   'GitHub Desktop'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            ['git/other/smart-git',        'SmartGit'],
        ]
    },
]
