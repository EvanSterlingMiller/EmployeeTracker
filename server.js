//requires
const mysql = require("mysql2")
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
    connection.query("SELECT * FROM role", (error, results)=>{
        if (error) throw (error)
        console.table(results)
        displayMenu()
    })
}
const showEmployees = () => {
    connection.query(
        "SELECT employee.id, first_name, last_name, title, salary, dept_name, manager_id FROM ((department JOIN role ON department.id = role.department_id) JOIN employee on role.id = employee.role_id);",
        (error, results) => {
            if (error) throw error;
            console.table(results);
            displayMenu();
        }
    );
};
const generateDepartment=()=>{
    inquirer
        .prompt([
            {
            name: "department",
            type: "input",
            message: "What department do you want?",
            },
        ])
        .then((answer) => {
            connection.query("INSERT INTO department (dept_name) VALUES (?)",
            [answer.department],
            (error, results) => {
                if (error) throw error
                console.log("Added department")
                displayMenu()
            }
        )
    })
}
const generateRole = () =>{
    inquirer
        .prompt([
            {
            name: "roleTitle",
            type: "input",
            message: "What is the role?",
            },
            {
            name: "salary",
            type: "input",
            message: "What is the current salary for this role?",
            },
            {
            name: "deptId",
            type: "input",
            message: "what is the department ID?",
            },
        ])
        .then((answer) => {
            connection.query(
                "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
                [answer.roleTitle, answer.salary, answer.deptID],
                (error, results) => {
                    if (error) throw error;
                    console.log("Added role");
                    displayMenu();
                }
            );
        })
}
const updateEmployee = () => {
    inquirer
        .prompt([
            {
                name: "id",
                type:"input",
                message:"Enter your employee id",
            },
            {
                name:"roleId",
                type: "input",
                message: "Enter the new role id",
            }
        ])
        .then(answer => {
            connection.query(
                "UPDATE employee SET role_id=? WHERE id=?",
                [answer.roleId, answer.id],
                function (err, res) {
                    if (err) throw err
                    console.log("Updated employee")
                    displayMenu()
                }
            )
        })
}
const generateEmployee = () => {
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "What is the first name of the employee?",
            },
            {
                name: "lastName",
                type: "input",
                message: "What is the last name of the employee?",
            },
            {
                name: "roleId",
                type: "input",
                message: "What is the role ID of the employee?",
            },
            {
                name: "managerId",
                type: "input",
                message: "What is the ID of the manager?",
            },
        ])
        .then(answer => {
            connection.query(
                "INSERT INTO employee (first_nam, last_name, job_id, manager_id) VALUES (?, ?, ?, ?)",
                [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
                function (err, res) {
                    if (err) throw err
                    console.log("Added employee!")
                    displayMenu()
                }
            )
        })
}
const displayMenu = () => {
    inquirer
        .prompt({
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
        .then((response) =>{
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