import { ISidebarTopics } from "../../../types";

export const PATH_USAGE_IDE = "/usage/ide";

const p = PATH_USAGE_IDE + "/";

export const THEME_USAGE_IDE: ISidebarTopics[] = [
  {
    title: "IDE",
    children: [
      [p + "common/ide", "IDE"],
      [p + "common/online-ide", "Онлайн IDE"],
      [p + "common/online-compilers", "Онлайн компиляторы"],
    ],
  },
  {
    title: "VSCode",
    children: [[p + "vscode/plugins", "Плагины"]],
  },
];
