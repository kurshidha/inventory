const fs = require("fs");

const DB_FILE = "db/db.json";

// ---------- Helper Functions ----------
const readDB = () => {
  return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
};

const writeDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// ---------- Controller Functions ----------

// Get all items
const getAllItems = (req, res) => {
  const db = readDB();

  res.status(200).json({
    success: true,
    count: db.inventory.length,
    data: db.inventory
  });
};

// Get single item
const getItem = (req, res) => {
  const db = readDB();

  const item = db.inventory.find(i => i.id == req.params.id);

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "Item not found"
    });
  }

  res.status(200).json({
    success: true,
    data: item
  });
};

// Add item
const addItem = (req, res) => {
  const { name, quantity, price, category } = req.body;

  if (!name || quantity == null) {
    return res.status(400).json({
      success: false,
      message: "Name and quantity required"
    });
  }

  const db = readDB();

  const newItem = {
    id: Date.now(),
    name,
    quantity,
    price: price || 0,
    category: category || "General",
    createdAt: new Date().toISOString()
  };

  db.inventory.push(newItem);
  writeDB(db);

  res.status(201).json({
    success: true,
    message: "Item added successfully",
    data: newItem
  });
};

// Update item
const updateItem = (req, res) => {
  const db = readDB();

  const index = db.inventory.findIndex(
    i => i.id == req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Item not found"
    });
  }

  let item = db.inventory[index];

  item.name = req.body.name || item.name;
  item.quantity = req.body.quantity ?? item.quantity;
  item.price = req.body.price ?? item.price;
  item.category = req.body.category || item.category;

  db.inventory[index] = item;
  writeDB(db);

  res.status(200).json({
    success: true,
    message: "Item updated",
    data: item
  });
};

// Delete item
const deleteItem = (req, res) => {
  const db = readDB();

  const newItems = db.inventory.filter(
    i => i.id != req.params.id
  );

  if (newItems.length === db.inventory.length) {
    return res.status(404).json({
      success: false,
      message: "Item not found"
    });
  }

  db.inventory = newItems;
  writeDB(db);

  res.status(200).json({
    success: true,
    message: "Item deleted"
  });
};


// ---------- EXPORTS (Bottom) ----------
module.exports = {
  getAllItems,
  getItem,
  addItem,
  updateItem,
  deleteItem
};