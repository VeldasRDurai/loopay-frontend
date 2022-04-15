import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { IoInformationCircleSharp } from "react-icons/io5";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import {
    redirectToForgetPassword
} from '../../../../../../reduxStore/page/authenticationPage/authenticationPageAction';
import {
    LOGIN_PASSWORD_ZERO_LENGTH,
    LOGIN_PASSWORD_LESS_LENGTH,
    LOGIN_PASSWORD_WEAK,
    LOGIN_PASSWORD_MEDIUM,
    LOGIN_PASSWORD_STRONG
} from '../../../../../../reduxStore/loginState/loginStateTypes';
import LoginFormPasswordTagStyled from './LoginFormPasswordTag/LoginFormPasswordTag';

import {shakeHorizontal} from '../../../../../../animation/shakeHorizontal';

import tooltipContent from './tooltipContent';

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
    ${({passwordShowWarning}) => 
        ( passwordShowWarning === LOGIN_PASSWORD_ZERO_LENGTH || 
        passwordShowWarning === LOGIN_PASSWORD_LESS_LENGTH ||
        passwordShowWarning === LOGIN_PASSWORD_WEAK ) ? 
            css`color:red; 
                animation: ${shakeHorizontal} 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;`: 
        passwordShowWarning === LOGIN_PASSWORD_MEDIUM ? 
            css`color:blue;`: 
        passwordShowWarning === LOGIN_PASSWORD_STRONG ? 
            css`color:green;`: 
            css`color:black;`
    }
`;
const LoginFormForgotPassword = styled.div`
    align-self: flex-end ;
    font-size: 10px;
    margin-top: 2px;
    color: #999999;
`;

function LoginFormPassword() {
    const dispatch = useDispatch();
    const { passwordShowWarning } = useSelector( state => state.loginState ); 
    const onClick = () => 
        dispatch( redirectToForgetPassword() );
    const content = () => 
        passwordShowWarning === LOGIN_PASSWORD_ZERO_LENGTH ? 
            `Enter the password`:
        passwordShowWarning === LOGIN_PASSWORD_LESS_LENGTH ? 
            `Password is too short`:
        passwordShowWarning === LOGIN_PASSWORD_WEAK ? 
            `Weak password`:
        passwordShowWarning === LOGIN_PASSWORD_MEDIUM ? 
            `Medium password`:
        passwordShowWarning === LOGIN_PASSWORD_STRONG ? 
            `Strong password`: `Password`
            
    return <LoginFormPasswordStyled>
        <Tippy
            content={tooltipContent(passwordShowWarning)} 
            placement='top-end'
            arrow={true}
            animation='scale'
            allowHTML={true}
            theme='light' >
            <LoginFormPasswordLabelStyled 
                passwordShowWarning={passwordShowWarning} >{
                content()
            }
            <IoInformationCircleSharp />
            </LoginFormPasswordLabelStyled>
        </Tippy>
        <LoginFormPasswordTagStyled />

        <LoginFormForgotPassword 
            onClick={onClick} >
            forget password
        </LoginFormForgotPassword>

    </LoginFormPasswordStyled>
}

export default LoginFormPassword;