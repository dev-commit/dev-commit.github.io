
## Available Scripts
```bash
http-server # start app
```

```bash
npm run build   # [node.js] build full pages (после изменения темы)
npm run pages   # [node.js] build pages (после добавления новой страницы)
npm run filles  # build + pages
```

---

## Todo

### Themes
- `<v-copy>` не работает в build

### Features
- Не подставлять эмодзи в title и название раздела в левом меню
- Добавить SUB-TITLE
- Ссылка на главную
- Подсвечивание элемента меню в BUILD
- Добавить нумерацию тем (опционально)
- Адаптивность

### Global
- Переписать на Parcel
- Поддержка Markdown
- Сделать либу для установки через NPM

### Other
- Открыть страницу в Visual Studio Code
```
<a href="vscode://file/C:/Users/anduser/Desktop/RepoName/index.html"></a>
```

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
