import React from 'react';

const Title = ({content, className, varient, ...props}) => {    
    return (
        <h3 
            className = {`${className}`}
            arialabel = {content}
            varient = {varient}
            {...props}>
            {content}
        </h3>
    );
};

Title.defaultProps = {
    arialabel : ''
};

export default Title;