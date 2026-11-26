document.addEventListener("DOMContentLoaded", function () {

    let userdata = JSON.parse(localStorage.getItem("userdata")) || [];

    let form = document.getElementById("registerForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let fullName = document.getElementById("fullName").value.trim();
        let useremail = document.getElementById("email").value.trim();
        let userpass = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();


        // Validation

        if (fullName === "" || useremail === "" || userpass === "" || confirmPassword === "") {
            alert("All fields are required!");
            return;
        }


        // Check passwords

        if (userpass !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }


        // Check existing user

        let userExists = userdata.some(user =>
            user.email.toLowerCase() === useremail.toLowerCase()
        );

        if (userExists) {
            alert("Email already exists!");
            return;
        }


        // Add user

        userdata.push({
            fullName: fullName,
            password: userpass,
            email: useremail
        });


        // Save users

        localStorage.setItem("userdata", JSON.stringify(userdata));

        alert("Signup successful!");


        // Redirect to login

        window.location.href = "login.html";

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


    let toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    let confirmPassword = document.getElementById("confirmPassword");

    toggleConfirmPassword.addEventListener("click", function () {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";
            toggleConfirmPassword.classList.remove("fa-eye");
            toggleConfirmPassword.classList.add("fa-eye-slash");

        } else {

            confirmPassword.type = "password";
            toggleConfirmPassword.classList.remove("fa-eye-slash");
            toggleConfirmPassword.classList.add("fa-eye");

        }

    });

});

