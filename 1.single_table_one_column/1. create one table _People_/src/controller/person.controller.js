const { person } = require('../model');

const register = async (req, res) => {
    try {
        //const { name } = req.body; when there is only one key in object, use same key name in order to extract
        const { personName } = req.body;
        console.log("my body is",req.body);
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

module.exports = { register };
