const { Router } = require('express');
const router = Router();
const Post = require('../models/post');

router.post('/add-post', (req, res) => {
    const post = new Post({
        creator: req.body._id,
        date: new Date(),
        text: req.body.string,
        likes: []
    });

    post
        .save((saveError) => {
            if (saveError) {
                res.json({
                    status: false,
                    data: {
                        error: saveError
                    }
                });
            } else {
                res.json({
                    status: true,
                    data: {}
                });
            }
        });
});

module.exports = router;
