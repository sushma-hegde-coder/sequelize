const user = require("../controllers/user.controller");
const router = require("express").Router();

// PUBLIC ENDPOINTS
// POST : /api/auth/login
router.post("/login", user.login);
// POST : /api/auth/register
router.post("/register", user.register);
// GET : /api/auth/profile
router.get("/profile", user.profile);

module.exports = router;
