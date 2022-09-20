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
        pattern,
        ...otherProps
    } = props
    const [inputValue, setInputValue] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const inputValidator = (e) => {
        return (e.target.value)? 
            (pattern)?
                pattern.test(e.target.value)? '' : 'Pattern err' 
            : ''
        : 'Required';
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
        const errorMessage = inputValidator(e);
        setErrorMsg(errorMessage);
        setFormInputState((previousFormState)=>{
            return {
                ...previousFormState, 
                [name] : {value : e.target.value,
                isValid : !errorMessage && !!e.target.value.trim()}
            }
        });
    }

    const onBlurHandler = (e) => {
        e.preventDefault();
        inputValidator(e);
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
            pattern = {pattern}
            onChangeHandler = {onChangeHandler}
            onBlurHandler = {onBlurHandler}
            />
            {errorMsg && <Text className='text-danger error-text' content = {errorMsg}/>}
            
        </div>
    );
};

export default InputFieldWrapper;