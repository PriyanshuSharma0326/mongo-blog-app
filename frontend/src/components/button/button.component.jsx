import React from 'react';
import './button.style.scss';

const BUTTON_TYPE_CLASS = {
    blue: 'blue',
    inverted: 'inverted',
    simple: 'simple',
    icon: 'icon'
}

function Button({ buttonText, type, buttonType, ...otherProps }) {
    return (
        <button 
            className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`} 
            type={type} 
            {...otherProps} 
        >
            {buttonType !== 'icon' && buttonText}
        </button>
    )
}

export default Button;
