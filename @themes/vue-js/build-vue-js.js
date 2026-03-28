root = "vue-js/";

ARR_MODULE = [
  {
    title: "Main",
    accent: true,
    themes: [
      [root + "main/component-dynamic", "Динамические компоненты"],
      [root + "main/computed", setTheme(1, ["computed"])],
      [root + "main/emit", setTheme(1, ["$emit"])],
      [root + "main/transition", setTheme(1, ["&lt;transition&gt;"])],
    ],
  },
];
