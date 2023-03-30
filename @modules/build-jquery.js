root = 'jquery/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/ajax',        'AJAX'],
            [root+'main/css',         'CSS'],
            [root+'main/methods',     'Методы'],
            [root+'main/attributes',  'Атрибуты. Object this'],
            [root+'main/input',       'Input'],
            [root+'main/include',     'Подключение файлов'],
            [root+'main/is',          'Псевдо-селекторы :visible и :hidden'],
            [root+'main/animation',   'Анимация'],
            [root+'main/get-element', 'Выборка элементов'],
            [root+'main/samples',     'Примеры'],
        ]
    },
    {
        title: 'События',
        themes: [
            [root+'actions/handling-events', 'Обработчики событий'],
            [root+'actions/hover-toggle',    'События hover() и toggle()'],
            [root+'actions/event-object',    'Объект события eventObject()'],
        ]
    },
]
