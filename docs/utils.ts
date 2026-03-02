import { emoji } from "./constants";

type TCategory = "info" | "install" | "use" | "variants";

export const getTopicSubtitle = (category: TCategory) => {
  switch (category) {
    case "info":
      return emoji.theory + "Информация";
    case "install":
      return emoji.settings + "Установка и настройка";
    case "use":
      return emoji.fire + "Базовый пример";
    case "variants":
      return emoji.code + "Варианты";
  }
};
