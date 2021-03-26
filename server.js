const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("dotenv").config();
require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on port: ${port}`));
