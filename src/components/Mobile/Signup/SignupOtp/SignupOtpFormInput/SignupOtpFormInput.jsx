import React from 'react';
import styled, { css } from 'styled-components';
import shakeHorizontal from '../../../../../animation/shakeHorizontal';

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
    ${ ({showWarning}) => showWarning && css`
        animation: ${shakeHorizontal} 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
        color: red;
    `}
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
    ${ ({showWarning}) => showWarning && css`
        /* animation: ${shakeHorizontal} 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both; */
        background-color: #fcc;
    `}
    
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

const SignupOtpFormInput = ({ showWarning, setverificationCode }) => {
    const onChange = event => 
        setverificationCode( Number(event.target.value) );
    return <SignupOtpFormInputStyled>
        <SignupOtpFormInputLabelStyled
            showWarning={showWarning}>{
            showWarning ? 
                'Invalid Code':
                'Verification Code'
            }
        </SignupOtpFormInputLabelStyled>
        <SignupOtpFormInputTagStyled 
            type="Number" 
            placeholder='Enter your verification code'
            autoCapitalize='false'
            autoComplete='false'
            autoCorrect='false'
            spellCheck='false'
            onChange={onChange}
            showWarning={showWarning}
        />
    </SignupOtpFormInputStyled>
}

export default SignupOtpFormInput;