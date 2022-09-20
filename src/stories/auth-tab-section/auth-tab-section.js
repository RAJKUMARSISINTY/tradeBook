import React, { useState } from 'react';
import LoginForm from '../../organisms/forms/login/login-form';
import SignUpForm from '../../organisms/forms/signup/signup-form';
import AuthTabList from '../../organisms/auth-tab-list/auth-tab-list';
import Newsletter from '../../organisms/forms/newsletter/newsletter';
import Text from '../../atoms/text/text';
import './auth-tab-section.scss';

const AuthTabSection = () => {
    const [authTabState, setAuthTabState] = useState('LoginForm');
    return (
        <>
            <div className='auth-tab-section'>
                <AuthTabList
                    authTabState = {authTabState}
                    setAuthTabState = {setAuthTabState}
                />
                {authTabState ==='LoginForm'? <LoginForm/>:<SignUpForm/>}
                <Text content='(or)'></Text>
                <Newsletter/>
            </div>
        </>
    );
};
export default AuthTabSection;