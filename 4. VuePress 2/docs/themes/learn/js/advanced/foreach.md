# Циклы для перебора массива

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Виды циклов
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `forEach` - для перебора массива
- `filter` - для фильтрации массива
- `map` - для трансформации массива в массив
- `reduce / reduceRight` - для прохода по массиву с вычислением значения
- `every / some` - для проверки массива


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `forEach`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `forEach` - выполняет указанную функцию один раз для каждого элемента в массиве


```js:no-line-numbers
const arr = ['Яблоко', 'Апельсин', 'Груша'];

arr.forEach((element, index, arr) => {
	console.log(element);
	console.log(index);
	console.log(arr);
});

// => Яблоко   | 0 | Array(3)
// => Апельсин | 1 | Array(3)
// => Груша    | 2 | Array(3)
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `filter`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `filter` - создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции


```js:no-line-numbers
// Выбор положительных элементов массива
const arr = [1, -1, 2, -2, 3];
const result = arr.filter(number => {
	return number > 0;
});

console.log(result); // => [1, 2, 3]
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `map`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `map` - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива


```js:no-line-numbers
const numbers = [1, 2, 3];
const doubles = numbers.map((num) => {
	return num * 2;
});

console.log(numbers); // => [1, 2, 3]
console.log(doubles); // => [2, 4, 6]
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `reduce` / `reduceRight`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `reduce` - применяет функцию reducer к каждому элементу массива <u>слева-направо</u>, возвращая одно результирующее значение
- `reduceRight` - применяет функцию reducer к каждому элементу массива <u>справа-налево</u>, возвращая одно результирующее значение


```js:no-line-numbers
// Сумма элементов массива
const arr = [1, 2, 3, 4, 5];

// Для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
const result = arr.reduce((sum, current) => {
  return sum + current;
});

console.log(result); // 15
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `every` / `some`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `every` - проверяет, удовлетворяют ли <u>все</u> элементы массива условию, заданному в передаваемой функции
- `some` - проверяет, удовлетворяют ли <u>какие-нибудь</u> элементы массива условию, заданному в передаваемой функции


```js:no-line-numbers
const arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log( arr.every(isPositive) ); // false, не все положительные
console.log( arr.some(isPositive) );  // true, есть хоть одно положительное
```
