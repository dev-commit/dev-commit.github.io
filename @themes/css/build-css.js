root = 'css/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            [root+'main/selectors',            emoji.star+'Селекторы'],
            [root+'main/priority-styles',      emoji.star+'Приоритетность стилей'],
            [root+'main/selector-specificity', emoji.star+'Специфичность селекторов'],
            [root+'main/custom-properties', 'Custom Properties'],
        ]
    },
    {
        title: 'Единицы измерения',
        themes: [
            [root+'sizes/px', 'Единицы измерения'],
            [root+'sizes/vh', setTheme(1, ['vw', 'vh', 'vmin', 'vmax'])],
        ]
    },
    {
        title: 'Блочная модель',
        themes: [
            [root+'box-model/box-sizing', setTheme(1, ['box-sizing'])],
            [root+'box-model/display',    setTheme(1, ['display'])],
            [root+'box-model/position',   setTheme(1, ['position'])],
            [root+'box-model/margin',     setTheme(1, ['margin'])],
            [root+'box-model/width',      setTheme(1, ['width'])],
            [root+'box-model/block-size', setTheme(7, ['block-size'])],
        ]
    },
    {
        title: 'Преобразования',
        themes: [
            [root+'transform/transition', setTheme(1, ['transition'])],
            [root+'transform/transform',  setTheme(1, ['transform'])],
            [root+'transform/animation',  setTheme(1, ['animation', '@keyframes'])],
        ]
    },
    {
        title: 'Текст',
        themes: [
            [root+'text/fonts-add',             'Шрифты'],
            [root+'text/background-clip',       'Изображение на тексте'],
            [root+'text/font',                  setTheme(1, ['font-*', 'text-*', '...'])],
            [root+'text/text-decoration',       setTheme(1, ['text-decoration'])],
            [root+'text/initial-letter',        setTheme(1, ['initial-letter'])],
            [root+'text/linear-gradient',       setTheme(1, ['linear-gradient'])],
            [root+'text/font-feature-settings', setTheme(1, ['font-feature-settings'])],
        ]
    },
    {
        title: 'Layout',
        themes: [
            [root+'layout/info',               emoji.theory+'Информация'],
            [root+'layout/css-multi-columns',  'CSS Multi Columns'],
            [root+'layout/css-writing-models', 'CSS Writing Models'],
            [root+'layout/css-exclusions',     'CSS Exclusions (IE)'],
        ]
    },
    {
        title: 'Shapes and Clipping',
        themes: [
            [root+'graphics/filter',          setTheme(1, ['filter'])],
            [root+'graphics/backdrop-filter', setTheme(1, ['backdrop-filter'])],
            [root+'graphics/clip-path',       setTheme(1, ['clip-path'])],
            [root+'graphics/blend-mode',      'CSS Blend Modes'],
            [root+'graphics/css-shapes',      'CSS Shapes'],
            [root+'graphics/css-masking',     'CSS Masking'],
        ]
    },
    {
        title: 'CSS Color Module',
        themes: [
            [root+'color-module/colors',            emoji.star+'Цветовые схемы'],
            [root+'color-module/colors-func',       emoji.star+'Цветовые функции'],
            [root+'color-module/colors-hex',        '1. '+setTheme(3, ['Hexadecimal Colors'])],
            [root+'color-module/colors-rgb',        '2. '+setTheme(3, ['rgb', 'rgba']), false, 'done'],
            [root+'color-module/colors-hsl',        '3. '+setTheme(3, ['hsl', 'hsla']), false, 'done'],
            [root+'color-module/colors-hwb',        '4. '+setTheme(3, ['HWB'])],
            [root+'color-module/colors-predefined', '5. '+setTheme(3, ['Predefined'])],
            [root+'color-module/linear-gradient',   setTheme(1, ['linear-gradient'])],
            [root+'color-module/conic-gradient',    setTheme(1, ['conic-gradient'])],
            [root+'color-module/color-values',      setTheme(1, ['currentColor', 'transparent'])],
        ]
    },
    {
        title: 'События браузера',
        themes: [
            [root+'browser-actions/will-change',         setTheme(1, ['will-change'])],
            [root+'browser-actions/scroll-snap',         setTheme(1, ['scroll-snap'])],
            [root+'browser-actions/overscroll-behavior', setTheme(1, ['overscroll-behavior'])],
            [root+'browser-actions/overflow-anchor',     setTheme(1, ['overflow-anchor'])],
            [root+'browser-actions/scroll-behavior',     setTheme(1, ['scroll-behavior'])],
        ]
    },
    {
        title: 'Адаптивность',
        themes: [
            [root+'adaptive/meta-viewport', 'Meta Viewport'],
            [root+'adaptive/media-queries', 'CSS Media queries'],
            [root+'adaptive/browser-style', 'Стилизация браузера'],
        ]
    },

    //-----------------------------------------------------------------

    {
        title: 'Features',
        themes: [
            [root+'features/mixins',          '@apply'],
            [root+'features/custom-selector', '@custom-selector'],
            [root+'features/environment-variables', 'CSS Environment Variables'],
        ]
    },
    {
        title: 'Особенности',
        themes: [
            [root+'special/collapse-margin',     emoji.code+'Схлопывание внешних отступов'],
            [root+'special/dropping-out-margin', emoji.code+'Выпадение внешних отступов'],
        ]
    },
    {
        title: 'Прочее',
        themes: [
            [root+'other/pattern',       emoji.code+'Шаблон'],
            [root+'other/pixel-perfect', 'Pixel Perfect'],
            [root+'other/samples',       'Примеры'],
        ]
    },
]
