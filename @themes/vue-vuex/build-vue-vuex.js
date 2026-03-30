root = "vue-vuex/";

ARR_MODULE = [
  {
    title: "Основное",
    themes: [getLink(root, "info")],
  },
  {
    title: "Элементы",
    themes: [
      [root + "elements/store", "1. Хранилище (store)"],
      [root + "elements/state", "2. Состояние (state)"],
      [root + "elements/getters", "3. Геттеры (getters)"],
      [root + "elements/mutations", "4. Мутации (mutations)"],
      [root + "elements/actions", "5. Действия (actions)"],
      [root + "elements/modules", "6. Модули (modules)"],
    ],
  },
  {
    title: "Примеры",
    themes: [[root + "samples/samples", "Примеры"]],
  },
];
