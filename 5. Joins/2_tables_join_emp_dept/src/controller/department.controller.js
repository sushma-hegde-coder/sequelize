const { department } = require("../model");

const registerDept = async (req, res) => {
  try {
    // const { deptId, deptName, empId } = req.body;
    // console.log("request body is", req.body);
    // console.log(deptId,deptName,empId);
    // const data = await department.create({
    //     deptId: deptId,
    //     deptName: deptName,
    //     empId: empId,
    // });
    console.log(req.body);
    const data = await department.create({ ...req.body });
    return res.status(201).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(400).json(e.message);
  }
};

const getAllDepartments = async (req, res) => {
  try {
    const { deptName } = req.body;
    console.log("department name", deptName);
    const data = await department.findAll();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const getDepartmentByName = async (req, res) => {
  try {
    const data = await department.findOne({
      where: { deptName: req.params.dept_name },
    });
    console.log(data);
    if (data) {
      return res.status(200).json(data);
    }
    return res.status(204).send();
  } catch (e) {
    return res.status(400).json(e);
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const count = await department.destroy({
      where: { deptName: req.params.dept_id },
    });
    return res
      .status(200)
      .send({
        message:
          count == 1
            ? `Record deleted of department ${req.params.dept_id}`
            : `No record found for name ${req.params.dept_id}`,
      });
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

const updateDepartment = async (req, res) => {
  try {
    const data = await department.update(req.body, {
      where: { deptName: req.params.dept_name },
    });
    return res
      .status(200)
      .send({
        message:
          data[0] === 1
            ? `Redord update for ${req.params.dept_name}`
            : `No record found for ${req.params.dept_name}`,
      });
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

module.exports = {
  registerDept,
  getAllDepartments,
  getDepartmentByName,
  deleteDepartment,
  updateDepartment,
};
