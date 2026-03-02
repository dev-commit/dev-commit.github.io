import { getSidebar } from "../../.vitepress/utils/sidebar";
import { getNav } from "../../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../../types";

import wikiJs from "./learn/js/build-js";
import wikiGit from "./learn/git/build-git";
import wikiBooks from "./references/books/build-books";
import wikiTech from "./usage/tech/build-tech";
import wikiIde from "./usage/ide/build-ide";

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Usage",
    children: getNav([wikiTech, wikiIde]),
  },
  {
    text: "Обучение",
    children: getNav([wikiGit, wikiJs]),
  },
  {
    text: "Ссылки",
    children: getNav([wikiBooks]),
  },
];

export const SIDEBAR = getSidebar([
  wikiJs,
  wikiGit,
  wikiBooks,
  wikiTech,
  wikiIde,
]);
