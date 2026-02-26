# Методы работы с массивами

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Методы
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### `length` `slice`
```js:no-line-numbers
// Длина массива (индекс последнего элемента)
const a = arr.length;

// Вырезать с 1 до 7 не включая, если не указан второй аргумент, то до конца
const arr2 = arr1.slice(1, 7);
```

### `indexOf` `lastIndexOf`
```js:no-line-numbers
// Возвращает первый индекс, по которому элемент может быть найден в массиве или -1, если индекса нет
const a = colors.indexOf('white');

// Возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет
const a = colors.lastIndexOf('white');
```

### `join` `split`
```js:no-line-numbers
// Преобразование массива в строку с заданным разделителем
const a = arr.join('.');

// Преобразование строки с заданным разделителем в массив 
const arr = str.split(';');
```

### `push` `unshift` `pop` `shift`
```js:no-line-numbers
// Добавление нового элемента в конец массива
arr.push('Jack');

// Добавление нового элемента в начало массива
arr.unshift('Jack');

// Удаление элемента из конца массива
arr.pop();

// Удаление элемента из начала массива
arr.shift();
```

### `reverse` `sort` `concat`
```js:no-line-numbers
// Реверс (переворот массива)
arr.reverse();

// Сортировка по алфавиту
arr.sort();

// Объединение массивов
const arr = arr1.concat(arr2, arr3);
```

### `splice`
```js:no-line-numbers
// Удалить с 3 индекса 2 элемента
arr.splice(3, 2);

// Добавление элементов
arr.splice(2, 0, 'Алина', 'Марина');

// Замена элементов (заменить 2 удаленных элемента на Алексей, Билл)
arr.splice(1, 2, 'Алексей", "Билл');
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Массивы обьектов
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
const a = new Array(
	{
		name: "Андрей",
		email:"andry@mail.ru"
	},
	{
		name: "Анна",
		email:"anna@mail.ru"
	}
);

console.log(a[0].name);  // => "Андрей"
console.log(a[1].email); // => "anna@mail.ru"
```

[Массив: перебирающие методы](https://learn.javascript.ru/array-iteration)

