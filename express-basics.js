// setup express server
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const PORT_NUMBER = 3000;
// create app using express object
const app = express();
// secure express app using helmet
app.use(helmet());
// REQUEST LOGGING
app.use(morgan("dev"));
// use this functionality on all the routes
app.use(express.urlencoded({ extended: true })); // enable url encoded
app.use(express.json()); // enabling the json parser

// application implementation
// DEFINE ROUTES
// url pattern, callback function

// GET : /
app.get("/", (req, res) => {
  console.log(req.query); // query params
  // return res.send("express works"); // html,xml,json,plain text
  return res.status(200).json({ success: true });
});
// POST : /
app.post("/", (req, res) => {
  console.log("REQUEST DATA", req.body);
  return res.json({ error: true });
});
// GET : /test/:id (id is a variable)
app.get("/test/:id", (req, res) => {
  console.log("PATH VARIABLE", req.params); // path params
  return res.json({ success: true });
});

// start server
app.listen(PORT_NUMBER, (error) => {
  if (error) throw error;
  else console.log("Server started at http://localhost:" + PORT_NUMBER);
});
