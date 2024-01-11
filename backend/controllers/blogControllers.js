import Blogs from '../models/blogModel.js';

const getAllBlogs = async (req, res) => {
    try {
        const blogsList = await Blogs.find();
        res.status(200).json({ success: true, message: 'All Blogs', data: blogsList })
    } catch(err) {
        res.status(400).json({ success: false, message: err });
    }
}

const getSingleBlog = async (req, res) => {
    const { id } = req.params;
    const item = await Blogs.findById(id);
    if(!item) {
        res.status(400).json({ success: false, message: `Blog with id=${id} not found!` });
    }
    else {
        res.status(200).json({ success: true, data: item });
    }
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

const editBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Blogs.findByIdAndUpdate(id, req.body);
        if (response) {
            res.status(200).json({ success: true, message: 'Blog update successful!' });
        }
    }
    catch (err) {
        res.status(400).json({ success: false, message: err });
    }
}

const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Blogs.findByIdAndDelete(id);
        if (response) {
            res.status(200).json({ success: true, message: 'Blog deleted!' })
        }
    }
    catch (err) {
        res.status(400).json({ success: false, message: err });
    }
}

export {
    getAllBlogs,
    getSingleBlog,
    writeBlog,
    editBlog,
    deleteBlog
}
