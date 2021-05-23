const { employee } = require('../model');

const registerEmployee = async (req, res) => {
    try {        
        const { empId, empName } = req.body;
        console.log("request body is", req.body);  
        console.log(empId,empName)    
        const data = await employee.create({
            empId: empId,
            empName: empName,
        });
        return res.status(201).json(data);
    }
    catch (e) {
        res.status(400).json(e.message);
    }
};

const getAllEmployees = async (req, res) => {
    try {
        const { empName } = req.body;
        console.log("emp name", empName);
        const data = await employee.findAll();
        return res.status(200).json(data);
    }
    catch (e) {
        return res.status(400).json(e);
    }
}

const getEmployeeById = async (req, res) => {
    try {        
        const data = await employee.findOne({
            where: { empId: req.params.emp_id },           
        })
        console.log(data);
        if (data) {
            return res.status(200).json(data);
        }
        return res.status(204).send();
    }
    catch (e) {
        return res.status(400).json(e);
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const count = await employee.destroy({
            where: { empId: req.params.emp_id },
        });
        return res.status(200).send({ message: count == 1 ? `Record deleted of emp ${req.params.emp_name}` : `No record found for name ${req.params.emp_name}` });
    } catch (e) {
        return res.status(400).json(e.message);
    }
};

const updateEmployee = async (req, res) => {
    try {
        const data = await employee.update(req.body, {
            where: { empName: req.params.emp_name },
        });
        return res.status(200).send({ message: data[0] === 1 ? `Redord update for ${req.params.emp_name}` : `No record found for ${req.params.emp_name} ` });
    } catch (e) {
        return res.status(400).json(e.message);
    }
};

module.exports = { registerEmployee, getAllEmployees, getEmployeeById, deleteEmployee, updateEmployee };
