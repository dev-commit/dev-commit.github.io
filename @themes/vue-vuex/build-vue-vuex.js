root = 'vue-vuex/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
        ]
    },
    {
        title: 'Элементы',
        themes: [
            [root+'elements/store',     '0. Хранилище (store)'],
            [root+'elements/state',     '1. Состояние (state)'],
            [root+'elements/getters',   '2. Геттеры (getters)'],
            [root+'elements/mutations', '3. Мутации (mutations)'],
            [root+'elements/actions',   '4. Действия (actions)'],
            [root+'elements/modules',   '5. Модули (modules)'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/samples', 'Примеры'],
        ]
    },
]
