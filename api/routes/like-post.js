const { Router } = require('express');
const router = Router();
const ObjectId = require('mongodb').ObjectID;
const Post = require('../models/post');

router.post('/like-post', (req, res) => {
    Post
        .findOne({ _id: new ObjectId(req.body.postId) })
        .populate('likes')
        .exec((findError, findResult) => {
            if (findError) {
                res.json({
                    status: false,
                    data: {
                        error: findError
                    }
                });
            } else {
                Post
                    .findOneAndUpdate(
                        { _id: new ObjectId(req.body.postId) },
                        {
                            likes:
                                findResult.likes.find(item => (item._id).toString() === req.body.userId)
                                    ? findResult.likes.filter(item => (item._id).toString() !== req.body.userId)
                                    : [...findResult.likes, req.body.userId]
                        },
                        { new: true }
                    )
                    .populate('likes')
                    .exec((updateError, updateResult) => {
                        if (updateError) {
                            res.json({
                                status: false,
                                data: {
                                    error: updateError
                                }
                            });
                        } else {
                            res.json({
                                status: true,
                                data: {
                                    likes: updateResult.likes
                                }
                            });
                        };
                    });
            }
        });
});

module.exports = router;
