const Post = require('../models/Post');

class PostController {

    async index(req,res) {

    }

    async store(req,res) {
        return res.json({ok: true})
    }
}

module.exports = new PostController();