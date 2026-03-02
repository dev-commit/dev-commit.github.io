# Обработка исключений


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Правила
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `catch` или `finally` может отсутствовать
- если ошибка необработана, скрипт не будет выполняться
- если ошибка обработана в `catch`, скрипт продолжит выполнение


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Конструкция
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
try {
	// Инструкции, которые могут бросить исключение
} catch (идентификатор) {
	// Инструкции будут выполняться если в try произошло исключение
	// передается выражение (идентификатор), которое было в throw
} finally {
	// Инструкции будут выполняться независимо от исключения
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Пример
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
try {
	throw new Error('Panic!');
} catch (e) {
	console.log(e.message);
} finally {
	console.log('Код, который нужно выполнить');
}
```

