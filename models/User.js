const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    address: { type: String },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

module.exports = userSchema;


/* method 1:    for reference code this approach 

module.exports = (connection) => connection.model("User", userSchema);

*/
