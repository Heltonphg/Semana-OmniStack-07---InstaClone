const express = require ('express')
const PostController = require('./controllers/PostController');

const router = express.Router()

router.post('/posts', PostController.store);

module.exports = router;