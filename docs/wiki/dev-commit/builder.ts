import { getSidebar } from "../../.vitepress/utils/sidebar";
import { getNav } from "../../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../../types";

import wikiUiKit from "./system/ui-kit/build-ui-kit";
import wikiHtml from "./layout/html/build-html";

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Layout",
    children: getNav([wikiHtml]),
  },
  {
    text: "System",
    children: getNav([wikiUiKit]),
  },
];

export const SIDEBAR = getSidebar([wikiUiKit, wikiHtml]);
