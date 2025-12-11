
const signupForm = document.querySelector("form");

signupForm.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const fullName = signupForm.querySelector('input[type="text"]').value.trim();
    const email = signupForm.querySelector('input[type="email"]').value.trim();
    const password = signupForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;

    if(password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(user => user.email === email);
    if(userExists) {
        alert("Email already registered!");
        return;
    }

    users.push({ fullName, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    signupForm.reset(); 
    window.location.href = "/login.html"; 
});