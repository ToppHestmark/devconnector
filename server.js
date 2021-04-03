const express = require("express");
const app = require("express")();
const path = require("path");

app.use(express.json());

require("dotenv").config();
require("./startup/bodyParser")(app);
require("./startup/config")(app);
require("./startup/routes")(app);
require("./startup/db")();

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build"));
});

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on port: ${port}`));
