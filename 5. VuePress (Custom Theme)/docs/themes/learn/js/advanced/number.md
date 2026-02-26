# Числа. Метода работы с числами

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Методы
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### `isNaN` `Number` `parseInt` `parseFloat`

```js:no-line-numbers
isNaN(num);      // Если в переменной не число, вернет true
Number(num);     // Преобразование любого объекта в число
parseInt(num);   // Преобразование в целое число
parseFloat(num); // Преобразование в целое/дробное число
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Math
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
Math.round(num); // Округляет число к ближайшему целому
Math.ceil(num);  // Округляет число в большую сторону
Math.floor(num); // Округляет число в меньшую сторону

const rand = Math.random(); // Генерация случайного числа в диапазоне от 0 до 1
const rand = Math.round(Math.random() * 100); // От 0 до 100

const a = Math.pow(4, 2); // Степень 4 в 2
const a = Math.sqrt(400); // Квадратный корень числа
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Остаток от деления
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
alert(5 % 2); // 1, остаток от деления 5 на 2
alert(8 % 3); // 2, остаток от деления 8 на 3
alert(6 % 3); // 0, остаток от деления 6 на 3
```


