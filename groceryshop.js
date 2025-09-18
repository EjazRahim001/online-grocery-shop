const products = [
  { id: 1, name: "Apples 🍎", price: 120 },
  { id: 2, name: "Milk 🥛", price: 180 },
  { id: 3, name: "Bread 🍞", price: 100 },
  { id: 4, name: "Bananas 🍌", price: 90 },
];

let cart = [];

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function renderProducts() {
  productGrid.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>PKR ${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - PKR ${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total;
}

// UI Toggles
document.getElementById("cartBtn").onclick = () => {
  toggleSection("cartPanel");
};

document.getElementById("checkoutBtn").onclick = () => {
  toggleSection("checkoutForm");
};

document.getElementById("loginBtn").onclick = () => {
  toggleSection("loginForm");
};

document.getElementById("loginSubmit").onsubmit = (e) => {
  e.preventDefault();
  toggleSection("adminPanel");
};

function toggleSection(id) {
  ["cartPanel", "checkoutForm", "loginForm", "adminPanel"].forEach(section => {
    document.getElementById(section).classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

renderProducts();

