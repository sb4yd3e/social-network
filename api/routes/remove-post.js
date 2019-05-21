const { Router } = require('express');
const router = Router();
const Post = require('../models/post');

router.post('/remove-post', (req, res) => {
    Post
        .findOneAndRemove({ _id: req.body.id }).exec((findError) => {
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
                    data: {}
                });
            }
        });
});

module.exports = router;
