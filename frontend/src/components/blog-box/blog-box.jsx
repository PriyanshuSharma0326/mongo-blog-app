import React from 'react';
import './blog-box.scss';

function BlogBox({ item }) {
    const date = new Date(item.createdAt);

    const goToBlogPage = () => {
        console.log(item._id);
    }

    return (
        <div className="blog-box" onClick={goToBlogPage}>
            <div className="blog-title">
                <h2>{item.title}</h2>
            </div>
            <div className="blog-description">
                <h2>{item.description}</h2>
            </div>
            <div className="blog-content">
                <h2>{item.blogContent}</h2>
            </div>
            <div className="blog-meta">
                <h2>Created at : <span>{date.toLocaleString()}</span></h2>
            </div>
        </div>
    )
}

export default BlogBox;
