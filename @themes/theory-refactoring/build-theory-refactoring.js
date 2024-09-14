root = 'theory-refactoring/';

ARR_MODULE = [
    {
        title: 'Общее',
        themes: [
            [root+'common/imports',   emoji.star+'Порядок импортов'],
            [root+'common/version',   'Политика версионирования'],
            [root+'common/name-case', 'Соглашение по именованию'],
            [root+'common/prefix',    'Префиксы для функций'],
        ]
    },
    {
        title: 'Стандарты кода',
        themes: [
            [root+'best-practices/dry',           emoji.chevron+'DRY'],
            [root+'best-practices/kiss',          emoji.chevron+'KISS'],
            [root+'best-practices/yagni',         emoji.chevron+'YAGNI'],
            [root+'best-practices/code-smell',    'Запахи кода'],
            [root+'best-practices/refactoring',   'Рефакторинг'],
            [root+'best-practices/code-standart', 'Стандарты кода'],
        ]
    },
]
