const mongoose = require("mongoose");

// Define the Order schema
const orderSchema = new mongoose.Schema({
    orderNumber: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = (connection) => connection.model("Order", orderSchema);
