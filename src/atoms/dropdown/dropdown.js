import React, { useState } from 'react';
import Text from '../text/text';
import './dropdown.scss';
const DropdownList = (props) =>{
    const {
        cols, 
        rows, 
        name, 
        className,
        placeholder, 
        listOptions,
        setFormInputState,
        setIsFormValid,
        ...otherProps
    } = props   
    const [inputValue, setInputValue] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    console.log('list',listOptions);
    
    const inputValidator = (e) => {
        (e.target.value && e.target.value !== 'null')? 
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
                isValid : (e.target.value === 'null') ? false : !!e.target.value.trim()}
            }
        });
    }
    
    const onBlurHandler = (e) => {
        e.preventDefault();
        inputValidator(e);
    }
    return (
        <div>
            <select 
            value = {inputValue}
            placeholder = {placeholder}
            className = {`dropdown ${className}`}
            arialabel = {name}
            onChange = {onChangeHandler}
            onBlur = {onBlurHandler}
            {...otherProps}>
                            <option value='null'>{placeholder}</option>
                            {listOptions && listOptions.map(input => 
                                <option key = {input.value} value={input.value}>{input.name}</option>)
                            }
        </select>
        {errorMsg && <Text className='text-danger error-text' content = {errorMsg}/>}

        </div>
    );
};

DropdownList.defaultProps = {
    arialabel : ''
};

export default DropdownList;