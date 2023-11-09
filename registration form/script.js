
        const registrationForm = document.getElementById("registrationForm");
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const usernameError = document.getElementById("usernameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");

        registrationForm.addEventListener("submit", function (e) {
            let hasError = false;

            // Reset error messages
            usernameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
            confirmPasswordError.textContent = "";

            // Validate username
            if (username.value.trim() === "") {
                hasError = true;
                usernameError.textContent = "Username is required";
            }

            // Validate email
            if (email.value.trim() === "") {
                hasError = true;
                emailError.textContent = "Email is required";
            } else if (!isValidEmail(email.value)) {
                hasError = true;
                emailError.textContent = "Invalid email format";
            }

            // Validate password
            if (password.value.length < 6) {
                hasError = true;
                passwordError.textContent = "Password must be at least 6 characters long";
            }

            // Validate password confirmation
            if (confirmPassword.value !== password.value) {
                hasError = true;
                confirmPasswordError.textContent = "Passwords do not match";
            }

            if (hasError) {
                e.preventDefault(); // Prevent form submission if there are errors
            }
        });

        function isValidEmail(email) {
            // Basic email format validation using a regular expression
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    