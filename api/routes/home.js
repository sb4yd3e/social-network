const { Router } = require('express');
const MongoClient = require('mongodb').MongoClient;

const router = Router();

router.get('/home', (req, res, next) => {
    MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
        if (err) throw err;
        const db = client.db('status');
        db.collection('status').findOne({}, function (findErr, result) {
            if (findErr) throw findErr;
            res.json(result);
            client.close();
        });
    });
});

module.exports = router;
