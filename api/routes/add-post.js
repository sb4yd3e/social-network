const { Router } = require('express');
const MongoClient = require('mongodb').MongoClient;

const router = Router();

router.post('/add-post', (req, res, next) => {
    MongoClient.connect('mongodb+srv://johnelectron:geniculata@cluster0-ugs7k.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, (err, client) => {
        if (err) throw err;
        const db = client.db('collection');
        db.collection('users').findOne({}, function (findErr, result) {
            if (findErr) throw findErr;
            res.json(result);
            client.close();
        });
    });
});

module.exports = router;
