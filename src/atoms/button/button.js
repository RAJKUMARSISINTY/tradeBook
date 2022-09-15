import React from 'react';
const Button = (props) => {
    const {
        buttonText, 
        id, 
        className, 
        type,
        isValid,
        ...otherProps
    } = props
    return (
        <button
            type = {type}
            id = {id}
            className = {`button-component ${className}`}
            disabled = {!isValid}
            {...otherProps}>
            {buttonText}
        </button>
    );
};

Button.defaultProps = {
    buttonText: "",
    type: "",
    isValid: true
};

export default Button;