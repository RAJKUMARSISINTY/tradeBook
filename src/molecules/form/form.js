import React, { useState } from 'react';
import Button from '../../atoms/button/button';
import InputField from '../../atoms/input-field/input-field';
import InputFieldWrapper from '../input-field-wrapper/input-field-wrapper';
import './form.scss';
const Form = (props) => {
    const {
        className,
        formInputs,
        buttonText,
        getFormData,
        ...otherProps
    } = props
const initialState = {};
for(const inp of formInputs){
    initialState[inp.name]={
        value:'',
        isValid: false
    };
}
    const [formInputState, setFormInputState] = useState(initialState);
    const onSubmit = (e)=>{
        e.preventDefault();
        getFormData(formInputState);
        let isValid = true;
        for(const i of Object.values(formInputState)){ 
            isValid = isValid && i.isValid;
        }
        console.log('valid:',isValid);
    }

    return (
        <div {...otherProps}
        className = {`forms card bg-dark text-white ${className}`}>
            <form onSubmit={onSubmit}>
                {formInputs.map(item => (
                    item.name && <InputFieldWrapper 
                        key={item.value}
                        type = {item.type}
                        placeholder = {item.placeholder}
                        label = {item.label}
                        className = {item.className}
                        name = {item.name}
                        id = {item.id}
                        setFormInputState = {setFormInputState}
                    />
                ))}
                <Button 
                    type='submit' 
                    buttonText= {buttonText} 
                    className="btn btn-secondary"
                />
            </form>
        </div>
    );
};

export default Form;