import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
    redirectToForgetPassword,
    redirectToForgetUsername,

    redirectToSignup,
    redirectToLoading,
    redirectToPersonalDetails
} from '../.././../reduxStore/authenticationPage/authenticationPageAction';

import { 
    REDIRECT_TO_FORGET_PASSWORD,
    REDIRECT_TO_FORGET_USERNAME
} from '../../../reduxStore/authenticationPage/authenticationPageTypes';

import ForgetPassword from './ForgetPassword/ForgetPassword';
import ForgotUsername from './ForgotUsername/ForgotUsername';
// import { redirectToLoading } from '../../../reduxStore/page/pageActions/mainpageAction';
// import { 
//     redirectToSignup,
//     // redirectToSignupPersonalDetails
// } from '../../../reduxStore/page/pageActions/signupAction';
// import { redirectToForgetPassword } from "../../../reduxStore/page/pageActions/loginAction";

// import ForgetPassword from './ForgetPassword/ForgetPassword';
// import { FORGET_PASSWORD } from '../../../reduxStore/page/pageTypes'

const LoginStyled = styled.div`
    background: linear-gradient(#575dee,white) ;
    height: 100%;
    width: 100%;
    background-color: greenyellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Login = () => {
    console.log('login');
    const dispatch = useDispatch();
    const { loginPageState } = useSelector( state => state.authenticationPage );
    const updatedDetails = true;
    return(
        <LoginStyled> 
            Login Page
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
            { 
                loginPageState === REDIRECT_TO_FORGET_PASSWORD ? <ForgetPassword /> :
                loginPageState === REDIRECT_TO_FORGET_USERNAME ? <ForgotUsername /> :
                undefined
            }
        </LoginStyled>
    );
}

export default Login