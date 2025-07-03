const express = require("express");
const createTodo = require("../controller/todo");

const router = express.Router();

router.route("/").post(createTodo);
module.exports = router;
