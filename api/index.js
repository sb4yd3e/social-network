const express = require('express');

// Create express instnace
const app = express();

// Require API routes
const home = require('./routes/home');

// Import API Routes
app.use(home);

// Export the server middleware
module.exports = {
    path: '/api',
    handler: app
};
