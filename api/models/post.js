const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    text: String,
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    likesLength: Number
});

module.exports = mongoose.model('Post', postSchema);
