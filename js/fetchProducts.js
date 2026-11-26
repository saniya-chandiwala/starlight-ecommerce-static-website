// Display Products

document.addEventListener("DOMContentLoaded", function () {

    if (document.getElementById("necklaceContainer")) {
        displayProducts("necklaceContainer", necklaces);
    }

    if (document.getElementById("earringContainer")) {
        displayProducts("earringContainer", earrings);
    }

    if (document.getElementById("ringContainer")) {
        displayProducts("ringContainer", rings);
    }

    if (document.getElementById("braceletContainer")) {
        displayProducts("braceletContainer", bracelets);
    }

});


// Common function to display products

function displayProducts(elementId, data) {

    let container = document.getElementById(elementId);
    let htmlContent = "";

    data.forEach((product) => {

        htmlContent += `
            <div class="product-card">

                <div class="product-image-wrap">

                    <img src="${product.image}" alt="${product.name}">

                    <div class="slider-indicator-track">
                        <div class="slider-indicator-bar"></div>
                    </div>

                </div>


                <div class="product-meta">

                    <h3>${product.name}</h3>

                    <p class="product-desc">
                        ${product.description}
                    </p>

                    <p class="product-price">
                        ₹ ${product.price.toLocaleString('en-IN')}
                    </p>

                    <button class="add-cart-btn" onclick='addToCart(${JSON.stringify(product)})'>
                        Add To Cart
                    </button>

                </div>

            </div>
        `;
    });

    container.innerHTML = htmlContent;
}