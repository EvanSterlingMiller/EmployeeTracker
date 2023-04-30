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

// setting consts
const showDepartments = () =>{
    connection.query("SELECT * FROM department", (error, results)=>{
        if (error) throw (error)
        console.table(results)
        displayMenu()
    })
}

const showRoles = () =>{
    connection.querry("SELECT * FROM role", (error, results)=>{
        if (error) throw (error)
        console.table(results)
        displayMenu()
    })
}
const showEmployees = () =>{
    connection.querry("SELECT employee.id, first_name, last_name, title, salary, dept_name, manager_id FROM ((department JOIN job ON department.id = job.department_id) JOIN employee on job.id = employee.job_id);")
}
const generateDepartment=()=>{
    inquirer.prompt([{
        name: "department",
        type: "input",
        message: "What department do you want?",
    },])
    inquirer.then((answer) => {
        connection.querry("INSERT INTO department (dept_name) VALUES (?)",
        [answer.department],
        (error, results) => {
            if (error) throw error
            console.log("Added department")
            displayMenu()
        }
        )
    })
}
const displayMenu = () => {
    inquirer.prompt({
        message: "Make a choice.",
        name: "menu",
        type: "list",
        choices: [
            "All departments",
            "All roles",
            "All employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee roles",
            "Quit",
        ],
    })
    inquirer.then((response) =>{
        switch (response.menu) {
            case "All departments":
                showDepartments()
                break;
            case "All roles":
                showRoles()
                break;
            case "All employees":
                showEmployees()
                break;
            case "Add a department":
                generateDepartment()
                break;
            case "Add a role":
                generateRole()
                break;
            case "Add an employee":
                generateEmployee()
                break;
            case "Update employee roles":
                updateEmployee()
                break;
            case "Quit":
                connection.end()
                break;
            default:
                connection.end()
        }// switch end
    })

}// display menu end