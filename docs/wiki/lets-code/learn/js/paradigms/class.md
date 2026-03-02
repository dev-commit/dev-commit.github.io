# Классы


- `Класс` - функция/шаблон, предназначенный для создания объектов и методов
- `Конструктор` - метод, который вызывается в момент создания объекта т.е. когда используется ключевое слово new он создает свойства и инициализирует, т.е. подготавливает объект к использованию
- `this` - ссылка на текущий контекст вызова (на текущий объект с которым произошло событие)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Создание класса
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
// Создание класса
class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	authorizate() {
		console.log('Hello' + this.name);
	}
}

// Создание экземпляра класса (объекта)
const user = new User('Tony', 25); 
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Наследование
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- Если у подкласса нет конструктора, он будет использовать конструктор родителя
- Если подклассу указать конструктор, то он должен вызывать в начале конструктор родительского класса `super()`
- Метод `super()` позволяет наследовать свойства и методы из прототипа


```js:no-line-numbers
class User {
	constructor(name) {
		this.name = name;
	}
	getName() {
		console.log(this.name);
	}
}

class Admin extends User {
	constructor(name) {
		super(name);
	}
}

const admin = new Admin('Tony');
admin.getName();    // => "Tony"
console.log(admin); // => Object { name: "Tony" }
```
