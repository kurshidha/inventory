const express = require("express");
const app = express();

const itemRoutes = require("./routes/itemRoutes");

app.use(express.json());

app.use("/items", itemRoutes);

app.get("/", (req, res) => {
  res.send("Inventory API Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});