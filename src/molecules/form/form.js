import React, { useEffect, useState } from 'react';
import Button from '../../atoms/button/button';
import DropdownList from '../../atoms/dropdown/dropdown';
import TextArea from '../../atoms/text-area/text-area';
import InputFieldWrapper from '../input-field-wrapper/input-field-wrapper';
import './form.scss';
const Form = (props) => {
    const {
        className,
        formInputs,
        buttonText,
        getFormData,
        clearBtnText,
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
    const [validForm, setValidForm] = useState(false);
    useEffect(()=>{
        let isValid = true;
        for(const i of Object.values(formInputState)){ 
            isValid = isValid && i.isValid;
        }
        console.log('valid:',isValid);
        isValid?setValidForm(true):setValidForm(false);
    },[formInputState]);

    const onSubmit = (e)=>{
        e.preventDefault();
        const formDataJson = [];
        for(const [key,value] of Object.entries(formInputState)){ 
            formDataJson[key]=value.value;
        }
        getFormData(formDataJson);
    }

    return (
        <div {...otherProps}
        className = {`forms card bg-dark text-white ${className}`}>
            <form onSubmit={onSubmit}>
                {formInputs && formInputs.map(input => {
                    switch(input.type) {
                        case 'dropdown': return (
                            input.name && <DropdownList 
                                key = {input.name}
                                name = {input.name}
                                placeholder = {input.placeholder}
                                listOptions = {input.listOptions}
                                setFormInputState = {setFormInputState}/>
                        )

                        case 'textarea': return (
                            input.name && <TextArea 
                                key = {input.name}
                                name = {input.name}
                                placeholder = {input.placeholder}
                                setFormInputState = {setFormInputState}/>

                        )
                        default : return (
                            input.name && <InputFieldWrapper 
                                key={input.name}
                                type = {input.type}
                                placeholder = {input.placeholder}
                                label = {input.label}
                                className = {input.className}
                                name = {input.name}
                                id = {input.id}
                                pattern = {input.pattern}
                                setFormInputState = {setFormInputState}
                            />
                        )
                    }})}
                {buttonText && <Button 
                    type='submit' 
                    buttonText= {buttonText} 
                    className="btn btn-secondary"
                    isValid = {validForm}
                />}
                {clearBtnText && <Button 
                    type='button' 
                    buttonText= {clearBtnText} 
                    className="btn btn-secondary"
                />}
            </form>
        </div>
    );
};

export default Form;