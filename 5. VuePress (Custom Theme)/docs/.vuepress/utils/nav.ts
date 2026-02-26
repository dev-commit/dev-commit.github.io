type TTheme =
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
  | "theory";

interface IGetNav {
  title: string;
  link: string;
  theme?: TTheme;
}

export interface IGetNavReturn {
  text: string;
  link: string;
  theme: string;
}

export const getNav = ({
  title,
  link,
  theme = "default",
}: IGetNav): IGetNavReturn => {
  return {
    text: title,
    link: link,
    theme: "theme-" + theme,
  };
};
