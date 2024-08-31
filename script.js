const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.openModalButton');
const modalButtons = document.querySelector('.modal_buttons');

const openModal = () => {
    modal.classList.remove('close');
}

const closeModal = () => {
    modal.classList.add('close');
}

openModalButton.addEventListener('click', (e) => {
    openModal();
})

modalButtons.addEventListener('click', () => {
    closeModal();
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
})

