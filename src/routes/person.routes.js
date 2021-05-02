const person = require("../controller/person.controller");
const router = require("express").Router();

//POST : /person/add
router.post("/add", person.register);

module.exports = router;


