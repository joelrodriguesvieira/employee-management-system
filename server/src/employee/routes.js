import { Router } from "express";
import {getEmployees, getEmployeeById, addEmployee, removeEmployee, updateEmployee}  from "./controller.js";

export const router = Router();

router.get('/', getEmployees);
router.post('/', addEmployee)
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', removeEmployee);