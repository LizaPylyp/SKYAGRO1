// Приклад коду для збереження даних форми в базі даних MySQL
const mysql = require('mysql');

// Параметри для підключення до бази даних
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'database_name'
});

// Підключення до бази даних
connection.connect();

// Обробка події надсилання форми
document.querySelector('.forma').addEventListener('submit', function(event) {
    event.preventDefault();

    // Отримання даних з полів форми
    const name = document.querySelector('[name="Name"]').value;
    const location = document.querySelector('[name="location"]').value;
    const volume = document.querySelector('[name="volume"]').value;
    const telefon = document.querySelector('[name="telefon"]').value;

    // Запит на вставку даних у таблицю бази даних
    const sql = INSERTINTOtable_name (name, location, volume, telefon)`VALUES`('${name}', '${location}', '${volume}', '${telefon}');
    connection.query(sql, function(error, results, fields) {
        if (error) throw error;
        console.log('Дані успішно збережено!');
    });
});

// Закриття з'єднання з базою даних
connection.end();
const name = document.querySelector('input[name="Name"]').value;
const location = document.querySelector('input[name="location"]').value;
const volume = document.querySelector('input[name="volume"]').value;
const telefon = document.querySelector('input[name="telefon"]').value;

// створити об'єкт з даними
const order = { name, location, volume, telefon };

// виконати запит на INSERT у базу даних
const xhttp = new XMLHttpRequest();
xhttp.open("POST", "save-order.php", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send(JSON.stringify(order));