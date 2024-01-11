import React, { useEffect, useState } from 'react';
import './blog-page.style.scss';
import { useParams } from 'react-router-dom';
import { readSingleBlogHandler } from '../../lib/utils/utils';

function BlogPage() {
    const param = useParams();

    const [blog, setBlog] = useState({});

    const getBlog = async () => {
        const response = await readSingleBlogHandler(param.id);

        if(response.success) {
            setBlog(response.data);
        }
        else {
            alert(response.message);
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
