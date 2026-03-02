# Операторы разворота

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Операторы разворота массивов
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
const arr1 = ['Kate', 'Jack'];
const arr2 = ['Tony', 'Natasha'];
const result = [...arr1, 'Tom', ...arr2];

console.log(result); // => ["Kate", "Jack", "Tom", "Tony", "Natasha"]
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Операторы разворота объектов
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
const defaults = {
	host: 'localhost',
	user: 'admin'
};

// Более высокий приоритет
const options = {
	user: 'Tony',
	password: 'qwerty'
}

const result = { ...defaults, ...options };

// user из options перезапишет user из defaults
console.log(result);

// =>
// {
// 	host: 'localhost',
// 	user: 'Tony',
// 	password: 'qwerty'
// }
```
