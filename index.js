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

function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a departmernt",
          "Add a role",
          "Add an employee",
          "Update employee role",
          "Exit"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View all departments":
          departmentSearch();
          break;
  
        case "View all roles":
          roleSearch();
          break;
  
        case "View all employees":
          employeeSearch();
          break;
  
        case "Add a departmnet":
          departmentAdd();
          break;
  
        case "Add a role":
          roleAdd();
          break;
        
        case "Add an employee":
          employeeAdd();
          break;

        case "Update employee role":
          updateRole();
          break;

        case "Exit":
          conn.end();
          default:
            break;
        }
      });
  }
