import React from 'react';
import './login-form.scss';
import Button from '../../../atoms/button/button';
import InputField from '../../../atoms/input-field/input-field';
const LoginForm = (props) => {
    const {
        className,
        ...otherProps
    } = props
    return (
        <div {...otherProps}
        className = {`forms card bg-dark text-white ${className}`}>
            <InputField type='email' placeholder='Email'></InputField>
            <InputField type='password' placeholder='Password'></InputField>
            <Button type='submit' buttonText='Submit' className="btn btn-secondary" />
        </div>
    );
};

export default LoginForm;