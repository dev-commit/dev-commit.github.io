# Выборка элементов формы

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `<input type="text">`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
const a = element.value;
element.value = 'new value';
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `<input type="checkbox">`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
const a = element.checked; 
element.checked = true;
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `<input type="radio">`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html:no-line-numbers
<input type="radio" name="radio" value="r1">
<input type="radio" name="radio" value="r2">
<input type="radio" name="radio" value="r3">
```

```js:no-line-numbers
const radio = document.querySelectorAll('input[type="radio"]');

for(let i=0; i<=radio.length-1; i++) {
	if(radio[i].checked) {
		let value = radio[i].getAttribute('value');
		console.log(value);
	}
}
```

```js:no-line-numbers
radio.disabled = true;   
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `<select>`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
const select = document.querySelector('select');
const a = select.value;
const a = select.options[select.selectedIndex].value;
const a = select.options[select.selectedIndex].text;
```