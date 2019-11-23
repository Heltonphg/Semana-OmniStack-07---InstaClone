const Post = require('../models/Post');
const sharp = require('sharp');//? lidar com redimensionamento de imagens
const path = require('path');//? lidar com caminhos
const fs = require('fs'); //? file systen

class PostController {

    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    }

    async store(req, res) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        //TODO: fazendo com que as imagens sejam JPG
        const [name] = image.split('.');
        const filename = `${name}.jpg`;


        //TODO: Redimensionando imagem -> 
        //TODO: dps que a foto foi salva pelo arquivo upload.js, o sharp redimensiona e a coloca em resized
        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quelity: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', filename)
            );
        fs.unlinkSync(req.file.path); //TODO: Apagando a imagem do caminho inicial

        //TODO: persistindo dados no mongodb
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: filename 
        });

        //? quando um post for criado -> enviar para os usuarios cadastrados em tempo real que tem um novo post
        req.io.emit('post', post);

        return res.json(post);
    }
}

module.exports = new PostController();