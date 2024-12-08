// d.js
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGOURI;

// Connect to MongoDB
const connectDB = async () => {
    try {
       const con= await mongoose.connect(mongoURI || "mongodb+srv://baljeetgunghas:baljeetgunghas7017@cluster0.yo703.mongodb.net/userData?retryWrites=true&w=majority&appName=Cluster0");
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
