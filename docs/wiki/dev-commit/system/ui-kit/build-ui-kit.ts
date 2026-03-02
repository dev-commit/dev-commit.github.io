import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "system/ui-kit/";
const title = "Ui-Kit";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Компоненты",
    children: [
      ["components/v-details", "v-details"],
      ["components/v-iframe", "v-iframe"],
      ["components/v-two", "v-two"],
      ["components/v-breadcrumbs", "v-breadcrumbs"],
      ["components/v-marker", "v-marker"],
      ["components/v-padding", "v-padding"],
      ["components/v-code", "v-code"],
      ["components/v-badge", "v-badge"],
      ["components/v-tree", "v-tree"],
    ],
  },
  {
    title: "Категории",
    children: [["category/custom-containers", "Custom Containers VitePress"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
