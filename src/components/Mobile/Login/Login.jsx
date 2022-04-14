import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
    // redirectToLoading,
    // redirectToPersonalDetails
} from '../../../reduxStore/page/authenticationPage/authenticationPageAction';
import { loginRaiseCurtain } from '../../../reduxStore/loginState/loginStateAction';
import { 
    REDIRECT_TO_FORGET_PASSWORD,
    REDIRECT_TO_FORGET_USERNAME
} from '../../../reduxStore/page/authenticationPage/authenticationPageTypes';


import Curtain from './LoginComponents/Curtain/Curtain';
import LoginForm from './LoginComponents/LoginForm/LoginForm';
import LoginButton from './LoginButton/LoginButton';
import OrContinueWith from './LoginComponents/OrContinueWith/OrContinueWith';
import GoogleSignin from './GoogleSignin/GoogleSignin';
import TermsAndConditions from './LoginComponents/TermsAndConditions/TermsAndConditions';
import CreateAccount from './LoginComponents/CreateAccount/CreateAccount';

import ForgetPassword from './ForgetPassword/ForgetPassword';
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
    const { loginPageState } = useSelector( state => state.authenticationPage );
    const { 
        raiseCurtain,
        emailShowWarning,
        passwordShowWarning
    } = useSelector( state => state.loginState );

    const login = () => {
        console.log( 'LOGGING IN' );
        console.log( emailShowWarning, passwordShowWarning );
    }
    const onClick= () => !raiseCurtain ? 
        dispatch( loginRaiseCurtain() ) : login()
    return(
        <LoginStyled>
            <Curtain />
            <LoginForm />
            <LoginButton
                text={'Login with Email'}
                onClick={onClick} />
            <OrContinueWith />
            <GoogleSignin />
            {/* <div> Sign in with google </div> */}
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