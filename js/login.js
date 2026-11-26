document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();


        // Validation

        if (email === "" || password === "") {
            alert("Email and password cannot be empty!");
            return;
        }


        // Get users

        let userdata = JSON.parse(localStorage.getItem("userdata")) || [];


        // Check login details

        let userFound = userdata.find(user =>
            user.email.toLowerCase() === email.toLowerCase() &&
            user.password === password
        );

        if (userFound) {

            alert("Login successful!");

            // Store logged-in user

            localStorage.setItem("loggedInUser", JSON.stringify(userFound));

            window.location.href = "index.html";

        } else {

            alert("Invalid email or password!");

        }

    });

    let togglePassword = document.getElementById("togglePassword");
    let password = document.getElementById("password");

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");

        } else {

            password.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");

        }

    });

});
