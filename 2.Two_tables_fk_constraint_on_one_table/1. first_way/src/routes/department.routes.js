const department = require("../controller/department.controller");
const router = require("express").Router();

//POST : /department/add
router.post("/add", department.registerDept);

//Get : /department/allDeparments
router.get("/allDepartments",department.getAllDepartments);

//Get : /department/:department_name
router.get("/:department_name",department.getDepartmentByName);

//DELETE : /department/:department_name
router.delete("/:department_name",department.deleteDepartment);

//PUT : /department/:department_name
router.put("/:department_name",department.updateDepartment);

module.exports = router;