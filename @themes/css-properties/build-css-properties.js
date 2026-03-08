root = "css-properties/";

ARR_MODULE = [
  {
    title: "Свойства",
    themes: [
      [root + "properties/background", setTheme(1, ["background"])],
      [root + "properties/scrollbar", setTheme(1, ["scrollbar"])],
      [root + "properties/caret-color", setTheme(1, ["caret-color"])],
    ],
  },
  {
    title: "Функции",
    themes: [
      [root + "functions/attr", setTheme(3, ["attr()"])],
      [root + "functions/image-set", setTheme(3, ["image-set()"])],
    ],
  },
  {
    title: "Псевдо-классы",
    themes: [[root + "pseudo-classes/where", setTheme(2, [":where"])]],
  },
  {
    title: "Псевдо-элементы",
    themes: [[root + "pseudo-elements/slotted", setTheme(2, ["::slotted"])]],
  },
];
