// ==========================================
// HOME SERVICES BOOKING APP - USER JS
// ==========================================

// Check User Login

let loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser || loggedInUser.role !== "user") {

    alert("Please Login First");

    window.location.href = "login.html";
}


// Display Welcome Name

document.getElementById("welcomeName").innerText =
    loggedInUser.name || "Customer";


// Display Customer Details

document.getElementById("userId").innerText =
    loggedInUser.id || "N/A";

document.getElementById("userName").innerText =
    loggedInUser.name || "N/A";

document.getElementById("userEmail").innerText =
    loggedInUser.email || "N/A";

document.getElementById("userPhone").innerText =
    loggedInUser.phone || "N/A";

document.getElementById("userRole").innerText =
    loggedInUser.role || "user";


// Logout

function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";
}