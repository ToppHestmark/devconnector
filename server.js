const app = require("express")();
const express = require("express");
require("dotenv").config();
const path = require("path");

// Set server static asset if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

require("./startup/bodyParser")(app);
require("./startup/config")(app);
require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on port: ${port}`));
