import React, { useState } from 'react';
import LoginForm from '../../organisms/forms/login/login-form';
import SignUpForm from '../../organisms/forms/signup/signup-form';
import AuthTabList from '../../organisms/auth-tab-list/auth-tab-list';
// import {BrowserRouter as useLocation} from 'react-router-dom';

const AuthTabSection = () => {
    const [authTabState, setAuthTabState] = useState('LoginForm');
    // let browserLocation = useLocation();
    // switch(browserLocation.pathname){
    //     case 'auth/signup' : setAuthTabState('SignUpForm'); break;
    //     default : setAuthTabState('LoginForm'); break;
    // }
    return (
        <div className='auth-tab-section card bg-dark text-white'>
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
            
    );
};
export default AuthTabSection;