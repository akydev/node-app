// Create a connection with database
const mongoose = require("mongoose");

const dbConnection = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("Connection established..."))
    .catch((err) => console.log(err));
};

module.exports = dbConnection;
