const apiRouter = require("express").Router();
const userRouter = require("./userRoute");

apiRouter.use("/user", userRouter);

module.exports = apiRouter;
