root = "css/";

ARR_MODULE = [
  {
    title: "CSS Color Module",
    themes: [
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
    ],
  },

  {
    title: "Основное",
    themes: [
      [root + "main/custom-properties", "Custom Properties"],
      [root + "main/samples", "Примеры"],
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
    title: "Features",
    themes: [
      [root + "features/mixins", "@apply"],
      [root + "features/custom-selector", "@custom-selector"],
      [root + "features/environment-variables", "CSS Environment Variables"],
    ],
  },
];
