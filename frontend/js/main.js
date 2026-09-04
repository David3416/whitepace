const productsButton = document.querySelector('.products_button');
const productsList = document.querySelector('.products_list');

productsButton.addEventListener('click', () => {
    productsList.classList.toggle('products_list_active');

    const isOpen = productsList.classList.contains('products_list_active');

    productsButton.setAttribute('aria-expanded', isOpen);
});