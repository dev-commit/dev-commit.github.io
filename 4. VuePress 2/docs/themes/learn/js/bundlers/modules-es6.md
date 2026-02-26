# ES6-модули в JavaScript

- [import](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import)
- [export](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export)

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### import
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
// Значение экспортированное по умолчанию  
import MyClass from './modules/lib';

// Одно значение
import { libFunction } from './modules/lib';

// Несколько значений
import { libFunction, libConst } from './modules/lib';

// Изменение имени значения
import { libConst as name } from './modules/lib';

// Импорт модуля как объекта, значениями свойств которого будут экспортированные значения (obj.libConst)
import './modules/lib' as obj;

// Импорт модуля как объекта
import * as obj from './modules/lib';

// Импорт всех данных (в "./modules/lib" нет "export"), запуск кода из модуля
import './modules/lib';

// Совмещение различных видов
import MyClass, { libFunction } from './modules/lib';
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### export
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
export default MyClass;               // Экспорт по умолчанию
export const a = 22;                  // Одно значение
export { one, two };                  // Несколько значений (const one, const two)
export { one as once, two as twice }; // Изменение имени значения

export function libFunction() {
    console.log(libFunction);
}
```
