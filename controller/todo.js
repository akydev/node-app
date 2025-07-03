const Todo = require("../model/todoSchema");

// Create controller for Create TODO
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const resData = await Todo.create({
      title,
      description,
    });
    return res
      .status(201)
      .json({ data: resData, msg: "Todo Created Successfully!!!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error!!!" });
  }
};

module.exports = createTodo;
