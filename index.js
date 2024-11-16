const connectToDatabase = require("./db/connectToDatabase");
const userSchema = require("./models/User");
const orderSchema = require("./models/Order");

module.exports = {
    /**
     * Get the User model from the specified database.
     * @param {String} connectionString - The full MongoDB connection string.
     * @returns {Object} - The User model.
     */
    getUserModel: async (connectionString) => {
        const connection = await connectToDatabase(connectionString);
        return connection.model("User", userSchema);
    },

    /**
     * Get the Order model from the specified database.
     * @param {String} connectionString - The full MongoDB connection string.
     * @returns {Object} - The Order model.
     */
    getOrderModel: async (connectionString) => {
        const connection = await connectToDatabase(connectionString);
        return connection.model("Order", orderSchema);
    },
};


/* method 1:    for reference code this approach 

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

*/
