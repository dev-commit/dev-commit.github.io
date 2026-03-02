import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "learn/git/";
const title = "Git";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Теория",
    children: [
      ["info/operation-principle", "Принцип работы Git"],
      ["info/notes", "Примечания"],
    ],
  },
  {
    title: "Темы",
    children: [
      ["themes/init", "Инициализация репозитория (init, status, config)"],
      ["themes/commit", "Сохранение изменений (add, commit)"],
      ["themes/reset", "Отмена изменений файлов (reset, restore, clean)"],
      ["themes/push", "Загрузка на удаленный репозиторий (push, remote)"],
      ["themes/clone", "Клонирование с удаленного репозитория (clone)"],
      [
        "themes/pull",
        "Получение данных с удаленного репозитория (fetch, pull)",
      ],
      [
        "themes/branch",
        "Работа с ветками и коммитами (branch, checkout, log, cherry-pick, stash)",
      ],
      ["themes/merge", "Слияние веток (merge)"],
      ["themes/rebase", "Перемещение веток (rebase)"],
      ["themes/merge-vs-rebase", "Merge vs Rebase"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
