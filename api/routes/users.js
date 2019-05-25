const { Router } = require('express');
const router = Router();
const User = require('../models/user');

router.post('/users', (req, res) => {
    User
        .find()
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
                        list: findResult
                    }
                });
            };
        });
});

module.exports = router;
