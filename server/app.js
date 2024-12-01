const express = require("express");
const cors = require('cors')
const apiRouter = require("./routes/apiRoute");
const bodyParser = express.json();
const errorhandler = require("./errorhandler");
const app = express();

app.use(cors())
app.use(bodyParser);
app.use("/api", apiRouter);
app.use(errorhandler);

module.exports = app;
