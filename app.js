const express = require("express");
const mongoose = require("mongoose");

const connectDB = require("./db"); // Function to manage connections to multiple databases
const app = express();

// Connect to all databases
const databases = connectDB({
    microserviceA: "mongodb://localhost:27017/microserviceA",
    microserviceB: "mongodb://localhost:27017/microserviceB",
    microserviceC: "mongodb://localhost:27017/microserviceC",
});

// // Export models from Microservice A
// const userSchema = require("microservice-a/models/User"); // Import User model from Microservice A
// const User = databases.microserviceA.model("User", userSchema);

// Define a model for Microservice B in Microservice C
// const orderSchema = new mongoose.Schema({
//     orderNumber: String,
//     userId: String,
//     date: Date,
// });
// const Order = databases.microserviceB.model("Order", orderSchema);



app.listen(3003, () => console.log("Microservice C running on port 3003"));
