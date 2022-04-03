import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { redirectToLoading } from '../../../reduxStore/page/pageActions/mainpageAction';
import { redirectToSignup } from '../../../reduxStore/page/pageActions/signupAction';
import { redirectToForgetPassword } from "../../../reduxStore/page/pageActions/loginAction";

import ForgetPassword from './ForgetPassword/ForgetPassword';
import { FORGET_PASSWORD } from '../../../reduxStore/page/pageTypes'

const LoginStyled = styled.div`
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
    const { loginPageStat } = useSelector( state => state.page )
    return(
        <LoginStyled> 
            Login Page
            <input type="text" placeholder='username' />
            <div> username warnings </div>
            <input type="password" placeholder='password' />
            <div> password warnings </div>
            <div onClick={()=> dispatch( redirectToLoading() )} > 
                Log in
            </div>
            <div onClick={ () => dispatch( redirectToForgetPassword() )} > 
                forget password 
            </div>
            <div onClick={() => dispatch( redirectToSignup() )} >
                Sign Up 
            </div>
            { loginPageStat === FORGET_PASSWORD && <ForgetPassword /> }
        </LoginStyled>
    );
}

export default Login