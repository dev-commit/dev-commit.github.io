root = 'css/';

ARR_MODULE = [
    {
        title: 'Единицы измерения',
        themes: [
            [root+'sizes/px',         'Единицы измерения'],
            [root+'sizes/vh',         setTheme(5, ['vw', 'vh', 'vmin', 'vmax'])],
        ]
    },
    {
        title: 'Блочная модель',
        themes: [
            [root+'box-model/box-sizing', setTheme(5, ['box-sizing'])],
            [root+'box-model/display',    setTheme(5, ['display'])],
            [root+'box-model/position',   setTheme(5, ['position'])],
        ]
    },
    {
        title: 'Преобразования и размеры',
        themes: [
            [root+'transform/transition', setTheme(5, ['transition'])],
            [root+'transform/transform',  setTheme(5, ['transform'])],
            [root+'transform/animation',  setTheme(5, ['animation', '@keyframes'])],
        ]
    },
    {
        title: 'Текст',
        themes: [
            [root+'text/fonts-add',       'Шрифты'],
            [root+'text/font',            setTheme(5, ['font-*', 'text-*', '...'])],
            [root+'text/text-decoration', setTheme(5, ['text-decoration'])],
            [root+'text/initial-letter',  setTheme(5, ['initial-letter'])],
        ]
    },
    {
        title: 'Свойства',
        selected: true,
        themes: [
            [root+'properties/box-shadow',      setTheme(5, ['box-shadow', 'text-shadow'])],
            [root+'properties/overflow',        setTheme(5, ['overflow'])],
            [root+'properties/background',      setTheme(5, ['background'])],
            [root+'properties/border',          setTheme(5, ['border'])],
            [root+'properties/ul',              setTheme(5, ['ul', 'ol'])],
            [root+'properties/scrollbar',       setTheme(5, ['scrollbar'])],
            [root+'properties/scroll-behavior', setTheme(5, ['scroll-behavior'])],
        ]
    },
    {
        title: 'Правила',
        selected: true,
        themes: [
            [root+'rules/import',   setTheme(5, ['@import'])],
            [root+'rules/supports', setTheme(5, ['@supports'])],
        ]
    },
    {
        title: 'Функции',
        selected: true,
        themes: [
            [root+'functions/calc',      setTheme(5, ['calc()'])],
            [root+'functions/attr',      setTheme(5, ['attr()'])],
            [root+'functions/image-set', setTheme(5, ['image-set()'])],
        ]
    },
    {
        title: 'Псевдоклассы',
        selected: true,
        themes: [
            [root+'pseudo-classes/where', setTheme(5, [':where'])],
            [root+'pseudo-classes/is',    setTheme(5, [':is'])],
        ]
    },


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
            [root+'color-module/colors',            emoji.star+'Цветовые схемы'],
            [root+'color-module/colors-hex',        '1. '+setTheme(3, ['Hexadecimal Colors'])],
            [root+'color-module/colors-rgb',        '2. '+setTheme(3, ['rgb', 'rgba']), false, 'done'],
            [root+'color-module/colors-hsl',        '3. '+setTheme(3, ['hsl', 'hsla']), false, 'done'],
            [root+'color-module/colors-hwb',        '4. '+setTheme(3, ['HWB'])],
            [root+'color-module/colors-predefined', '5. '+setTheme(3, ['Predefined'])],
            [root+'color-module/linear-gradient',   setTheme(1, ['linear-gradient'])],
            [root+'color-module/conic-gradient',    setTheme(1, ['conic-gradient'])],
            [root+'color-module/color-values',      setTheme(1, ['currentColor', 'transparent'])],
            [root+'color-module/colors-func',       emoji.star+'Цветовые функции'],
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
            [root+'main/actions',       'События браузера'],
            [root+'main/pixel-perfect', 'Pixel Perfect'],
            [root+'main/samples',       'Примеры'],
        ]
    },
]
