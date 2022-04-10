import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
    redirectToForgetPassword,
    redirectToForgetUsername,
    redirectToSignup,
    redirectToLoading,
    redirectToPersonalDetails
} from '../../../reduxStore/authenticationPage/authenticationPageAction';
import { 
    REDIRECT_TO_FORGET_PASSWORD,
    REDIRECT_TO_FORGET_USERNAME
} from '../../../reduxStore/authenticationPage/authenticationPageTypes';

import Curtain from './LoginComponents/Curtain/Curtain';
import LoginForm from './LoginComponents/LoginForm/LoginForm';

import ForgetPassword from './ForgetPassword/ForgetPassword';
import ForgotUsername from './ForgotUsername/ForgotUsername';

const LoginStyled = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const Login = () => {
    console.log('login');
    const dispatch = useDispatch();
    const { loginPageState } = useSelector( state => state.authenticationPage );
    const updatedDetails = true;
    return(
        <LoginStyled>
            <Curtain />
            <LoginForm />
            <input type="text" />
            <div style={{
                display: 'none'
            }} >

                <input type="text" placeholder='username' />
                <div> username warnings </div>
                <input type="password" placeholder='password' />
                <div> password warnings </div>
                <div onClick={()=> updatedDetails ?
                    dispatch( redirectToLoading() ): 
                    dispatch( redirectToPersonalDetails() ) } > 
                    Log in
                </div>
                <div onClick={ () => dispatch( redirectToForgetPassword() )} > 
                    forget password 
                </div>
                <div onClick={ () => dispatch( redirectToForgetUsername() )} > 
                    forget username 
                </div>
                <div onClick={() => dispatch( redirectToSignup() )} >
                    Sign Up 
                </div>
            </div>
            { 
                loginPageState === REDIRECT_TO_FORGET_PASSWORD ? <ForgetPassword /> :
                loginPageState === REDIRECT_TO_FORGET_USERNAME ? <ForgotUsername /> :
                undefined
            }
        </LoginStyled>
    );
}

export default Login