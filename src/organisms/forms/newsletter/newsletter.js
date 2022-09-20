import React from 'react';
import Title from '../../../atoms/title/title';
import Form from '../../../molecules/form/form';
const Newsletter = (props) => {
    const {
        className,
        ...otherProps
    } = props
    
    const newsletterInputs = [
        {'type' : 'email', 'name': 'Email','placeholder' : 'Email' }
    ];

    const getFormData = (formData) =>{
        console.log('form news',formData);
    }
    return (
        <>
            <Title content='Subscribe to our Newsletter'></Title>
            <Form {...otherProps} formInputs = {newsletterInputs} buttonText = 'Subscribe' getFormData = {getFormData}/>
        </>
    );
};

export default Newsletter;