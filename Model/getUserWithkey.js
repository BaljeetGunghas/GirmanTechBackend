// models/User.js
const mongoose = require('mongoose');

const getUserWithkeySchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    city: { type: String },
    contact_number: { type: String },
});

module.exports = mongoose.model('UserData', getUserWithkeySchema);
