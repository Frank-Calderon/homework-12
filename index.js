const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");

const conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employeeTracker_DB"
});

conn.connect(err => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log("Successfully Connected");

    runSearch();
});


