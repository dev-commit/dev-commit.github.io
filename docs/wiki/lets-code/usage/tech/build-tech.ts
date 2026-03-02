import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "usage/tech/";
const title = "Технологии";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Roadmaps",
    children: [
      ["roadmaps/react-frontend-developer", "React Frontend Developer"],
    ],
  },
  {
    title: "Не разработка",
    children: [["other/services", "Сервисы общего назначения"]],
  },
  {
    title: "Нейросети",
    children: [
      ["ai/dev", "Разработка"],
      ["ai/llm", "LLM и платформы"],
      ["ai/image", "Изображения"],
      ["ai/video", "Видео"],
      ["ai/sound", "Звук"],
      ["ai/3d", "3D модели"],
      ["ai/common", "Общее"],
    ],
  },
  {
    title: "Фреймворки",
    children: [
      ["frameworks/react", "React.js"],
      ["frameworks/vue", "Vue.js"],
      ["frameworks/node", "Node.js"],
      ["frameworks/frameworks", "Frameworks"],
    ],
  },
  {
    title: "Вёрстка",
    children: [
      ["html/main", "Общее"],
      ["html/infographics", "Инфографика"],
      ["html/layouts", "Макеты"],
      ["html/tools", "Инструменты"],
      ["html/libs", "Библиотеки"],
    ],
  },
  {
    title: "Технологии",
    children: [
      ["tech/api", "Свободное API"],
      ["tech/builders", "Сборщики"],
      ["tech/deploy", "Деплой"],
      ["tech/e2e", "E2E тестирование"],
      ["tech/wiki", "Разработка документации и Wiki"],
      ["tech/3d", "3D графика"],
      ["tech/repo", "Репозитории проектов"],
      ["tech/webcomponents", "WebComponents"],
      ["tech/cms", "CMS"],
    ],
  },
  {
    title: "Общее",
    children: [
      ["common/technical-interview", "Technical Interview"],
      ["common/games", "Игры"],
      ["common/training", "Тренировки и план развития"],
      ["common/schools", "Школы программирования"],
      ["common/freelance", "Фриланс-биржи"],
      ["common/svg-logo", "Создание SVG логотипа"],
      ["common/common", "Общее"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
