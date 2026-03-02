import { IHeaderMenuNav } from "docs/types";
import AppConfig from "../app-config";

import {
  NAV as DevCommitNav,
  SIDEBAR as DevCommitSidebar,
} from "./dev-commit/builder";
import {
  NAV as LetsCodeNav,
  SIDEBAR as LetsCodeSidebar,
} from "./lets-code/builder";

const navAndSidebar = (() => {
  switch (AppConfig.Name) {
    case "DevCommit":
      return { NAV: DevCommitNav, SIDEBAR: DevCommitSidebar };
    case "LetsCode":
      return { NAV: LetsCodeNav, SIDEBAR: LetsCodeSidebar };
  }
})();

export const NAV: IHeaderMenuNav[] = navAndSidebar.NAV;
export const SIDEBAR = navAndSidebar.SIDEBAR;
