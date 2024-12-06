const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
    name: String,
    role: String
})

const userRoleModel = mongoose.model("UserRole", userRoleSchema);

module.exports = userRoleModel