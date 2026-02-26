# Async Function (ES2017)

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Объявление
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js:no-line-numbers
// Стрелочная
const foo = async () => {
    const a = await AsyncFunction();
};
```
</template>
<template v-slot:last>

```js:no-line-numbers
// Обычная
async function foo() {
    const a = await AsyncFunction();  
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js:no-line-numbers
// Стрелочная
(async () => {
    const a = await AsyncFunction();
})()
```
</template>
<template v-slot:last>

```js:no-line-numbers
// Обычная
(async function() {
    const a = await AsyncFunction();
})();
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Описание
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `Async Function` - асинхронная функция (`Promise` + `Generator`)
- Асинхронная функция возвращает <u>Promise</u>, для получения значения используется then
- await дожидается выполнения <u>Promise</u>, вытаскивает значение и возвращает его
- await можно использовать только внутри асинхронной функции
- await необязательно ставить перед вызовом асинхронной фунцкии. это может быть любая функция, возвращающая <u>Promise</u>


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

```js:no-line-numbers
// AJAX-запрос
const getResource = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

getResource('https://swapi.co/api/people/1/')
    .then(body => console.log(body))
```

```js:no-line-numbers
// Асинхронная функция
async function getUser(id) {
    return { id:1 };   
}

async function main() {
    let user = await getUser(1);
    console.log(user);
}

main();
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Использование в классах и объектах
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
// Свойство объекта
const obj = {
    getUser: async function(id) {
        //
    }
}
```

```js:no-line-numbers
// Метод объекта
const obj = {
    async getName() {
        return fetch('https://www.example.com');
    }
}
```

```js:no-line-numbers
// Класс
class Obj {
    async getResource() {
        return fetch('https://www.example.com');
    }
}
```

