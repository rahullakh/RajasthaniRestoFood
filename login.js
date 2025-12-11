// Select the login form
const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if(user) {
        alert("Login successful!");
        localStorage.setItem("currentUser", JSON.stringify(user));

        window.location.href = "/index.html"; 
    } else {
        alert("Invalid email or password!");
    }
});