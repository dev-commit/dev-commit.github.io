# Boulder

> docs/.vuepress/builder.js

```ts
export const NAV = [
  // Воводит 1 элемент в меню
  getNav("Title", PATH),

  // Выводит выпадающий список с элементами
  {
    text: "Usage",
    children: [
      getNav("Title", PATH + "/"),
      getNav("Title", PATH + "/"),
      getNav("Title", PATH + "/"),
    ],
  },

  // Выводит выпадающий список с элементами, но открывает только 1 страницу
  {
    text: "Roadmaps",
    children: [
      {
        text: "React Frontend Developer",
        link: "/posts/roadmaps/react-frontend-developer",
      },
    ],
  },
];
```
