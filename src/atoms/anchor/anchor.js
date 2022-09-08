import React from 'react';

const Anchor = ({href, target, id, varient, children,className, ...props}) => {    
    return (
        <a 
            href = {href}
            target = {target}
            id = {id}
            varient = {varient}
            className = {`${className}`}
            {...props}>
            {children}
        </a>
    );
};

Anchor.defaultProps = {
    href : '#',
    target : '_self',
    id : ''
};

export default Anchor;