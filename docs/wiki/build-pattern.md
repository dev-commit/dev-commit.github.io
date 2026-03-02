# Шаблон

```ts
import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "system/ui-kit/";
const title = "Ui-Kit";
const theme: TThemeTopics = "node"; // null

const topics: ISidebarTopics[] = [
  {
    title: "Проработанные и не проработанные темы",
    children: [
      ["dir/file", "Тема проработана", "done"],
      ["dir/file", "Тема НЕ проработана", "check"],
    ],
  },
  {
    title: "Emoji",
    children: [
      ["dir/file", getTopicSubtitle("info")],
      ["dir/file", emoji.items + "Emoji"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
```
