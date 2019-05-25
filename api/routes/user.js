const { Router } = require('express');
const router = Router();
const ObjectId = require('mongodb').ObjectID;
const User = require('../models/user');

router.post('/user', (req, res) => {
    User
        .findOne({ _id: new ObjectId(req.body._id) })
        .exec((findError, findResult) => {
            if (findError) {
                res.json({
                    status: false,
                    data: {
                        error: findError
                    }
                });
            } else {
                res.json({
                    status: true,
                    data: {
                        user: findResult
                    }
                });
            };
        });
});

module.exports = router;
