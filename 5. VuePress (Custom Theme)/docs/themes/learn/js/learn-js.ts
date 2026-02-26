import { ISidebarTopics } from "../../../types";

export const PATH_LEARN_JS = "/learn/js";

const p = PATH_LEARN_JS + "/";

export const THEME_LEARN_JS: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      [p + "basic/ecmascript", "Стандарт ECMAScript"],
      [p + "basic/script", "Подключение файлов JavaScript"],
      [p + "basic/type", "Типы данных. Переменные и константы"],
      [p + "basic/console", "Вывод сообщения в консоль"],
      [p + "basic/quotes", "Виды кавычек. Шаблонные строки. Комментарии"],
      [p + "basic/alert", "Вывод сообщения пользователю"],
      [p + "basic/case", "Условные операторы"],
      [p + "basic/dom-select", "Выборка элементов страницы"],
      [p + "basic/inner-html", "Методы innerText и innerHTML"],
      [p + "basic/function", "Функции"],
      [p + "basic/dom-actions", "События и обработчики событий"],
      [p + "basic/style", "Обращение к CSS свойствам и классам"],
      [p + "basic/array-for", "Массивы и циклы"],
      [p + "basic/increment", "Инкремент и декремент"],
      [p + "basic/attr", "Атрибуты"],
    ],
  },
  {
    title: "ООП и ФП",
    children: [
      [p + "paradigms/objects", "Объекты"],
      [p + "paradigms/class", "Классы"],
      [p + "paradigms/oop-concepts", "Концепции ООП"],
      [p + "paradigms/fp-concepts", "Концепции ФП"],
    ],
  },
  {
    title: "Асинхронность",
    children: [
      [p + "async/timeout", "Таймеры"],
      [p + "async/event-loop", "Event Loop"],
      [p + "async/promise", "Promise"],
      [p + "async/ajax", "AJAX запросы на сервер"],
      [p + "async/async", "Async Function"],
      [p + "async/axios", "Библиотека Axios"],
    ],
  },
  {
    title: "Сборщики и модули",
    children: [
      [p + "bundlers/nodejs", "Node.js и NPM"],
      // [p+'bundlers/gulp',         'Сборщик Gulp'],
      // [p+'bundlers/webpack',      'Сборщик Webpack'],
      [p + "bundlers/parcel", "Сборщик Parcel"],
      [p + "bundlers/modules", "Модульная система"],
      [p + "bundlers/modules-es6", "ES6-модули в JavaScript"],
    ],
  },
  {
    title: "Продвинутые темы",
    children: [
      [p + "advanced/arrow-function", "Стрелочные функции"],
      [p + "advanced/foreach", "Циклы для перебора массива"],
      [p + "advanced/local-storage", "Local Storage"],
      [p + "advanced/array", "Методы работы с массивами"],
      [p + "advanced/string", "Методы работы со строками"],
      [p + "advanced/number", "Метода работы с числами"],
      [p + "advanced/spread", "Операторы разворота"],
      [p + "advanced/destructive", "Деструктивное присваивание"],
      [p + "advanced/dom-form", "Выборка элементов формы"],
      [p + "advanced/date", "Дата и время"],
      [p + "advanced/throw", "Обработка исключений"],
      [p + "advanced/create-element", "Создание элементов"],
    ],
  },
  {
    title: "Инструменты",
    children: [
      [p + "instruments/canvas", "Рисование на Canvas"],
      // [p+'instruments/chrome-sources',       'Отладка в браузере Chrome'],
      [p + "instruments/jquery", "jQuery и jQuery UI"],
      // [p+'instruments/libs',                 'Подключение сторонних скриптов'],
    ],
  },
];

/*
[Функции]
- Варианты объявления функций
- arguments, ...rest
- Параметры функции (ES6)
- Замыкания

- Тернарные операторы
- Gulp
*/
