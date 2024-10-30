const express = require("express");
const apiRouter = require("./routes/apiRoute");
const bodyParser = express.json();
const errorHandler = require("./errorHandler");
const app = express();

app.use(bodyParser);
app.use("/api", apiRouter);
app.use(errorHandler);

module.exports = app;
