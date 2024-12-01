const projectRouter = require("express").Router();
const projectController = require("../controllers/projectController");

projectRouter.post("/", projectController.createOne);
projectRouter.get("/", projectController.getAll);
projectRouter.get("/:projectId", projectController.getOne);
projectRouter.put("/:projectId", projectController.updateOne);
projectRouter.delete("/:projectId", projectController.deleteOne);

module.exports = projectRouter;
