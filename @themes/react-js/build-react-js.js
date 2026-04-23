root = "react-js/";

ARR_MODULE = [
  {
    title: "Стилизация",
    accent: true,
    themes: [
      [root + "styles/css-file", "1. Отдельный CSS файл"],
      [root + "styles/inline-styles", "2. Инлайновая стилизация"],
      [root + "styles/css-modules", "3. CSS Modules"],
      [root + "styles/css-in-js", "4. CSS in JS"],
    ],
  },
  {
    title: "Aliases",
    accent: true,
    themes: [
      [root + "aliases/vite", "Vite"],
      [root + "aliases/create-react-app", "Create React App"],
      [root + "aliases/webpack", "Webpack"],
    ],
  },
  {
    title: "Прочее",
    themes: [
      [root + "common/jsx", "JSX"],
      [root + "common/react-developer-tools", "React Developer Tools"],
    ],
  },
  {
    title: "Libs",
    themes: [[root + "libs/classnames", setTheme(2, ["classnames"])]],
  },
];
