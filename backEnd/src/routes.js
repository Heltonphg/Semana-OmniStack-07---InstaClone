const express = require ('express')
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const multer = require('multer');
const uploadConfig = require('./config/upload');


const router = express.Router();
const upload = multer(uploadConfig);

router.post('/posts', upload.single('image'), PostController.store);
router.get('/posts', PostController.index);
router.post('/posts/:id/like', LikeController.store);

module.exports = router;