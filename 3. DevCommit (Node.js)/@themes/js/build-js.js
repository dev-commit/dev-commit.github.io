root = 'js/';

ARR_MODULE = [
  {
    title: 'Типизация',
    themes: [
      [root+'typing/typing',           emoji.theory+'Типизация'],
      [root+'typing/type-data',        emoji.theory+'Типы данных'],
      [root+'typing/type-casting',     emoji.code+'Сравнение типов'],
      [root+'typing/type-conversion', 'Преобразование типов'],
      [root+'typing/typeof',           setTheme(1, ['typeof'])],
      [root+'typing/symbol',           'Symbol (ES6)'],
    ]
  },
  {
    title: 'Всплытие и переменные',
    themes: [
      [root+'variables/hoisting',         emoji.fire+'Всплытие'],
      [root+'variables/variables',        setTheme(1, ['var', 'let', 'const'])],
      [root+'variables/variables-create', emoji.theory+'Создание переменных'],
    ]
  },
  {
    title: 'Структуры данных',
    themes: [
      [root+'data-structures/number',    setTheme(1, ['Number'])],
      [root+'data-structures/json',      setTheme(1, ['JSON'])],
      [root+'data-structures/iterators', setTheme(1, ['Iterators (ES6)'])],
      [root+'data-structures/map',       setTheme(1, ['Map', 'WeakMap'])],
      [root+'data-structures/set',       setTheme(1, ['Set', 'WeakSet'])],
      [root+'data-structures/date-time', setTheme(1, ['Date'])],
    ]
  },
  {
    title: 'ES6+',
    themes: [
      [root+'es6+/nullish-coalescing-operator', 'Оператор '+setTheme(1, ['??'])],
      [root+'es6+/optional-chaining',           'Оператор '+setTheme(1, ['?.'])],
    ]
  },
  {
    title: 'Основное',
    themes: [
      [root+'main/context',          emoji.fire+'Контекст'],
      [root+'main/bind',             emoji.fire+setTheme(1, ['bind', 'call', 'apply'])],
      [root+'main/if-case',          setTheme(1, ['if', 'case'])],
      [root+'main/ternary-operator', 'Тернарные операторы'],
    ]
  },
  {
    title: 'API',
    themes: [
      [root+'api/math',              setTheme(6, ['Math'])],
      [root+'api/notifications-api', setTheme(6, ['Notifications'])],
      [root+'api/console',           setTheme(6, ['console'])],
      [root+'api/eval',              setTheme(6, ['eval'])],
    ]
  },
  {
    title: 'Теория',
    themes: [
      [root+'theory/garbage-collection', 'Сборщик мусора'],
      [root+'theory/ecmascript',         'ECMAScript'],
    ]
  },
  {
    title: 'Дополнительно',
    themes: [
    [root+'other/jsdoc',           'Документирование'],
    [root+'other/exceptions',      'Исключения'],
    [root+'other/object-wrappers', 'Autoboxing (Object Wrappers)'],
    [root+'other/pattern-string',  'Шаблонные строки (ES6)'],
    [root+'other/proxy',           'Proxy (ES6)'],
    [root+'other/web-workers',     'Web Workers'],
    [],
    [root+'other/asynchronous-scripts', 'Асинхронные скрипты: defer/async'],
    [root+'other/method-chaining',      'Цепные вызовы методов'],
    [root+'other/strict-mode',          'Strict Mode'],
    [root+'other/samples',              'Примеры'],
    ]
  },
]
