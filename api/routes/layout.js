const { Router } = require('express');
const router = Router();
const User = require('../models/user');

router.post('/layout', (req, res) => {
    if (!req.body.user) {
        res.json({
            status: true,
            data: {
                user: {
                    status: false
                }
            }
        });
    } else {
        User.findOne({ userId: req.body.user.Eea }).exec(
            (findError, findResult) => {
                if (findError) {
                    res.json({
                        status: false,
                        data: {
                            error: findError
                        }
                    });
                }

                if (findResult) {
                    res.json({
                        status: true,
                        data: {
                            user: { status: true, ...findResult._doc }
                        }
                    });
                }

                if (!findResult) {
                    const user = new User({
                        userId: req.body.user.Eea,
                        firstName: req.body.user.ofa,
                        lastName: req.body.user.wea,
                        photo: req.body.user.Paa,
                        email: req.body.user.U3
                    });

                    user.save((saveError, saveResult) => {
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
                                data: {
                                    user: { status: true, ...saveResult._doc }
                                }
                            });
                        }
                    });
                }
            }
        );
    }
});

module.exports = router;
