const connectToDatabase = require("./db/connectToDatabase");
const userSchema = require("./models/User");
const orderSchema = require("./models/Order");

module.exports = {
    getUserModel: async (dbURI, dbName) => {
        const connection = await connectToDatabase(dbURI, dbName);
        return userSchema(connection);
    },
    getOrderModel: async (dbURI, dbName) => {
        const connection = await connectToDatabase(dbURI, dbName);
        return orderSchema(connection);
    },
};
