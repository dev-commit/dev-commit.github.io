# Node.js и NPM


- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

---

- `Node.js` - программная платформа для JavaScript
- `NPM (Node.js Package Manager)` - менеджер пакетов, входящий в состав Node.js


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Команды
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```bash:no-line-numbers
npm init    # Инициализация проекта (создание package.json)
npm init -y # Инициализация проекта с параметрами по умолчанию
npm i       # Установить все пакеты из package.json
npm up      # Обновить все пакеты из package.json
```

```bash:no-line-numbers
npm i --save package     # Установить package и добавить запись в секцию dependencies package.json 
npm i --save-dev package # Установить package и добавить запись в секцию devDependencies package.json
npm i --g package        # Установить package глобально
```

```bash:no-line-numbers
npm r package   # Удалить package
npm up package  # Обновить package
npm run package # Запустить package
```

```bash:no-line-numbers
npm run start # Запустить скрипт "start"
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### package.json
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js:no-line-numbers
// package.json для Parcel
{
	// Название приложения
	"name": "app",

	// Версия приложения                             
	"version": "1.0.0",

	// Скрипт для приложения                       
	"scripts": {
		"start": "..."
	},

	// Зависимости
	"dependencies": {
		...
	},

	// Зависимости для разработки
	"devDependencies": {
		...
	}
}
```
