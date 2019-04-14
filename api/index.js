const express = require('express');
const bodyParser = require('body-parser');

// Create express instnace
const app = express();


// Require API routes
const layout = require('./routes/layout');
const myPage = require('./routes/my-page');
const addPost = require('./routes/add-post');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import API Routes
app.use(layout);
app.use(myPage);
app.use(addPost);

// Export the server middleware
module.exports = {
    path: '/api',
    handler: app
};
