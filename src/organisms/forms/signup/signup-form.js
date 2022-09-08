import React from 'react';
import './signup-form.scss';
import Button from '../../../atoms/button/button';
import InputField from '../../../atoms/input-field/input-field';
const SignUpForm = (props) => {
    const {
        className,
        ...otherProps
    } = props
    return (
        <div {...otherProps}
        className = {`forms card bg-dark text-white ${className}`}>
            <InputField type='text' placeholder='Username'></InputField>
            <InputField type='email' placeholder='Email'></InputField>
            <InputField type='password' placeholder='Password'></InputField>
            <InputField type='password' placeholder='Confirm Password'></InputField>
            <Button type='submit' buttonText='Submit' className="btn btn-secondary" />
        </div>
    );
};

export default SignUpForm;