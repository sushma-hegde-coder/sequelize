const { order } = require("../models");

const add = async (req, res) => {
  try {
    const record = await order.create({ ...req.body });
    return res.status(200).json(record);
  } catch (e) {
    return res.status(400).json(e);
  }
};
const update = async (req, res) => {
  try {
    const data = await order.update(req.body, {
      where: { orderId: req.params.id },
      fields: ["orderStatus"],
    });
    return res
      .status(200)
      .send({ message: data[0] === 1 ? "Record updated" : "No record found" });
  } catch (e) {
    return res.status(400).json(e.message);
  }
};
const remove = async (req, res) => {
  try {
    const count = await order.destroy({
      where: { orderId: req.params.id },
    });

    return res
      .status(200)
      .send({ message: count === 1 ? "Record deleted" : "No record found" });
  } catch (e) {
    return res.status(400).json(e.message);
  }
};
const getAll = async (req, res) => {
  try {
    const data = await order.findAll({
      where: { userId: res.locals.user.id },
    });
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};
const getById = async (req, res) => {
  try {
    const data = await order.findOne({
      where: { orderId: req.params.id, userId: res.locals.userId },
    });
    if (data) {
      return res.status(200).json(data);
    }
    return res.status(204).send();
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

module.exports = {
  add,
  update,
  remove,
  getAll,
  getById,
};
