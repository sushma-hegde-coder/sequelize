const express = require("express");
const db = require("./src/model");
const { personRouter } = require("./src/routes");

const app = express();

const PORT_NUMBER = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//db.sequelize.sync();
db.sequelize.sync({ force: true });

app.use("/person",personRouter);

app.listen(PORT_NUMBER, (err) => {
    if (err)
        throw err;
    else
        console.log(`server started at http://localhost:${PORT_NUMBER}`);
});

app.get('/hello', function (req, res) {
    res.send('hello world')
  })
  