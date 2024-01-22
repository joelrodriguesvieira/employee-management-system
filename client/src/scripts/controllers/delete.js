import { handleSearch } from "./search.js";

window.addEventListener("load", main);

function main() {
    const searchFormDeleteEmployee = document.getElementById("search-form-delete-employee");
    searchFormDeleteEmployee.addEventListener("submit", (e) => handleSearch(e,'delete'));
};

export async function deleteEmployee(e) {
    e.preventDefault();

    const formParent = document.querySelector('.result-delete-box');
    const form = formParent.querySelector('form');
    const id = document.getElementById('employee-id-delete').value;
    const nameInput = form.querySelector('#name');
    const jobInput = form.querySelector('#job');
    const cpfInput = form.querySelector('#cpf');

    const employeeDelete = {
        name: nameInput.value,
        job: jobInput.value,
        cpf: cpfInput.value
    };

    try {
        const response = await fetch(`http://localhost:3000/api/v1/employees/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeDelete),
        });

        if (response.ok) {
            const resultSearchBox = document.querySelector(".result-delete-box");
            resultSearchBox.removeChild(form);
            const textSucess = document.createElement('span');
            textSucess.style.textAlign = 'center';
            textSucess.style.fontWeight = 'bold';
            textSucess.textContent = "Employee Removed Sucessfully!";
            resultSearchBox.style.height = '100px';
            resultSearchBox.appendChild(textSucess);

        }
    } catch (error) {
        console.error("Error: ", error);
    }
}