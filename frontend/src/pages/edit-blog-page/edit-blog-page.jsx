import React, { useEffect, useState } from 'react';
import './edit-blog-page.style.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import TextArea from '../../components/textarea/textarea';

import axios from 'axios';
import qs from 'qs';

function EditBlogPage() {
    const param = useParams();

    const blogs = useSelector((state) => state.blogs.blogs);

    const defaultFormFields = {
        title: '',
        description: '',
        blogContent: '',
    };

    const defaultFormErrors = {
        title: '',
        description: '',
        blogContent: '',
    };

    const navigate = useNavigate();

    const [formInputs, setFormInputs] = useState(defaultFormFields);

    const [formErrors, setFormErrors] = useState(defaultFormErrors);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormInputs({...formInputs, [name]: value});
    }
    
    useEffect(() => {
        let blog = blogs.find((item) => item._id === param.id);
        setFormInputs({
            title: blog.title,
            description: blog.description,
            blogContent: blog.blogContent
        });
    }, [param, blogs]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        if(!formInputs.title.trim()) {
            validationErrors.title = 'Title is required';
        } else if(formInputs.title.trim().length < 5) {
            validationErrors.title = 'Min 5 characters';
        }

        if(!formInputs.description.trim()) {
            validationErrors.description = 'Description is required';
        } else if(formInputs.description.trim().length < 10) {
            validationErrors.description = 'Min 10 characters';
        }

        if(!formInputs.blogContent.trim()) {
            validationErrors.blogContent = 'Please add blog content';
        } else if(formInputs.blogContent.trim().length < 30) {
            validationErrors.blogContent = 'Min 30 characters';
        }

        if(Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
            return;
        }

        if(Object.keys(validationErrors).length === 0) {
            setFormErrors(defaultFormErrors);
            try {
                const response = await axios.put(
                    `http://localhost:5000/api/v1/blogs/edit/${param.id}`,
                    qs.stringify(formInputs),
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                );
                if(response.status === 200) {
                    alert(response.data.message);
                    navigate('/blogs')
                }
                else {
                    validationErrors.blogContent = response.data.message;
                    setFormErrors(validationErrors);
                    return;
                }
            }
            catch(err) {
                return;
            }
        }
    }

    return (
        <div className='edit-blog-page-container'>
            <div className='blog-edit-form-container'>
                <h2>Edit Blog Post</h2>

                <form onSubmit={submitHandler}>
                    <FormInput 
                        labelText='Title' 
                        errorText={formErrors.title} 
                        inputOptions={{
                            type: 'text',
                            required: true,
                            id: 'title',
                            name: 'title',
                            onChange: changeHandler,
                            value: formInputs.title
                        }}
                    />

                    <FormInput 
                        labelText='Description' 
                        errorText={formErrors.description} 
                        inputOptions={{
                            type: 'text',
                            required: true,
                            id: 'description',
                            name: 'description',
                            onChange: changeHandler,
                            value: formInputs.description
                        }}
                    />

                    <TextArea 
                        labelText='Blog Content' 
                        errorText={formErrors.blogContent} 
                        inputOptions={{
                            rows: 1,
                            required: true,
                            id: 'blogContent',
                            name: 'blogContent',
                            onChange: changeHandler,
                            value: formInputs.blogContent
                        }}
                    />

                    <Button 
                        buttonType='submit' 
                        buttonText='Post' 
                        onClick={submitHandler}
                    />
                </form>
            </div>
        </div>
    )
}

export default EditBlogPage;