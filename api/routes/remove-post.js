const { Router } = require('express');
const router = Router();

const Post = require('../models/post');

router.post('/remove-post', (req, res) => {
    Post
        .findOneAndRemove({ _id: req.body.id }).exec((findError, findResult) => {
            if (findError) {
                res.json({
                    status: false,
                    data: {
                        error: findError
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
