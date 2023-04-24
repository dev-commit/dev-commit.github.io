root = 'css/';

ARR_MODULE = [
    {
        title: 'База',
        themes: [
            [root+'basic/pattern',              emoji.code+'Шаблон'],
            [root+'basic/priority-styles',      emoji.fire+'Приоритетность стилей'],
            [root+'basic/selector-specificity', emoji.fire+'Специфичность селекторов'],
        ]
    },
    {
        title: 'CSS Selectors',
        themes: [
            [root+'selectors/selectors',         emoji.pizza+'Селекторы'],
            [root+'selectors/pseudo-classes',    emoji.pizza+'Псевдоклассы'],
            [root+'selectors/pseudo-elements',   emoji.pizza+'Псевдоэлементы'],
            [root+'selectors/properties',        emoji.pizza+'Свойства'],
        ]
    },
    {
        title: 'Адаптивность',
        themes: [
            [root+'adaptive/meta-viewport',      emoji.lemon+'Meta Viewport'],
            [root+'adaptive/media-queries',      emoji.lemon+'CSS Media queries'],
            [root+'adaptive/browser-style',      emoji.lemon+'Стилизация браузера'],
        ]
    },
    {
        title: 'Блочная модель',
        themes: [
            [root+'box-model/box-sizing',  setTheme(1, ['box-sizing'])],
            [root+'box-model/display',     setTheme(1, ['display'])],
            [root+'box-model/position',    setTheme(1, ['position'])],
        ]
    },
    {
        title: 'Layout',
        themes: [
            [root+'layout/info',                 emoji.theory+'Информация'],
            [root+'layout/css-multi-columns',    emoji.cookie+'CSS Multi Columns'],
            [root+'layout/css-writing-models',   emoji.cookie+'CSS Writing Models'],
            [root+'layout/css-exclusions',       emoji.cookie+'CSS Exclusions (IE)'],
        ]
    },
    {
        title: 'Features',
        themes: [
            [root+'features/custom-properties',  emoji.fire+'Custom Properties'],
            [root+'features/mixins',             emoji.fire+'@apply'],
            [root+'features/custom-selector',    emoji.fire+'@custom-selector'],
        ]
    },
    {
        title: 'CSS Color Module',
        themes: [
            [root+'color-module/colors',          emoji.star+'Цветовые схемы'],
            [root+'color-module/colors-hex',      '1. '+setTheme(3, ['HEX'])],
            [root+'color-module/colors-rgb',      '2. '+setTheme(3, ['RGB'])],
            [root+'color-module/colors-hsl',      '3. '+setTheme(3, ['HSL'])],
            [root+'color-module/colors-hwb',      '4. '+setTheme(3, ['HWB'])],
            [root+'color-module/colors-stanfart', '5. Стандартные'],
            [root+'color-module/linear-gradient', setTheme(1, ['linear-gradient'])],
            [root+'color-module/conic-gradient',  setTheme(1, ['conic-gradient'])],
            [root+'color-module/color-values',    setTheme(1, ['currentColor', 'transparent'])],
            [root+'color-module/colors-func',     emoji.star+'Цветовые функции'],
        ]
    },
    {
        title: 'Преобразования',
        themes: [
            [root+'transform/transition',        setTheme(1, ['transition'])],
            [root+'transform/transform',         setTheme(1, ['transform'])],
            [root+'transform/animation',         setTheme(1, ['animation', '@keyframes'])],
        ]
    },
    {
        title: 'Графика',
        themes: [
            [root+'graphics/blend-mode',         emoji.lemon+'CSS Blend Modes'],
            [root+'graphics/filter',             emoji.lemon+'CSS Filters'],
            [root+'graphics/backdrop-filter',    emoji.lemon+'CSS Backdrop-Filter'],
            [root+'graphics/clip-path',          emoji.lemon+'CSS Clipping (Clip-path)'],
            [root+'graphics/css-shapes',         emoji.lemon+'CSS Shapes'],
            [root+'graphics/css-masking',        emoji.lemon+'CSS Masking'],
        ]
    },
    {
        title: 'Особенности',
        themes: [
            [root+'special/collapse-margin',     emoji.pizza+'Схлопывание внешних отступов'],
            [root+'special/dropping-out-margin', emoji.pizza+'Выпадение внешних отступов'],
        ]
    },
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            [root+'main/import',        setTheme(1, ['@import'])],
            [root+'main/supports',      setTheme(1, ['@supports'])],
            [root+'main/shadow',        setTheme(1, ['box-shadow', 'text-shadow'])],
            [root+'main/overflow',      setTheme(1, ['overflow'])],
            [root+'main/background',    setTheme(1, ['background'])],
            [root+'main/lists',         setTheme(1, ['ul', 'ol'])],
            [root+'main/calc',          setTheme(1, ['calc()'])],
            [root+'main/scrollbar',     setTheme(1, ['scrollbar'])],
            [root+'main/viewport',      setTheme(1, ['vw', 'vh', 'vmin', 'vmax'])],
            [root+'main/px',            'Единицы измерения'],
            [root+'main/actions',       'События браузера'],
            [root+'main/font',          'Текст'],
            [root+'main/pixel-perfect', 'Pixel Perfect'],
            [root+'main/samples',       'Примеры'],
        ]
    },
]
