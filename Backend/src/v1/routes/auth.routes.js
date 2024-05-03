const express = require("express");
const authController = require("./../../controllers/auth.controller");
const authRouter = express.Router();
const authMiddleware = require("./../../middlewares/auth.middlewares");
console.log("hehe")
authRouter.route("/signup").post(authController.signup);
authRouter.route("/login").post(authController.login);
authRouter.route("/logout").delete(authMiddleware, authController.logout);

module.exports = authRouter;
