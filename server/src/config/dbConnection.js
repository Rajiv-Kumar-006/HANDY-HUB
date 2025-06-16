const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGODB_URI;

const DBconnect = async () => {
    try {
        const connect = await mongoose.connect(`${MONGO_URI}`);
        console.log(`✅ DATABASE CONNECTED SUCCESSFULLY:  ${connect.connection.host}`);
    } catch (error) {
        console.error("❌ ERROR:", error.message);
        process.exit(1);
    }
};

module.exports = DBconnect;
