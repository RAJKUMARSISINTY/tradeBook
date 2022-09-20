import React, { useState } from 'react';
import Text from '../text/text';
import './text-area.scss';
const TextArea = (props) =>{
    const {
        cols, 
        rows, 
        name, 
        className,
        placeholder, 
        setFormInputState,
        setIsFormValid,
        ...otherProps
    } = props   
    const [inputValue, setInputValue] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const inputValidator = (e) => {
        (e.target.value)? 
            setErrorMsg('')
        : setErrorMsg('Required');
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
        inputValidator(e);
        setFormInputState((previousFormState)=>{
            return {
                ...previousFormState, 
                [name] : {value : e.target.value,
                isValid : !!e.target.value.trim()}
            }
        });
    }
    
    const onBlurHandler = (e) => {
        e.preventDefault();
        inputValidator(e);
    }
    return (
        <div>
            <textarea 
            rows = {rows} 
            cols = {cols} 
            name = {name}
            value = {inputValue}
            placeholder = {placeholder}
            className = {`text-area ${className}`}
            arialabel = {name}
            onChange = {onChangeHandler}
            onBlur = {onBlurHandler}
            {...otherProps}>
        </textarea>
        {errorMsg && <Text className='text-danger error-text' content = {errorMsg}/>}

        </div>
    );
};

TextArea.defaultProps = {
    arialabel : '',
    rows : '3'
};

export default TextArea;