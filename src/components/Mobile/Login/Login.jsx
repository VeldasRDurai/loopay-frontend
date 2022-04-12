import React, { 
    useState
} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
    redirectToLoading,
    // redirectToPersonalDetails
} from '../../../reduxStore/authenticationPage/authenticationPageAction';
import { 
    REDIRECT_TO_FORGET_PASSWORD,
    REDIRECT_TO_FORGET_USERNAME
} from '../../../reduxStore/authenticationPage/authenticationPageTypes';


import Curtain from './LoginComponents/Curtain/Curtain';
import LoginForm from './LoginComponents/LoginForm/LoginForm';
import LoginButton from './LoginComponents/LoginButton/LoginButton';
import OrContinueWith from './LoginComponents/OrContinueWith/OrContinueWith';
// import GoogleSignin from './GoogleSignin/GoogleSignin';
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
    const [ raiseCurtain, setRaiseCurtain ] = useState(false);

    return(
        <LoginStyled>

            <Curtain 
                raiseCurtain={raiseCurtain}
                setRaiseCurtain={setRaiseCurtain} />

            <LoginForm />
            <LoginButton onClick={() => raiseCurtain ? 
                    dispatch(redirectToLoading()) : setRaiseCurtain(true)} />
            <OrContinueWith />
            {/* <GoogleSignin /> */}
            <div> Sign in with google </div>
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