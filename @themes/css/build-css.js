root = "css/";

ARR_MODULE = [
  {
    title: "Основное",
    themes: [[root + "main/custom-properties", "Custom Properties"]],
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
    title: "Features",
    themes: [
      [root + "features/custom-selector", "@custom-selector"],
      [root + "features/environment-variables", "CSS Environment Variables"],
    ],
  },
  {
    title: "Примеры",
    themes: [
      [root + "samples/samples", "Примеры"],
      [
        root + "samples/collapse-margin",
        emoji.code + "Схлопывание внешних отступов",
      ],
      [
        root + "samples/dropping-out-margin",
        emoji.code + "Выпадение внешних отступов",
      ],
    ],
  },
];
