import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { 
    REDIRECT_TO_FORGET_PASSWORD,
    REDIRECT_TO_FORGET_USERNAME
} from '../../../reduxStore/page/authenticationPage/authenticationPageTypes';
import { LOGIN_PASSWORD_STRONG, LOGIN_PASSWORD_MEDIUM } from '../../../reduxStore/loginState/loginStateTypes'
import { 
    loginRaiseCurtain,
    loginInitial
} from '../../../reduxStore/loginState/loginStateAction';

import Curtain from './LoginComponents/Curtain/Curtain';
import LoginForm from './LoginComponents/LoginForm/LoginForm';
import LoginButton from './LoginButton/LoginButton';
import OrContinueWith from './LoginComponents/OrContinueWith/OrContinueWith';
import GoogleSignin from './GoogleSignin/GoogleSignin';
import TermsAndConditions from './LoginComponents/TermsAndConditions/TermsAndConditions';
import CreateAccount from './LoginComponents/CreateAccount/CreateAccount';

import ForgetPassword from './ForgotPassword/ForgotPassword';
import ForgotUsername from './ForgotUsername/ForgotUsername';

const LoginStyled = styled.div`
    z-index: 10;

    height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const Login = () => {
    console.log('login');
    const dispatch = useDispatch();
    useEffect( () => {
        return () => dispatch( loginInitial() );
    }, []);
    const { loginPageState } = useSelector( state => state.authenticationPage );
    const { 
        raiseCurtain,
        email,
        emailShowWarning,
        passwordShowWarning,
    } = useSelector( state => state.loginState );

    const login = () => {
        console.log( 'LOGGING IN' );
        console.log( email, emailShowWarning, passwordShowWarning );
        
        dispatch( loginInitial() );
    }
    const onClick= () => !raiseCurtain ? 
        dispatch( loginRaiseCurtain() ) : login()

    return(
        <LoginStyled>
            <Curtain />
            <LoginForm />
            <LoginButton onClick={onClick} 
                text={'Login with Email'}
                disabled={
                    raiseCurtain && ( !email ||  emailShowWarning ||
                        !( passwordShowWarning === LOGIN_PASSWORD_STRONG ||
                            passwordShowWarning === LOGIN_PASSWORD_MEDIUM ))
                } />
            <OrContinueWith />
            <GoogleSignin />
            <div></div>
            <TermsAndConditions />
            <CreateAccount />
            { 
                loginPageState === REDIRECT_TO_FORGET_PASSWORD ? <ForgetPassword /> :
                loginPageState === REDIRECT_TO_FORGET_USERNAME ? <ForgotUsername /> :
                undefined
            }
        </LoginStyled>
    );
}

export default Login;