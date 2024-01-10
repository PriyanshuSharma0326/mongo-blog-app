import express from "express";
import {
    getAllBlogs,
    getSingleBlog,
    writeBlog,
    editBlog,
    deleteBlog
} from '../controllers/blogControllers.js';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);

blogRouter.get('/:id', getSingleBlog);;

blogRouter.post('/write', writeBlog);

blogRouter.put('/edit/:id', editBlog);

blogRouter.delete('/delete/:id', deleteBlog);

export default blogRouter;
