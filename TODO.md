# TODO

## @modules\@links.js

```js
const ARR_LINKS = [
  {
    page: 'testing',
    theme: 'primary',
    title: theory+'Тестирование'
  },
]
```

- Добавить поле prefix и вынести "theory" и т.д.
- Пока в title страницы попадает HTML код

## ⭐️ TODO
- Добавить `f-search` ко всем блокам
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
```html
<a data-attr="internal" href="/pages/react-js#react-js/aliases/vite">DevCommit: Name</a>
```
