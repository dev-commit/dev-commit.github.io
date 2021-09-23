ARR_MODULE = [
    // TODO SUB-TITLE: React.js
    {
        title: 'Реконсиляция',
        themes: [
            ['theory/web/virtual-dom',                 emoji.theory+'Virtual DOM (Общее)'],
            ['react-js/reconciler/virtual-dom-react',  emoji.lemon+'Virtual DOM (React)'],
            ['react-js/reconciler/reconciliation',     emoji.lemon+'Reconciliation Algorithm'],
            ['react-js/reconciler/fiber',              emoji.lemon+'React Fiber'],
        ]
    },
    {
        title: 'Информация',
        themes: [
            ['react-js/info/info',        emoji.theory+'Информация'],
            ['react-js/info/patterns',    emoji.theory+'Шаблоны проектирования'],
            ['react-js/info/structure',   emoji.code+'Структура'],
            ['react-js/info/components',  emoji.cookie+'Компоненты'],
            ['react-js/info/props',       emoji.cookie+'Пропсы'],
        ]
    },
    {
        title: 'API',
        themes: [
            ['react-js/api/jsx',        emoji.boom+'JSX'],
            ['react-js/api/children',   emoji.boom+'Children'],
            ['react-js/api/context',    emoji.boom+'Context API'],
            ['react-js/api/refs',       emoji.boom+'Рефы'],
            ['react-js/api/fragments',  emoji.boom+'Фрагменты'],
            ['react-js/api/portals',    emoji.boom+'Порталы'],
        ]
    },
    {
        title: 'Паттерны',
        themes: [
            ['react-js/patterns/higher-order-components',  emoji.donut+'Higher-Order Component'],
            ['react-js/patterns/render-props',             emoji.donut+'Render Props'],
            ['react-js/patterns/element-props',            emoji.donut+'Свойства-элементы'],
            ['react-js/patterns/lifting-state-up',         emoji.donut+'Подъём состояния'],
        ]
    },
    {
        title: 'Обработка и вывод данных',
        themes: [
            ['react-js/processing-data-output/handling-events',          emoji.cookie+'Обработка событий'],
            ['react-js/processing-data-output/controlled-components',    emoji.cookie+'Controlled Components'],
            ['react-js/processing-data-output/uncontrolled-components',  emoji.cookie+'Uncontrolled Components'],
            ['react-js/processing-data-output/css',                      emoji.cookie+'CSS'],
            ['react-js/processing-data-output/conditional-rendering',    emoji.cookie+'Условный рендеринг'],
            ['react-js/processing-data-output/lists-and-keys',           emoji.cookie+'Списки и ключи'],
            ['react-js/processing-data-output/error-boundaries',         emoji.cookie+'Предохранители'],
        ]
    },
    {
        title: 'Жизненный цикл компонентов',
        themes: [
            ['react-js/lifecycle/info',                               emoji.theory+'Информация'],
            ['', ''],
            ['react-js/lifecycle/hook-constructor',                   setTheme(1, ['constructor()'])],
            ['react-js/lifecycle/hook-get-derived-state-from-props',  setTheme(1, ['getDerivedStateFromProps()'])],
            ['react-js/lifecycle/hook-should-component-update',       setTheme(1, ['shouldComponentUpdate()'])],
            ['react-js/lifecycle/hook-render',                        setTheme(1, ['render()'])],
            ['react-js/lifecycle/hook-get-snapshot-before-update',    setTheme(1, ['getSnapshotBeforeUpdate()'])],
            ['', ''],
            ['react-js/lifecycle/hook-component-did-mount',           emoji.fire+setTheme(1, ['componentDidMount()'])],
            ['react-js/lifecycle/hook-component-did-update',          emoji.fire+setTheme(1, ['componentDidUpdate()'])],
            ['react-js/lifecycle/hook-component-will-unmount',        emoji.fire+setTheme(1, ['componentWillUnmount()'])],
            ['', ''],
            ['react-js/lifecycle/hook-get-derived-state-from-error',  setTheme(1, ['getDerivedStateFromError()'])],
            ['react-js/lifecycle/hook-component-did-catch',           setTheme(1, ['componentDidCatch()'])],
        ]
    },
    // TODO SUB-TITLE: React.js-Остальное
    {
        title: 'Прочее',
        themes: [
            ['react-js/other/react-developer-tools',  'React Developer Tools'],
            ['react-js/other/components',             'Компоненты'],
            ['react-js/other/samples',                'Примеры'],
        ]
    },
    {
        title: 'React Plugins',
        themes: [
            ['react-js/react-plugins/create-react-app',  setTheme(2, ['create-react-app'])],
            ['react-js/react-plugins/classnames',        setTheme(2, ['classnames'])],
        ]
    },
]
