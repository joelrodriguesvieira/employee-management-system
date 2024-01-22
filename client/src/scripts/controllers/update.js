import { handleSearch } from "./search.js";

window.addEventListener("load", main);

function main() {
    const searchFormUpdateEmployee = document.getElementById('search-form-employee-id');
    searchFormUpdateEmployee.addEventListener("submit", (e) => handleSearch(e,'update'));
};

export async function updateEmployee(e) {
    e.preventDefault();

    const formParent = document.querySelector('.result-update-box');
    const form = formParent.querySelector('form');
    const id = document.getElementById('employee-id-update').value;
    const nameInput = form.querySelector('#name');
    const jobInput = form.querySelector('#job');
    const cpfInput = form.querySelector('#cpf');

    const employeeUpdate = {
        name: nameInput.value,
        job: jobInput.value,
        cpf: cpfInput.value
    };

    try {
        const response = await fetch(`http://localhost:3000/api/v1/employees/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeUpdate),
        });

        if (response.ok) {
            const resultSearchBox = document.querySelector(".result-update-box");
            resultSearchBox.removeChild(form);
            const textSucess = document.createElement('span');
            textSucess.style.textAlign = 'center';
            textSucess.style.fontWeight = 'bold';
            textSucess.textContent = "Employee Updated Sucessfully!";
            resultSearchBox.style.height = '100px';
            resultSearchBox.appendChild(textSucess);

        }
    } catch (error) {
        console.error("Error: ", error);
    }
}