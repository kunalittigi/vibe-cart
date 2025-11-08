const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Headphones", price: 1500 },
  { id: 2, name: "Keyboard", price: 1200 },
  { id: 3, name: "Mouse", price: 800 },
  { id: 4, name: "Smartwatch", price: 2500 },
  { id: 5, name: "Charger", price: 600 },
];

// in-memory cart
let cart = [];

// ✅ GET products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ✅ GET cart
app.get("/api/cart", (req, res) => {
  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  res.json({ cart, total });
});

// ✅ POST add to cart
app.post("/api/cart", (req, res) => {
  const { productId, qty } = req.body;
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ productId, qty });
  }
  res.json({ message: "Added to cart", cart });
});

// ✅ DELETE remove from cart
app.delete("/api/cart/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  cart = cart.filter(item => item.productId !== productId);
  res.json({ message: "Removed from cart", cart });
});

// ✅ POST checkout
app.post("/api/checkout", (req, res) => {
  const { name, email } = req.body;
  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  const receipt = {
    name,
    email,
    total,
    timestamp: new Date().toISOString(),
  };

  // clear cart after checkout
  cart = [];

  res.json({ message: "Checkout successful", receipt });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
