root = 'english/';

ARR_MODULE = [
    {
        title: 'Теория',
        themes: [
            [root+'theory/data', emoji.theory+'Данные'],
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
        title: 'Общее',
        themes: [
            [root+'common/plurals', 'Множественное число'],
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

            [root+'directories/country',  emoji.cookie+'Страны и национальности'],
            [root+'directories/family',   emoji.cookie+'Семья'],
            [root+'directories/phrases',  'Фразы'],
            [root+'directories/words',    'Слова'],
        ]
    },
    {
        title: 'Прочее',
        themes: [

            [root+'other/other',   'Прочее'],
        ]
    },
]
