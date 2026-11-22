root = "js/";

ARR_MODULE = [
  {
    title: "ES6+",
    themes: [
      [
        root + "es6+/nullish-coalescing-operator",
        "Оператор " + setTheme(1, ["??"]),
      ],
      [root + "es6+/optional-chaining", "Оператор " + setTheme(1, ["?."])],
    ],
  },
  {
    title: "Основное",
    themes: [
      [root + "main/context", emoji.fire + "Контекст"],
      [root + "main/bind", emoji.fire + setTheme(1, ["bind", "call", "apply"])],
      [root + "main/if-case", setTheme(1, ["if", "case"])],
      [root + "main/ternary-operator", "Тернарные операторы"],
    ],
  },
  {
    title: "API",
    themes: [
      [root + "api/math", setTheme(6, ["Math"])],
      [root + "api/notifications-api", setTheme(6, ["Notifications"])],
      [root + "api/console", setTheme(6, ["console"])],
      [root + "api/eval", setTheme(6, ["eval"])],
    ],
  },
  {
    title: "Теория",
    themes: [
      [root + "theory/garbage-collection", "Сборщик мусора"],
      [root + "theory/ecmascript", "ECMAScript"],
    ],
  },
  {
    title: "Дополнительно",
    themes: [
      [root + "other/jsdoc", "Документирование"],
      [root + "other/exceptions", "Исключения"],
      [root + "other/object-wrappers", "Autoboxing (Object Wrappers)"],
      [root + "other/pattern-string", "Шаблонные строки (ES6)"],
      [root + "other/proxy", "Proxy (ES6)"],
      [root + "other/web-workers", "Web Workers"],
      [],
      [root + "other/asynchronous-scripts", "Асинхронные скрипты: defer/async"],
      [root + "other/method-chaining", "Цепные вызовы методов"],
      [root + "other/strict-mode", "Strict Mode"],
      [root + "other/samples", "Примеры"],
    ],
  },
];
