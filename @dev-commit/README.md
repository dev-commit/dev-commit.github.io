
## Available Scripts
```bash
http-server # start app
```

```bash
npm run build  # [node.js] build full pages (после изменения темы)
npm run pages  # [node.js] build pages (после добавления новой страницы)
```

---

## Todo

### Themes
- remove `var`

### Features
- Добавить SUB-TITLE
- Ссылка на главную
- Сворачивание меню
- Подсвечивание элемента меню в BUILD
- Добавить нумерацию тем
- Сохранить в LocalStorage BUILD / PAGES MODE
- Адаптивность

### Global
- Переписать на Parcel
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
<v-iframe />          <!-- DONE? Не рендерится контент после (только в webnotes) -->
<v-code />            <!-- Отступы внутри блока кода если используется `<em>` или другие теги в начале -->
<link-page-wrapper /> <!-- Оформить навигацию по теме -->
<u-code-wrapper />    <!-- Отступы внутри блока кода обертки -->
```

```html
<u-code-wrapper>
Отступ сверху, если не использовать TAB
</u-code-wrapper>
```
