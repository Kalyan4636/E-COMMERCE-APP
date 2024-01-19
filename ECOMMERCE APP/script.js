const products = [
    { id: 1, name: "Product 1", price: 20.99 },
    { id: 2, name: "Product 2", price: 15.49 },
    { id: 3, name: "Product 3", price: 25.99 },
];

const productsContainer = document.getElementById('products-container');

function renderProducts() {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    // You can implement cart functionality here
    alert(`Product ${productId} added to cart`);
}

// Initial rendering of products
renderProducts();
