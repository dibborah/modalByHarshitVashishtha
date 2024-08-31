const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.openModalButton');
const closeButton = document.querySelector('.close_modal');

const openModal = () => {
    modal.classList.remove('close');
    document.body.classList.add('overflow_hidden');
};

const closeModal = () => {
    modal.classList.add('close');
    document.body.classList.remove('overflow_hidden');
}

openModalButton.addEventListener('click', (e) => {
    openModal();
})

closeButton.addEventListener('click', () => {
    closeModal();
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
})

// note:
// In coding we also need to reset what we once do
// To makes things work exactly the same as it was before we did it
