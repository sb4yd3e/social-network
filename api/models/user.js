const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: String,
    fullName: String,
    firstName: String,
    lastName: String,
    photo: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);
