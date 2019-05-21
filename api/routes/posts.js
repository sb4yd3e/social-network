const { Router } = require('express');
const router = Router();
const ObjectId = require('mongodb').ObjectID;
const Post = require('../models/post');

router.post('/posts', (req, res) => {
    Post
        .find(req.body._id ? { creator: new ObjectId(req.body._id) } : {})
        .populate('creator')
        .sort([['date', -1]])
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
                        posts: findResult
                    }
                });
            };
        });
});

module.exports = router;
