root = "wiki/";

ARR_MODULE = [
  {
    title: "Custom Elements",
    themes: [
      [
        root + "custom-elements/u-text",
        setTheme(1, ["u-text-*", "u-code-*", "u-menu-*"]),
      ],
      [root + "custom-elements/u-message", setTheme(1, ["u-message"])],
    ],
  },
  {
    title: "Vue Components",
    themes: [
      [root + "vue-components/v-copy", setTheme(1, ["v-copy"])],
      [root + "vue-components/v-path", setTheme(1, ["v-path"])],
      [root + "vue-components/v-tabs", setTheme(1, ["v-tabs"])],
    ],
  },
];
