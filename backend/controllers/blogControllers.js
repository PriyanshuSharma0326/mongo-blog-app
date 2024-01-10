import Blogs from '../models/blogModel.js';

const getAllBlogs = async (req, res) => {
    try {
        const blogsList = await Blogs.find();
        res.status(200).json({ success: true, message: 'All Blogs', data: blogsList })
    } catch(err) {
        res.status(400).json({ success: false, message: err });
    }
}

const getSingleBlog = (req, res) => {
    const { id } = req.params;
    res.status(201).send({ message: `Single blog post - ${id}!` });
}

const writeBlog = (req, res) => {
    new Blogs(req.body)
    .save()
    .then(() => {
        res.status(200).json({ success: true, message: 'Blog created!' });
    })
    .catch((err) => {
        res.status(400).json({ success: false, message: err });
    });
}

const editBlog = (req, res) => {
    const { id } = req.params;
    res.status(201).send({ message: `Edit this blog post - ${id}!` });
}

const deleteBlog = (req, res) => {
    const { id } = req.params;
    res.status(201).send({ message: `Delete this blog post - ${id}!` });
}

export {
    getAllBlogs,
    getSingleBlog,
    writeBlog,
    editBlog,
    deleteBlog
}
