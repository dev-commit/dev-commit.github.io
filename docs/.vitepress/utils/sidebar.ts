import type { DefaultTheme } from "vitepress";
import type {
  IBuildTopics,
  TSidebarTopicsItem,
  TSidebarTopicsItemStatus,
} from "../../types";

const checkIconColor = (
  status: TSidebarTopicsItemStatus | undefined,
): string => {
  switch (status) {
    case "done":
      return "blue";
    case "check":
      return "red";
    default:
      return "inherit";
  }
};

const getSidebarChildren = (
  children: TSidebarTopicsItem[],
  fullPath: string,
): DefaultTheme.SidebarItem[] => {
  return children.map(([path, title, status]) => {
    const iconColor = checkIconColor(status);

    return {
      text: `<span style="color: ${iconColor}">•</span> ${title}`,
      link: fullPath + path,
    };
  });
};

const buildSidebarFor = (
  data: IBuildTopics,
): Record<string, DefaultTheme.SidebarItem[]> => {
  const result: DefaultTheme.SidebarItem[] = data.topics.map(
    ({ title, children }) => ({
      text: title,
      items: getSidebarChildren(children, data.path),
    }),
  );
  return { [data.path]: result };
};

export const getSidebar = (
  items: IBuildTopics[],
): Record<string, DefaultTheme.SidebarItem[]> =>
  items.reduce(
    (acc, data) => ({ ...acc, ...buildSidebarFor(data) }),
    {} as Record<string, DefaultTheme.SidebarItem[]>,
  );
