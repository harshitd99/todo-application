const express = require("express");

const authRoute = require("./auth");
const todoRoute = require("./todo");

const router = express.Router();

router.use("/auth", authRoute);
router.use("/todos", todoRoute);

module.exports = router;
