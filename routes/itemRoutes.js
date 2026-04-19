const express = require("express");
const router = express.Router();

const itemController = require("../controller/itemController");

// Routes
router.get("/", itemController.getAllItems);
router.get("/:id", itemController.getItem);
router.post("/", itemController.addItem);
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);


// ---------- EXPORT ----------
module.exports = router;