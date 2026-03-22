root = "vue-js/";

const vue2 = " <u-code-accent>Vue 2</u-code-accent>";
const vue3 = " <u-code-mod>Vue 3</u-code-mod>";

ARR_MODULE = [
  {
    title: "Main",
    accent: true,
    themes: [
      [root + "main/usage", "Использование", false, "done"],
      [root + "main/lifecycle", "Lifecycle", false, "done"],
    ],
  },
  {
    title: "Директивы",
    themes: [
      [root + "directives/v-for", setTheme(1, ["v-for"])],
      [root + "directives/v-on", setTheme(1, ["v-on:"])],
      [root + "directives/v-bind", setTheme(1, ["v-bind:"]) + " :class :style"],
      [root + "directives/v-model", setTheme(1, ["v-model"])],
      [root + "directives/v-pre", setTheme(1, ["v-pre"])],
      [root + "directives/v-cloak", setTheme(1, ["v-cloak"])],
      [root + "directives/v-once", setTheme(1, ["v-once"])],
    ],
  },
  {
    title: "Компоненты",
    themes: [
      [root + "components/info", emoji.theory + "Информация"],
      [root + "components/component-simple", "Простой компонент"],
      [root + "components/component-registration", "Регистрация компонента"],
      [root + "components/component-global", "Глобальный компонент"],
      [root + "components/component-dynamic", "Динамические компоненты"],
      [root + "components/props", setTheme(1, ["props"])],
      [root + "components/slot", setTheme(1, ["&lt;slot&gt;"])],
      [root + "components/template", setTheme(1, ["&lt;template&gt;"])],
      [root + "components/emit", setTheme(1, ["$emit"])],
    ],
  },
  {
    title: "Опции и прочее",
    themes: [
      [root + "options-and-other/computed", setTheme(1, ["computed"])],
      [
        root + "options-and-other/transition",
        setTheme(1, ["&lt;transition&gt;"]),
      ],
      [root + "options-and-other/vue-extend", setTheme(1, ["Vue.extend"])],
    ],
  },
  {
    title: "DOM",
    themes: [
      [root + "dom/event", setTheme(1, ["$event"])],
      [root + "dom/refs", setTheme(1, ["$refs"])],
    ],
  },
  {
    title: "Реактивность",
    themes: [
      [root + "reactivity/reactivity", "Реактивность"],
      [root + "reactivity/set", setTheme(1, ["vm.$set"])],
      [root + "reactivity/next-tick", setTheme(1, ["vm.$nextTick"])],
      [root + "reactivity/force-update", setTheme(1, ["vm.$forceUpdate"])],
    ],
  },
];
