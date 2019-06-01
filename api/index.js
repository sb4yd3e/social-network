const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const layout = require('./routes/layout');
const posts = require('./routes/posts');
const addPost = require('./routes/add-post');
const removePost = require('./routes/remove-post');
const likePost = require('./routes/like-post');
const users = require('./routes/users');
const user = require('./routes/user');
const editProfile = require('./routes/edit-profile');

const app = express();

app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(layout);
app.use(posts);
app.use(addPost);
app.use(removePost);
app.use(likePost);
app.use(users);
app.use(user);
app.use(editProfile);

mongoose.connect(
    'mongodb+srv://johnelectron:geniculata@cluster0-ugs7k.mongodb.net/main',
    { useNewUrlParser: true, useFindAndModify: false },
    err => {
        if (err) return console.error(err);
    }
);

module.exports = {
    path: '/api',
    handler: app
};
