const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kuliah",
});

connection.connect((err) => {
  if (err) {
    console.error("Errro connection to my database : ", err);
  } else {
    console.log("Connection to MYSQL database");
  }
});

module.exports = connection;
