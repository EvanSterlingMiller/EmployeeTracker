//requires
const mysql = require("mysql12")
const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password: "",
    database: "employee_Db"
})

connection.connect((error) => {
    if (error) throw error
    console.log("Hello and welcome to the Travelers Employee Tracker")
    displayMenu()
})