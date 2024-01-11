import axios from "axios";
import qs from 'qs';

const createBlogHandler = async (inputs) => {
    try {
        const response = await axios.post(
            "http://localhost:5000/api/v1/blogs/write",
            qs.stringify(inputs),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return response;
    }
    catch(err) {
        return;
    }
}

const readAllBlogsHandler = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/blogs`);
        return response.data;
    } catch (error) {
        return error;
    }
}

const readSingleBlogHandler = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/blogs/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

const editBlogHandler = async (inputs, id) => {
    try {
        const response = await axios.put(
            `http://localhost:5000/api/v1/blogs/edit/${id}`,
            qs.stringify(inputs),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return response;
    }
    catch(err) {
        return err;
    }
}

const deleteBlogHandler = async (id) => {
    try {
        const response = await axios.delete(
            `http://localhost:5000/api/v1/blogs/delete/${id}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return response;
    }
    catch(err) {
        return err;
    }
}

export {
    createBlogHandler,
    readAllBlogsHandler,
    readSingleBlogHandler,
    editBlogHandler,
    deleteBlogHandler,
}
