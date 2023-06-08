
//////
class Bird {
  fly(speed) {
    return `Flying at ${speed} km/h`;
  }
}

class Eagle extends Bird {
  fly(speed) {
    return `Soaring at ${speed}`;
  }
}

class Penguin extends Bird {
  fly() {
   throw new Error("Sorry, I can't fly");
  }
}

class Bird {
  layEgg() {}
}

class FlyingBird extends Bird {
  fly(speed) {
    return `Flying at ${speed} m/s`;
  }
}

class SwimmingBird extends Bird {
  swim(waterpool) {
    return `Swimming in the ${waterpool}`;
  }
}

class Eagle extends FlyingBird {
  fly(speed) {
    return `Soaring at ${speed} m/s`;
  }
}
class Penguin extends SwimmingBird {
  swim(waterpool) {
    return `Swimming in the ${waterpool}`;
  }
}

const eagle = new Eagle(30);
const penguin = new Penguin('ocean');

/////

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  setHeight(newHeight) {
    this.height = newHeight;
  }
}

class Square extends Rectangle {
  constructor(height, width) {
    super(height, width);
    this.name = 'square';
  }
}

const rectangle = new Rectangle(4, 9);
const square = new Square(4, 4);

console.log(`Height: ${rectangle.height}, Width: ${rectangle.width}`);
// Вывод в консоль: 'Height: 4, Width: 9' (верно)
console.log(`Height: ${square.height}, Width: ${square.width}`);
// Вывод в консоль:'Height: 4, Width: 4' (верно)

square.setHeight(5);
console.log(`Height: ${square.height}, Width: ${square.width}`);
// Вывод в консоль: 'Height: 5, Width: 4' (неверно)

///

class Square extends Rectangle {
  constructor(height, width) {
    super(height, width);
    this.name = 'square';
  }
  setHeight(newHeight) {
    this.height = newHeight;
    this.width = newHeight;
  }
}

///
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return 'Eating Now'; //возвращает строку
  }
  sleep() {
    return 'I am sleeping'; //возвращает строку
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  eat() {
    return 'Meow, whatever human'; //возвращает строку
  }
  sleep() {
    //нарушение: родительский sleep() возвращает строку,
    // а не boolean
    return true;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  eat() {
    return 'Woof, It was tasty.'; //возвращает строку
  }
  sleep() {
    //нарушение: родительский sleep() возвращает строку,
    // а не Error
    throw Error('I just slept');
  }
}


const animal = new Animal('Fluffy')
let fedAnimal = animal.eat()
console.log(fedAnimal.toUpperCase())

const dog = new Dog('Spotty')
let fedDog = dog.eat()
console.log(fedDog.toUpperCase())

