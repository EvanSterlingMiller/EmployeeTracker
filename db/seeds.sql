INSERT INTO department (dept_name)
VALUES 
('Claims'),
('Litigation'),
('Technology');


INSERT INTO role (title, salary, department_id)
VALUES 
('General Council', 175000, 2),
('System Admin II', 145000, 3),
('Lawyer I', 118000, 2),
('Cloud Engineer', 100000, 3),
('General Liability Adjuster', 90000, 2),
('Claims Manager', 95000, 1),
('Auto Adjuster', 60000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Bob', 'Boberson', 1, 'NONE'),
('John', 'Johnson', 2, 1),
('Eric', 'Erikson', 3, 2),
('Tom', 'Thompson', 4, 'NONE'),
('Sam', 'Sampson', 5, 4),
('David', 'Davidson', 6, 'NONE'),
('Matt', 'Mattson', 7, 'NONE');