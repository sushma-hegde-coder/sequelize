const person = require("../controller/person.controller");
const router = require("express").Router();

//POST : /person/add
router.post("/add", person.register);

//Get : /person/allPeople
router.get("/allPeople",person.getAllPersons);

//Get : /person/:person_name
router.get("/:person_name",person.getPersonByName);

//DELETE : /person/:person_name
router.delete("/:person_name",person.deletePerson);

//PUT : /person/:person_name
router.put("/:person_name",person.updatePerson);

module.exports = router;


