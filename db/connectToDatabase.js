const mongoose = require("mongoose");

const connections = {};

/**
 * Connect to a database and cache the connection.
 * @param {String} dbURI - The MongoDB connection string.
 * @param {String} dbName - The name of the database.
 * @returns {Object} - The database connection.
 */
const connectToDatabase = async (dbURI, dbName) => {
    if (connections[dbName]) {
        return connections[dbName];
    }
    const connection = await mongoose.createConnection(dbURI, {
        dbName,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).asPromise();
    connections[dbName] = connection;
    return connection;
};

module.exports = connectToDatabase;
