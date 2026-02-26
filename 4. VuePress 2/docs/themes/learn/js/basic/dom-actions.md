# События и обработчики событий

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Основные события
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Мышь
<!------------------------------------------------------------->
- `click` - одиночный клик левой кнопки мыши
- `mousedown` - нажатие кнопки мыши
- `mouseup` - отпускание кнопки мыши

<!------------------------------------------------------------->
#### Форма
<!------------------------------------------------------------->
- `submit` - момент отправки формы обработчику (если кнопка типа "submit")

<!------------------------------------------------------------->
#### Клавиатура
<!------------------------------------------------------------->
- `keydown` - момент нажатия клавиши, до момента отпускания
- `keyup` - момент отпускания клавиши
- `keypress` - нажатие клавиши на клавиатуре

<!------------------------------------------------------------->
#### Документ
<!------------------------------------------------------------->
- `load` - возникает после полного окончания загрузки ресурса (всех картинок, стиле и прочего)
- `resize` - изменение размеров окна браузера
- `scroll` - прокрутка страницы


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Назначение обработчиков событий
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### 1. Использование атрибута HTML
<!------------------------------------------------------------->
```html:no-line-numbers
<button onclick="action()">Action</button>
```

```js:no-line-numbers
function action() {
	console.log('Hello');
}
```

<!------------------------------------------------------------->
#### 2. Использование свойства DOM-объекта
<!------------------------------------------------------------->
```html:no-line-numbers
<button id="element">Action</button>
```

```js:no-line-numbers
const element = document.querySelector('#element');

element.onclick = function() {
	console.log('Hello');
}
```

<!------------------------------------------------------------->
#### 3. addEventListener
<!------------------------------------------------------------->
```html:no-line-numbers
<button id="element">Action</button>
```

```js:no-line-numbers
const element = document.querySelector('#element');

element.addEventListener('click', function() {
	console.log('Hello');
});
```

[Keydown Move Cube (пример)](https://codepen.io/Sergeenkov/pen/vzxgVg)
