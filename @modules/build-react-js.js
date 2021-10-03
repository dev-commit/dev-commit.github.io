root = 'react-js/';

ARR_MODULE = [
    // TODO SUB-TITLE: React.js
    {
        title: 'Реконсиляция',
        themes: [
            [root+'reconciler/virtual-dom',        emoji.theory+'Virtual DOM (Общее)'],
            [root+'reconciler/virtual-dom-react',  emoji.lemon+'Virtual DOM (React)'],
            [root+'reconciler/reconciliation',     emoji.lemon+'Reconciliation Algorithm'],
            [root+'reconciler/fiber',              emoji.lemon+'React Fiber'],
        ]
    },
    {
        title: 'Информация',
        themes: [
            [root+'info/info',        emoji.theory+'Информация'],
            [root+'info/patterns',    emoji.theory+'Шаблоны проектирования'],
            [root+'info/structure',   emoji.code+'Структура'],
            [root+'info/components',  emoji.cookie+'Компоненты'],
            [root+'info/props',       emoji.cookie+'Пропсы'],
        ]
    },
    {
        title: 'API',
        themes: [
            [root+'api/jsx',        emoji.boom+'JSX'],
            [root+'api/children',   emoji.boom+'Children'],
            [root+'api/context',    emoji.boom+'Context API'],
            [root+'api/refs',       emoji.boom+'Рефы'],
            [root+'api/fragments',  emoji.boom+'Фрагменты'],
            [root+'api/portals',    emoji.boom+'Порталы'],
        ]
    },
    {
        title: 'Паттерны',
        themes: [
            [root+'patterns/higher-order-components',  emoji.donut+'Higher-Order Component'],
            [root+'patterns/render-props',             emoji.donut+'Render Props'],
            [root+'patterns/element-props',            emoji.donut+'Свойства-элементы'],
            [root+'patterns/lifting-state-up',         emoji.donut+'Подъём состояния'],
        ]
    },
    {
        title: 'Обработка и вывод данных',
        themes: [
            [root+'processing-data-output/handling-events',          emoji.cookie+'Обработка событий'],
            [root+'processing-data-output/controlled-components',    emoji.cookie+'Controlled Components'],
            [root+'processing-data-output/uncontrolled-components',  emoji.cookie+'Uncontrolled Components'],
            [root+'processing-data-output/css',                      emoji.cookie+'CSS'],
            [root+'processing-data-output/conditional-rendering',    emoji.cookie+'Условный рендеринг'],
            [root+'processing-data-output/lists-and-keys',           emoji.cookie+'Списки и ключи'],
            [root+'processing-data-output/error-boundaries',         emoji.cookie+'Предохранители'],
        ]
    },
    {
        title: 'Жизненный цикл компонентов',
        themes: [
            [root+'lifecycle/info',                               emoji.theory+'Информация'],
            ['', ''],
            [root+'lifecycle/hook-constructor',                   setTheme(1, ['constructor()'])],
            [root+'lifecycle/hook-get-derived-state-from-props',  setTheme(1, ['getDerivedStateFromProps()'])],
            [root+'lifecycle/hook-should-component-update',       setTheme(1, ['shouldComponentUpdate()'])],
            [root+'lifecycle/hook-render',                        setTheme(1, ['render()'])],
            [root+'lifecycle/hook-get-snapshot-before-update',    setTheme(1, ['getSnapshotBeforeUpdate()'])],
            ['', ''],
            [root+'lifecycle/hook-component-did-mount',           emoji.fire+setTheme(1, ['componentDidMount()'])],
            [root+'lifecycle/hook-component-did-update',          emoji.fire+setTheme(1, ['componentDidUpdate()'])],
            [root+'lifecycle/hook-component-will-unmount',        emoji.fire+setTheme(1, ['componentWillUnmount()'])],
            ['', ''],
            [root+'lifecycle/hook-get-derived-state-from-error',  setTheme(1, ['getDerivedStateFromError()'])],
            [root+'lifecycle/hook-component-did-catch',           setTheme(1, ['componentDidCatch()'])],
        ]
    },
    // TODO SUB-TITLE: React.js-Остальное
    {
        title: 'Прочее',
        themes: [
            [root+'other/react-developer-tools',  'React Developer Tools'],
            [root+'other/components',             'Компоненты'],
            [root+'other/samples',                'Примеры'],
        ]
    },
    {
        title: 'React Plugins',
        themes: [
            [root+'react-plugins/create-react-app',  setTheme(2, ['create-react-app'])],
            [root+'react-plugins/classnames',        setTheme(2, ['classnames'])],
        ]
    },
]
