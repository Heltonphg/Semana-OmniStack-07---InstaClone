const Post = require('../models/Post');

class PostController {

    async index(req,res) {
        const posts = await Post.find();
        return res.send(posts);
    }

    async store(req,res) {
        const {author, place, description, hashtags} = req.body;
        const {filename: image} = req.file;
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image 
        })
        return res.json(post);
    }
}

module.exports = new PostController();