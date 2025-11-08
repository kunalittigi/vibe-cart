🛒Vibe Cart

A simple full-stack shopping cart app built for Vibe Commerce internship screening. Users can view products, add/remove items from cart, see totals, and perform a mock checkout. No real payments. Fully functional using React (frontend) and Node/Express (backend).

🗂 Folder Structure
Vibe Cart/
│
├─ backend/
│   ├─ server.js       # Express backend API
│   ├─ index.js        # Optional entry point
│   └─ package.json    # Backend dependencies and scripts
│
├─ frontend/
│   ├─ src/
│   │   └─ App.js      # React main app
│   ├─ public/
│   │   └─ index.html
│   └─ package.json    # Frontend dependencies and scripts
│
└─ README.md           

⚙️Setup Instructions
1️⃣ Backend

Open terminal and navigate to backend folder:

cd "C:\Users\kunal\OneDrive\Pictures\Kunal College\Vibe Cart\backend"


Install dependencies:

npm install


Start the server:

node server.js


The backend runs on http://localhost:5000

Available APIs:

GET /api/products → Fetch all products

GET /api/cart → Get cart items and total

POST /api/cart → Add item to cart ({ productId, qty })

DELETE /api/cart/:id → Remove item from cart

POST /api/checkout → Mock checkout ({ name, email })


2️⃣Frontend

Open a new terminal and navigate to frontend folder:

cd "C:\Users\kunal\OneDrive\Pictures\Kunal College\Vibe Cart\frontend"


Install dependencies:

npm install


Start React development server:

npm start


The frontend runs on http://localhost:3000

Connects automatically to backend APIs

🎯Features

View Products: List of available items with name and price

Add to Cart: Add single/multiple quantities

View Cart: Items in cart with total price

Remove from Cart: Delete individual items

Checkout: Submit name/email → get mock receipt with timestamp

💡Notes

In-Memory Cart: All cart data is stored in memory. Restarting the backend clears the cart.

No Database Required: Simple, fully functional without MongoDB.

Responsive Design: Works on desktop and mobile screen widths.