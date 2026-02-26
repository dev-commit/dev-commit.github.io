# Объектно-ориентированное программирование


- `Объектно-ориентированное программирование` - методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования



<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 1. Инкапсуляция
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Инкапсуляция` – отделение и защита внутреннего интерфейса от внешнего
- `Внутренний интерфейс` – приватные свойства и методы, доступ к которым может быть осуществлен только из других методов класса
- `Внешний интерфейс` – публичные свойства и методы класса, предоставляющие доступ к внутренней реализации
- Мы обращаемся с объектами как с единой сущностью, а не как с набором отдельных полей и методов, тем самым скрываем и защищаем реализацию класса. Если клиентский код не знает ничего, кроме публичного интерфейса, он не может зависеть от деталей реализации


<!------------------------------------------------------------->
#### Геттеры и Сеттеры
<!------------------------------------------------------------->

- `Геттеры и Сеттеры (Аксессоры)` - доступ к свойствам класса


```js:no-line-numbers
class User {
    constructor() {
        this._name = 'Tony';
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

const user = new User();
user.name = 'Jack';
const name = user.name; // => Jack
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 2. Наследование
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Наследование` - описание нового класса на основе уже существующего с частично или полностью заимствующейся функциональностью
- `SuperClass` - базовый, родительский, предок, надкласс, супер класс
- `SubClass` - наследник, дочерний, потомок, подкласс, суб класс, производный


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


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 3. Полиморфизм
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Полиморфизм` ("множество форм") - возможность единообразно обрабатывать объекты с различной реализацией при условии наличия общего интерфейса. <u>«Один интерфейс, множество реализаций»</u>
- Позволяет одно и то же имя (например имя метода) использовать для решения внешне схожих, но технически разных задач

---

- `Абстрактный метод` - метод без реализации
- `Абстрактный класс` - если в классе есть хотя бы 1 абстрактный метод, класс является абстрактным, следовательно мы не можем создать экземпляр класса и воспользоваться им, пока не переопределим этот метод, добавляя различную реализацию в подклассах


> «Один интерфейс, множество реализаций». Интерфейс - метод draw(). У него есть несколько вариантов реализаций

<img src="../@img/polymorphism.png" style="width: 550px" />


```js:no-line-numbers
class Shape {
    draw() {
        // Нет реализации
    }
}

class Circle extends Shape {
    draw() {
        // Своя реализация для Circle
    }  
}
class Square extends Shape {
    draw() {
        // Своя реализация для Square
    }  
}
class Triangle extends Shape {
    draw() {
        // Своя реализация для Triangle
    }  
}

const circle = new Circle();
const square = new Square();
const triangle = new Triangle();

circle.draw();
square.draw();
triangle.draw();
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 4. Абстракция
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `Абстракция` способ представления объекта в программе, позволяющий работать с объектами не вдаваясь в особенности их реализации
- Инкапсуляция помогает реализовать абстракцию. Можно абстрагировать внутренне устройство класса
