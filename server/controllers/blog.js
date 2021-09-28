const Blog = require('../models/post')


async function showName (req,res) {
    try{
        const blog = await Blog.findByName(req.params.name);
        console.log(req.params.name)
        res.status(200).json(blog)
    } catch (err) {
        res.status(404).json({err})
    }
}

async function create(req, res) {
    try{

    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = { create, showName } 