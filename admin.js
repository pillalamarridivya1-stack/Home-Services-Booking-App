// ==========================================
// HOME SERVICES BOOKING APP - ADMIN JS
// ==========================================


// 1. CHECK ADMIN LOGIN
// ==========================================

let loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser || loggedInUser.role !== "admin") {

    alert("Access Denied");

    window.location.href = "login.html";

}


// 2. GET REGISTERED USERS
// ==========================================

let users =
    JSON.parse(localStorage.getItem("users")) || [];


// Display total users
document.getElementById("totalUsers").innerText =
    users.length;


// Display users in table
let userTableBody =
    document.getElementById("userTableBody");

userTableBody.innerHTML = "";

users.forEach((user) => {

    let row = `
        <tr>
            <td>${user.id || "N/A"}</td>
            <td>${user.name || "N/A"}</td>
            <td>${user.email || "N/A"}</td>
            <td>${user.phone || "N/A"}</td>
            <td>${user.role || "user"}</td>
        </tr>
    `;

    userTableBody.innerHTML += row;

});


// 3. GET SERVICE PROVIDERS
// ==========================================

let providers =
    JSON.parse(localStorage.getItem("providers")) || [];


// Display total providers
document.getElementById("totalProviders").innerText =
    providers.length;


// Display providers in table
let providerTableBody =
    document.getElementById("providerTableBody");

providerTableBody.innerHTML = "";

providers.forEach((provider) => {

    let row = `
        <tr>
            <td>${provider.id || "N/A"}</td>
            <td>${provider.name || "N/A"}</td>
            <td>${provider.service || "N/A"}</td>
            <td>${provider.experience || "N/A"} years</td>
            <td>${provider.rating || "Not Rated"} ⭐</td>
            <td>${provider.status || "Active"}</td>
        </tr>
    `;

    providerTableBody.innerHTML += row;

});


// 4. GET SERVICES
// ==========================================

let services =
    JSON.parse(localStorage.getItem("services")) || [];


// Display total services
document.getElementById("totalServices").innerText =
    services.length;


// 5. GET BOOKINGS
// ==========================================

let bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];


// Display total bookings
document.getElementById("totalBookings").innerText =
    bookings.length;


// Display bookings in table
let bookingTableBody =
    document.getElementById("bookingTableBody");

bookingTableBody.innerHTML = "";

bookings.forEach((booking) => {

    let row = `
        <tr>
            <td>${booking.id || "N/A"}</td>
            <td>${booking.customerName || "N/A"}</td>
            <td>${booking.service || "N/A"}</td>
            <td>${booking.providerName || "N/A"}</td>
            <td>${booking.date || "N/A"}</td>
            <td>${booking.status || "Pending"}</td>
        </tr>
    `;

    bookingTableBody.innerHTML += row;

});


// 6. LOGOUT
// ==========================================

function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";

}