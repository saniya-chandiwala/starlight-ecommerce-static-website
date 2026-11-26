// Fetch Navbar

fetch("navbar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar").innerHTML = data;

        updateAuthIcon();
        updateCartCounter();

    })
    .catch(error => console.log("Error loading navbar:", error));


// Fetch Footer

fetch("footer.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("footer").innerHTML = data;

    })
    .catch(error => console.log("Error loading footer:", error));


// Login / Logout

function updateAuthIcon() {

    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    let authIcon = document.getElementById("authIcon");

    if (user) {

        authIcon.innerHTML = `
            <i class="fa-solid fa-right-from-bracket"
               onclick="logoutUser()"></i>
        `;

    } else {

        authIcon.innerHTML = `
            <a href="login.html">
                <i class="fa-solid fa-user"></i>
            </a>
        `;

    }

}


function logoutUser() {

    localStorage.removeItem("loggedInUser");

    alert("Logged out successfully!");

    updateAuthIcon();

    window.location.href = "index.html";

}


// Cart Counter

function updateCartCounter() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartCount = document.getElementById("cart-count");

    if (cartCount) {

        let totalQty = 0;

        cart.forEach(item => {

            totalQty += item.quantity;

        });

        cartCount.textContent = totalQty;

    }

}