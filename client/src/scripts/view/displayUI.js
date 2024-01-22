export function changeBoxVisibility(box) {
    hideAllBoxes();
    box.style.display = box.classList.contains('view-box') ? 'table' : 'block';
};

export function hideAllBoxes() {
    const registerBox = document.querySelector('.register-box');
    const viewBox = document.querySelector('table.view-box');
    const updateBox = document.querySelector('.update-box');
    const deleteBox = document.querySelector('.delete-box');
    const resultSearchBox = document.querySelector('.result-update-box');
    const resultSearchBoxDel = document.querySelector('.result-delete-box');

    registerBox.style.display = 'none';
    viewBox.style.display = 'none';
    updateBox.style.display = 'none';
    deleteBox.style.display = 'none';
    resultSearchBox.style.display = 'none';
    resultSearchBoxDel.style.display = 'none'
};

export function viewSearch(box) {
    box.style.display = 'block';
};

export function checkInputSearch(input) {
    if (input.value.trim() === '') {
        alert('Please, enter an ID before proceeding');
        return false;
    }
    return true;
};

export function closerMessageSucess() {
    const box = document.querySelector('.sucess-register');
    box.style.display = 'none';
};
