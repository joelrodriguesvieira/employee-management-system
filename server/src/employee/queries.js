const getEmployees = "SELECT * FROM employee;";
const getEmployeeById = "SELECT * FROM employee WHERE id = $1;";
const checkCpfExists = "SELECT e FROM employee e WHERE e.cpf = $1;";
const addEmployee = "INSERT INTO employee (name, job, cpf) VALUES ($1, $2, $3);";
const removeEmployee = "DELETE FROM employee WHERE id = $1;";
const updateEmployee = "UPDATE employee SET name = $1, job = $2, cpf = $3 WHERE id = $4;"

export { 
    getEmployees, 
    getEmployeeById, 
    checkCpfExists, 
    addEmployee, 
    removeEmployee,
    updateEmployee
};