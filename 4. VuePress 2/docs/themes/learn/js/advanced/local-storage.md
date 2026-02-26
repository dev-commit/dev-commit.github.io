# Local Storage

- `Google Chrome` -> `F12` -> `Application` -> `Local Storage`
- `localStorage` - это свойство глобального объекта браузера (window)


```js:no-line-numbers
// Добавляет в localStorage новый ключ со значением (а если такой ключ уже существует, то перезаписывает новым значением)
localStorage.setItem('id', '77');

// Получить значение
const a = localStorage.getItem('id');

// Удаление ключа
localStorage.removeItem('id');

// Очистка всего хранилища
localStorage.clear();
```

<!------------------------------------------------------------->
#### Объекты и массивы
<!------------------------------------------------------------->
```js:no-line-numbers
const obj = {
	item1: 1,
	item2: [123, "two", 3.0],
	item3: "hello"
};

// Сериализация объекта и запись в хранилище по ключу "key"
localStorage.setItem("key", JSON.stringify(obj));

// Преобразование из json в объект
const returnObj = JSON.parse(localStorage.getItem("key"));
```
