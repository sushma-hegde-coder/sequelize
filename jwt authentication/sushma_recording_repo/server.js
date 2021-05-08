const express = require("express");
const db = require("./src/model");
const { listenerRouter, recordingRouter } = require("./src/routes");
const authMiddleware = require("./src/middleware/auth-middleware");

const app = express();

const PORT_NUMBER = 3000;

app.use(authMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();
//db.sequelize.sync({ force: true });

app.use("/listener", listenerRouter);
app.use("/sushma", recordingRouter);

app.listen(PORT_NUMBER, (err) => {
  if (err) throw err;
  else console.log(`server started at http://localhost:${PORT_NUMBER}`);
});
