const Blog = require('../models/post')


async function show(req, res) {
    try {
        let title = (req.params.title).replace(/-/g,' ');
        let date = req.params.date
        const blogs = await Blog.findByTitleAndDate(title, date);
        res.status(200).json(blogs);
    } catch (err) {
        res.status(404).send(err);
    }
}

async function create(req, res) {
    try {
        const blogPost = await Blog.form(req.body.title, req.body.date, req.body.name, req.body.message);
        res.status(201).json(blogPost)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = { show, create } 