root = 'testing/';

ARR_MODULE = [
    {
        title: 'Инструменты',
        themes: [
            [root+'utils/utils',       emoji.star+'Инструменты'],
            [root+'utils/chrome-dev-tools', 'Chrome DevTools'],
        ]
    },
    {
        title: 'Теория',
        themes: [
            [root+'theory/info',  emoji.theory+'Основные термины'],
            [root+'theory/levels',  emoji.theory+'Уровни тестирования'],
            [root+'theory/types',  emoji.theory+'Виды тестирования'],
        ]
    },
    {
        title: 'Пирамида тестирования',
        themes: [
            [root+'pyramid/pyramid',          emoji.theory+'Пирамида тестирования'],
            [root+'pyramid/unit-test',        emoji.star+'1. Юнит-тесты'],
            [root+'pyramid/integration-test', emoji.star+'2. Интеграционные тесты'],
            [root+'pyramid/e2e-test',         emoji.star+'3. E2E-тесты'],
        ]
    },
    {
        title: 'Концепции',
        themes: [
            [root+'concepts/tdd',   emoji.items+'TDD'],
            [root+'concepts/bdd',   emoji.items+'BDD'],
            [root+'concepts/first', emoji.items+'FIRST'],
        ]
    },
]
