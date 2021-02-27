ARR_MODULE = [
    {
        title: 'События',
        themes: [
            ['js-web-api/dom-events/handlers',          emoji.pizza+'Обработчики событий'],
            ['js-web-api/dom-events/list-events',       emoji.pizza+'Список событий'],
            ['js-web-api/dom-events/params-event',      emoji.pizza+'Объект события (Event)'],
        
            ['js-web-api/dom-events/propagation-model',     emoji.baseball+'Модель распространения событий'],
            ['js-web-api/dom-events/propagation-capturing', emoji.baseball+'1. Фаза погружения'],
            ['js-web-api/dom-events/propagation-target',    emoji.baseball+'2. Фаза цели'],
            ['js-web-api/dom-events/propagation-bubbling',  emoji.baseball+'3. Фаза всплытия'],
        
            ['js-web-api/dom-events/propagation-delegate',  emoji.fire+'Делегирование событий'],
            ['js-web-api/dom-events/prevent',               setTheme(1, ['event.preventDefault()'])],
            ['js-web-api/dom-events/samples',               'Примеры'],
        ]
    },
    {
        title: 'Документ и объекты страницы',
        themes: [
            ['js-web-api/dom/info',            emoji.theory+'Информация'],
            ['js-web-api/dom/dom',             emoji.theory+'DOM'],
            ['js-web-api/dom/bom',             emoji.theory+'BOM'],
            ['js-web-api/dom/node',            setTheme(1, ['nodeType', 'nodeName', 'tagName'])],
            ['js-web-api/dom/element-get',     emoji.baseball+'1. Выборка элементов'],
            ['js-web-api/dom/element-method',  emoji.baseball+'2. Методы и свойства элементов'],
            ['js-web-api/dom/element-create',  emoji.baseball+'3. Добавление и удаление узлов'],
            ['js-web-api/dom/multi-insert',    emoji.baseball+'4. Мультивставка'],
            ['js-web-api/dom/metrics',         emoji.baseball+'5. Размеры и прокрутка элементов'],
            ['js-web-api/dom/metrics-window',  emoji.baseball+'6. Размеры и прокрутка страницы'],
        
            ['js-web-api/dom/attribute',       setTheme(1, ['attributes'])],
            ['js-web-api/dom/class-list',      setTheme(1, ['classList'])],
            ['js-web-api/dom/css',             setTheme(1, ['style', 'getComputedStyle'])],
            ['js-web-api/dom/input',           setTheme(1, ['input', 'select'])],
            ['js-web-api/dom/contains',        setTheme(1, ['contains', 'compareDocumentPosition'])],
            ['js-web-api/dom/media-queries',   setTheme(1, ['matchMedia'])],
            ['js-web-api/dom/location',        setTheme(1, ['open', 'location'])],
        ]
    },
]
