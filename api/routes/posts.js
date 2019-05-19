const { Router } = require('express');
const router = Router();

const Post = require('../models/post');

router.post('/posts', (req, res) => {
    const { userId } = req.body;
    Post
        .find(userId ? { userId } : {})
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
