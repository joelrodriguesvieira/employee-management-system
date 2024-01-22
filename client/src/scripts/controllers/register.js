import * as display from '../view/displayUI.js'

window.addEventListener("load", main);

function main() {
    const formCreateEmployee = document.getElementById("form-new-employee");
    formCreateEmployee.addEventListener("submit", createEmployee);
};

async function createEmployee(e) {
    e.preventDefault();

    const box = document.querySelector('.sucess-register');
    const form = document.getElementById('form-new-employee');
    const nameInput = document.getElementById('name');
    const jobInput = document.getElementById('job');
    const cpfInput = document.getElementById('cpf');
    
    if (nameInput.value.trim() === '' || jobInput.value.trim() === '' || cpfInput.value.trim() === '') {
        alert('Please, fill in all mandatory fields');
        return;
    }

    if (!checkCpf(cpfInput.value)) {
        alert('Please, check if the format of your CPF follows the rules descibed');
        return;
    }

    const formData = new FormData(this);
    const jsonData = {};

    formData.forEach((value,key) => {
        jsonData[key] = value;
    });

    try {
        const response = await fetch("http://localhost:3000/api/v1/employees/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });
        display.hideAllBoxes();
        form.reset();
        box.style.display = 'flex';
    } catch (error) {
        console.error("Error: ", error)
    }
};


function checkCpf(cpf) {
    if (cpf.length === 11) {
        return true;
    }
};