import { ISidebarTopics, TSidebarTopicsItem } from "../../types";

interface IGetSidebarChildren {
  children: TSidebarTopicsItem[];
  index: number;
  num?: number;
}

const getSidebarChildren = ({ children, index, num }: IGetSidebarChildren) => {
  const result = children.map(([path, title], indexChildren) => ({
    text: num ? `${index + 1}.${indexChildren + 1} ${title}` : `• ${title}`,
    link: path,
  }));

  return result;
};

interface IGetSidebar {
  arr: ISidebarTopics[];
  path: string;
  num?: number;
}

export const getSidebar = ({ arr, path, num }: IGetSidebar) => {
  const result = arr.map(({ title, children }, index) => ({
    // text: `${index + 1}. ${title}`,
    text: title,
    children: getSidebarChildren({ children, index, num }),
    // collapsable: true,
  }));

  return { [path]: result };
};
