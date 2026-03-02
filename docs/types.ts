export interface IHeaderMenuNavChildren {
  text: string;
  link: string;
  theme: TThemeTopics;
}

export type TSidebarTopicsItemStatus = "done" | "check";

export type TSidebarTopicsItem = [
  path: string,
  title: string,
  status?: TSidebarTopicsItemStatus,
];

export interface ISidebarTopics {
  title: string;
  children: TSidebarTopicsItem[];
}

export interface IHeaderMenuNav {
  text: string;
  children: IHeaderMenuNavChildren[];
}

export interface IBuildTopics {
  topics: ISidebarTopics[];
  path: string;
  title: string;
  theme: TThemeTopics;
}

export type TThemeTopics =
  | "default"
  | "react"
  | "node"
  | "js"
  | "vue"
  | "html"
  | "primary"
  | "secondary"
  | "accent"
  | "actual"
  | "tech"
  | "theory"
  | null;

export type IThemeConfigNav = {
  text: string;
  items: IHeaderMenuNavChildren[];
};
