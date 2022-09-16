import React, { useState } from 'react';
import InputField from '../../atoms/input-field/input-field';
import Text from '../../atoms/text/text';
import './input-field-wrapper.scss';
const InputFieldWrapper = (props) => {
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
        <div {...otherProps}
        className = {`input-field-wrapper ${className}`}>
            <InputField
            type = {type}
            id = {id}
            placeholder = {placeholder}
            name = {name}
            inputValue = {inputValue}
            onChangeHandler = {onChangeHandler}
            />
            
        </div>
    );
};

export default InputFieldWrapper;