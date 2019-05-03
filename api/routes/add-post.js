const { Router } = require('express');
const router = Router();

const Post = require('../models/post');

router.post('/add-post', (req, res) => {
    const post = new Post({
        userId: req.body.userId,
        creator: req.body._id,
        date: new Date(),
        text: req.body.string
    });

    post
        .save((saveError, saveResult) => {
            if (saveError) {
                res.json({
                    status: false,
                    data: {
                        error: saveError
                    }
                });
            } else {
                Post
                    .find({ userId: req.body.userId })
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
            }
        });
});

module.exports = router;
