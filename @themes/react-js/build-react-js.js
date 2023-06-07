root = 'react-js/';

ARR_MODULE = [
    {
        title: 'Общее',
        themes: [
            getLink(root, 'install'),
            [root+'main/version',    emoji.fire+'Версии'],
            [root+'main/info',       emoji.theory+'Информация'],
            [root+'main/patterns',   emoji.theory+'Шаблоны проектирования'],
        ]
    },
    {
        title: 'Реконсиляция',
        accent: true,
        themes: [
            [root+'reconciler/virtual-dom',       emoji.theory+'Virtual DOM (Общее)'],
            [root+'reconciler/virtual-dom-react', emoji.theory+'Virtual DOM (React)'],
            [root+'reconciler/reconciliation',    emoji.theory+'Reconciliation Algorithm'],
        ]
    },
    {
        title: 'Fiber',
        accent: true,
        themes: [
            [root+'fiber/common',     emoji.star+'Общее'],
            [root+'fiber/planning',   emoji.label+'1. Планирование'],
            [root+'fiber/priorities', emoji.label+'2. Приоритизация'],
            [root+'fiber/sample',     'Пример'],
        ]
    },
    {
        title: 'Lifecycle',
        themes: [
            [root+'lifecycle/info',                              emoji.theory+'Информация'],
            [root+'lifecycle/hook-constructor',                  setTheme(1, ['constructor'])],
            [root+'lifecycle/hook-get-derived-state-from-props', setTheme(1, ['getDerivedStateFromProps'])],
            [root+'lifecycle/hook-should-component-update',      setTheme(1, ['shouldComponentUpdate'])],
            [root+'lifecycle/hook-render',                       setTheme(1, ['render'])],
            [root+'lifecycle/hook-get-snapshot-before-update',   setTheme(1, ['getSnapshotBeforeUpdate'])],
            [root+'lifecycle/hook-component-did-mount',          setTheme(3, ['componentDidMount'])],
            [root+'lifecycle/hook-component-did-update',         setTheme(3, ['componentDidUpdate'])],
            [root+'lifecycle/hook-component-will-unmount',       setTheme(3, ['componentWillUnmount'])],
            [root+'lifecycle/hook-get-derived-state-from-error', setTheme(6, ['getDerivedStateFromError'])],
            [root+'lifecycle/hook-component-did-catch',          setTheme(6, ['componentDidCatch'])],
        ]
    },
    {
        title: 'Паттерны',
        themes: [
            [root+'patterns/higher-order-components', 'Higher-Order Component'],
            [root+'patterns/render-props',            'Render Props'],
            [root+'patterns/element-props',           'Свойства-элементы'],
            [root+'patterns/lifting-state-up',        'Подъём состояния'],
        ]
    },
    {
        title: 'Обработка и вывод данных',
        themes: [
            [root+'processing-data-output/handling-events',         'Обработка событий'],
            [root+'processing-data-output/controlled-components',   'Controlled Components'],
            [root+'processing-data-output/uncontrolled-components', 'Uncontrolled Components'],
            [root+'processing-data-output/css',                     'CSS'],
            [root+'processing-data-output/conditional-rendering',   'Условный рендеринг'],
            [root+'processing-data-output/lists-and-keys',          'Списки и ключи'],
            [root+'processing-data-output/error-boundaries',        'Предохранители'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'common/props',                 setTheme(1, ['props'])],  
            [root+'common/components',            'Компоненты'],
            [root+'common/jsx',                   'JSX'],
            [root+'common/react-developer-tools', 'React Developer Tools'],
            [root+'common/component-class',       emoji.code+'Структура на Class'],
            [root+'common/samples',               emoji.code+'Примеры'],
        ]
    },
    {
        title: 'React Plugins',
        themes: [
            [root+'react-plugins/create-react-app', setTheme(2, ['create-react-app'])],
            [root+'react-plugins/classnames',       setTheme(2, ['classnames'])],
        ]
    },
]
