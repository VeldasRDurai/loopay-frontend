import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {
    redirectToForgetPassword
} from '../../../../../../reduxStore/authenticationPage/authenticationPageAction';

import LoginFormPasswordTagStyled from './LoginFormPasswordTag/LoginFormPasswordTag';

const LoginFormPasswordStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const LoginFormPasswordLabelStyled = styled.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 11px;
    font-weight: 900;
    margin-bottom: 5px;
`;
const LoginFormForgotPassword = styled.div`
    align-self: flex-end ;
    font-size: 10px;
    margin-top: 2px;
    color: #999999;
`;

function LoginFormPassword() {
    const dispatch = useDispatch();

    return <LoginFormPasswordStyled>
        <LoginFormPasswordLabelStyled>
            Password
        </LoginFormPasswordLabelStyled>
        <LoginFormPasswordTagStyled />
        <LoginFormForgotPassword 
            onClick={()=> dispatch( redirectToForgetPassword() )} >
            forget password
        </LoginFormForgotPassword>
    </LoginFormPasswordStyled>
}

export default LoginFormPassword;