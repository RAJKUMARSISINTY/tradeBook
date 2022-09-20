import React, { useState } from 'react';
import './input-field.scss';
const InputField = (props) => {
    const {
        className,
        type,
        id,
        placeholder,
        name,
        ariaLabel,
        setFormInputState,
        setIsFormValid,
        inputValue,
        onChangeHandler,
        onBlurHandler,
        ...otherProps
    } = props

    return (
        <input
            type = {type}
            id = {id}
            placeholder = {placeholder}
            name = {name}
            value = {inputValue}
            onBlur ={onBlurHandler}
            onChange = {onChangeHandler}
            className = {`inputfield-component form-control ${className}`}
            {...otherProps}>
        </input>
    );
};

InputField.defaultProps = {
    type: "text",
    placeholder: "",
    ariaLabel: "input field"
};

export default InputField;