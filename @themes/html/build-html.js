root = "html/";

ARR_MODULE = [
  {
    title: "Основное",
    themes: [
      getLink(root, "info"),
      [root + "main/content-model", "Content Model"],
      [root + "main/custom-elements", "Custom Elements"],
    ],
  },
  {
    title: "Элементы",
    themes: [
      [root + "elements/img", emoji.items + "Изображения"],
      [root + "elements/form", emoji.items + "Элементы формы"],
      [root + "elements/link", emoji.items + "Ссылки"],
      [root + "elements/video", emoji.items + "Видео и аудио"],
      [root + "elements/table", emoji.items + "Таблицы"],
    ],
  },
];
