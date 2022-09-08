import React from 'react';
import Anchor from '../../atoms/anchor/anchor';
import Text from '../../atoms/text/text';
import './auth-tab-list.scss';

const AuthTabList = ({authTabState, setAuthTabState}) => {
    const handleLoginLinkClick = () => {
        setAuthTabState('LoginForm');
    };
    const handleSignUpLinkClick = () => {
        setAuthTabState('SignUpForm');
    };
    return (
        <div>
            <ul className="auth-tab-list">
                {<Anchor
                    className={authTabState === 'LoginForm' ? 'active' : ''}
                    onClick={handleLoginLinkClick}
                >
                    <Text content = 'Login'/>
                </Anchor>}

                {<Anchor
                    className={authTabState === 'SignUpForm' ? 'active' : ''}
                    onClick={handleSignUpLinkClick}
                >
                    <Text content = 'SignUp'/>
                </Anchor>}
            </ul>
        </div>
    );
};
export default AuthTabList;