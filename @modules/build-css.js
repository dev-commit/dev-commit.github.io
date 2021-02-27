ARR_MODULE = [
    {
        title: 'База',
        themes: [
            ['css/basic/pattern',              emoji.code+'Шаблон'],
            ['css/basic/priority-styles',      emoji.fire+'Приоритетность стилей'],
            ['css/basic/selector-specificity', emoji.fire+'Специфичность селекторов'],
        ]
    },
    {
        title: 'CSS Selectors',
        themes: [
            ['css/selectors/selectors',         emoji.pizza+'Селекторы'],
            ['css/selectors/pseudo-classes',    emoji.pizza+'Псевдоклассы'],
            ['css/selectors/pseudo-elements',   emoji.pizza+'Псевдоэлементы'],
            ['css/selectors/properties',        emoji.pizza+'Свойства'],
        ]
    },
    {
        title: 'Адаптивность',
        themes: [
            ['css/adaptive/meta-viewport',      emoji.lemon+'Meta Viewport'],
            ['css/adaptive/media-queries',      emoji.lemon+'CSS Media queries'],
            ['css/adaptive/browser-style',      emoji.lemon+'Стилизация браузера'],
        ]
    },
    {
        title: 'Features',
        themes: [
            ['css/features/custom-properties',  emoji.fire+'Custom Properties'],
            ['css/features/mixins',             emoji.fire+'@apply'],
            ['css/features/custom-selector',    emoji.fire+'@custom-selector'],
        ]
    },
    {
        title: 'CSS Color Module',
        themes: [
            ['css/color-module/colors',          emoji.panda+'Цветовые схемы'],
            ['css/color-module/colors-func',     emoji.panda+'Цветовые функции'],
            ['css/color-module/linear-gradient', setTheme(1, ['linear-gradient'])],
            ['css/color-module/conic-gradient',  setTheme(1, ['conic-gradient'])],
        ]
    },
    {
        title: 'Layout',
        themes: [
            ['css/layout/info',                 emoji.theory+'Информация'],
            ['css/layout/css-multi-columns',    emoji.cookie+'CSS Multi Columns'],
            ['css/layout/css-writing-models',   emoji.cookie+'CSS Writing Models'],
            ['css/layout/css-exclusions',       emoji.cookie+'CSS Exclusions (IE)'],
        ]
    },
    {
        title: 'Преобразования',
        themes: [
            ['css/transform/transition',        setTheme(1, ['transition'])],
            ['css/transform/transform',         setTheme(1, ['transform'])],
            ['css/transform/animation',         setTheme(1, ['animation', '@keyframes'])],
        ]
    },
    {
        title: 'Графика',
        themes: [
            ['css/graphics/blend-mode',         emoji.lemon+'CSS Blend Modes'],
            ['css/graphics/filter',             emoji.lemon+'CSS Filters'],
            ['css/graphics/backdrop-filter',    emoji.lemon+'CSS Backdrop-Filter'],
            ['css/graphics/clip-path',          emoji.lemon+'CSS Clipping (Clip-path)'],
            ['css/graphics/css-shapes',         emoji.lemon+'CSS Shapes'],
            ['css/graphics/css-masking',        emoji.lemon+'CSS Masking'],
        ]
    },
    {
        title: 'Особенности',
        themes: [
            ['css/special/collapse-margin',     emoji.pizza+'Схлопывание внешних отступов'],
            ['css/special/dropping-out-margin', emoji.pizza+'Выпадение внешних отступов'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            ['css/main/viewport',               setTheme(1, ['vw', 'vh', 'vmin', 'vmax'])],
            ['css/main/import',                 setTheme(1, ['@import'])],
            ['css/main/supports',               setTheme(1, ['@supports'])],
            ['css/main/shadow',                 setTheme(1, ['box-shadow', 'text-shadow'])],
            ['css/main/overflow',               setTheme(1, ['overflow'])],
            ['css/main/display',                setTheme(1, ['display'])],
            ['css/main/position',               setTheme(1, ['position'])],,
            ['css/main/background',             setTheme(1, ['background'])],
            ['css/main/lists',                  setTheme(1, ['ul', 'ol'])],
            ['css/main/calc',                   setTheme(1, ['calc()'])],
            ['css/main/scrollbar',              setTheme(1, ['scrollbar'])],
        
            ['css/main/info',                   'Информация'],
            ['css/main/actions',                'События браузера'],
            ['css/main/px',                     'Единицы измерения'],
            ['css/main/font',                   'Текст'],
            ['css/main/pixel-perfect',          'Pixel Perfect'],
            ['css/main/samples',                'Примеры'],
        ]
    },
]