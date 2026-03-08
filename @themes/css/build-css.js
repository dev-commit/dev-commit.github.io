root = "css/";

ARR_MODULE = [
  {
    title: "Основное",
    themes: [[root + "main/custom-properties", "Custom Properties"]],
  },
  {
    title: "Текст",
    themes: [
      [root + "text/background-clip", "Изображение на тексте"],
      [
        root + "text/font-feature-settings",
        setTheme(1, ["font-feature-settings"]),
      ],
    ],
  },
  {
    title: "Layout",
    themes: [
      [root + "layout/info", emoji.theory + "Информация"],
      [root + "layout/css-multi-columns", "CSS Multi Columns"],
      [root + "layout/css-exclusions", "CSS Exclusions (IE)"],
    ],
  },
  {
    title: "Shapes and Clipping",
    themes: [
      [root + "graphics/blend-mode", "CSS Blend Modes"],
      [root + "graphics/css-shapes", "CSS Shapes"],
      [root + "graphics/css-masking", "CSS Masking"],
    ],
  },
  {
    title: "CSS Color Module",
    themes: [
      [root + "color-module/colors", emoji.star + "Цветовые схемы"],
      [root + "color-module/colors-func", emoji.star + "Цветовые функции"],
      [
        root + "color-module/colors-hex",
        "1. " + setTheme(3, ["Hexadecimal Colors"]),
      ],
      [
        root + "color-module/colors-rgb",
        "2. " + setTheme(3, ["rgb", "rgba"]),
        false,
        "done",
      ],
      [
        root + "color-module/colors-hsl",
        "3. " + setTheme(3, ["hsl", "hsla"]),
        false,
        "done",
      ],
      [root + "color-module/colors-hwb", "4. " + setTheme(3, ["HWB"])],
      [
        root + "color-module/colors-predefined",
        "5. " + setTheme(3, ["Predefined"]),
      ],
      [
        root + "color-module/color-values",
        setTheme(1, ["currentColor", "transparent"]),
      ],
    ],
  },
  {
    title: "События браузера",
    themes: [
      [root + "browser-actions/will-change", setTheme(1, ["will-change"])],
      [root + "browser-actions/scroll-snap", setTheme(1, ["scroll-snap"])],
      [
        root + "browser-actions/overscroll-behavior",
        setTheme(1, ["overscroll-behavior"]),
      ],
      [
        root + "browser-actions/overflow-anchor",
        setTheme(1, ["overflow-anchor"]),
      ],
    ],
  },
  {
    title: "Адаптивность",
    themes: [
      [root + "adaptive/meta-viewport", "Meta Viewport"],
      [root + "adaptive/media-queries", "CSS Media queries"],
      [root + "adaptive/browser-style", "Стилизация браузера"],
    ],
  },

  //-----------------------------------------------------------------

  {
    title: "Features",
    themes: [
      [root + "features/mixins", "@apply"],
      [root + "features/custom-selector", "@custom-selector"],
      [root + "features/environment-variables", "CSS Environment Variables"],
    ],
  },
  {
    title: "Особенности",
    themes: [
      [
        root + "special/collapse-margin",
        emoji.code + "Схлопывание внешних отступов",
      ],
      [
        root + "special/dropping-out-margin",
        emoji.code + "Выпадение внешних отступов",
      ],
    ],
  },
  {
    title: "Прочее",
    themes: [[root + "other/samples", "Примеры"]],
  },
];
