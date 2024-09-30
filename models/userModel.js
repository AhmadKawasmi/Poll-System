const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    birthday: { type: Date, required: true },
    address: { type: String, required: true }
});

// Export the User model
module.exports = mongoose.model('userModel', userSchema);