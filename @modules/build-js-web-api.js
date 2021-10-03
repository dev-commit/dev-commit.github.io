root = 'js-web-api/';

ARR_MODULE = [
    {
        title: 'События',
        themes: [
            [root+'dom-events/handlers',          emoji.pizza+'Обработчики событий'],
            [root+'dom-events/list-events',       emoji.pizza+'Список событий'],
            [root+'dom-events/params-event',      emoji.pizza+'Объект события (Event)'],
        
            [root+'dom-events/propagation-model',     emoji.baseball+'Модель распространения событий'],
            [root+'dom-events/propagation-capturing', emoji.baseball+'1. Фаза погружения'],
            [root+'dom-events/propagation-target',    emoji.baseball+'2. Фаза цели'],
            [root+'dom-events/propagation-bubbling',  emoji.baseball+'3. Фаза всплытия'],
        
            [root+'dom-events/propagation-delegate',  emoji.fire+'Делегирование событий'],
            [root+'dom-events/prevent',               setTheme(1, ['event.preventDefault()'])],
            [root+'dom-events/samples',               'Примеры'],
        ]
    },
    {
        title: 'Документ и объекты страницы',
        themes: [
            [root+'dom/info',            emoji.theory+'Информация'],
            [root+'dom/dom',             emoji.theory+'DOM'],
            [root+'dom/bom',             emoji.theory+'BOM'],
            [root+'dom/node',            setTheme(1, ['nodeType', 'nodeName', 'tagName'])],
            [root+'dom/element-get',     emoji.baseball+'1. Выборка элементов'],
            [root+'dom/element-method',  emoji.baseball+'2. Методы и свойства элементов'],
            [root+'dom/element-create',  emoji.baseball+'3. Добавление и удаление узлов'],
            [root+'dom/multi-insert',    emoji.baseball+'4. Мультивставка'],
            [root+'dom/metrics',         emoji.baseball+'5. Размеры и прокрутка элементов'],
            [root+'dom/metrics-window',  emoji.baseball+'6. Размеры и прокрутка страницы'],
        
            [root+'dom/attribute',       setTheme(1, ['attributes'])],
            [root+'dom/class-list',      setTheme(1, ['classList'])],
            [root+'dom/css',             setTheme(1, ['style', 'getComputedStyle'])],
            [root+'dom/input',           setTheme(1, ['input', 'select'])],
            [root+'dom/contains',        setTheme(1, ['contains', 'compareDocumentPosition'])],
            [root+'dom/media-queries',   setTheme(1, ['matchMedia'])],
            [root+'dom/location',        setTheme(1, ['open', 'location'])],
        ]
    },
]
