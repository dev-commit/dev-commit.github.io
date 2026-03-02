# v-two

### Текст

```vue
<v-two>
  <template #first>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </template>

  <template #last>
    It has survived not only five centuries, but also the leap into electronic
  </template>
</v-two>
```

<v-two>
<template #first>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</template>
<template #last>
  It has survived not only five centuries, but also the leap into electronic
</template>
</v-two>

---

### Markdown

> Для передачи Markdown, нужно чтобы после `<template>` и перед `</template>` была пустая строка

````vue
<v-two>
  <template #first>

  ```js
  console.log("Hello");
  ```

  </template>

  <template #last>

  - Элемент 1
  - Элемент 2

  </template>
</v-two>
````

<v-two>
<template #first>

```js
console.log("Hello");
```

</template>
<template #last>

- Элемент 1
- Элемент 2

</template>
</v-two>

---

### Props: `fix`

```vue
<v-two fix>
  ...
</v-two>
```

<v-two fix>
<template #first>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry
</template>
<template #last>
  It has survived not only five centuries, but also the leap into electronic
</template>
</v-two>

---

### Props: `compare` и `title`

```vue
<v-two compare :title="['Vue 3', 'Vue 2']">
  ...
</v-two>
```

<v-two compare :title="['Vue 3', 'Vue 2']">
<template #first>

```js
console.log("Hello");
```

</template>
<template #last>

```js
console.log("Hello");
```

</template>
</v-two>

```vue
<v-two :title="['Vue 3', 'Vue 2']">
  ...
</v-two>
```

<v-two :title="['Vue 3', 'Vue 2']">
<template #first>

```js
console.log("Hello");
```

</template>
<template #last>

```js
console.log("Hello");
```

</template>
</v-two>
