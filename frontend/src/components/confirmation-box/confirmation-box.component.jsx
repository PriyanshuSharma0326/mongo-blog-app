import React, { useContext, useEffect, useRef } from 'react';
import './confirmation-box.style.scss';
import { ConfirmationBoxContext } from '../../context/confirmation-box-context';
import Button from '../button/button.component';
import { deleteBlogHandler } from '../../lib/utils/utils';

function useOutsideAlerter(ref) {
    const { setIsBoxOpen, setBlogIdToDelete } = useContext(ConfirmationBoxContext);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setBlogIdToDelete('');
                setIsBoxOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function ConfirmationBox() {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const { 
        setIsBoxOpen, 
        blogIdToDelete, 
        setBlogIdToDelete 
    } = useContext(ConfirmationBoxContext);

    const hideConfirmationBox = () => {
        setBlogIdToDelete('');
        setIsBoxOpen(false);
    }

    const handleDeleteBlogYesButton = async () => {
        const response = await deleteBlogHandler(blogIdToDelete);

        if(response.status === 200) {
            setIsBoxOpen(false);
            window.location.reload();
        }
        else {
            alert(response.data.message);
            return;
        }
    }

    return (
        <div className='confirmation-box-container'>
            <div className="confirmation-box" ref={wrapperRef}>
                <div className='text'>
                    <h1>Do you really want to delete this post?</h1>
                </div>

                <div className="buttons-container">
                    <Button 
                        type='button' 
                        buttonType='inverted' 
                        buttonText='No' 
                        onClick={hideConfirmationBox}
                    />

                    <Button 
                        type='button' 
                        buttonText='Yes' 
                        onClick={handleDeleteBlogYesButton} 
                    />
                </div>
            </div>
        </div>
    )
}

export default ConfirmationBox;
