root = 'react-js/';

ARR_MODULE = [
    {
        title: 'Общее',
        themes: [
            getLink(root, 'install'),
            [root+'main/handlers-name',    emoji.fire+'Название обработчиков'],
            [root+'main/create-react-app', setTheme(2, ['create-react-app'])],
            [root+'main/version',          emoji.fire+'Версии'],
            [root+'main/info',             emoji.theory+'Информация'],
            [root+'main/patterns',         emoji.theory+'Шаблоны проектирования'],
        ]
    },
    {
        title: 'Aliases',
        accent: true,
        themes: [
            [root+'aliases/vite', 'Vite'],
            [root+'aliases/create-react-app', 'Create React App'],
            [root+'aliases/webpack', 'Webpack'],
        ]
    },
    {
        title: 'Стилизация',
        accent: true,
        themes: [
            [root+'styles/css-file', '1. Отдельный CSS файл'],
            [root+'styles/inline-styles', '2. Инлайновая стилизация'],
            [root+'styles/css-modules', '3. CSS Modules'],
            [root+'styles/css-in-js', '4. CSS in JS'],
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
            
            [root+'react-plugins/classnames',       setTheme(2, ['classnames'])],
        ]
    },
]
