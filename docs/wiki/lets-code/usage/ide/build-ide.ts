import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "usage/ide/";
const title = "IDE";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "IDE",
    children: [
      ["common/ide", "IDE"],
      ["common/online-ide", "Онлайн IDE"],
      ["common/online-compilers", "Онлайн компиляторы"],
    ],
  },
  {
    title: "VSCode",
    children: [["vscode/plugins", "Плагины"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
