import React, { useState } from 'react';
import LoginForm from '../../organisms/forms/login/login-form';
import SignUpForm from '../../organisms/forms/signup/signup-form';
import AuthTabList from '../../organisms/auth-tab-list/auth-tab-list';
import Newsletter from '../../organisms/forms/newsletter/newsletter';

const AuthTabSection = () => {
    const [authTabState, setAuthTabState] = useState('LoginForm');
    return (
        <div>
            <Newsletter/>
            <div className='auth-tab-section'>
            <AuthTabList
                authTabState = {authTabState}
                setAuthTabState = {setAuthTabState}
            />
            <div>
                {authTabState ==='LoginForm'?
                <LoginForm/>
            :
            <SignUpForm/>}
            </div>
        </div>
        </div>
            
    );
};
export default AuthTabSection;