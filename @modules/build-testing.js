root = 'testing/';

ARR_MODULE = [
    {
        title: 'Теория',
        themes: [
            [root+'theory/info',  emoji.theory+'Тестирование'],
            [root+'theory/types', emoji.theory+'Разновидности'],
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
            [root+'concepts/tdd',   emoji.penguin+'TDD'],
            [root+'concepts/bdd',   emoji.penguin+'BDD'],
            [root+'concepts/first', emoji.penguin+'FIRST'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            [root+'main/frameworks',       emoji.pizza+'Фреймворки'],
            [root+'main/chrome-dev-tools', 'Chrome DevTools'],
        ]
    },
]
