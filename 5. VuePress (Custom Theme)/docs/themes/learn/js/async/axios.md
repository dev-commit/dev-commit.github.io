# AXIOS


[Axios](https://github.com/axios/axios)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Axios
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html:no-line-numbers
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
```

<!------------------------------------------------------------->
#### GET-запрос с возвратом одного значения
<!------------------------------------------------------------->
```js:no-line-numbers
axios.get('script.php')
    .then(function(response) {
        console.log(response.data); // 'Hi'
    })
    .catch(function(error) {
        console.log(error)
    });
```

```php:no-line-numbers
<?php
    echo 'Hi';
?>
```

<!------------------------------------------------------------->
#### GET-запрос с возвратом нескольких значений (`array`)
<!------------------------------------------------------------->
```js:no-line-numbers
axios.get('script.php')
    .then(function(response) {
		console.log(response.data); // ['Jack', 25]
    })
```

```php:no-line-numbers
<?php
    $arr = array("Jack", 25);
    $json = json_encode($arr);
    echo $json
?>
```

<!------------------------------------------------------------->
#### GET-запрос с возвратом нескольких значений (`object`)
<!------------------------------------------------------------->
```js:no-line-numbers
axios.get('script.php')
    .then(function(response) {
		console.log(response.data); // {name: "Jack", age: 25}
    })
```

```php:no-line-numbers
<?php
    $arr = array("name" => "Jack", "age" => 25);
    $json = json_encode($arr);
    echo $json
?>
```

<!------------------------------------------------------------->
#### POST-запрос
<!------------------------------------------------------------->
```js:no-line-numbers
axios.post('script.php', {
    name: 'Jack',
    age: '25'
})
	.then(function (response) {
	    console.log(response.data);
	})
```

```php:no-line-numbers
<?php
    $content = file_get_contents("php://input");
    $decoded = json_decode($content, true);
    echo $decoded[name];
?>
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Отправка сообщения на почту
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```php:no-line-numbers
<?php
    $to      = 'user1@example.com, user2@example.com'; // Получатель или получатели
    $subject = 'Письмо с сайта';                       // Тема письма
    $message = 'Сообщение';                            // Сообщение

    $email = mail($to, $subject, $message);
    if ($email) {
        echo 'Письмо успешно отправлено!';
    } else {
        echo 'Письмо не отправлено!';
    }
?>
```
