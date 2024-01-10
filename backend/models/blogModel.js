import { Schema, model } from "mongoose";

const blogPostSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            minLength: [5, 'Title must be atleast 5 characters'],
        },
        description: {
            type: String,
            trim: true,
            minLength: [10, 'Decription must be atleast 10 characters'],
        },
        blogContent: {
            type: String,
            trim: true,
            minLength: [30, 'Blog Content must be atleast 30 characters'],
        },
    },
    {
        timestamps: true,
    }
);

const Blogs = model('Blogs', blogPostSchema);

export default Blogs;
