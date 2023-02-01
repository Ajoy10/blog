const register = require("./routes/register");
const { json } = require("express");

const authRouter = require("express").Router();

authRouter.use(json());
authRouter.use("/register", register);

module.exports = { authRouter };
