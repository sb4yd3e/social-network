const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId: String,
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    text: String
});

module.exports = mongoose.model('Post', postSchema);  