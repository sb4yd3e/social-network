const { Router } = require('express');
const MongoClient = require('mongodb').MongoClient;

const router = Router();

router.get('/layout', (req, res, next) => {
    res.json({
        status: true,
        data: {
            inited: true
        }
    });
});

module.exports = router;
