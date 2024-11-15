const express = require("express");
const app = express();
require('./db');
app.listen(3003, () => console.log("Microservice C running on port 3003"));
