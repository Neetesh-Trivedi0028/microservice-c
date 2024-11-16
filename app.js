const express = require("express");
const app = express();
// const connectDB = require('./db');

app.listen(3003, () => console.log("Microservice C running on port 3003"));
// const microserviceA = connectDB("mongodb://localhost:27017/microserviceA");