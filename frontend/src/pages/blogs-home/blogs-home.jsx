import React from 'react';
import './blogs-home.scss';
import BlogBox from '../../components/blog-box/blog-box';
import { useSelector } from 'react-redux';

function BlogsHome() {
    const blogs = useSelector((state) => state.blogs.blogs);

    return (
        <div className='blogs-home-container'>
            <h1>Find Blogs</h1>
            
            <div className="blogs-container">
                {blogs
                    .map((item) => {
                    return (
                        <BlogBox 
                            key={item._id} 
                            item={item} 
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default BlogsHome;
