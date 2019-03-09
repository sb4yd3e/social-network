const { Router } = require('express');

const router = Router();

// Mock Users
const posts = [
    { name: 'Alexandre' },
    { name: 'Pooya' },
    { name: 'Sébastien' }
];

/* GET users listing. */
router.get('/home', function (req, res, next) {
    res.json(posts);
});

// router.get('/home/:id', function (req, res, next) {
//     const id = parseInt(req.params.id);
//     if (id >= 0 && id < posts.length) {
//         res.json(posts[id]);
//     } else {
//         res.sendStatus(404);
//     }
// });

module.exports = router;
