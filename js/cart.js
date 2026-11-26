// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add to cart
function addToCart(product) {
    let cart = getCart();

    // Check if product already exists
    let existingProduct = cart.find(item =>
        item.id === product.id
    );

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    saveCart(cart);
    updateCartCounter();

    // Show popup
    let cartPopup = document.getElementById("cartPopup");
    cartPopup.classList.add("show");


    // Hide popup
    setTimeout(function () {
        cartPopup.classList.remove("show");
    }, 1500);
}

// Display cart
function displayCart() {
    let cart = getCart();

    let container = document.getElementById("cartItemsContainer");
    let cartLayout = document.getElementById("cartLayout");
    let emptyCart = document.getElementById("emptyCart");
    let cartHeader = document.getElementById("cartHeader");

    let totalBill = 0;

    // Empty cart
    if (cart.length === 0) {
        cartHeader.style.display = "none";
        cartLayout.style.display = "none";
        emptyCart.style.display = "block";
        return;
    }

    // Cart has items
    cartHeader.style.display = "block";
    cartLayout.style.display = "grid";
    emptyCart.style.display = "none";

    let html = "";

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalBill += itemTotal;

        html += `
            <div class="cart-card">
                <img src="${item.image}" alt="${item.name}">

                <div class="cart-info">
                    <h3 class="cart-title">${item.name}</h3>
                    <p class="cart-desc">${item.description}</p>

                    <div class="cart-actions">
                        <div class="qty-pill">
                            <button type="button" onclick="decreaseQty(${index})">-</button>
                            <span>${item.quantity}</span>
                            <button type="button" onclick="increaseQty(${index})">+</button>
                        </div>

                        <button type="button" class="remove-btn" onclick="removeItem(${index})">
                            Remove
                        </button>

                        <span class="cart-price">₹ ${itemTotal.toLocaleString('en-IN')}</span>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    document.getElementById("summarySubtotal").innerText =
        "₹ " + totalBill.toLocaleString('en-IN');

    document.getElementById("summaryTotal").innerText =
        "₹ " + totalBill.toLocaleString('en-IN');
}

// Increase quantity
function increaseQty(index) {
    let cart = getCart();

    cart[index].quantity++;

    saveCart(cart);
    updateCartCounter();
    displayCart();
}

// Decrease quantity
function decreaseQty(index) {
    let cart = getCart();

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    saveCart(cart);
    updateCartCounter();
    displayCart();
}

// Remove item
function removeItem(index) {
    let cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);
    updateCartCounter();
    displayCart();
}

// Proceed to checkout
function proceedToCheckout() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    window.location.href = "payment.html";
}

// Run when page loads
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("cartItemsContainer")) {
        displayCart();
    }
});