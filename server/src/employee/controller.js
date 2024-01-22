import { pool } from "../../db.js";
import * as queries from "./queries.js";

const getEmployees = (req,res) => {
    pool.query(queries.getEmployees, (error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getEmployeeById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getEmployeeById, [id], (error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const addEmployee = (req,res) => {
    const { name, job, cpf } = req.body;
    // check if cpf already exists to database
    pool.query(queries.checkCpfExists, [cpf], (error, results) => {
        if (results.rows.length) {
            res.status("CPF already exists");
        }

        // add employee to database
        pool.query(queries.addEmployee, [name, job, cpf], (error, results) => {
            if (error) throw error;
            res.status(200).send("Employee Created Sucessfully!");
        })
    });
};

const removeEmployee = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getEmployeeById, [id], (error,results) => {
        const noEmployeeFound = !results.rows.length;
        
        if (noEmployeeFound) {
            res.status("Employee does not exist in the database, could not remove");
        }

        pool.query(queries.removeEmployee, [id], (error,results) => {
            if (error) throw error;
            res.status(200).json("Employee Remove Sucessfully!")
        })
    });
}

const updateEmployee = (req,res) => {
    const id = parseInt(req.params.id);
    const employee = req.body;

    pool.query(queries.getEmployeeById, [id], (error,results) => {
        const noEmployeeFound = !results.rows.length;        
        if (noEmployeeFound) {
            res.status("Employee does not exist in the database, could not remove");
        }

        pool.query(queries.updateEmployee, [employee.name, employee.job, employee.cpf, id], (error,results) => {
            if (error) throw error;
            res.status(200).json("Employee Updated Sucessfully!");
        })
    });
}

export { getEmployees, getEmployeeById, addEmployee, removeEmployee, updateEmployee };
