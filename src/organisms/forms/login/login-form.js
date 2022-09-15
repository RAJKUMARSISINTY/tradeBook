import React from 'react';
import './login-form.scss';
import Form from '../../../molecules/form/form';
const LoginForm = (props) => {
    const {
        className,
        ...otherProps
    } = props
    
    const LoginFormInputs = [
        {'type' : 'email', 'name':'Email','placeholder' : 'Email' },
        {'type' : 'password','name':'Password', 'placeholder' : 'Password'}
    ];
    const getFormData = (formData) =>{
        console.log('form login',formData);
    }
    return (
        <>
            <Form {...otherProps} 
                formInputs = {LoginFormInputs} 
                buttonText = 'Submit'
                getFormData = {getFormData}
            />
        </>
    );
};

export default LoginForm;