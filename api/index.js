const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const layout = require('./routes/layout');
const myPage = require('./routes/my-page');
const addPost = require('./routes/add-post');
const removePost = require('./routes/remove-post');

const app = express();

app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(layout);
app.use(myPage);
app.use(addPost);
app.use(removePost);

mongoose.connect('mongodb+srv://johnelectron:geniculata@cluster0-ugs7k.mongodb.net/main', { useNewUrlParser: true, useFindAndModify: false }, (err) => {
    if (err) return console.error(err);
});

module.exports = {
    path: '/api',
    handler: app
};
