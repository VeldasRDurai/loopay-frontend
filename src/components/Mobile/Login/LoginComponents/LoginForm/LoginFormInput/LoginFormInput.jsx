import React from 'react';
import styled from 'styled-components';

const LoginFormInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: 'Montserrat Alternates', sans-serif;
    /* height:10vh; */
    /* width: 90vw; */
`;
const LoginFormInputLabelStyled = styled.label`
    font-size: 11px;
    font-weight: 900;
    margin-bottom: 5px;
`;
const LoginFormInputTagStyled = styled.input`
    height: 28px;
    width: 80vw;
    border-radius: 5px;
    border:1px solid #d0d4d7 ;
    box-sizing: border-box;
    background-color: #f0f4f7;
    padding-left: 10px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #999;
        font-weight: 500;
    }
`;

function LoginFormInput() {
    return <LoginFormInputStyled>
        <LoginFormInputLabelStyled>
            Enter your email
        </LoginFormInputLabelStyled>
        <LoginFormInputTagStyled type="text" placeholder='Username' />
    </LoginFormInputStyled>
}

export default LoginFormInput