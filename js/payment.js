
document.addEventListener("DOMContentLoaded", function () {

    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Login check
    if (!user) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    // Pay button
    document.getElementById("payBtn").addEventListener("click", function () {

        let paymentMethod = document.querySelector(
            'input[name="paymentMethod"]:checked'
        );

        // Payment method check
        if (!paymentMethod) {
            alert("Please select a payment method!");
            return;
        }

        // Payment successful
        alert("Payment Successful!");

        // Clear cart after payment
        localStorage.removeItem("cart");

        // Redirect to home
        window.location.href = "index.html";

    });

});
