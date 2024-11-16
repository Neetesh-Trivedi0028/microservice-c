const mongoose = require("mongoose");

const connections = {};

/**
 * Connect to a database and cache the connection.
 * @param {String} connectionString - The full MongoDB connection string (e.g., "mongodb://127.0.0.1:27017/microserviceB").
 * @returns {Object} - The database connection.
 */
const connectToDatabase = async (connectionString) => {
    if (connections[connectionString]) {
        return connections[connectionString];
    }

    // Create and cache the new connection
    const connection = await mongoose.createConnection(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).asPromise();

    connections[connectionString] = connection;
    return connection;
};

module.exports = connectToDatabase;






// method 1:    for reference code this approach

// const mongoose = require("mongoose");
// const connections = {};

/**
 * Connect to a database and cache the connection.
 * @param {String} dbURI - The MongoDB connection string.
 * @param {String} dbName - The name of the database.
 * @returns {Object} - The database connection.
 */
// const connectToDatabase = async (dbURI, dbName) => {
//     if (connections[dbName]) {
//         return connections[dbName];
//     }
//     const connection = await mongoose.createConnection(dbURI, {
//         dbName,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }).asPromise();
//     connections[dbName] = connection;
//     return connection;
// };

// module.exports = connectToDatabase;


// method 1:    for reference code this approach