import React from 'react';
const Button = (props) => {
    const {
        buttonText, id, className, type,
        ...otherProps
    } = props
    return (
        <button
            type = {type}
            id = {id}
            className = {`button-component ${className}`}
            {...otherProps}>
            {buttonText}
        </button>
    );
};

Button.defaultProps = {
    buttonText: "",
    type: ""
};

export default Button;