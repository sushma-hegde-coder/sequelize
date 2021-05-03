const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const checkIfToBeSkipped = require("../utils/skip-urls.util");

module.exports = function (req, res, next) {
  // req : headers, body
  // console.log(req.headers.authorization); // bearer token is here
  if (checkIfToBeSkipped(req)) {
    // token/verification is not required
    next();
  } else {
    try {
      const token = req.headers.authorization.split(" ")[1]; // [bearer,token]
      const decoded = jwt.verify(token, SECRET_KEY); // valid token
      console.log("DECODED TOKEN", decoded);
      // locals lifespan is only till current request
      res.locals.user = { id: decoded.subject, role: decoded.role }; // locals : local data
      next(); // forward the request to next task in sequence
    } catch (err) {
      // invalid token
      return res.status(401).send({ message: "UNAUTHORIZED_REQUEST" });
    }
  }
};
