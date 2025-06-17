function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
const products = [
  { id: 1, name: "Milk", price: 2, category: "Food", image: "milk-rbg.png" },
  { id: 2, name: "Chocolate", price: 5, category: "Food", image: "chocolate-rbg.png" },
  { id: 3, name: "Smartphone", price: 499, category: "Electronics", image: "smartphone-rbg.png" },
  { id: 4, name: "Sneakers", price: 60, category: "Clothing", image: "sneakers-rbg.png" },
  { id: 5, name: "Headphones", price: 45, category: "Electronics", image: "headphone-rbg.png" },
  { id: 6, name: "Laptop", price: 799, category: "Electronics", image: "laptop-rbg.png" },
  { id: 7, name: "Jeans", price: 35, category: "Clothing", image: "jeans-rbg.png" },
  { id: 8, name: "T-Shirt", price: 15, category: "Clothing", image: "t-shirt-rbg.png" },
  { id: 9, name: "Apple", price: 1, category: "Food", image: "apple-rbg.png" },
  { id: 10, name: "Bread", price: 1.5, category: "Food", image: "bread-rbg.png" }
];



/*
const products = [
  { id: 1, name: "Laptop", price: 700, category: "Electronics" },
  { id: 2, name: "Headphones", price: 50, category: "Electronics" },
  { id: 3, name: "T-Shirt", price: 20, category: "Clothing" },
  { id: 4, name: "Jeans", price: 40, category: "Clothing" },
  { id: 5, name: "Jacket", price: 80, category: "Clothing" },
  { id: 6, name: "Smartphone", price: 500, category: "Electronics" },
  { id: 7, name: "Chocolate", price: 5, category: "Food" },
  { id: 8, name: "Pasta", price: 3, category: "Food" },
  { id: 9, name: "Bread", price: 2, category: "Food" },
  { id: 10, name: "Camera", price: 200, category: "Electronics" }
];
*/

/*
let basket = JSON.parse(localStorage.getItem("basket")) || [];

function updateBasketCount() {
  document.getElementById("basket-count").innerText = basket.length;
}

function filterCategory(category) {
  const filtered = category === "All" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function addToBasket(id) {
  const item = products.find(p => p.id === id);
  basket.push(item);
  localStorage.setItem("basket", JSON.stringify(basket));
  updateBasketCount();
  alert(`${item.name} added to basket.`);
}

function removeFromBasket(id) {
  const index = basket.findIndex(p => p.id === id);
  if (index !== -1) {
    const removed = basket.splice(index, 1)[0];
    localStorage.setItem("basket", JSON.stringify(basket));
    updateBasketCount();
    alert(`${removed.name} removed from basket.`);
  }
}

function displayProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>£${product.price}</p>
      <button onclick="addToBasket(${product.id})">Add to Basket</button>
    `;
    container.appendChild(div);
  });
}


function addToBasketByDetails(name, price, category) {
  const id = Date.now(); // Unique ID for dummy product
  const item = { id, name, price, category };
  basket.push(item);
  localStorage.setItem("basket", JSON.stringify(basket));
  updateBasketCount();
  alert(`${name} added to basket.`);
}
*/

// Retrieve or initialize basket from localStorage
let basket = JSON.parse(localStorage.getItem("basket")) || [];

// Update basket count on page load
function updateBasketCount() {
  document.getElementById("basket-count").innerText = basket.length;
}

// Adds a product from the featured section (no pre-defined product ID)
function addToBasketByDetails(name, price, category) {
  const id = Date.now(); // Generate unique ID using timestamp
  const item = { id, name, price, category };
  basket.push(item);
  localStorage.setItem("basket", JSON.stringify(basket));
  updateBasketCount();
  alert(`${name} added to basket.`);
}

// Adds product from product.js (predefined list)
function addToBasket(id) {
  const item = products.find(p => p.id === id);
  if (item) {
    basket.push(item);
    localStorage.setItem("basket", JSON.stringify(basket));
    updateBasketCount();
    alert(`${item.name} added to basket.`);
  }
}

// Removes a product from basket (by index, used in checkout)
function removeFromBasket(index) {
  const removed = basket.splice(index, 1)[0];
  localStorage.setItem("basket", JSON.stringify(basket));
  updateBasketCount();
  alert(`${removed.name} removed from basket.`);
  location.reload(); // Refresh view if needed
}


// Filters and displays products from products.js (if applicable)
/*
function filterCategory(category) {
  if (typeof products === "undefined") return;
  const filtered = category === "All" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}
*/

function filterCategory(category) {
  const allCards = document.querySelectorAll(".product-card");

  allCards.forEach(card => {
    const productCategory = card.querySelector(".category").innerText;

    if (category === "All" || productCategory === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

if (category === "All" || productCategory.toLowerCase() === category.toLowerCase())


// Displays product cards from products.js
function displayProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>£${product.price}</p>
      <button onclick="addToBasket(${product.id})">Add to Basket</button>
    `;
    container.appendChild(div);
  });
}

// On load
updateBasketCount();
if (typeof products !== "undefined") {
  filterCategory("All");
}




function displayProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100%;max-height:160px;object-fit:contain">
      <h3>${product.name}</h3>
      <p class="category">${product.category}</p>
      <p class="price">£${product.price}</p>
      <button onclick="addToBasket(${product.id})">Add to Basket</button>
    `;
    container.appendChild(div);
  });
}


filterCategory("All");
updateBasketCount();


// Animate footer fade-in on scroll
window.addEventListener('scroll', () => {
    const footer = document.querySelector('.footer');
    const rect = footer.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      footer.style.opacity = 1;
      footer.style.transform = 'translateY(0)';
    }
  });

// Initial hidden state for animation
  window.onload = () => {
    const footer = document.querySelector('.footer');
    footer.style.opacity = 0;
    footer.style.transform = 'translateY(50px)';
    footer.style.transition = 'all 1s ease';
};


// Optional: Smooth scroll fade-in when banner enters viewport
const banner = document.getElementById('banner');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      banner.classList.add('active');
    }
  });
}, {
  threshold: 0.2
});

observer.observe(banner);

