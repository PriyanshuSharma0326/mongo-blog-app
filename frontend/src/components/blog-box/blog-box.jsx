import React, { useContext } from 'react';
import './blog-box.scss';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ConfirmationBoxContext } from '../../context/confirmation-box-context';

function BlogBox({ item }) {
    const navigate = useNavigate();
    const date = new Date(item.createdAt);
    const { setIsBoxOpen, setBlogIdToDelete } = useContext(ConfirmationBoxContext);

    const goToBlogPage = () => {
        navigate(`/blogs/${item._id}`);
    }

    const goToBlogEditPage = () => {
        navigate(`/blogs/edit/${item._id}`);
    }

    const deleteBlogConfirmationOpen = () => {
        setBlogIdToDelete(item._id);
        setIsBoxOpen(true);
    }

    return (
        <div className="blog-box">
            <div className="blog-title" onClick={goToBlogPage}>
                <h2>{item.title}</h2>
            </div>
            <div className="blog-description">
                <h2>{item.description}</h2>
            </div>
            <div className="blog-content">
                <h2>{item.blogContent}</h2>
            </div>
            <div className="blog-meta">
                <div className="blog-controls">
                    <EditIcon 
                        onClick={goToBlogEditPage}
                    />
                    <DeleteIcon 
                        onClick={deleteBlogConfirmationOpen}
                    />
                </div>
                <h2>Created at : <span>{date.toLocaleString()}</span></h2>
            </div>
        </div>
    )
}

export default BlogBox;
