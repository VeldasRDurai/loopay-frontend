import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {
    NEW_PASSWORD_ZERO_LENGTH,
    NEW_PASSWORD_LESS_LENGTH,
    NEW_PASSWORD_MEDIUM,
    NEW_PASSWORD_STRONG,
    NEW_PASSWORD_WEAK,
} from '../../../../../../../reduxStore/loginState/newPasswordState/newPasswordStateTypes';
import NewPasswordFormTagStyled from './NewPasswordFormTag/NewPasswordFormTag';

import shakeHorizontal from '../../../../../../../animation/shakeHorizontal';

const NewPasswordFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 5vh;
`;
const NewPasswordFormLabelStyled = styled.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 11px;
    font-weight: 900;
    margin-bottom: 5px;
    ${({passwordShowWarning}) => (
        passwordShowWarning === NEW_PASSWORD_ZERO_LENGTH || 
        passwordShowWarning === NEW_PASSWORD_LESS_LENGTH ||
        passwordShowWarning === NEW_PASSWORD_WEAK ) ? 
            css`color:red;animation: ${shakeHorizontal} 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;`: 
        passwordShowWarning === NEW_PASSWORD_MEDIUM ? 
            css`color:blue;`: 
        passwordShowWarning === NEW_PASSWORD_STRONG ? 
            css`color:green;`: 
            css`color:black;`
    }
`;
// const LoginFormForgotPassword = styled.div`
//     align-self: flex-end ;
//     font-size: 10px;
//     margin-top: 2px;
//     color: #999999;
// `;

function NewPasswordForm() {
    // const dispatch = useDispatch();
    const { passwordShowWarning } = useSelector( state => state.newPasswordState ); 
    // const onClick = () => 
    //     dispatch( redirectToForgetPassword() );
    return <NewPasswordFormStyled>
        <NewPasswordFormLabelStyled 
            passwordShowWarning={passwordShowWarning} >{
            passwordShowWarning === NEW_PASSWORD_ZERO_LENGTH ? 
                `Enter the password`:
            passwordShowWarning === NEW_PASSWORD_LESS_LENGTH ? 
                `Password is too short`:
            passwordShowWarning === NEW_PASSWORD_WEAK ? 
                `Weak password`:
            passwordShowWarning === NEW_PASSWORD_MEDIUM ? 
                `Medium password`:
            passwordShowWarning === NEW_PASSWORD_STRONG ? 
                `Strong password`: `Password`
        }
        </NewPasswordFormLabelStyled>

        <NewPasswordFormTagStyled />
{/* 
        <LoginFormForgotPassword 
            onClick={onClick} >
            forget password
        </LoginFormForgotPassword> */}

    </NewPasswordFormStyled>
}

export default NewPasswordForm;