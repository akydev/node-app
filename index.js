// Express is middleware
require("dotenv").config();
// Create server
const express = require("express");
const dbConnection = require("./database/db");
const todo = require("./routes/todoRoute");
const app = express();

const port = 4000;
app.use(express.json()); // req and req fromat in json

app.get("/node", (req, res) => {
  res.send("Hello World!!");
});

app.use("/api/todo", todo);

// create a function to start the database
const dbStart = async () => {
  try {
    await dbConnection(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server running on ${port} number`));
  } catch (error) {
    console.log(error);
  }
};

dbStart(); // Function call
