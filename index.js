const express = require("express");
const app = express();
const port = 30000;

// Middleware to parse JSON
app.use(express.json());

// Simple Routes

// 1️⃣ GET Route - Read Data
app.get("/", (req, res) => {
  res.send("Welcome to my Node.js API! shahzad Ali Lashari Amn............");
});

// 2️⃣ GET Route - API Example
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Shahzad" },
    { id: 2, name: "Ali" },
  ]);
});

// 3️⃣ POST Route - Create Data
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  res.status(201).json({
    message: "User created successfully!",
    user: newUser,
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
