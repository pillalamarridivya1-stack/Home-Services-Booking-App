// ==========================================
// HOME SERVICES BOOKING APP - LOGIN JS
// ==========================================

// Get Login Form
const loginForm = document.getElementById("loginForm");


// Login Form Submit
loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    // Get Email and Password
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;


    // Get Registered Users
    let users = JSON.parse(localStorage.getItem("users")) || [];


    // Find User
    let user = users.find(function(u) {

        return u.email === email &&
               u.password === password;

    });


    // Invalid Login
    if (!user) {

        alert("Invalid Email or Password");

        return;

    }


    // Save Logged-in User
    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
    );


    // Login Successful
    alert("Login Successful");


    // Redirect Based on User Role

    if (user.role === "admin") {

        // Admin Dashboard
        window.location.href = "admin.html";

    }

    else if (user.role === "provider") {

        // Service Provider Dashboard
        window.location.href = "provider.html";

    }

    else {

        // Customer Dashboard
        window.location.href = "user.html";

    }

});