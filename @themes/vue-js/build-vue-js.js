root = "vue-js/";

ARR_MODULE = [
  {
    title: "Main",
    accent: true,
    themes: [
      [root + "main/slot", setTheme(1, ["&lt;slot&gt;"])],
      [root + "main/usage", "Использование", false, "done"],
      [root + "main/lifecycle", "Lifecycle", false, "done"],
      [root + "main/computed", setTheme(1, ["computed"])],
      [root + "main/transition", setTheme(1, ["&lt;transition&gt;"])],
      [root + "main/component-dynamic", "Динамические компоненты"],
      [root + "main/emit", setTheme(1, ["$emit"])],
    ],
  },
  {
    title: "Директивы",
    themes: [
      [root + "directives/v-bind", setTheme(1, ["v-bind:"]) + " :class :style"],
      [root + "directives/v-model", setTheme(1, ["v-model"])],
      [root + "directives/v-pre", setTheme(1, ["v-pre"])],
      [root + "directives/v-cloak", setTheme(1, ["v-cloak"])],
      [root + "directives/v-once", setTheme(1, ["v-once"])],
    ],
  },
];
