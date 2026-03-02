import type { IBuildTopics, IHeaderMenuNavChildren } from "../../types";

export const getNav = (data: IBuildTopics[]): IHeaderMenuNavChildren[] => {
  const result = data.map((dataItem) => {
    return {
      text: dataItem.title,
      link: dataItem.path,
      theme: dataItem.theme,
    };
  });

  return result;
};
