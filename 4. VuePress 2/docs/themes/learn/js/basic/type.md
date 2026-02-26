# Типы данных. Переменные и константы


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Типы данных
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
##### Примитивные
1. `Number` - число 64-битный float
2. `String` - cтрока
3. `Boolean` - булевый, логический
4. `null` - специальное пустое или неизвестное значение (присваивается самостоятельно)
5. `undefined` - специальное неприсвоеное значение (возвращается из js)
6. `Symbol` - символ ES6
7. `BigInt` - целые числа больше 2<sup>53</sup> BigInt (значение)

##### Объекты
8. `Object` - объект 


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Переменные и константы
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
let a = 'Это переменная, ее можно менять'; 
const b = 'Это константа, ее нельзя менять'; 
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Типы данных
<!------------------------------------------------------------->
```js:no-line-numbers
const string = 'Это строка'; // Строка
const int    = 14;           // Целое число
const float  = 0.25;         // Дробное число
const bool   = true;         // Логическое значение (только true или false)
```

<!------------------------------------------------------------->
#### Сложение чисел
<!------------------------------------------------------------->
```js:no-line-numbers
const a = 10;
const b = 20;
const c = a + b; // Результат: 30
```

<!------------------------------------------------------------->
#### Соединение строк
<!------------------------------------------------------------->
```js:no-line-numbers
const a = 'Привет ';
const b = 'мир';
const c = a + b; // Результат: 'Привет мир'
```

<!------------------------------------------------------------->
#### Изменение значений переменных
<!------------------------------------------------------------->
```js:no-line-numbers
let count = 32;
count = count + 16; // 1 вариант
count += 16;        // 2 вариант
```

<!------------------------------------------------------------->
### `typeof` - возвращает тип аргумента
<!------------------------------------------------------------->
```js:no-line-numbers
typeof 0;     // "number"
typeof true;  // "boolean"
typeof 'foo'; // "string"
```

[Переменные: let и const](https://learn.javascript.ru/let-const)
