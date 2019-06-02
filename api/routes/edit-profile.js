const { Router } = require('express');
const router = Router();
const ObjectId = require('mongodb').ObjectID;
const User = require('../models/user');

router.post('/edit-profile', (req, res) => {
    const { firstName, lastName, email } = req.body;

    User.findOneAndUpdate(
        { _id: new ObjectId(req.body._id) },
        { fullName: `${firstName} ${lastName}`, firstName, lastName, email }
    ).exec((updateError, updateResult) => {
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
                data: {}
            });
        }
    });
});

module.exports = router;
