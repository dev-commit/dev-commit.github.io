root = "theory-data-structures/";

ARR_MODULE = [
  {
    title: "Структуры данных: линейные",
    themes: [
      [root + "structures/stack", emoji.items + "Стек"],
      [root + "structures/queue", emoji.items + "Очередь"],
      [root + "structures/linked-list", emoji.items + "Связанный список"],
    ],
  },
  {
    title: "Структуры данных: остальные",
    themes: [
      [root + "structures/set", emoji.items + "Множество"],
      [root + "structures/map", emoji.items + "Map"],
      [root + "structures/hash", emoji.items + "Хэш-таблица"],
      [root + "structures/list", emoji.items + "Список"],
      [root + "structures/graph", emoji.items + "Граф"],
      [root + "structures/tree", emoji.items + "Дерево"],
      [root + "structures/tree-prefix", emoji.items + "Префиксное дерево"],
      [root + "structures/heap", emoji.items + "Куча"],
    ],
  },
  {
    title: "Структуры данных в JS",
    themes: [
      ["js/data-structures/map", setTheme(1, ["Map", "WeakMap"])],
      ["js/data-structures/set", setTheme(1, ["Set", "WeakSet"])],
    ],
  },
];
