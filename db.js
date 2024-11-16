const mongoose = require("mongoose");

const connectDB = (uri, options = {}) => {
    const connection = mongoose.createConnection(uri, options);

    connection.on("connected", () => console.log(`Connected to ${uri}`));
    connection.on("error", (err) => console.error(`Connection error on ${uri}:`, err));
    connection.on("disconnected", () => console.log(`Disconnected from ${uri}`));

    return connection;
};

module.exports = connectDB;

// Initialize connections for each database
// const microserviceA = connectDB("mongodb://localhost:27017/microserviceA");
// const microserviceB = connectDB("mongodb://localhost:27017/microserviceB");
// const microserviceC = connectDB("mongodb://localhost:27017/microserviceC");

// module.exports = {
//     microserviceA,
//     microserviceB,
//     microserviceC,
// };
