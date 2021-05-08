const { person } = require('../model');

const register = async (req, res) => {
    try {
        //const { name } = req.body; when there is only one key in object, use same key name in order to extract
        const { personName } = req.body;
        console.log("request body is", req.body);
        console.log(personName);
        const data = await person.create({
            personName: personName,
        });
        return res.status(201).json(data);
    }
    catch (e) {
        res.status(400).json(e.message);
    }
};

const getAllPersons = async (req, res) => {
    try {
        const { personName } = req.body;
        console.log("person name", personName);
        const data = await person.findAll();
        return res.status(200).json(data);
    }
    catch (e) {
        return res.status(400).json(e);
    }
}

const getPersonByName = async (req, res) => {
    try {        
        const data = await person.findOne({
            where: {personName: req.params.person_name},           
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

const deletePerson = async (req, res) => {
    try {
        const count = await person.destroy({
            where: { personName: req.params.person_name },
        });
        return res.status(200).send({ message: count == 1 ? `Record deleted of person ${req.params.person_name}` : `No record found for name ${req.params.person_name}` });
    } catch (e) {
        return res.status(400).json(e.message);
    }
};

const updatePerson = async (req, res) => {
    try {
        const data = await person.update(req.body, {
            where: { personName: req.params.person_name },
        });
        return res.status(200).send({ message: data[0] === 1 ? `Redord update for ${req.params.person_name}` : `No record found for ${req.params.person_name} ` });
    } catch (e) {
        return res.status(400).json(e.message);
    }
};

module.exports = { register, getAllPersons, getPersonByName, deletePerson, updatePerson };
