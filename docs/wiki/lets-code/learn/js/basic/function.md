# Функции

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Функция, не возвращающая значение
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
function sum(a, b) {
    const result = a + b;
    console.log(result);
}

sum(34, 12);
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Функция, возвращающая значение
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
function sum(a, b) {
    const result = a + b;
    return result;
}

const result = sum(34, 12);
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Глобальные и локальные переменные
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
// Глобальная переменная
const a = 10;

function test() {
	// Локальная переменная
	const b = 20;
	console.log(a, b);
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Пример: Определить площадь поверхности планет
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- Площадь поверхности сферы
- `A = 4 * pi * r * r`

<!------------------------------------------------------------->
#### Решение 1
<!------------------------------------------------------------->
```js:no-line-numbers
const mars    = 3390; // km
const mercury = 2440; // km
const pi    = 3.14;
const surfaceMars    = 4 * pi * mars * mars;
const surfaceMercury = 4 * pi * mercury * mercury;
```

<!------------------------------------------------------------->
#### Решение 2 (через функции)
<!------------------------------------------------------------->
```js:no-line-numbers
const mars    = 3390; // km
const mercury = 2440; // km
const pi    = 3.14;

function surface(r) {
	return 4 * pi * r * r;
}

const surfaceMars = surface(mars);
const surfaceMercury = surface(mercury);
```
