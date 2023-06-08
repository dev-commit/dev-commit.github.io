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
        title: 'Основное',
        themes: [
            [root+'main/merge-vs-rebase', emoji.star+'Merge vs Rebase'],
        ]
    },
    {
        title: 'Команды',
        accent: true,
        themes: [
            [root+'command/rebase',       setTheme(3, ['rebase'])],
            [root+'command/merge',        setTheme(3, ['merge'])],
            [root+'command/reset',        setTheme(3, ['reset'])],
            [root+'command/push',         setTheme(3, ['push'])],
            [root+'command/pull',         setTheme(3, ['pull'])],
            [root+'command/fetch',        setTheme(3, ['fetch'])],
            [root+'command/branch',       setTheme(3, ['branch'])],
            [root+'command/checkout',     setTheme(3, ['checkout'])],
            [root+'command/cherry-pick',  setTheme(3, ['cherry-pick'])],
            ['', ''],
            [root+'command/init',         setTheme(1, ['init'])],
            [root+'command/clone',        setTheme(1, ['clone'])],
            [root+'command/add',          setTheme(1, ['add'])],
            [root+'command/commit',       setTheme(1, ['commit'])],
            [root+'command/remote',       setTheme(1, ['remote'])],
            [root+'command/tag',          setTheme(1, ['tag'])],
            [root+'command/cherry',       setTheme(1, ['cherry'])],
            ['', ''],
            [root+'command/restore',      setTheme(6, ['restore'])],
            [root+'command/stash',        setTheme(6, ['stash'])],
            [root+'command/revert',       setTheme(6, ['revert'])],
            [root+'command/status',       setTheme(6, ['status'])],
            [root+'command/diff',         setTheme(6, ['diff'])],
            [root+'command/config',       setTheme(6, ['config'])],
            [root+'command/help',         setTheme(6, ['help'])],
            [root+'command/log',          setTheme(6, ['log'])],
            [root+'command/shortlog',     setTheme(6, ['shortlog'])],
            [root+'command/clean',        setTheme(6, ['clean'])],
            [root+'command/bisect',       setTheme(6, ['bisect'])],
            [root+'command/mv',           setTheme(6, ['mv'])],
            [root+'command/rm',           setTheme(6, ['rm'])],
            [root+'command/show',         setTheme(6, ['show'])],
            [root+'command/blame',        setTheme(6, ['blame'])],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/crlf', 'LF и CRLF'],
        ]
    },
    {
        title: 'GitHub',
        selected: true,
        themes: [
            [root+'github/ssh',                emoji.code+'Подключение по SSH'],
            [root+'github/github-cli',         emoji.fire+'GitHub CLI'],
            [root+'github/github-desktop',     'GitHub Desktop'],
            [root+'github/github-api',         'Github API'],
            [root+'github/github-readme-stats', setTheme(1, ['github-readme-stats'])],
        ]
    },
    {
        title: 'Bitbucket',
        selected: true,
        themes: [
            [root+'bitbucket/ssh', emoji.code+'Подключение по SSH'],
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
        title: 'Технологии',
        themes: [
            [root+'tech/git-submodules', 'Git Submodules'],
            [root+'tech/smart-git',      'SmartGit'],
        ]
    },
]
