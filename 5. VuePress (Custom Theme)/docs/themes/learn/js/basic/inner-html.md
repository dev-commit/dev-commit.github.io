# Методы innerText и innerHTML

```html:no-line-numbers
<div id="element">Element</div>
```

```js:no-line-numbers
const element = document.querySelector('#element');

element.innerText  = 'New Text';               // Именить текст
element.innerHTML  = '<h2>New HTML Code</h2>'; // Изменить HTML

const text = element.innerText; // Получить текст
const html = element.innerHTML; // Получить HTML
```
