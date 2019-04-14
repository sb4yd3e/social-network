const { Router } = require('express');
const MongoClient = require('mongodb').MongoClient;

const router = Router();

router.get('/my-page', (req, res, next) => {
    // MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    //     if (err) throw err;
    //     const db = client.db('status');
    //     db.collection('status').findOne({}, function (findErr, result) {
    //         if (findErr) throw findErr;
    //         res.json(result);
    //         client.close();
    //     });
    // });
    res.json({
        status: true,
        data: {
            inited: true,
            posts: [
                {
                    userId: "3313213",
                    userName: "John Doe",
                    time: "17 мая 2018",
                    text: "Приветики, Дружочек"
                },
            ],
        }
    });
});

module.exports = router;
