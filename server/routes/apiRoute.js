const apiRouter = require("express").Router();
const userRouter = require("./userRoute");
const taskRouter = require("./taskRoute");
const projectRouter = require("./projectRoute");

apiRouter.use("/user", userRouter);
taskRouter.use("/task", userRouter);
projectRouter.use("/project", userRouter);

module.exports = apiRouter;
