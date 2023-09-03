
        function validateForm() {
            // Clear previous error messages
            document.getElementById("usernameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("passwordError").textContent = "";

            // Get form values
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Simple validation (you can add more complex validation)
            if (username === "") {
                document.getElementById("usernameError").textContent = "Username is required.";
                return;
            }

            if (email === "") {
                document.getElementById("emailError").textContent = "Email is required.";
                return;
            }

            if (!isValidEmail(email)) {
                document.getElementById("emailError").textContent = "Invalid email format.";
                return;
            }

            if (password === "") {
                document.getElementById("passwordError").textContent = "Password is required.";
                return;
            }

            // If all validation passes, you can submit the form here
            // document.getElementById("registrationForm").submit();
            alert("Registration successful!");
        }

        function isValidEmail(email) {
            // Simple email validation regex (you can use a more robust regex)
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            return emailRegex.test(email);
        }
