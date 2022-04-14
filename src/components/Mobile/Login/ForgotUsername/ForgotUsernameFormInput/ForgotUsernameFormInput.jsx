import React from 'react';
import styled from 'styled-components';

const SignupOtpFormInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 5vh;
`;
const SignupOtpFormInputLabelStyled = styled.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 11px;
    font-weight: 900;
    margin-bottom: 5px;
`;
const SignupOtpFormInputTagStyled = styled.input`
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

const SignupOtpFormInput = () => {

    return <SignupOtpFormInputStyled>
        <SignupOtpFormInputLabelStyled>
            Email
        </SignupOtpFormInputLabelStyled>
        <SignupOtpFormInputTagStyled 
            type="Number" 
            placeholder='Enter your Email address'
            autoCapitalize='false'
            autoComplete='false'
            autoCorrect='false'
            spellCheck='false'
        />
    </SignupOtpFormInputStyled>
}

export default SignupOtpFormInput;