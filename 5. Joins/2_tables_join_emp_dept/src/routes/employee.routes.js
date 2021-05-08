const employee = require("../controller/employee.controller");
const router = require("express").Router();

//POST : /employee/add
router.post("/add", employee.registerEmployee);

//Get : /employee/allEmployees
router.get("/allEmployees", employee.getAllEmployees);

//GET : /employee/getBothTableData
router.get("/getBothTableData", employee.getBothTableData);

//Get : /employee/:emp_id
router.get("/:emp_id", employee.getEmployeeById);

//DELETE : /employee/:employee_name
router.delete("/:employee_id", employee.deleteEmployee);

//PUT : /employee/:employee_name
router.put("/:employee_name", employee.updateEmployee);

module.exports = router;
