root = "react-api/";

ARR_MODULE = [
  {
    title: "ReactDOM",
    themes: [[root + "react-dom/createPortal", setTheme(1, ["createPortal"])]],
  },
  {
    title: "Оптимизация",
    themes: [
      [root + "optimization/info", emoji.theory + "Информация"],
      [root + "optimization/react-memo", setTheme(1, ["React.memo"])],
      [
        root + "optimization/react-lazy",
        setTheme(1, ["React.lazy", "&lt;Suspense&gt;"]),
      ],
    ],
  },
  {
    title: "Общее",
    themes: [
      [
        root + "common/dangerously-set-inner-html",
        setTheme(5, ["dangerouslySetInnerHTML"]),
      ],
      [root + "common/forwardRef", setTheme(1, ["forwardRef"])],
    ],
  },
];
