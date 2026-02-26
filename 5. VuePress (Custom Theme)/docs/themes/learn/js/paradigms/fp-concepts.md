# Концепции функционального программирования

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Чистые функции
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Чистые функции` (pure functions) - возвращает один и тот же результат для одинаковых входных данных


<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js:no-line-numbers
// Чистая функция
function sum(a, b) {
	rerturn a + b;
}
```
</template>
<template v-slot:last>

```js:no-line-numbers
// Обычная функция
let current = 77;

function sum(a, b) {
	rerturn a + b + current;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Функции первого класса
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Функции первого класса` - функция трактуются как объект, то есть может быть передана другим функциям и ее можно вернуть из функций. Так же ее можно присваивать переменным


```js:no-line-numbers
// Передача функции в качестве аргумента
function getInfo() {
	console.log('Hello');
}

function foo(functionInfo) {
	functionInfo();
}

foo(getInfo);
```

```js:no-line-numbers
// Возврат функции из функции
function foo(functionInfo) {
	return function() {
		console.log('Hello');
	}
}

const result = foo();
result();
```

```js:no-line-numbers
// Присвоение функции в переменную
const foo = function() {
	console.log('Hello');
}

foo();
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Иммутабельность
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Иммутабельность` - свойство объектов не изменяться (н-р строка. строку нельзя поменять на месте, для изменения нужно создать новую строку). Применяется для списков, словарей и т.д. Иммутабельный список - список в который нельзя добавить / удалить элемент, можно только итерироваться по ним. Можно создать новый список который содежит все элементы +1, при этом старый остается валадным

<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

##### Иммутабельно
- `map` - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
```js:no-line-numbers
const numbers = [1, 2, 3];

const doubles = numbers.map((num) => {
	return num * 2;
});

console.log(numbers); // => [1, 2, 3]
console.log(doubles); // => [2, 4, 6]
```
</template>
<template v-slot:last>

##### Не иммутабельно
- `push`, `unshift`, `pop`, `shift` изменяют существующий массив
```js:no-line-numbers
const arr = ['Tony', 'Kate'];

// Добавление нового элемента в конец массива
arr.push('Jack');
// Добавление нового элемента в начало массива
arr.unshift('Jack');
// Удаление элемента из конца массива
arr.pop();
// Удаление элемента из начала массива
arr.shift();
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Каррирование функций
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Каррирование функций` - все функции могут быть от одного аргумента. Преобразование функции от пары аргументов в функцию, берущую свои аргументы по одному


```js:no-line-numbers
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
log(multiply(1)(2)(3)) // 6

//const mul1 = multiply(1);
//const mul2 = mul1(2);
//const result = mul2(3);
//log(result); // 6
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Рекурсия
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `Рекурсия` - рекурсивные функции вызывают сами себя, позволяя операции выполняться снова и снова

##### Пример возведения в степень через рекурсию
```js:no-line-numbers
function pow(x, n) {
	// пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
	if (n != 1) {
		return x * pow(x, n - 1);
	} else {
		return x;
	}
}

console.log(pow(2, 3)); // 8
```
