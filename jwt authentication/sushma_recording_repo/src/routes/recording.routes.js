const recording = require("../controller/recording.controller");
const router = require("express").Router();

//POST : /sushma/addmyrecordings
router.post("/addmyrecordings", recording.addRecordings);

//GET : /sushma/getrecordings
router.get("/getrecordings", recording.getAllRecordings);

module.exports = router;
