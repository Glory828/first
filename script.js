function displayWelcomeMessage() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        document.getElementById("welcome-message").innerText = `Welcome, ${user.username}!`;
        document.getElementById("logout-button").style.display = "inline-block";
    } else {
        document.getElementById("user-info").style.display = "none"; // Hide if no user is logged in
    }
}

function logout() {
    localStorage.removeItem("user"); // Remove user data
    alert("Logged out successfully!");
    window.location.href = "index.html"; // Redirect to Home Page
}

displayWelcomeMessage();
  let cart = [];

function addToCart(productName, price) {
let product = { name: productName, price: price };
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
alert(`${productName} added to cart!`);
}

// Load existing cart from local storage
function loadCart() {
let savedCart = localStorage.getItem("cart");
if (savedCart) {
    cart = JSON.parse(savedCart);
}
}

loadCart();