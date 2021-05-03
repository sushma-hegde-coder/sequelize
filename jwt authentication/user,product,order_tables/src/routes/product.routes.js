const router = require("express").Router();
const products = require("../controllers/product.controller");
// PROTECTED
// POST : /api/product
router.post("/", products.add);
// GET :
// /api/product
// /api/product?page=2
// /api/product?page=1&size=20
router.get("/", products.getAll);
// GET : /api/product/100
router.get("/:id", products.getById);
// PUT : /api/product/100
router.put("/:id", products.update);
// DELETE : /api/product/100
router.delete("/:id", products.remove);
// POST : /api/product/bulk
router.post("/bulk", products.bulkInsert);
module.exports = router;
