# Деструктивное присваивание

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### Деструктивное присваивание массивов

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

```js:no-line-numbers
const languages = ['JavaScript', 'Python', 'Ruby'];
```

<!-- .............. START ......................... -->
<v-two>
<template #first>

```js:no-line-numbers
// ES6
const [js, py, rb] = languages;
```

</template>
<template #last>

```js:no-line-numbers
// ES5
const js = languages[0]; // JavaScript
const py = languages[1]; // Python
const rb = languages[2]; // Ruby
```

</template>
</v-two>
<!-- ............... END .......................... -->

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### Деструтивное присваивание объектов

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

```js:no-line-numbers
const person = {
	firstname: 'John',
	lastname: 'Doe'
};
```

<!-- .............. START ......................... -->
<v-two>
<template #first>

```js:no-line-numbers
// ES6
const { firstname, lastname } = person;
```

</template>
<template #last>

```js:no-line-numbers
// ES5
const firstname = person.firstname; // John
const lastname = person.lastname;   // Doe
```

</template>
</v-two>
<!-- ............... END .......................... -->
