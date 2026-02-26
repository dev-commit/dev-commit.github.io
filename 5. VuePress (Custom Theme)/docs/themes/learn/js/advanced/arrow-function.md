# Стрелочные функции

[MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Варианты
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### 2 агрумента
<!------------------------------------------------------------->
<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js:no-line-numbers
// Arrow Function
const add = (x, y) => x + y;
```
</template>
<template v-slot:last>

```js:no-line-numbers
// Function
function add(x, y) {
	return x + y;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!------------------------------------------------------------->
#### 1 агрумент
<!------------------------------------------------------------->

- Если функция принимает 1 параметр, не нужно заключать его в скобки

<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js:no-line-numbers
// Arrow Function
const square = x => x*x;
```
</template>
<template v-slot:last>

```js:no-line-numbers
// Function
const square = function(x) {
	return x*x;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!------------------------------------------------------------->
#### Без аргументов
<!------------------------------------------------------------->
<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js:no-line-numbers
// Arrow Function
const giveMeAnswer = () => 42;
```
</template>
<template v-slot:last>

```js:no-line-numbers
// Function
const giveMeAnswer = function() {
	return 42;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!------------------------------------------------------------->
#### Не возвращает значение
<!------------------------------------------------------------->
<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js:no-line-numbers
// Arrow Function
const log = () => console.log('hi');
```
</template>
<template v-slot:last>

```js:no-line-numbers
// Function
const log = function() {
	console.log('hi');
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!------------------------------------------------------------->
#### Состоит из двух строк
<!------------------------------------------------------------->

- Если в стрелочной функции несколько строк, то используются фигурные скобки и `return`

<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js:no-line-numbers
// Arrow Function
const multiply = (x, y) => {
	const result = x*y;
	return result;
}
```
</template>
<template v-slot:last>

```js:no-line-numbers
// Function
const multiply = function(x, y) {
	const result = x*y;
	return result;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!------------------------------------------------------------->
#### Возвращает объект
<!------------------------------------------------------------->

- Возвращаемый объект оборачивается в круглые скобки

<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js:no-line-numbers
// Arrow Function
const getPerson = () => ({ name:'Jack' });
```
</template>
<template v-slot:last>

```js:no-line-numbers
// Function
const getPerson = function() {
	return { name:'Jack' }
}
```
</template>
</v-two>
<!-- ............... END .......................... -->
