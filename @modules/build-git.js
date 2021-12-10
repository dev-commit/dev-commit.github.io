root = 'git/';

ARR_MODULE = [
    {
        title: 'Use Case',
        themes: [
            [root+'usecase/squash-commit',   emoji.code+setTheme(4, ['Squash Commit'])],
            [root+'usecase/reset-changes',   emoji.code+setTheme(4, ['Отмена изменений'])],
            [root+'usecase/common',          'Общее'],
        ]
    },
    {
        title: 'Команды',
        accent: true,
        themes: [
            [root+'command/rebase',       setTheme(3, ['rebase'])],
            [root+'command/merge',        setTheme(3, ['merge'])],
            [root+'command/reset',        setTheme(3, ['reset'])],
            [root+'command/branch',       setTheme(3, ['branch'])],
            ['', ''],
            [root+'command/push',         setTheme(1, ['push'])],
            [root+'command/pull',         setTheme(1, ['pull'])],
            [root+'command/fetch',        setTheme(1, ['fetch'])],
            [root+'command/checkout',     setTheme(1, ['checkout'])],
            [root+'command/cherry-pick',  setTheme(1, ['cherry-pick'])],
            ['', ''],
            [root+'command/init',         setTheme(1, ['init'])],
            [root+'command/clone',        setTheme(1, ['clone'])],
            [root+'command/add',          setTheme(1, ['add'])],
            [root+'command/commit',       setTheme(1, ['commit'])],
            [root+'command/remote',       setTheme(1, ['remote'])],
            ['', ''],
            [root+'command/restore',      setTheme(1, ['restore'])],
            [root+'command/stash',        setTheme(1, ['stash'])],
            [root+'command/revert',       setTheme(1, ['revert'])],
            [root+'command/status',       setTheme(1, ['status'])],
            [root+'command/diff',         setTheme(1, ['diff'])],
            [root+'command/config',       setTheme(1, ['config'])],
            [root+'command/help',         setTheme(1, ['help'])],
            [root+'command/log',          setTheme(1, ['log'])],
            [root+'command/shortlog',     setTheme(1, ['shortlog'])],
            [root+'command/clean',        setTheme(1, ['clean'])],
            ['', ''],
            [root+'command/mv',           setTheme(1, ['mv'])],
            [root+'command/rm',           setTheme(1, ['rm'])],
            [root+'command/show',         setTheme(1, ['show'])],
            [root+'command/blame',        setTheme(1, ['blame'])],
            ['', ''],
            [root+'command/tag',          setTheme(5, ['tag'])],
        ]
    },
    {
        title: 'Теория',
        themes: [
            [root+'theory/info',       emoji.theory+'Информация'],
            [root+'theory/principle',  emoji.code+'Принцип работы'],
            [root+'theory/gitflow',    emoji.code+'Gitflow'],
            [root+'theory/vcs',        'Системы управления версиями'],
        ]
    },
    {
        title: 'GitHub',
        themes: [
            [root+'github/ssh',                'Подключение по SSH'],
            [root+'github/github-desktop',     'GitHub Desktop'],
            [root+'github/github-api',         'Github API'],
            [root+'github/github-readme-stats', setTheme(1, ['github-readme-stats'])],
        ]
    },
    {
        title: 'Bitbucket',
        themes: [
            [root+'bitbucket/ssh', 'Подключение по SSH'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/smart-git',        'SmartGit'],
        ]
    },
]
