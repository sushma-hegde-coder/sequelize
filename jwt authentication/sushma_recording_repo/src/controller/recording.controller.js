const { recording } = require("../model");

const addRecordings = async (req, res) => {
  try {
    const data = await recording.create({ ...req.body });
    return res.status(201).json(data);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

const getAllRecordings = async (req, res) => {
  try {
    // jwt.verify(token, SECRET_KEY); could have used here but when there are many protected routes it is good to keep it in middleware
    const data = await recording.findAll();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json(e);
  }
};

module.exports = {
  addRecordings,
  getAllRecordings,
};
