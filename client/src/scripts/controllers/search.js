import * as display from "../view/displayUI.js"
import { updateEmployee } from "./update.js";
import { deleteEmployee } from "./delete.js";

export async function handleSearch(e,action) {
    e.preventDefault();

    const resultSearchBox = document.querySelector(`.result-${action}-box`);
    const inputSearch = document.getElementById(`employee-id-${action}`);

    if (display.checkInputSearch(inputSearch)) {

        try {
            const employee = await fetch(`http://localhost:3000/api/v1/employees/${inputSearch.value}`);
            const employeeJson = await employee.json();
            
            if (employeeJson.length !== 0) {
                const form = buildEmployee(employeeJson[0],action);
                form.addEventListener("submit", action === 'update' ? (e) => updateEmployee(e) : (e) => deleteEmployee(e));
                resultSearchBox.innerHTML = '';
                resultSearchBox.style.height = '350px'
                resultSearchBox.appendChild(form);
                display.hideAllBoxes();
                display.viewSearch(resultSearchBox);
            } else {
                const container = document.createElement('div');
                container.classList.add('negative-result');
                resultSearchBox.innerHTML = '';

                const text = document.createElement('span');
                text.textContent = 'Employee does not found, try entering a valid id!'

                const tryAgainBtn = document.createElement('button');
                tryAgainBtn.textContent = 'Try Again';

                resultSearchBox.style.height = '200px';
                container.appendChild(text);
                container.appendChild(tryAgainBtn);
                resultSearchBox.appendChild(container);
                display.hideAllBoxes();
                display.viewSearch(resultSearchBox);

                tryAgainBtn.addEventListener("click", () => {
                    const actionBox = document.querySelector(`.${action}-box`);
                    display.changeBoxVisibility(actionBox);
                });
            }
            
        } catch (error) {
            console.log("Error: ", error)
        }
    }
};

export function buildEmployee(employeeJson,action) {
    const form = document.createElement("form");

    const labelName = document.createElement('label');
    labelName.setAttribute('for', 'name');
    labelName.textContent = 'Name: ';
    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', 'name');
    inputName.setAttribute('value', employeeJson.name);
    form.appendChild(labelName);
    form.appendChild(inputName);

    const labelJob = document.createElement('label');
    labelJob.setAttribute('for', 'job');
    labelJob.textContent = 'Job: ';
    const inputJob = document.createElement('input');
    inputJob.setAttribute('type', 'text');
    inputJob.setAttribute('id', 'job');
    inputJob.setAttribute('value', employeeJson.job);
    form.appendChild(labelJob);
    form.appendChild(inputJob);

    const labelCPF = document.createElement('label');
    labelCPF.setAttribute('for', 'cpf');
    labelCPF.textContent = 'CPF: ';
    const inputCPF = document.createElement('input');
    inputCPF.setAttribute('type', 'number');
    inputCPF.setAttribute('name', 'cpf');
    inputCPF.setAttribute('id', 'cpf');
    inputCPF.setAttribute('value', employeeJson.cpf);
    form.appendChild(labelCPF);
    form.appendChild(inputCPF);

    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', action === 'update' ? 'Save' : 'Delete');

    form.appendChild(submitButton);

    return form;
};