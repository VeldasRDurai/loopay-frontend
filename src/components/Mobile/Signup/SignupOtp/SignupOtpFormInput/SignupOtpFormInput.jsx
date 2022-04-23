import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

import shakeHorizontal from '../../../../../animation/shakeHorizontal';

import { fetchAPIPost } from '../../../../../functions/fetchAPI'
import timeOut from '../../../../../functions/timeOut';
import secondToMinute from '../../../../../functions/secondToMinute'

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
const SignupOtpResend = styled.div`
    font-family: 'Orbitron', sans-serif;
    align-self: flex-end;
    font-size: 10px;
    margin-top: 2px;
    padding: 0 5px;
    ${({countdown}) => countdown === 0 &&
        css`
            font-weight: 900;
            color: black;
            background-color: aqua;
            border-radius: 2px;
            font-family: 'Montserrat Alternates', sans-serif;
    `}
`;

const SignupOtpFormInput = ({ showWarning, setverificationCode }) => {
    const { email }  = useSelector( state => state.profile )
    const [ countdown, setCountdown ] = useState( 10 );
    const onChange = event => 
        setverificationCode( Number(event.target.value) );
    const resendOtp = async () => {
        try{
            const response = await fetchAPIPost(
                `${process.env.REACT_APP_BACKEND_DEVELOPMENT_URL}/signup/resend`,
                    { email });
            console.log( response );
            const result = await response.json();
            console.log( result );
            if( response.ok ) setCountdown(10)
            else window.alert("Internal Server error");
        } catch (e){ 
            console.log(e); 
        }
    }
    const onClick = async () => 
        countdown === 0 && await resendOtp();
    useEffect( () => {
        const countdownFunction = async () => {
            await timeOut(1000);
            countdown !== 0 && setCountdown( countdown-1 );
        }
        countdownFunction();
    },[ countdown ]);
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
        <SignupOtpResend
            countdown={countdown} 
            onClick={onClick} >
            {countdown === 0 ? `Resend` : secondToMinute(countdown)}
        </SignupOtpResend>
    </SignupOtpFormInputStyled>
}

export default SignupOtpFormInput;