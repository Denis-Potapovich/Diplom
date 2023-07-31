// импортируим Express.js фреймвок
const express = require("express");
// запрос к mysql
const mysql = require("mysql");
//
const cors = require("cors");
// импортируем сервис для раскодирования из URL в формат JSON
const bodyParser = require("body-parser");

// инициализируем приложение
const app = express();

// cors — это функция безопасности браузера, которая ограничивает HTTP-запросы из разных источников.
app.use(cors());

// инициализруем подключение к базе данных
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wb",
});

// get запрос на получение всех данных из базы данных
app.get("/data", (req, result) => {
  const sql = "SELECT * FROM test";
  db.query(sql, (err, data) => {
    // если переменная err не пустая, тогда в ней что то есть и возвращаем ошибку
    if (err) return console.log(err);
    // иначе возвращаем JSON файл с иинформацией
    return result.json(data);
  });
});
//


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// post - метод HTTP для записи данных
app.post("/data", (req, res) => {
  const data = req.body;

  
  db.query(
    "INSERT INTO test SET ?",
    data,
    (error, results, fields) => {
      // если error не пустой (true), тогда есть ошибка - выводим ее на экран
      if (error) {
        res.status(500).send("Error inserting data into database");
      } else {
        res.send(data);
      }
    }
  );
});
//

// запуск сервера на localhost:3001
app.listen(3001, () => {
  console.log("working");
});
//