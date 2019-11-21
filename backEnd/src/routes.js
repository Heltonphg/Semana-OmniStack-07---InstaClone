const express = require ('express')
const PostController = require('./controllers/PostController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const router = express.Router();
const upload = multer(uploadConfig);

router.post('/posts', upload.single('image'), PostController.store);
router.get('/posts', upload.single('image'), PostController.index);

module.exports = router;