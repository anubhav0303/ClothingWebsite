document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulated login validation
    if (email === "test@clothing.com" && password === "password") {
        alert("Login successful!");
        // Redirect to dashboard or home page
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password!");
    }
});
