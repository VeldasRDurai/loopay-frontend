import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {
    redirectToForgetUsername
} from '../../../../../../reduxStore/authenticationPage/authenticationPageAction';


const LoginFormInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const LoginFormInputLabelStyled = styled.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 11px;
    font-weight: 900;
    margin-bottom: 5px;
`;
const LoginFormInputTagStyled = styled.input`
    height: 28px;
    width: 80vw;
    padding-left: 10px;
    border-radius: 5px;
    border:1px solid #d0d4d7 ;
    box-sizing: border-box;

    color:black;
    background-color: #f0f4f7;
    
    font-weight: 400;
    font-size: 11px;
    font-family: 'Montserrat Alternates', sans-serif;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #999;
        font-weight: 500;
        font-size: 11px;
        font-family: 'Montserrat Alternates', sans-serif;
    }
    &::selection{
        color:#f0f4f7;
        background-color:black;
        border-radius: 2px;
    }
`;
const LoginFormForgotUsername = styled.div`
    align-self: flex-end ;
    font-size: 10px;
    margin-top: 2px;
    color: #999999;
`;

function LoginFormInput() {

    const dispatch = useDispatch();

    return <LoginFormInputStyled>
        <LoginFormInputLabelStyled>
            Username
        </LoginFormInputLabelStyled>
        <LoginFormInputTagStyled 
            type="text" 
            placeholder='Enter your username'
            autoCapitalize='false'
            autoComplete='false'
            autoCorrect='false'
            spellCheck='false'
        />
        <LoginFormForgotUsername
            onClick={()=> dispatch( redirectToForgetUsername() )} >
            forget username
        </LoginFormForgotUsername>
    </LoginFormInputStyled>
}

export default LoginFormInput