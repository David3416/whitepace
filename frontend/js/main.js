const products = document.querySelector('.products');
const productsButton = document.querySelector('.products_button');
const productsList = document.querySelector('.products_list');

productsButton.addEventListener('mouseenter', () => {
    productsList.classList.add('products_list_active');
    productsButton.classList.add('products_button_active');

    productsButton.setAttribute('aria-expanded', true);
});

products.addEventListener('mouseleave', () => {
    productsList.classList.remove('products_list_active');
    productsButton.classList.remove('products_button_active');

    productsButton.setAttribute('aria-expanded', false);
});

document.addEventListener('click', (event) => {
    if (!products.contains(event.target)) {
        productsList.classList.remove('products_list_active');
        productsButton.classList.remove('products_button_active');

        productsButton.setAttribute('aria-expanded', false);
    }
});