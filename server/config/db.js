const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {

        const mongoURI = process.env.MONGODB_URI;

        try {
                await mongoose.connect(mongoURI)
                console.log("MongoDB Connected Successfully");
        } catch (error) {
                console.log("MongoDB connection error", error);
        }
}

module.exports = connectDB;