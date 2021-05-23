const { listener } = require("../model");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

const register = async (req, res) => {
  try {
    // const { listenerName, listenerPassword } = req.body;
    // console.log(listenerName, listenerPassword);
    // const data = await listener.create({
    //   listenerName: listenerName,
    //   listenerPassword: listenerPassword,
    // });
    const data = await listener.create({ ...req.body });
    return res.status(201).json(data);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

const generateToken = (nameOfListener) => {
  const token = jwt.sign(
    {
      subject: nameOfListener, //can pass any no of data listenerName,listenerPassword .... suject, exp date, secret key are compulsory to create a token
    },
    SECRET_KEY,
    { expiresIn: 60 * 20 } //expires in 20 min
  );
  return token;
};

const login = async (req, res) => {
  try {
    const { listenerName, listenerPassword } = req.body;
    const data = await listener.findOne({
      where: {
        [Op.and]: [
          { listenerName: listenerName },
          { listenerPassword: listenerPassword },
        ],
      },
    });
    let message = "";
    let access_token = null;
    if (data === null)
      message =
        "No listener found in registered list...you can't access sushma's recordings !";
    else {
      message = "Login successful"; //if login is successful then only generate token
      access_token = generateToken(data.listenerName);
      console.log("token is", access_token);
    }
    return res.status(200).json({ message, access_token });
  } catch (e) {
    // return res.status(200).json("login successful");
    return res.status(400).json("login failed...invalid credentials" + e);
  }
};

module.exports = {
  register,
  login,
};
