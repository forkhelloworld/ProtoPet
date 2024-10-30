const userRouter = require("express").Router();

userRouter.post("/");
userRouter.get("/");
userRouter.get("/:userId");
userRouter.put("/:userId");
userRouter.delete("/:userId");

module.exports = userRouter;
