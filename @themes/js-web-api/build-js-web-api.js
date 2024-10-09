root = 'js-web-api/';

ARR_MODULE = [
    {
        title: 'Клиентское хранилище',
        themes: [
            [root+'client-storage/web-storage', setTheme(1, ['localStorage', 'sessionStorage'])],
            [root+'client-storage/indexed-db',  setTheme(1, ['IndexedDB'])],
            [root+'client-storage/cookie',      setTheme(1, ['cookie'])],
        ]
    },
    {
        title: 'События',
        themes: [
            [root+'dom-events/propagation-model',     emoji.theory+'Модель распространения событий'],
            [root+'dom-events/propagation-capturing', emoji.star+'1. Фаза погружения'],
            [root+'dom-events/propagation-target',    emoji.star+'2. Фаза цели'],
            [root+'dom-events/propagation-bubbling',  emoji.star+'3. Фаза всплытия'],
            [root+'dom-events/propagation-delegate',  emoji.fire+'Делегирование событий'],
            [root+'dom-events/list-events',           'Список событий'],
            [root+'dom-events/params-event',          'Объект события (Event)'],
            [root+'dom-events/samples',               emoji.code+'Примеры'],
        ]
    },
    {
        title: 'Методы событий',
        themes: [
            [root+'dom-events-methods/preventDefault',           setTheme(3, ['event.preventDefault'])],
            [root+'dom-events-methods/stopPropagation',          setTheme(3, ['event.stopPropagation'])],
            [root+'dom-events-methods/stopImmediatePropagation', setTheme(3, ['event.stopImmediatePropagation'])],
            [root+'dom-events-methods/addEventListener',         setTheme(1, ['addEventListener', 'onclick', '...'])],
        ]
    },
    {
        title: 'Элементы формы',
        themes: [
            [root+'form/input', setTheme(1, ['&lt;input&gt;', '&lt;select&gt;'])],
        ]
    },
    {
        title: 'Методы и свойства',
        themes: [
            [root+'dom-methods/attribute',       setTheme(1, ['attributes'])],
            [root+'dom-methods/class-list',      setTheme(1, ['classList'])],
            [root+'dom-methods/css',             setTheme(1, ['style', 'getComputedStyle'])],
            [root+'dom-methods/contains',        setTheme(1, ['contains', 'compareDocumentPosition'])],
            [root+'dom-methods/media-queries',   setTheme(1, ['matchMedia'])],
            [root+'dom-methods/location',        setTheme(1, ['open', 'location'])],
        ]
    },
    {
        title: 'Документ и объекты страницы',
        themes: [
            [root+'dom/info',            emoji.theory+'Информация'],
            [root+'dom/dom',             emoji.theory+'DOM'],
            [root+'dom/bom',             emoji.theory+'BOM'],
            [root+'dom/node',            setTheme(1, ['nodeType', 'nodeName', 'tagName'])],
            [root+'dom/element-get',     emoji.coin+'1. Выборка элементов'],
            [root+'dom/element-method',  emoji.coin+'2. Методы и свойства элементов'],
            [root+'dom/element-create',  emoji.coin+'3. Добавление и удаление узлов'],
            [root+'dom/multi-insert',    emoji.coin+'4. Мультивставка'],
            [root+'dom/metrics',         emoji.coin+'5. Размеры и прокрутка элементов'],
            [root+'dom/metrics-window',  emoji.coin+'6. Размеры и прокрутка страницы'],
        ]
    },
]
