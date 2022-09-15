import React from 'react';
import './signup-form.scss';
import Form from '../../../molecules/form/form';
const SignUpForm = (props) => {
    const {
        className,
        ...otherProps
    } = props
    const signUpFormInputs = [
        {'type' : 'text', 'placeholder' : 'Name', 'name' : 'Name'},
        {'type' : 'email', 'placeholder' : 'Email', 'name' : 'Email'},
        {'type' : 'password', 'placeholder' : 'Password', 'name' : 'Password'},
        {'type' : 'password', 'placeholder' : 'Confirm Password', 'name' : 'Confirm Password'}
    ];
    const getFormData = (formData) =>{
        console.log('form login',formData);
    }
    return (
        <>
            <Form {...otherProps} 
                formInputs = {signUpFormInputs} 
                getFormData = {getFormData}
                buttonText = 'Submit'
            />
        </>
    );
};

export default SignUpForm;