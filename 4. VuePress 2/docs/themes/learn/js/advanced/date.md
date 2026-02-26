# Дата и время

```js:no-line-numbers
const nowDate = new Date();                 // Текущее дата и время на компьютере пользователя
const yearFull = nowDate.getFullYear();     // Год
const month    = nowDate.getMonth();        // Месяц (нумерация с 0)
const day      = nowDate.getDate();         // Число
const dayWeek  = nowDate.getDay();          // День недели, выводит численные значения, нумерация с "0"
const hour     = nowDate.getHours();        // Час
const minutes  = nowDate.getMinutes();      // Минуты
const seconds  = nowDate.getSeconds();      // Секунды
const mseconds = nowDate.getMilliseconds(); // Миллисекунды
```

```js:no-line-numbers
const weekday  = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month    = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const nowDate  = new Date();
const nowDay   = weekday[nowDate.getDay()];
const nowDate  = nowDate.getDate();
const nowMonth = month[nowDate.getMonth()];
```
