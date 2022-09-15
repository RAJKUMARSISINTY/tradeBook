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
        ...otherProps
    } = props

    const [inputValue, setInputValue] = useState('');
    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
        setFormInputState((previousFormState)=>{
            return {
                ...previousFormState, 
                [name] : {value : e.target.value,
                isValid : !!e.target.value.trim()}
            }
        });
    }
    return (
        <input
            type = {type}
            id = {id}
            placeholder = {placeholder}
            name = {name}
            value = {inputValue}
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