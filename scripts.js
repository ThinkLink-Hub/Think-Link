// Simple cart functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} has been added to your cart.`);
}

// Example of cart handling
document.querySelectorAll('.product button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        const price = button.previousElementSibling.textContent;
        addToCart(productName, price);
    });
});
