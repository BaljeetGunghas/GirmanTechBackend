// d.js
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGOURI;

// Connect to MongoDB
const connectDB = async () => {
    try {
       const con= await mongoose.connect(mongoURI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Connection Error Details:', {
            message: err.message,
            stack: err.stack,
        });
        process.exit(1);
    }
};


module.exports = connectDB;
