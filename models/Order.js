// const mongoose = require("mongoose");

// // Define the Order schema
// const orderSchema = new mongoose.Schema({
//     orderNumber: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User", // Reference to the User model
//         required: true,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
// }, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// module.exports = (connection) => connection.model("User", orderSchema);;


const mongoose = require("mongoose");

// Define the Order schema
const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

module.exports = orderSchema;
