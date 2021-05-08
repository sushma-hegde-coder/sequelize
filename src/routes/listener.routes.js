const listener = require("../controller/listener.controller");
const router = require("express").Router();

//POST : /listener/add
router.post("/add", listener.register);

//POST : /listener/login
router.post("/login", listener.login);

module.exports = router;
