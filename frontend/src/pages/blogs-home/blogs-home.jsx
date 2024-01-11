import React, { useContext } from 'react';
import './blogs-home.scss';
import BlogBox from '../../components/blog-box/blog-box';
import { useSelector } from 'react-redux';
import { ConfirmationBoxContext } from '../../context/confirmation-box-context';
import ConfirmationBox from '../../components/confirmation-box/confirmation-box.component';

function BlogsHome() {
    const blogs = useSelector((state) => state.blogs.blogs);
    const { isBoxOpen } = useContext(ConfirmationBoxContext);

    return (
        <div className='blogs-home-container'>
            {isBoxOpen &&  <ConfirmationBox />}

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
