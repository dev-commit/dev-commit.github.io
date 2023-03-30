root = 'english/';

ARR_MODULE = [
    {
        title: 'Теория',
        themes: [
            [root+'theory/data',   emoji.theory+'Данные'],
            [root+'theory/levels', emoji.theory+'Уровни английского'],
        ]
    },
    {
        title: 'Времена',
        accent: true,
        themes: [
            [root+'tenses/tenses-table', emoji.fire+'Таблица времен'],
            [root+'tenses/tobe',         emoji.star+'ToBe vs Verb'],
            [root+'tenses/irregular-verbs', 'Формы неправильных глаголов'],
        ]
    },
    {
        title: 'Артикли',
        accent: true,
        themes: [
            [root+'articles/info', emoji.theory+'Информация'],
            [root+'articles/an',   setTheme(1, ['a', 'an'])],
            [root+'articles/some', setTheme(1, ['some', 'any'])],
            [root+'articles/the',  setTheme(1, ['the'])],
        ]
    },
    {
        title: 'Местоимения',
        accent: true,
        themes: [
            [root+'pronouns/this',       'Указательные'],
            [root+'pronouns/object',     'Объектные'],
            [root+'pronouns/possessive', 'Притяжательные'],
        ]
    },
    {
        title: 'Общее',
        themes: [
            [root+'common/location',              'Местоположение'],
            [root+'common/adjectives-comparison', 'Степени сравнения прилагательных'],
            [root+'common/other',                 emoji.icecream+'Прочее'],
        ]
    },
    {
        title: 'Правила',
        themes: [
            [root+'rules/plurals', 'Множественное число'],
        ]
    },
    {
        title: 'Вопросы',
        themes: [
            [root+'questions/question-word-order', emoji.code+'Порядок слов в вопросе'],
            [root+'questions/question-types',      emoji.code+'Типы вопросов'],
        ]
    },
    {
        title: 'Справочники',
        themes: [

            [root+'directories/country',  emoji.theory+'Страны и национальности'],
            [root+'directories/family',   emoji.theory+'Семья'],
            [root+'directories/phrases',  'Фразы'],
            [root+'directories/words',    'Слова'],
        ]
    },
]
