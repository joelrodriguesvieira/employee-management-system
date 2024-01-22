window.addEventListener("load", main);

function main() {
    const viewBtn = document.getElementById('view-main');
    viewBtn.addEventListener('click', viewEmployees);
};

async function viewEmployees() {
    const viewBox = document.querySelector('table.view-box');
    viewBox.innerHTML = '';

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');

    th1.textContent = 'ID';
    th2.textContent = 'Name'
    th3.textContent = 'Job';

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    thead.appendChild(tr);

    try {
        const date = await fetch("http://localhost:3000/api/v1/employees/");
        const jsonDate = await date.json();

        viewBox.appendChild(thead);
        const tbody = document.createElement('tbody');
        for (let i = 0; i < jsonDate.length; i ++) {
            const tr = document.createElement('tr');
            const tdId = document.createElement('td');
            const tdName = document.createElement('td');
            const tdJob = document.createElement('td');

            
            tdId.textContent = `${jsonDate[i].id}`;
            tdName.textContent = `${jsonDate[i].name}`;
            tdJob.textContent = `${jsonDate[i].job}`;
            
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdJob);

            tbody.appendChild(tr);
            viewBox.appendChild(tbody);
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}