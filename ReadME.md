# Employee Tracker
This is a command-line application for managing employees, roles, and departments using Node.js and MySQL. The user can view all employees, roles, and departments, add new employees, roles, and departments, and update employee roles.

## Instalation
To run the application, you need to have Node.js and MySQL installed on your machine. Clone this repository and navigate to the root directory in your terminal. Then, run the following command to install the required dependencies:

Copy code
npm install
Next, create a new MySQL database using the schema.sql and seeds.sql files in the db directory:

bash
Copy code
mysql -u root -p < db/schema.sql
mysql -u root -p < db/seed.sql
This will create the database schema and populate it with some sample data.

Finally, start the application by running:

sql
Copy code
npm start
You should see a menu with several options:

sql
Copy code
? Make a choice. (Use arrow keys)
❯ All departments
  All roles
  All employees
  Add a department
  Add a role
  Add an employee
  Update employee roles
  Quit
Select an option to perform the corresponding action. For example, select "All employees" to view a table with all employee information:

## 
## Example table
? Make a choice. All employees
┌────┬────────────┬───────────┬─────────────────────────────────┬────────┬────────────┬───────────┐
│ id │ first_name │ last_name │ title                           │ salary │ dept_name  │ manager_id │
├────┼────────────┼───────────┼─────────────────────────────────┼────────┼────────────┼───────────┤
│ 1  │ John       │ Doe       │ Chief Executive Officer (CEO)   │ 100000 │ Executive  │ null      │
│ 2  │ Jane       │ Doe       │ Chief Financial Officer (CFO)  │ 80000  │ Finance    │ 1         │
│ 3  │ Mary       │ Smith     │ Vice President of Sales         │ 90000  │ Sales      │ 1         │
│ 4  │ David      │ Johnson   │ Sales Manager                   │ 60000  │ Sales      │ 3         │
│ 5  │ James      │ Anderson │ Sales Representative            │ 40000  │ Sales      │ 4         │
│ 6  │ Emily      │ Davis     │ Vice President of Engineering   │ 90000  │ Engineering│ 1         │
│ 7  │ Richard    │ White     │ Engineering Manager             │ 70000  │ Engineering│ 6         │
│ 8  │ Sarah      │ Lee       │ Software Engineer               │ 50000  │ Engineering│ 7         │
│ 9  │ Michael    │ Wilson    │ Software Engineer               │ 50000  │ Engineering│ 7         │
└────┴────────────┴───────────┴─────────────────────────────────┴────────┴────────────┴───────────┘
You can also add a new department, role, or employee, or update an employee's role, by selecting the corresponding option from the menu.

## Demo

[Demo Video](https://drive.google.com/file/d/11NDCWwrypgJJ9K_VIjtaSznQQ7uK4wpB/view)

## Contributors
This is a public repository, if you want to add to the code please feel free to.
- Evan Sterling Miller

## License
This project is licensed under the MIT License.






