const taskRouter = require("express").Router();
const taskController = require("../controllers/taskController");

taskRouter.post("/", taskController.createOne);
taskRouter.get("/", taskController.getAll);
taskRouter.get("/:taskId", taskController.getOne);
taskRouter.put("/:taskId", taskController.updateOne);
taskRouter.delete("/:taskId", taskController.deleteOne);

module.exports = taskRouter;
