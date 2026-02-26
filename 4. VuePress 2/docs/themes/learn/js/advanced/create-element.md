# Создание элементов


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Создание
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
const element = document.createElement('div');
element.innerHTML = 'Go to google';
element.className = 'class-google';
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Добавление на страницу
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
const wrapper = document.querySelector('#wrapper');

// Внутри элемента после контента
wrapper.appendChild(element);

// Внутри элемента перед контентом
wrapper.insertBefore(element, wrapper.lastChild);


// После элемента
wrapper.parentNode.insertBefore(element, wrapper);
// До элемента
wrapper.parentNode.appendChild(element);

// Заменить элемент другим элементом
wrapper.parentNode.replaceChild(element, wrapper);

// insertBefore (1 - элемент который вставляем, 2 - элемент перед которым вставляем)
// insertBefore (1 - чем заменяем, 2 - что заменяем)
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Удаление
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
// Удаление нового элемента
wrapper.parentNode.removeChild(element);

// Удаление элемента обертки
wrapper.parentNode.removeChild(wrapper);

// Удаление нового элемента (если родитель body)
document.body.removeChild(element);
```

