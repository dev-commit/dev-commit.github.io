import { IGetNavReturn } from "./.vuepress/utils/nav";

export type TSidebarTopicsItem = [path: string, title: string];

export interface ISidebarTopics {
  title: string;
  children: TSidebarTopicsItem[];
}

export interface IHeaderMenuNav {
  text: string;
  children: IGetNavReturn[];
}
