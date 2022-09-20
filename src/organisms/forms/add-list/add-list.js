import React from 'react';
import Form from '../../../molecules/form/form';
const AddList = (props) => {
    const {
        className,
        ...otherProps
    } = props
    
    const addListInputs = [
        {'type' : 'text', 'name': 'addlist','placeholder' : 'Add Items to List','pattern':/e/ }
    ];

    const getFormData = (formData) =>{
        console.log('formdata',formData);  
    }
    return (
        <>
            <Form {...otherProps} formInputs = {addListInputs} buttonText = 'Add' getFormData = {getFormData}/>
        </>
    );
};

export default AddList;