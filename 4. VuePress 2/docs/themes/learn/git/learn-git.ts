import { ISidebarTopics } from "../../../types";

export const PATH_LEARN_GIT = "/learn/git";

const p = PATH_LEARN_GIT + "/";

export const THEME_LEARN_GIT: ISidebarTopics[] = [
  {
    title: "Теория",
    children: [
      [p + "info/operation-principle", "Принцип работы Git"],
      [p + "info/notes", "Примечания"],
    ],
  },
  {
    title: "Темы",
    children: [
      [p + "themes/init", "Инициализация репозитория (init, status, config)"],
      [p + "themes/commit", "Сохранение изменений (add, commit)"],
      [p + "themes/reset", "Отмена изменений файлов (reset, restore, clean)"],
      [p + "themes/push", "Загрузка на удаленный репозиторий (push, remote)"],
      [p + "themes/clone", "Клонирование с удаленного репозитория (clone)"],
      [
        p + "themes/pull",
        "Получение данных с удаленного репозитория (fetch, pull)",
      ],
      [
        p + "themes/branch",
        "Работа с ветками и коммитами (branch, checkout, log, cherry-pick, stash)",
      ],
      [p + "themes/merge", "Слияние веток (merge)"],
      [p + "themes/rebase", "Перемещение веток (rebase)"],
      [p + "themes/merge-vs-rebase", "Merge vs Rebase"],
    ],
  },
];
