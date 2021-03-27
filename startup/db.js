const mongoose = require("mongoose");

module.exports = () => {
  // const db = require("../config/keys").mongoURI;
  const db = "mongodb://localhost/devconnector";

  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};
