import { getSidebar } from "../.vuepress/utils/sidebar";
import { getNav } from "../.vuepress/utils/nav";
import { IHeaderMenuNav } from "../types";

// LEARN
import { THEME_LEARN_JS, PATH_LEARN_JS } from "./learn/js/learn-js";
import { THEME_LEARN_GIT, PATH_LEARN_GIT } from "./learn/git/learn-git";

// REFERENCES
import {
  THEME_REFERENCES_BOOKS,
  PATH_REFERENCES_BOOKS,
} from "./references/books/references-books";

// USAGE
import { THEME_USAGE_TECH, PATH_USAGE_ITECH } from "./usage/tech/usage-tech";
import { THEME_USAGE_IDE, PATH_USAGE_IDE } from "./usage/ide/usage-ide";

// UI-KIT
import { THEME_UIKIT_UI, PATH_UIKIT_UI } from "./uikit/ui/uikit-ui";

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Usage",
    children: [
      getNav({
        title: "Технологии",
        link: PATH_USAGE_ITECH + "/",
        theme: "js",
      }),
      getNav({
        title: "IDE",
        link: PATH_USAGE_IDE + "/",
        theme: "node",
      }),
    ],
  },
  {
    text: "Обучение",
    children: [
      getNav({
        title: "Git",
        link: PATH_LEARN_GIT + "/",
      }),
      getNav({
        title: "JavaScript",
        link: PATH_LEARN_JS + "/",
      }),
    ],
  },
  {
    text: "Ссылки",
    children: [
      getNav({
        title: "Книги",
        link: PATH_REFERENCES_BOOKS + "/",
      }),
    ],
  },
  {
    text: "Utils",
    children: [
      getNav({
        title: "Ui-Kit",
        link: PATH_UIKIT_UI + "/",
      }),
    ],
  },
];

export const SIDEBAR = {
  // LEARN
  ...getSidebar({ arr: THEME_LEARN_JS, path: PATH_LEARN_JS }),
  ...getSidebar({ arr: THEME_LEARN_GIT, path: PATH_LEARN_GIT }),

  // REFERENCES
  ...getSidebar({ arr: THEME_REFERENCES_BOOKS, path: PATH_REFERENCES_BOOKS }),

  // USAGE
  ...getSidebar({ arr: THEME_USAGE_TECH, path: PATH_USAGE_ITECH }),
  ...getSidebar({ arr: THEME_USAGE_IDE, path: PATH_USAGE_IDE }),

  // UI-KIT
  ...getSidebar({ arr: THEME_UIKIT_UI, path: PATH_UIKIT_UI }),
};
