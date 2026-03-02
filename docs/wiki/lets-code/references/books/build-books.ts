import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "references/books/";
const title = "Книги";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Технологии",
    children: [
      ["tech/javascript", "JavaScript"],
      ["tech/html", "HTML и CSS"],
      ["tech/react", "React.js"],
      ["tech/redux", "Redux"],
      ["tech/typescript", "TypeScript"],
      ["tech/git", "Git"],
    ],
  },
  {
    title: "Общее",
    children: [
      ["common/books", "Книги"],
      ["common/articles", "Статьи"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
