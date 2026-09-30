// ==========================================
// HOME SERVICES BOOKING APP - SIGNUP JS
// ==========================================

// Get Registration Form
const signupForm = document.getElementById("signupForm");


// Registration Form Submit
signupForm.addEventListener("submit", function(e) {

    e.preventDefault();


    // Get Form Values
    let name =
        document.getElementById("name").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let phone =
        document.getElementById("phone").value.trim();

    let password =
        document.getElementById("password").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;

    let role =
        document.getElementById("role").value;


    // Validate Name
    if (name.length < 3) {

        alert("Name must contain at least 3 characters");

        return;
    }


    // Validate Phone Number
    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit phone number");

        return;
    }


    // Validate Password
    if (password.length < 6) {

        alert("Password must be at least 6 characters");

        return;
    }


    // Confirm Password
    if (password !== confirmPassword) {

        alert("Passwords do not match");

        return;
    }


    // Validate Role
    if (role === "") {

        alert("Please select an account type");

        return;
    }


    // Get Existing Users
    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    // Check Existing Email
    let existingUser = users.find(function(user) {

        return user.email.toLowerCase() === email.toLowerCase();

    });


    if (existingUser) {

        alert("Email already registered");

        return;
    }


    // Create New User
    let newUser = {

        id: Date.now(),

        name: name,

        email: email,

        phone: phone,

        password: password,

        role: role

    };


    // Add User
    users.push(newUser);


    // Save Users
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    // Success Message
    alert("Registration Successful!");


    // Go to Login
    window.location.href = "login.html";

});