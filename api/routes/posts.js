const { Router } = require('express');
const router = Router();
const ObjectId = require('mongodb').ObjectID;
const Post = require('../models/post');

router.post('/posts', (req, res) => {
    Post.find(req.body._id ? { creator: new ObjectId(req.body._id) } : {})
        .populate('creator')
        .populate('likes')
        .limit(
            req.body.showMore
                ? req.body.postsCounter + 10
                : req.body.postsCounter
        )
        .sort({ [req.body.sortValue]: req.body.sortDirection })
        .exec((findError, findResult) => {
            if (findError) {
                res.json({
                    status: false,
                    data: {
                        error: findError
                    }
                });
            } else {
                Post.countDocuments(
                    req.body._id ? { creator: new ObjectId(req.body._id) } : {}
                ).exec((countError, countResult) => {
                    if (countError) {
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
                                posts: findResult,
                                allPostsCounter: countResult
                            }
                        });
                    }
                });
            }
        });
});

module.exports = router;
