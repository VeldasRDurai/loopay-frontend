import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import shakeHorizontal from '../../../../../animation/shakeHorizontal';

import { 
    loginForgotPasswordUpdateEmail,
    loginForgotPasswordShowWarning,
    loginForgotPasswordNoWarning 
} from '../../../../../reduxStore/loginState/forgotPasswordState/forgotPasswordStateAction';
import { emailValidation } from '../../../../../functions/formValidation';

const LoginPasswordFormInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 5vh;
`;
const LoginPasswordFormInputLabelStyled = styled.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 11px;
    font-weight: 900;
    margin-bottom: 5px;
    ${ ({emailShowWarning}) => emailShowWarning && css`
        animation: ${shakeHorizontal} 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
        color: red;
    `}
`;
const LoginPasswordFormInputTagStyled = styled.input`
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
    ${({emailShowWarning}) => emailShowWarning && css`
        border: 1px solid red;
        background-color: #fcc;`
    }
`;

const ForgotPasswordFormInput = () => {
    const dispatch = useDispatch();
    const [ bluredOneTime, setBluredOneTime ] = useState(false);
    const { 
        forgotPasswordEmail, 
        forgotPasswordEmailShowWarning 
    } = useSelector( state => state.forgotPasswordState )
    const validation = ( email ) => 
        emailValidation( email ) ? 
            dispatch( loginForgotPasswordNoWarning() ):
            dispatch( loginForgotPasswordShowWarning() );

    const onBlur = () => {
        !bluredOneTime && setBluredOneTime(true);
        validation(forgotPasswordEmail);
    }
    const onChange = event => {
        dispatch( loginForgotPasswordUpdateEmail({
            email: event.target.value.trim()
        }) );
        bluredOneTime && validation( event.target.value.trim() );
    }
    return <LoginPasswordFormInputStyled>
        <LoginPasswordFormInputLabelStyled 
            emailShowWarning={forgotPasswordEmailShowWarning} > {
                forgotPasswordEmailShowWarning ? 
                    'Invalid mail address' : 'Email'
            }
        </LoginPasswordFormInputLabelStyled>
        <LoginPasswordFormInputTagStyled 
            type="email" 
            placeholder='Enter your email'
            autoCapitalize='false'
            autoComplete='false'
            autoCorrect='false'
            spellCheck='false'
            onChange={onChange}
            onBlur={onBlur}
            emailShowWarning={forgotPasswordEmailShowWarning}
        />
    </LoginPasswordFormInputStyled>
}

export default ForgotPasswordFormInput;