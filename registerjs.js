// Sample User Data
const users = [
    { email: "test@clothing.com", password: "password123" },
    { email: "admin@clothing.com", password: "adminpass" }
];

// Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to index.html
    } else {
        alert("Invalid email or password!");
    }
});

// Register Form Submission
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    const userExists = users.some(u => u.email === newEmail);

    if (userExists) {
        alert("User already exists!");
    } else {
        users.push({ email: newEmail, password: newPassword });
        alert("Registration successful! You can now log in.");
        window.location.href = "login.html"; // Redirect to login page
    }
});
