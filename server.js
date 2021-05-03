// imports
require("./src/handlers/error-handler");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const db = require("./src/models");
const { productRouter, orderRouter, userRouter } = require("./src/routes");
const authMiddleware = require("./src/middlewares/auth-middleware");

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: "Too many requests",
});

// APP setup
const app = express();
// middlewares;
app.use(cors()); // enable cors first
app.use(helmet()); // security
app.use(limiter); // rate limiting
app.use(morgan("dev"));
app.use(authMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// start db server
db.sequelize.sync(); // sync all tables & models of the db
// db.sequelize.sync({ force: true }); // dev mode : drop all the tables everytime we run the app
// ROUTES START HERE
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/auth", userRouter);
// ROUTES END HERE

// START SERVER
const PORT_NUMBER = 3000;
app.listen(PORT_NUMBER, (err) => {
  if (err) throw err;
  else console.log(`Server started at http://localhost:${PORT_NUMBER}`);
});
