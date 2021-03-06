import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { emailValidation } from '../../../../../../functions/formValidation';
import shakeHorizontal from '../../../../../../animation/shakeHorizontal';
import { 
    loginUpdateEmail,
    loginEmailShowWarning,
    loginEmailNoWarning
} from '../../../../../../reduxStore/loginState/loginStateAction';

const SignupFormInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const SignupFormInputLabelStyled = styled.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 11px;
    font-weight: 900;
    margin-bottom: 5px;
    ${ ({emailShowWarning}) => emailShowWarning && css`
        animation: ${shakeHorizontal} 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
        color: red;
    `}
`;
const SignupFormInputTagStyled = styled.input`
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

const SignupFormInput = () => {
    const dispatch = useDispatch();
    const [ bluredOneTime, setBluredOneTime ] = useState(false);
    const { email, emailShowWarning } = useSelector( state => state.loginState )
    const validation = (email) => 
        emailValidation( email ) ? 
            dispatch( loginEmailNoWarning() ):
            dispatch( loginEmailShowWarning() );

    const onBlur = () => {
        !bluredOneTime && setBluredOneTime(true);
        validation(email);
    }
    const onChange = event => {
        dispatch( loginUpdateEmail({
            email: event.target.value.trim().toLowerCase()
        }) );
        bluredOneTime && validation( event.target.value.trim().toLowerCase() );
    }

    return <SignupFormInputStyled>
        <SignupFormInputLabelStyled
            emailShowWarning={emailShowWarning} > {
                emailShowWarning ? 
                    'Invalid mail address' : 'Email'
            }
        </SignupFormInputLabelStyled>
        <SignupFormInputTagStyled 
            type="email" 
            placeholder='Enter your email'
            autoCapitalize='false'
            autoComplete='false'
            autoCorrect='false'
            spellCheck='false'
            onChange={onChange}
            onBlur={onBlur}
            emailShowWarning={emailShowWarning}
        />
    </SignupFormInputStyled>
}

export default SignupFormInput;