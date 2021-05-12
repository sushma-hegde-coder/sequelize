const router = require("express").Router();
const orders = require("../controllers/order.controller");
// POST : /api/product
router.post("/", orders.add);
// GET : /api/product
router.get("/", orders.getAll);
// GET : /api/product/100
router.get("/:id", orders.getById);
// PUT : /api/product/100
router.put("/:id", orders.update);
// DELETE : /api/product/100
router.delete("/:id", orders.remove);
module.exports = router;
