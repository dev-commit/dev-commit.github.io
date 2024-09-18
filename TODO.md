# TODO

## ⭐️ Search
- Добавить `f-search`

<!-- TODO:
<f-search>TS -> Merge</f-search>
<f-search>CSS -> <u>block-size</u></f-search>
-->

## ⭐️ TODO
- `v-sandbox` чекнуть `needcheck`

## ⭐️ FEATURES
- Нормальный роутинг
Сейчас добавляется хэш и подгрузка страницы через Fetch
https://dev-commit.github.io/pages/wiki#wiki/main/symbols
Нужно формировать не только базовые pages, но и воложенные страницы

### ⭐️ FIXME (временно решено)
- Search. Если результат поиска выпадает на текущую страницу, то URL меняется, но контент не меняется. Временно решено перезагрузкой страницы
- Мобильная версия. При вводе в поиск, скрывается левое меню. Скорее всего связано с "window.addEventListener('resize')" из "src\vue.js\build.js". При наборе текса в input, появлятся клавиатура, которая может вызвать resize. Временно решено закомментированным кодом с "window.addEventListener('resize')"

----

## Internal Links
```
<a data-attr="internal" href="/pages/react-js#react-js/aliases/vite">Link</a>
```
