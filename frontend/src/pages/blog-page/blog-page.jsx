import React, { useEffect, useState } from 'react';
import './blog-page.style.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogPage() {
    const param = useParams();

    const [blog, setBlog] = useState({});

    const getBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/blogs/${param.id}`);
            setBlog(response.data.data);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        getBlog();
    }, [param]);

    return (
        <div className='blog-page-container'>
            <h1 className="blog-title">{blog?.title}</h1>
        </div>
    )
}

export default BlogPage;
