import React from 'react';
import './textarea.style.scss';

function TextArea({ labelText, inputOptions, errorText }) {
    return (
        <div className='form-group'>
            <textarea 
                className={`textarea ${inputOptions?.value?.length ? 'shrink' : ''}`}
                {...inputOptions} 
            />

            {labelText && 
                <label 
                    htmlFor={inputOptions.id} 
                    className={`form-input-label ${inputOptions?.value?.length ? 'shrink' : ''}`}
                >
                    {labelText}
                </label>
            }

            {errorText && <p className='error-text'>{errorText}</p>}
        </div>
    );
}

export default TextArea;
