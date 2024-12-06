const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    city: String,
    contact_number: String,
})

const userData = mongoose.model("UserData", userRoleSchema);

module.exports = userData