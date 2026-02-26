import { ISidebarTopics } from "../../../types";

export const PATH_USAGE_ITECH = "/usage/tech";

const p = PATH_USAGE_ITECH + "/";

export const THEME_USAGE_TECH: ISidebarTopics[] = [
  {
    title: "Roadmaps",
    children: [
      [p + "roadmaps/react-frontend-developer", "React Frontend Developer"],
    ],
  },
  {
    title: "Не разработка",
    children: [[p + "other/services", "Сервисы общего назначения"]],
  },
  {
    title: "Нейросети",
    children: [
      [p + "ai/dev", "Разработка"],
      [p + "ai/llm", "LLM и платформы"],
      [p + "ai/image", "Изображения"],
      [p + "ai/video", "Видео"],
      [p + "ai/sound", "Звук"],
      [p + "ai/3d", "3D модели"],
      [p + "ai/common", "Общее"],
    ],
  },
  {
    title: "Фреймворки",
    children: [
      [p + "frameworks/react", "React.js"],
      [p + "frameworks/vue", "Vue.js"],
      [p + "frameworks/node", "Node.js"],
      [p + "frameworks/frameworks", "Frameworks"],
    ],
  },
  {
    title: "Вёрстка",
    children: [
      [p + "html/main", "Общее"],
      [p + "html/infographics", "Инфографика"],
      [p + "html/layouts", "Макеты"],
      [p + "html/tools", "Инструменты"],
      [p + "html/libs", "Библиотеки"],
    ],
  },
  {
    title: "Технологии",
    children: [
      [p + "tech/api", "Свободное API"],
      [p + "tech/builders", "Сборщики"],
      [p + "tech/deploy", "Деплой"],
      [p + "tech/e2e", "E2E тестирование"],
      [p + "tech/wiki", "Разработка документации и Wiki"],
      [p + "tech/3d", "3D графика"],
      [p + "tech/repo", "Репозитории проектов"],
      [p + "tech/webcomponents", "WebComponents"],
      [p + "tech/cms", "CMS"],
    ],
  },
  {
    title: "Общее",
    children: [
      [p + "common/technical-interview", "Technical Interview"],
      [p + "common/games", "Игры"],
      [p + "common/training", "Тренировки и план развития"],
      [p + "common/schools", "Школы программирования"],
      [p + "common/freelance", "Фриланс-биржи"],
      [p + "common/svg-logo", "Создание SVG логотипа"],
      [p + "common/common", "Общее"],
    ],
  },
];
