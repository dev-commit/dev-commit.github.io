import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/html/";
const title = "HTML";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Теги",
    children: [
      ["tags/fieldset", "fieldset"],
      ["tags/header", "header, section, ..."],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
