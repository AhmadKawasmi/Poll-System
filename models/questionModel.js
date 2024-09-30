const mongoose = require('mongoose');

// Question schema
const questionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    firstAnswer: { type: String, required: true },
    secondAnswer: { type: String, required: true },
    thirdAnswer : { type: String, required: true },
    fourthAnswer: { type: String, required: true }
});

// Export the Question model
module.exports = mongoose.model('questionModel', questionSchema);