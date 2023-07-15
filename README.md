
## Available Scripts
```bash
http-server # start app
```

```bash
npm run build   # [Node.js] build full pages (после изменения темы)
npm run pages   # [Node.js] build pages (после добавления новой страницы)
npm run deploy  # build + pages
```

---

## Todo

### Global
- Переписать на ES6 Modules
- Переписать на Parcel
- Поддержка Markdown
- Сделать либу для установки через NPM

### Themes
- `<v-copy>` не работает в build

### Мобильная версия
- Добавить класс "xl" для больших картинок
- Проверить адаптивность

### Build версия
- Подсвечивание элемента левого меню
- Подсвечивание элемента header меню

### Features
- Не подставлять эмодзи в title и название раздела в левом меню
- Ссылка на главную
- Добавить нумерацию тем (опционально)

---

## Fix
- Если в меню 2 строчки, то `u-menu` накладывается
- Слова внути `u-menu` без переноса

```html
<v-code />            <!-- Отступы внутри блока кода если используется `<em>` или другие теги в начале -->
<link-page-wrapper /> <!-- Оформить навигацию по теме -->
<u-code-wrapper />    <!-- Отступы внутри блока кода обертки -->
```

```html
<u-code-wrapper>
Отступ сверху, если не использовать TAB
</u-code-wrapper>
```
