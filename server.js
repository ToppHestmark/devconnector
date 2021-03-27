const app = require("express")();

require("dotenv").config();
require("./startup/bodyParser")(app);
require("./startup/config")(app);
require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on port: ${port}`));
