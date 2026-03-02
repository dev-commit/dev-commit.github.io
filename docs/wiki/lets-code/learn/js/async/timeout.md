# Таймеры


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `setTimeout()`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `setTimeout()` - однократное выполнение кода

```js:no-line-numbers
const timer = setTimeout(function() { 
	console.log('go'); 
}, 1000);

clearTimeout(timer);
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `setInterval()`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `setInterval()` - многократное выполнение кода

```js:no-line-numbers
const timer = setInterval(function() { 
	console.log('go'); 
}, 1000);

clearInterval(timer);
```
