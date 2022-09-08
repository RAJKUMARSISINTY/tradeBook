import React from 'react';
import AuthTabSection from '../../stories/auth-tab-section/auth-tab-section';
import './auth-page.scss';

const AuthPage = (props) => {
    const {
        className,
        ...otherProps
    } = props
    return (
        <div {...otherProps}
        className = {`auth-page ${className}`}>
            <AuthTabSection/>
        </div>
    );
};

export default AuthPage;