require("dotenv").config();

const express = require("express");
const { authRouter } = require("./src/auth");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

// /auth
app.use("/auth", authRouter);
// /users
// /posts

app.listen(PORT, () => {
  console.log(`api running on http://localhost:${PORT}`);
});
