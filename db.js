const mongoose = require("mongoose");

module.exports = (dbConfig) => {
    const connections = {};

    Object.entries(dbConfig).forEach(([key, uri]) => {
        const db = mongoose.createConnection(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        db.on("connected", () => console.log(`Connected to ${key} database`));
        db.on("error", (err) => console.error(`Error in ${key} database:`, err));

        connections[key] = db;
    });

    return connections;
};
