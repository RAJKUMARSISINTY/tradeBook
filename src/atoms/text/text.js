import React from 'react';

const Text = ({content, className, varient, ...props}) => {    
    return (
        <span 
            className = {`${className}`}
            arialabel = {content}
            varient = {varient}
            {...props}>
            {content}
        </span>
    );
};

Text.defaultProps = {
    arialabel : ''
};

export default Text;